# Josey's Portfolio

Modern Next.js portfolio with interactive 3D animations, showcasing full-stack projects including mobile apps and web platforms. Features responsive bento grid layout, smooth parallax effects, and animated project cards powered by Three.js and Framer Motion.

## 🚀 Features

- **Interactive 3D Animations** - Three.js powered project cards with hover effects
- **Responsive Design** - Mobile-first approach with bento grid layout
- **Smooth Animations** - Framer Motion for seamless transitions and parallax scrolling
- **Modern Tech Stack** - Next.js 16, React 19, TypeScript
- **Performance Optimized** - Next.js Image components and lazy loading
- **Dark Theme** - Sleek dark design with gradient backgrounds
- **Analytics Integration** - Sentry monitoring for performance tracking

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, Three.js
- **3D Graphics:** React Three Fiber, Drei
- **Icons:** React Icons
- **Monitoring:** Sentry
- **Deployment:** Vercel

## 🏃♂️ Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/     # Reusable UI components
│   ├── globals.css     # Global styles
│   └── page.tsx        # Main page
├── data/
│   └── index.ts        # Portfolio data
├── public/             # Static assets
└── lib/                # Utility functions
```

## 🎨 Customization

- Update portfolio data in `data/index.ts`
- Modify components in `app/components/`
- Add new projects by updating the `projects` array
- Customize colors in `tailwind.config.ts`

## 📱 Sections

- **Hero** - Interactive introduction with animations
- **About** - Bento grid layout with tech stack
- **Projects** - 3D animated project showcase
- **Experience** - Professional background
- **Contact** - Social media links and email

## 🚀 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).