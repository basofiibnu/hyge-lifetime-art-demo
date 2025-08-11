# LifetimeArt Website Components

This project contains reusable UI components for the LifetimeArt website, including:
- Responsive navigation bar with mobile menu
- Testimonial card component
- Reusable Swiper-based slider
- Custom pagination styling
- Tailwind configuration for custom breakpoints

---

## 📦 Components

### 1. **Navbar**
- Built with **Next.js**, **TailwindCSS**, and **Framer Motion** for animations.
- Responsive design:
  - Desktop: logo + horizontal nav links
  - Mobile: hamburger → overlay menu based on design screenshot
- Mobile menu uses gradient overlay background + close button.

---

### 2. **TestimonialCard**
A reusable card for displaying customer testimonials.

**Props:**
```ts
interface TestimonialCardProps {
  text: string;
  author: string;
  avatar: string;
  bg?: string; // Optional background color
}
```

**Features:**
- 5-star rating display
- Author avatar + name
- Configurable background color
- Hover background change
- Rounded borders + subtle shadow

---

### 3. **Reusable Slider Component**
- Built with [Swiper](https://swiperjs.com/) and TailwindCSS.
- Accepts an **array of data** and **children render function** for flexibility.
- Supports:
  - Clickable pagination bullets
  - Custom bullet styling
  - Responsive behavior for multiple breakpoints

Example:
```tsx
<Slider data={testimonials}>
  {(item) => <TestimonialCard {...item} />}
</Slider>
```

---

## Mobile Animation Approach

- **Scroll-triggered fade and motion:** Used Framer Motion's `whileInView` to fade and slide elements upward when they enter the viewport, ensuring smooth engagement on mobile devices.
- **One-by-one staggered animations:** Applied `staggerChildren` inside a container variant so project cards appear in sequence rather than all at once.
- **Responsive slider fallback:** On mobile (`sm:hidden`), replaced the static layout with a reusable `Slider` component for swipe-based navigation.
- **Viewport thresholds for control:** Adjusted `viewport.amount` values to fine-tune when animations start, balancing early triggering with visual smoothness.
- **Lightweight performance:** Limited animations to trigger once (`once: true`) to avoid re-running on every scroll, improving performance on mobile.


## 🎨 Custom Pagination Styling

**CSS (globals.css):**
```css
.swiper-pagination-bullet {
  @apply w-2 h-2 mx-1 bg-gray-400 rounded-full opacity-60 transition-all duration-300;
}

.swiper-pagination-bullet-active {
  @apply bg-black opacity-100;
}
```

---

## 📱 Tailwind Custom Breakpoints

**tailwind.config.js:**
```js
module.exports = {
  theme: {
    screens: {
      xs: '375px',
      sm: '1024px',
      md: '1280px',
      lg: '1440px',
      xl: '1960px',
    },
  },
};
```

> Example: `sm` styles apply from **1024px and above**; below that defaults to `xs`.

---

## 🚀 Getting Started

### Install dependencies:
```bash
npm install
```

### Run the dev server:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

---

## 🛠 Tech Stack
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Swiper](https://swiperjs.com/)

---

## 📄 License
MIT
