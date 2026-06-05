import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const socials = [
  {
    id: 1,
    platform: "Instagram",
    handle: "@boba.place",
    description: "Эстетичные фото напитков, behind-the-scenes и вдохновение каждый день.",
    url: "https://instagram.com",
    color: "#e1306c",
    bgColor: "#fff0f5",
    icon: "📸",
    img: "https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/efa37343-06cd-4840-8e79-0877e12698a1.jpg",
    stats: "12.4K подписчиков",
    cta: "Подписаться",
  },
  {
    id: 2,
    platform: "Telegram",
    handle: "@bobaplace",
    description: "Новинки меню, акции, уютный контент и первыми — эксклюзивные предложения.",
    url: "https://t.me",
    color: "#229ed9",
    bgColor: "#f0f8ff",
    icon: "✈️",
    img: "https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/b31fde5f-4ce7-406b-ba7b-f9e5372fe5cc.jpg",
    stats: "8.1K подписчиков",
    cta: "Открыть канал",
  },
];

const posts = [
  {
    id: 1,
    platform: "Instagram",
    img: "https://images.unsplash.com/photo-1627772151341-1e1b8fc48545?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Лавандовый мечта снова в меню 💜",
    likes: "2 341",
    date: "2 дня назад",
  },
  {
    id: 2,
    platform: "Telegram",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Клубничный Матча — хит этого лета ✨",
    likes: "1 892",
    date: "4 дня назад",
  },
  {
    id: 3,
    platform: "Instagram",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Розовый закат и розовый чай 🌸",
    likes: "3 107",
    date: "5 дней назад",
  },
  {
    id: 4,
    platform: "Instagram",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Утро начинается с boba. ☀️",
    likes: "1 654",
    date: "6 дней назад",
  },
  {
    id: 5,
    platform: "Telegram",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Новинка: Персик & улун 🍑 уже ждёт",
    likes: "987",
    date: "1 нед. назад",
  },
  {
    id: 6,
    platform: "Instagram",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    caption: "Личи & роза — самый нежный 🌺",
    likes: "4 220",
    date: "1 нед. назад",
  },
];

export default function Blog() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 60);
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
        <Link to="/"><button className="btn-cta">Меню</button></Link>
      </header>

      {/* Hero */}
      <div style={{
        padding: "72px 48px 56px",
        borderBottom: "var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--primary-dark)", marginBottom: "16px",
        }}>✦ Мы в сети</p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 700,
          lineHeight: 1, color: "var(--dark)", marginBottom: "20px",
        }}>
          Следи за<br />
          <span style={{ fontStyle: "italic", color: "var(--primary-dark)" }}>нами</span>
        </h1>
        <p style={{ fontSize: "16px", color: "var(--muted-text)", lineHeight: 1.7, maxWidth: "440px" }}>
          Первыми узнавай о новинках, акциях и закулисье boba. — подписывайся там, где тебе удобнее.
        </p>
      </div>

      {/* Social cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
      }}
        className="drink-detail-grid"
      >
        {socials.map((s, i) => (
          <div
            key={s.id}
            style={{
              borderRight: i === 0 ? "var(--border)" : "none",
              overflow: "hidden",
            }}
          >
            {/* Photo */}
            <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
              <img
                src={s.img}
                alt={s.platform}
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
              }} />
              <div style={{
                position: "absolute", bottom: "20px", left: "24px",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{ fontSize: "28px" }}>{s.icon}</span>
                <div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "18px", fontFamily: "'Cormorant Garamond', serif" }}>{s.platform}</p>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px" }}>{s.stats}</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "32px" }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "20px", fontWeight: 600,
                color: "var(--dark)", marginBottom: "10px",
              }}>{s.handle}</p>
              <p style={{ fontSize: "14px", color: "var(--muted-text)", lineHeight: 1.65, marginBottom: "24px" }}>
                {s.description}
              </p>
              <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button
                  className="btn-cta"
                  style={{ background: s.color, borderColor: s.color }}
                >
                  {s.cta}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Recent posts */}
      <div style={{ padding: "64px 48px" }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "36px",
        }}>✦ Последние публикации</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
          className="posts-grid"
        >
          {posts.map((post, i) => (
            <div
              key={post.id}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "var(--border)",
                background: "white",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                cursor: "pointer",
              }}
            >
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={post.img}
                  alt={post.caption}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <span style={{
                  position: "absolute", top: "12px", left: "12px",
                  background: post.platform === "Instagram" ? "#e1306c" : "#229ed9",
                  color: "white", fontSize: "11px", fontWeight: 700,
                  padding: "4px 10px", borderRadius: "20px",
                  fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.04em",
                }}>{post.platform}</span>
              </div>
              <div style={{ padding: "16px" }}>
                <p style={{ fontSize: "14px", color: "var(--dark)", lineHeight: 1.5, marginBottom: "10px" }}>
                  {post.caption}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", color: "var(--muted-text)" }}>❤️ {post.likes}</span>
                  <span style={{ fontSize: "12px", color: "var(--muted-text)" }}>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
