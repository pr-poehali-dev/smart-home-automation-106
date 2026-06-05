import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2018",
    title: "Первый глоток",
    text: "Основательница Мия попробовала бабл-ти в маленькой чайной на рынке в Тайбэе. Один стакан — и жизнь изменилась навсегда. Она записала рецепт на салфетке и привезла домой идею.",
    img: "https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/d0593a17-23b9-4639-832f-413273920cd3.jpg",
    quote: "«Я стояла у той стойки и думала: почему этого нет у нас дома?»",
    tag: "Тайпей, Тайвань",
  },
  {
    year: "2019",
    title: "Маленькая кухня",
    text: "Полгода экспериментов дома. Сотни вариантов тапиоки, молочного чая и фруктовых основ. Друзья стали первыми дегустаторами — и первыми фанатами. Три рецепта стали культовыми.",
    img: "https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/470eacf6-f205-4e67-9fed-7c2294bccf8b.jpg",
    quote: "«Мама говорила — хватит экспериментировать. Я варила 8-й стакан за день.»",
    tag: "Самара, дома",
  },
  {
    year: "2020",
    title: "Первый стаканчик на улице",
    text: "Маленький pop-up на городском рынке. Очередь в 40 человек в первый же день. Люди возвращались снова и снова — за вкусом, за атмосферой, за улыбкой.",
    img: "https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/99527419-1cab-470d-beb3-0a606f03e718.jpg",
    quote: "«40 человек в очереди — и ни один не ушёл без улыбки.»",
    tag: "Рынок «Три вокзала»",
  },
  {
    year: "2022",
    title: "Первая точка",
    text: "Открылось первое пространство boba. — светлое, пастельное, уютное. Каждая деталь продумана: от керамических стаканов до букетов сухих цветов на стойке. Инстаграм взорвался за неделю.",
    img: "https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/a67ae0e2-10b0-463f-adc3-699877a56d29.jpg",
    quote: "«Мы хотели, чтобы каждый угол хотелось сфотографировать.»",
    tag: "ул. Куйбышева, 128",
  },
  {
    year: "2024",
    title: "20+ вкусов и сегодня",
    text: "Сегодня boba. — это 20+ сезонных вкусов, натуральные ингредиенты без красителей и сообщество людей, которые верят, что красота начинается с маленьких ритуалов.",
    img: "https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/68847772-6270-4b57-be0c-dd0b03e1b854.jpg",
    quote: "«Каждый вкус — это маленькая история. Их уже больше двадцати.»",
    tag: "Самара, сегодня",
  },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 56px 1fr",
        marginBottom: "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(56px)",
        transition: `opacity 0.75s ease, transform 0.75s ease`,
      }}
    >
      {/* Left column */}
      <div style={{
        padding: "0 48px 96px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}>
        {isEven ? (
          /* Text left */
          <div style={{ width: "100%", maxWidth: "380px", textAlign: "right" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "88px", fontWeight: 700,
              color: "var(--primary-dark)", lineHeight: 1,
              display: "block", marginBottom: "8px",
              opacity: 0.85,
            }}>{item.year}</span>
            <span style={{
              display: "inline-block",
              background: "var(--primary)", color: "white",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", padding: "4px 12px",
              borderRadius: "20px", marginBottom: "16px",
              fontFamily: "'Space Grotesk', sans-serif",
            }}>{item.tag}</span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "32px", fontWeight: 700,
              color: "var(--dark)", marginBottom: "14px", lineHeight: 1.1,
            }}>{item.title}</h3>
            <p style={{
              fontSize: "15px", lineHeight: 1.8,
              color: "var(--muted-text)", marginBottom: "20px",
            }}>{item.text}</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px", fontStyle: "italic",
              color: "var(--primary-dark)", lineHeight: 1.5,
              borderRight: "3px solid var(--primary)",
              paddingRight: "16px",
            }}>{item.quote}</p>
          </div>
        ) : (
          /* Image left */
          <div style={{ width: "100%", maxWidth: "380px" }}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%", height: "280px",
                objectFit: "cover", borderRadius: "20px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                display: "block",
              }}
            />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px", fontStyle: "italic",
              color: "var(--muted-text)", marginTop: "14px",
              textAlign: "right", lineHeight: 1.5,
            }}>{item.tag}</p>
          </div>
        )}
      </div>

      {/* Center line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "12px" }}>
        <div style={{
          width: "16px", height: "16px", borderRadius: "50%",
          background: "var(--primary)", border: "3px solid var(--bg)",
          boxShadow: "0 0 0 2px var(--primary)",
          flexShrink: 0, zIndex: 1,
        }} />
        <div style={{ flex: 1, width: "1.5px", background: "var(--border-color)" }} />
      </div>

      {/* Right column */}
      <div style={{
        padding: "0 0 96px 48px",
        display: "flex",
        flexDirection: "column",
      }}>
        {!isEven ? (
          /* Text right */
          <div style={{ width: "100%", maxWidth: "380px" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "88px", fontWeight: 700,
              color: "var(--primary-dark)", lineHeight: 1,
              display: "block", marginBottom: "8px",
              opacity: 0.85,
            }}>{item.year}</span>
            <span style={{
              display: "inline-block",
              background: "var(--primary)", color: "white",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", padding: "4px 12px",
              borderRadius: "20px", marginBottom: "16px",
              fontFamily: "'Space Grotesk', sans-serif",
            }}>{item.tag}</span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "32px", fontWeight: 700,
              color: "var(--dark)", marginBottom: "14px", lineHeight: 1.1,
            }}>{item.title}</h3>
            <p style={{
              fontSize: "15px", lineHeight: 1.8,
              color: "var(--muted-text)", marginBottom: "20px",
            }}>{item.text}</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px", fontStyle: "italic",
              color: "var(--primary-dark)", lineHeight: 1.5,
              borderLeft: "3px solid var(--primary)",
              paddingLeft: "16px",
            }}>{item.quote}</p>
          </div>
        ) : (
          /* Image right */
          <div style={{ width: "100%", maxWidth: "380px" }}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%", height: "280px",
                objectFit: "cover", borderRadius: "20px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                display: "block",
              }}
            />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px", fontStyle: "italic",
              color: "var(--muted-text)", marginTop: "14px", lineHeight: 1.5,
            }}>{item.tag}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 50);
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <header>
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "var(--dark)" }}>
          boba<span>.</span>
        </Link>
        <nav>
          <Link to="/" style={{ textDecoration: "none", color: "var(--muted-text)", fontWeight: 500, fontSize: "14px" }}>← Назад</Link>
        </nav>
        <Link to="/">
          <button className="btn-cta">Меню</button>
        </Link>
      </header>

      {/* Hero */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "var(--border)",
        minHeight: "480px",
        opacity: heroVisible ? 1 : 0,
        transform: heroVisible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
        className="drink-detail-grid"
      >
        <div style={{ padding: "80px 48px 64px", borderRight: "var(--border)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--primary-dark)", marginBottom: "20px",
          }}>✦ Наша история</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 7vw, 88px)", fontWeight: 700,
            lineHeight: 1, color: "var(--dark)", marginBottom: "24px",
          }}>
            От одного<br />
            <span style={{ color: "var(--primary-dark)", fontStyle: "italic" }}>стаканчика</span><br />
            до бренда
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--muted-text)", maxWidth: "400px" }}>
            История boba. — это история о том, как один момент в Тайпее превратился в сотни тысяч моментов для других людей.
          </p>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/1e88c68d-0699-4787-9aa1-c0b57b1900b7.jpg"
            alt="boba. cafe"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))",
          }} />
          <div style={{
            position: "absolute", bottom: "28px", left: "28px",
            background: "white", borderRadius: "14px",
            padding: "12px 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}>
            <p style={{ fontSize: "11px", color: "var(--muted-text)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>Основана</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, color: "var(--dark)" }}>2018 год</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "96px 48px 40px", maxWidth: "960px", margin: "0 auto" }}>
        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>

      {/* Values strip */}
      <div style={{
        borderTop: "var(--border)", borderBottom: "var(--border)",
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
      }}>
        {[
          { num: "20+", label: "Вкусов в меню", sub: "и новые каждый сезон" },
          { num: "6 лет", label: "В Самаре", sub: "с 2018 года" },
          { num: "0", label: "Искусственных красителей", sub: "только натуральное" },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: "48px 40px",
            borderRight: i < 2 ? "var(--border)" : "none",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "56px", fontWeight: 700,
              color: "var(--primary-dark)", lineHeight: 1, marginBottom: "8px",
            }}>{stat.num}</p>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--dark)", marginBottom: "4px" }}>{stat.label}</p>
            <p style={{ fontSize: "13px", color: "var(--muted-text)" }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700,
          marginBottom: "20px", color: "var(--dark)",
        }}>Попробуй сам</h2>
        <p style={{ color: "var(--muted-text)", fontSize: "16px", marginBottom: "32px" }}>
          Каждый стакан — маленькая глава этой истории.
        </p>
        <Link to="/"><button className="btn-cta">Смотреть меню</button></Link>
      </div>

      <div style={{
        borderTop: "var(--border)", padding: "24px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "var(--dark)", color: "rgba(255,255,255,0.4)", fontSize: "13px",
      }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "white", fontSize: "20px", fontWeight: 700 }}>
          boba<span style={{ color: "var(--primary)" }}>.</span>
        </span>
        <span>© 2026 boba.</span>
      </div>
    </div>
  );
}