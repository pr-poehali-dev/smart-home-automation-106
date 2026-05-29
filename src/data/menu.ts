export interface MenuItem {
  id: number;
  name: string;
  category: string;
  tag: string;
  tagStyle: React.CSSProperties;
  price: string;
  description: string;
  img: string;
  ingredients: string[];
  volume: string;
  calories: string;
  story: string;
}

import type React from "react";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Клубничный Матча",
    category: "Матча",
    tag: "Хит",
    tagStyle: {},
    price: "390 ₽",
    description: "Нежный матча-лате с клубничным джемом, молоком и жемчугом тапиоки.",
    img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ingredients: ["Матча церемониального сорта", "Свежая клубника", "Кокосовое молоко", "Жемчуг тапиоки", "Тростниковый сахар", "Льдинки"],
    volume: "500 мл",
    calories: "210 ккал",
    story: "Этот вкус появился случайно — Мия добавила клубничный джем в матча-лате холодным утром, и получилось что-то волшебное. С тех пор он не покидает меню.",
  },
  {
    id: 2,
    name: "Тайский розовый",
    category: "Классик",
    tag: "Новинка",
    tagStyle: { background: "#c084fc", color: "white" },
    price: "370 ₽",
    description: "Розовый чай с кокосовым молоком, лепестками розы и белым жемчугом.",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ingredients: ["Тайский розовый чай", "Кокосовое молоко", "Лепестки розы", "Белый жемчуг тапиоки", "Молоко", "Сироп личи"],
    volume: "500 мл",
    calories: "190 ккал",
    story: "Вдохновлён улочками Бангкока и розовыми закатами над рекой Чаупхрая. Нежный, цветочный, немного экзотичный — как путешествие в стакане.",
  },
  {
    id: 3,
    name: "Манго Маракуйя",
    category: "Фрукты",
    tag: "Популярное",
    tagStyle: { background: "#fbbf24", color: "#1a1a1a" },
    price: "410 ₽",
    description: "Манговый чай с маракуйей, кокосовым желе и ароматным жемчугом.",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ingredients: ["Пюре манго Альфонсо", "Сок маракуйи", "Зелёный чай", "Кокосовое желе", "Жемчуг тапиоки", "Лайм"],
    volume: "500 мл",
    calories: "230 ккал",
    story: "Когда лето заканчивается, этот вкус напоминает о нём. Манго и маракуйя — идеальная пара, которая делает любой день ярче.",
  },
  {
    id: 4,
    name: "Лавандовый мечта",
    category: "Матча",
    tag: "Лимит",
    tagStyle: { background: "#a78bfa", color: "white" },
    price: "420 ₽",
    description: "Матча с лавандовым сиропом, овсяным молоком и хрустящим жемчугом.",
    img: "https://images.unsplash.com/photo-1536749035540-4f871e3a3652?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ingredients: ["Матча премиум", "Лавандовый сироп", "Овсяное молоко", "Хрустящий жемчуг тапиоки", "Мёд акации", "Соль флёр де сель"],
    volume: "450 мл",
    calories: "175 ккал",
    story: "Лимитированный вкус, который возвращается каждую весну. Лаванда успокаивает, матча бодрит — баланс, который сложно забыть.",
  },
  {
    id: 5,
    name: "Чёрный кунжут",
    category: "Классик",
    tag: "Особый",
    tagStyle: { background: "#374151", color: "white" },
    price: "440 ₽",
    description: "Кунжутный латте с коричневым сахаром, молоком и тапиокой.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ingredients: ["Паста чёрного кунжута", "Коричневый сахарный сироп", "Цельное молоко", "Жемчуг тапиоки", "Морская соль", "Ваниль"],
    volume: "500 мл",
    calories: "260 ккал",
    story: "Самый смелый вкус в меню. Насыщенный, ореховый, с едва уловимой солёной ноткой — для тех, кто не боится экспериментировать.",
  },
  {
    id: 6,
    name: "Личи & роза",
    category: "Фрукты",
    tag: "Эстетика",
    tagStyle: { background: "#fbcfe8", color: "#be185d" },
    price: "400 ₽",
    description: "Белый чай личи с розовой водой, желе и хрустящими жемчужинами.",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ingredients: ["Белый чай Бай Му Дань", "Сироп личи", "Розовая вода", "Кокосовое желе", "Хрустящий жемчуг", "Лепестки розы"],
    volume: "500 мл",
    calories: "185 ккал",
    story: "Самый красивый напиток в меню — и внутри, и снаружи. Нежный белый чай с ароматом цветов и сладостью личи создан для особых моментов.",
  },
];
