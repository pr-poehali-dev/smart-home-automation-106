import { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Клубничный Матча",
    category: "Матча",
    tag: "Хит",
    tagStyle: {} as React.CSSProperties,
    price: "390 ₽",
    description: "Нежный матча-лате с клубничным джемом, молоком и жемчугом тапиоки.",
    img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Тайский розовый",
    category: "Классик",
    tag: "Новинка",
    tagStyle: { background: "#c084fc", color: "white" } as React.CSSProperties,
    price: "370 ₽",
    description: "Розовый чай с кокосовым молоком, лепестками розы и белым жемчугом.",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Манго Маракуйя",
    category: "Фрукты",
    tag: "Популярное",
    tagStyle: { background: "#fbbf24", color: "#1a1a1a" } as React.CSSProperties,
    price: "410 ₽",
    description: "Манговый чай с маракуйей, кокосовым желе и ароматным жемчугом.",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Лавандовый мечта",
    category: "Матча",
    tag: "Лимит",
    tagStyle: { background: "#a78bfa", color: "white" } as React.CSSProperties,
    price: "420 ₽",
    description: "Матча с лавандовым сиропом, овсяным молоком и хрустящим жемчугом.",
    img: "https://images.unsplash.com/photo-1536749035540-4f871e3a3652?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Чёрный кунжут",
    category: "Классик",
    tag: "Особый",
    tagStyle: { background: "#374151", color: "white" } as React.CSSProperties,
    price: "440 ₽",
    description: "Кунжутный латте с коричневым сахаром, молоком и тапиокой.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Личи & роза",
    category: "Фрукты",
    tag: "Эстетика",
    tagStyle: { background: "#fbcfe8", color: "#be185d" } as React.CSSProperties,
    price: "400 ₽",
    description: "Белый чай личи с розовой водой, желе и хрустящими жемчужинами.",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

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
          <a href="#">Меню</a>
          <a href="#">О нас</a>
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
              <button className="btn-cta">Смотреть меню</button>
              <button className="btn-cta-outline">Наша история</button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              20+
              <br />
              вкусов
            </div>
            <div
              className="floating-tag"
              style={{ top: "18%", left: "10%" }}
            >
              #бабл_ти
            </div>
            <div
              className="floating-tag"
              style={{ bottom: "28%", right: "12%" }}
            >
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
        <section className="section-padding">
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
              <div className="menu-card" key={item.id}>
                <span
                  className="menu-tag"
                  style={item.tagStyle}
                >
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
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.name}
                    </h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--muted-text)", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
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
            <button
              className="btn-cta"
              style={{
                background: "var(--primary)",
                color: "white",
              }}
            >
              Читать о нас
            </button>
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
              <img
                src="https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="boba 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="boba 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="boba 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="boba 4"
              />
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
            <li><a href="#">Меню</a></li>
            <li><a href="#">О нас</a></li>
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
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              TG
            </a>
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              IG
            </a>
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              VK
            </a>
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