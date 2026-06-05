import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Location() {
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
        padding: "72px 48px 48px",
        borderBottom: "var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--primary-dark)", marginBottom: "16px",
        }}>✦ Где найти нас</p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(48px, 7vw, 88px)",
          fontWeight: 700, lineHeight: 1,
          color: "var(--dark)", marginBottom: "20px",
        }}>
          Мы в<br />
          <span style={{ fontStyle: "italic", color: "var(--primary-dark)" }}>Самаре</span>
        </h1>
        <p style={{ fontSize: "16px", color: "var(--muted-text)", lineHeight: 1.7, maxWidth: "440px" }}>
          Приходи за своим любимым стаканчиком — мы рядом с центром, в уютном месте с верандой и видом на набережную.
        </p>
      </div>

      {/* Map + info */}
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
        {/* Map image */}
        <div style={{ position: "relative", overflow: "hidden", borderRight: "var(--border)", minHeight: "440px" }}>
          <a
            href="https://yandex.ru/maps/-/CHBaEHYY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.poehali.dev/projects/305f9e57-8e1d-48f9-8046-62a0def90239/files/656b02b5-9b97-45ed-b8ea-0a15198151d8.jpg"
              alt="Карта — boba. Самара"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div style={{
              position: "absolute", bottom: "20px", left: "20px",
              background: "white", borderRadius: "12px",
              padding: "10px 16px", fontSize: "13px", fontWeight: 600,
              color: "var(--dark)", boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              display: "flex", alignItems: "center", gap: "6px",
            }}>
              <span style={{ fontSize: "16px" }}>📍</span> Открыть в Яндекс Картах →
            </div>
          </a>
        </div>

        {/* Info */}
        <div style={{ padding: "56px", display: "flex", flexDirection: "column", gap: "36px" }}>
          {[
            {
              icon: "📍",
              label: "Адрес",
              value: "ул. Куйбышева, 128",
              sub: "Самара, рядом с набережной Волги",
            },
            {
              icon: "🕐",
              label: "Часы работы",
              value: "Пн–Пт: 09:00 – 22:00",
              sub: "Сб–Вс: 10:00 – 23:00",
            },
            {
              icon: "📞",
              label: "Телефон",
              value: "+7 (846) 000-00-00",
              sub: "Принимаем звонки в часы работы",
            },
            {
              icon: "🚇",
              label: "Как добраться",
              value: "Метро Площадь Революции",
              sub: "5 минут пешком, остановка «Куйбышева»",
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: "var(--bg-card)", border: "var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", flexShrink: 0,
              }}>{item.icon}</div>
              <div>
                <p style={{
                  fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "var(--muted-text)",
                  fontFamily: "'Space Grotesk', sans-serif", marginBottom: "4px",
                }}>{item.label}</p>
                <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--dark)", marginBottom: "2px" }}>{item.value}</p>
                <p style={{ fontSize: "13px", color: "var(--muted-text)" }}>{item.sub}</p>
              </div>
            </div>
          ))}

          <a
            href="https://yandex.ru/maps/-/CHBaEHYY"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", marginTop: "8px" }}
          >
            <button className="btn-cta">Построить маршрут</button>
          </a>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700,
          color: "var(--dark)", marginBottom: "16px",
        }}>Ждём тебя</h2>
        <p style={{ color: "var(--muted-text)", fontSize: "16px", marginBottom: "32px" }}>
          Возьми напиток с собой или посиди на нашей веранде.
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="btn-cta">Смотреть меню</button>
        </Link>
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
