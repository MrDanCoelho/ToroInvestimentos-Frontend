FROM node:15.4.0 As builder

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/ToroInvestimentos /usr/share/nginx/html
EXPOSE 80