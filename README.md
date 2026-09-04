# İlker Kaya Portfolio

Angular 21 ile geliştirilen, Türkçe ve İngilizce içerik sunan kişisel portfolyo sitesi. Tema seçimi, lazy-loaded sayfalar, proje detayları, erişilebilir hareket tercihleri ve route bazlı SEO metaları içerir.

## Gereksinimler

- Node.js 22 LTS
- npm 11+
- Docker ve Docker Compose (isteğe bağlı)

## Yerel geliştirme

```bash
npm ci
npm start
```

Uygulama `http://localhost:4200` adresinde açılır. Dil dosyaları `public/i18n`, uygulama özellikleri `src/app/features` altındadır.

## Kalite kontrolleri

```bash
npm run lint
npm test -- --watch=false
npm run build
```

Production çıktısı `dist/ilker-kaya-web/browser` klasörüne yazılır.

## Docker ile çalıştırma

```bash
docker compose up --build
```

Nginx üzerinden sunulan uygulama `http://localhost:3000` adresinden erişilebilir. SPA route fallback, statik dosya önbelleği, sıkıştırma ve güvenlik başlıkları `nginx.conf` içinde yapılandırılmıştır.

## Proje yapısı

- `src/app/features`: Sayfalar ve proje detayları
- `src/app/layout`: Navbar ve footer
- `src/app/shared`: Ortak servis ve directive'ler
- `public/i18n`: Türkçe ve İngilizce çeviriler
- `public`: CV, favicon ve statik sayfalar

Tema ve dil tercihleri tarayıcının yerel depolamasında saklanır. SEO başlıkları, açıklamalar ve canonical URL her route ve dil değişiminde güncellenir.
