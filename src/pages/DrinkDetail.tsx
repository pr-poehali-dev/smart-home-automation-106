import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { menuItems } from "@/data/menu";

export default function DrinkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const drink = menuItems.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 60);
  }, [id]);

  if (!drink) {
    return (
      <div style={{ padding: "80px 48px", textAlign: "center" }}>
        <p style={{ color: "var(--muted-text)" }}>Напиток не найден</p>
        <Link to="/">← На главную</Link>
      </div>
    );
  }

  const others = menuItems.filter((m) => m.id !== drink.id).slice(0, 3);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <header>
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "var(--dark)" }}>
          boba<span>.</span>
        </Link>
        <nav>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "none",
              border: "none",
              color: "var(--muted-text)",
              fontWeight: 500,
              fontSize: "14px",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ← Назад
          </button>
        </nav>
        <Link to="/">
          <button className="btn-cta">Все напитки</button>
        </Link>
      </header>

      {/* Main content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "600px",
          borderBottom: "var(--border)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
        className="drink-detail-grid"
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", borderRight: "var(--border)" }}>
          <img
            src={drink.img}
            alt={drink.name}
            style={{
              width: "100%",
              height: "100%",
              minHeight: "500px",
              objectFit: "cover",
              transform: visible ? "scale(1)" : "scale(1.05)",
              transition: "transform 0.9s ease",
            }}
          />
          <span
            className="menu-tag"
            style={{ ...drink.tagStyle, top: "24px", left: "24px", fontSize: "12px", padding: "6px 14px" }}
          >
            {drink.tag}
          </span>
        </div>

        {/* Info */}
        <div style={{ padding: "60px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--primary-dark)",
            marginBottom: "16px",
          }}>
            {drink.category}
          </p>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "var(--dark)",
            marginBottom: "20px",
          }}>
            {drink.name}
          </h1>

          <p style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "var(--muted-text)",
            marginBottom: "32px",
            maxWidth: "380px",
          }}>
            {drink.description}
          </p>

          {/* Meta */}
          <div style={{
            display: "flex",
            gap: "24px",
            marginBottom: "36px",
          }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--border-color)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px", fontFamily: "'Space Grotesk', sans-serif" }}>Объём</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--dark)" }}>{drink.volume}</p>
            </div>
            <div style={{ width: "1px", background: "var(--border-color)" }} />
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--border-color)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px", fontFamily: "'Space Grotesk', sans-serif" }}>Калории</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--dark)" }}>{drink.calories}</p>
            </div>
            <div style={{ width: "1px", background: "var(--border-color)" }} />
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--border-color)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px", fontFamily: "'Space Grotesk', sans-serif" }}>Цена</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, color: "var(--primary-dark)" }}>{drink.price}</p>
            </div>
          </div>

          <button className="btn-cta" style={{ width: "fit-content" }}>Заказать</button>
        </div>
      </div>

      {/* Story + Ingredients */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
      }}
        className="drink-detail-grid"
      >
        {/* Story */}
        <div style={{ padding: "56px", borderRight: "var(--border)" }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--primary-dark)",
            marginBottom: "20px",
          }}>✦ История вкуса</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22px",
            lineHeight: 1.6,
            color: "var(--dark)",
            fontStyle: "italic",
          }}>
            "{drink.story}"
          </p>
        </div>

        {/* Ingredients */}
        <div style={{ padding: "56px" }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--primary-dark)",
            marginBottom: "20px",
          }}>✦ Состав</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {drink.ingredients.map((ing, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "15px",
                  color: "var(--dark)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.08}s, transform 0.5s ease ${0.3 + i * 0.08}s`,
                }}
              >
                <span style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  flexShrink: 0,
                }} />
                {ing}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Other drinks */}
      <div style={{ padding: "64px 48px" }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted-text)",
          marginBottom: "32px",
        }}>Другие напитки</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {others.map((item) => (
            <Link
              key={item.id}
              to={`/drink/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="menu-card" style={{ cursor: "pointer" }}>
                <span className="menu-tag" style={item.tagStyle}>{item.tag}</span>
                <img src={item.img} alt={item.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 600 }}>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--muted-text)", lineHeight: 1.5 }}>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
