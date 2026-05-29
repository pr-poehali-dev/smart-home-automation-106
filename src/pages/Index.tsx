import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "@/data/menu";

const categories = ["Все", "Матча", "Классик", "Фрукты"];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="grain-overlay" />

      {/* Header */}
      <header>
        <div className="logo">
          boba<span>.</span>
        </div>
        <nav>
          <a href="#menu">Меню</a>
          <Link to="/about" style={{ textDecoration: "none", color: "var(--muted-text)", fontWeight: 500, marginLeft: "32px", fontSize: "14px", transition: "color 0.2s" }}>О нас</Link>
          <a href="#">Где найти</a>
          <a href="#">Блог</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-eyebrow">
              ✦ Пузырьковый чай нового поколения
            </div>
            <h1 className="hero-title">
              Твой глоток
              <br />
              <span>настроения</span>
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--muted-text)",
                marginBottom: "32px",
                maxWidth: "420px",
              }}
            >
              Бабл-ти из натуральных ингредиентов — 20+ вкусов, которые делают каждый день немного красивее.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#menu" style={{ textDecoration: "none" }}>
                <button className="btn-cta">Смотреть меню</button>
              </a>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <button className="btn-cta-outline">Наша история</button>
              </Link>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              20+
              <br />
              вкусов
            </div>
            <div className="floating-tag" style={{ top: "18%", left: "10%" }}>
              #бабл_ти
            </div>
            <div className="floating-tag" style={{ bottom: "28%", right: "12%" }}>
              ✦ без красителей
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; ✦ натуральный жемчуг тапиоки &nbsp; ✦ без искусственных красителей &nbsp; ✦ 20+ вкусов &nbsp; ✦ свежий каждый день &nbsp; ✦ натуральный жемчуг тапиоки &nbsp; ✦ без искусственных красителей &nbsp; ✦ 20+ вкусов &nbsp; ✦ свежий каждый день &nbsp;
          </div>
        </div>

        {/* Menu */}
        <section className="section-padding" id="menu">
          <div className="section-header">
            <h2 className="section-title">
              Наше
              <br />
              меню
            </h2>
            <a
              href="#"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--muted-text)",
                textDecoration: "none",
                borderBottom: "1.5px solid var(--border-color)",
                paddingBottom: "2px",
              }}
            >
              Полный список →
            </a>
          </div>

          {/* Category pills */}
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filtered.map((item) => (
              <Link key={item.id} to={`/drink/${item.id}`} style={{ textDecoration: "none" }}>
                <div className="menu-card" style={{ cursor: "pointer" }}>
                  <span className="menu-tag" style={item.tagStyle}>
                    {item.tag}
                  </span>
                  <img src={item.img} alt={item.name} />
                  <div className="menu-card-body">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <h3 style={{ fontSize: "17px", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", color: "var(--dark)" }}>
                        {item.name}
                      </h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--muted-text)", lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                    <p style={{
                      marginTop: "12px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--primary-dark)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.03em",
                    }}>
                      Подробнее →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Vibe section */}
        <section className="retro-vibe">
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "20px",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              ✦ Наша философия
            </p>
            <h2 className="vibe-title">
              Красота
              <br />
              <span>в деталях</span>
            </h2>
            <p className="vibe-text">
              Мы верим, что напиток — это не просто вкус. Это момент для себя. Каждый стакан — продуманный до жемчужинки: натуральные ингредиенты, красивая подача и атмосфера, которую хочется снимать.
            </p>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <button
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
              >
                Читать о нас
              </button>
            </Link>
          </div>
          <div className="vibe-img" />
        </section>

        {/* Gallery */}
        <section className="section-padding">
          <h2
            className="section-title"
            style={{ marginBottom: "32px", textAlign: "center", fontSize: "20px" }}
          >
            <span
              style={{
                color: "var(--muted-text)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Мы в Instagram
            </span>
            <br />
            @boba.place
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1627772151341-1e1b8fc48545?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="boba 1" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="boba 2" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="boba 3" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="boba 4" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div>
          <div className="footer-logo">
            boba<span>.</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "15px" }}>
            Пузырьковый чай из натуральных ингредиентов. Открыты каждый день, чтобы твой день был немного красивее.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu">Меню</a></li>
            <li><Link to="/about" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "15px" }}>О нас</Link></li>
            <li><a href="#">Где найти</a></li>
            <li><a href="#">Блог</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", marginBottom: "8px" }}>Пн–Пт: 09:00–22:00</li>
            <li style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", marginBottom: "8px" }}>Сб–Вс: 10:00–23:00</li>
          </ul>
          <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em" }}>TG</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em" }}>IG</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em" }}>VK</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 boba. — Все права защищены</span>
          <span>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Политика конфиденциальности</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Условия использования</a>
          </span>
        </div>
      </footer>
    </>
  );
}
