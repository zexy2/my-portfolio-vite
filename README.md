# Portfolio Website

Kişisel portfolyo sitem. React ve Vite ile geliştirildi.

**Demo:** https://zexy2.github.io/my-portfolio-vite/

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresinde açılacak.

## Teknolojiler

- React 19
- Vite
- tsParticles (arka plan animasyonu)
- GitHub Actions (otomatik deploy)

## Yapı

```
src/
 components/
    About.jsx
    Contact.jsx
    Navbar.jsx
    Projects.jsx
    ParticlesBackground.jsx
 App.jsx
 main.jsx
```

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Build önizleme |
| `npm run lint` | ESLint kontrolü |

## Deploy

Main branch'e push yapıldığında GitHub Actions ile otomatik olarak GitHub Pages'e deploy edilir.

## Lisans

MIT
