import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2018",
    title: "Первый глоток",
    text: "Основательница Мия попробовала бабл-ти в маленькой чайной на рынке в Тайбэе. Один стакан — и жизнь изменилась навсегда. Она записала рецепт на салфетке и привезла домой идею.",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    align: "left",
  },
  {
    year: "2019",
    title: "Маленькая кухня",
    text: "Полгода экспериментов дома. Сотни вариантов тапиоки, молочного чая и фруктовых основ. Друзья стали первыми дегустаторами — и первыми фанатами. Три рецепта стали культовыми.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    align: "right",
  },
  {
    year: "2020",
    title: "Первый стаканчик на улице",
    text: "Маленький pop-up на городском рынке. Очередь в 40 человек в первый же день. Люди возвращались снова и снова — за вкусом, за атмосферой, за улыбкой.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    align: "left",
  },
  {
    year: "2022",
    title: "Первая точка",
    text: "Открылось первое пространство boba. — светлое, пастельное, уютное. Каждая деталь продумана: от керамических стаканов до букетов сухих цветов на стойке. Инстаграм взорвался за неделю.",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    align: "right",
  },
  {
    year: "2024",
    title: "20+ вкусов и сегодня",
    text: "Сегодня boba. — это 20+ сезонных вкусов, натуральные ингредиенты без красителей и сообщество людей, которые верят, что красота начинается с маленьких ритуалов.",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    align: "left",
  },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = item.align === "left";

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr",
        gap: "0",
        marginBottom: "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
    >
      {/* Left side */}
      <div style={{ padding: "0 40px 80px 0", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        {isLeft ? (
          <>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "72px",
              fontWeight: 700,
              color: "var(--border-color)",
              lineHeight: 1,
              marginBottom: "16px",
            }}>{item.year}</span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--dark)",
              marginBottom: "12px",
              textAlign: "right",
            }}>{item.title}</h3>
            <p style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--muted-text)",
              textAlign: "right",
              maxWidth: "340px",
            }}>{item.text}</p>
          </>
        ) : (
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              maxWidth: "340px",
              height: "240px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        )}
      </div>

      {/* Center line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "var(--primary)",
          border: "3px solid var(--bg)",
          boxShadow: "0 0 0 2px var(--primary)",
          marginTop: "20px",
          flexShrink: 0,
          zIndex: 1,
        }} />
        <div style={{ flex: 1, width: "1.5px", background: "var(--border-color)" }} />
      </div>

      {/* Right side */}
      <div style={{ padding: "0 0 80px 40px", display: "flex", flexDirection: "column" }}>
        {!isLeft ? (
          <>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "72px",
              fontWeight: 700,
              color: "var(--border-color)",
              lineHeight: 1,
              marginBottom: "16px",
            }}>{item.year}</span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--dark)",
              marginBottom: "12px",
            }}>{item.title}</h3>
            <p style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--muted-text)",
              maxWidth: "340px",
            }}>{item.text}</p>
          </>
        ) : (
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              maxWidth: "340px",
              height: "240px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 50);
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
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
      <div
        ref={heroRef}
        style={{
          padding: "80px 48px 60px",
          borderBottom: "var(--border)",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--primary-dark)",
          marginBottom: "20px",
        }}>✦ Наша история</p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(52px, 8vw, 96px)",
          fontWeight: 700,
          lineHeight: 1,
          color: "var(--dark)",
          marginBottom: "24px",
        }}>
          От одного
          <br />
          <span style={{ color: "var(--primary-dark)", fontStyle: "italic" }}>стаканчика</span>
          <br />
          до бренда
        </h1>
        <p style={{
          fontSize: "18px",
          lineHeight: 1.7,
          color: "var(--muted-text)",
          maxWidth: "480px",
        }}>
          История boba. — это история о том, как один момент в Тайпее превратился в сотни тысяч моментов для других людей.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 48px 40px", maxWidth: "900px", margin: "0 auto" }}>
        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div style={{
        borderTop: "var(--border)",
        padding: "80px 48px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 700,
          marginBottom: "20px",
          color: "var(--dark)",
        }}>
          Попробуй сам
        </h2>
        <p style={{ color: "var(--muted-text)", fontSize: "16px", marginBottom: "32px" }}>
          Каждый стакан — маленькая глава этой истории.
        </p>
        <Link to="/">
          <button className="btn-cta">Смотреть меню</button>
        </Link>
      </div>

      {/* Footer mini */}
      <div style={{
        borderTop: "var(--border)",
        padding: "24px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--dark)",
        color: "rgba(255,255,255,0.4)",
        fontSize: "13px",
      }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "white", fontSize: "20px", fontWeight: 700 }}>
          boba<span style={{ color: "var(--primary)" }}>.</span>
        </span>
        <span>© 2026 boba.</span>
      </div>
    </div>
  );
}
