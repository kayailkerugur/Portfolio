# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Bağımlılıkları önce kopyala (layer cache için)
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

# Kaynak kodu kopyala ve production build al
COPY . .
RUN npm run build -- --configuration production

# ── Stage 2: Serve (Nginx) ────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Varsayılan nginx config'i kaldır, özel config ekle
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Build çıktısını nginx'in serve edeceği klasöre kopyala
COPY --from=builder /app/dist/ilker-kaya-web/browser /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
