FROM nginx:1.27-alpine
COPY components /usr/share/nginx/html/components
COPY css /usr/share/nginx/html/css
COPY fonts /usr/share/nginx/html/fonts
COPY images /usr/share/nginx/html/images
COPY js /usr/share/nginx/html/js
COPY metali /usr/share/nginx/html/metali
COPY pripoi /usr/share/nginx/html/pripoi
COPY stati /usr/share/nginx/html/stati
COPY index.html favicon.ico robots.txt sitemap.xml /usr/share/nginx/html/
COPY google9144245df3e63b6c.html wmail_ab6806c3394781db5d1cd6bfb2ad99c0.html yandex_ed88509f2254fbd9.html /usr/share/nginx/html/
COPY images /seed-images
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
EXPOSE 8082
ENTRYPOINT ["/docker-entrypoint.sh"]
