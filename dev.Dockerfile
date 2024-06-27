FROM node:20-alpine

RUN npm install -g @angular/cli@18.0.0

WORKDIR /app

EXPOSE 4200

CMD if [ ! -f package.json ]; then \
    ng new angular-app --style=scss --defaults --skip-git --directory . --ssr=true; \
    fi && \
    npm install && \
    ng serve --host 0.0.0.0
