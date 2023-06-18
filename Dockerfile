# Stage 1: Build the application
FROM node:16.19.1-alpine3.16 AS builder
WORKDIR /app
RUN npm install -g npm@9.7.1

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application
FROM node:16.19.1-alpine3.16 AS production
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NO_UPDATE_NOTIFIER=true

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN touch .env
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod 555 /app/entrypoint.sh
RUN chmod 666 /app/.env


USER nextjs
EXPOSE 80
EXPOSE 443
ENV PORT 80

CMD ["sh", "/app/entrypoint.sh"]