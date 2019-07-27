FROM php:7.2-fpm
RUN apt-get update -y
RUN apt-get install -y openssl zip unzip git nginx libwebp-dev \
libjpeg62-turbo-dev libpng-dev libxpm-dev libfreetype6-dev nano

RUN  docker-php-ext-configure gd --with-gd --with-webp-dir --with-jpeg-dir \
--with-png-dir --with-zlib-dir --with-xpm-dir --with-freetype-dir \
--enable-gd-native-ttf

RUN docker-php-ext-configure opcache --enable-opcache \
&& docker-php-ext-install opcache

RUN docker-php-ext-install pdo mbstring pdo_mysql gd bcmath

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN mkdir /var/symfony

WORKDIR /var/symfony

COPY . /var/symfony

RUN composer install \
&& chown -R :www-data /var/symfony \
&& mkdir /var/logs

#COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./default.conf /etc/nginx/conf.d/

COPY ./php-fpm.conf /usr/local/etc/php-fpm.d/

COPY ./opcache.ini /usr/local/etc/php/conf.d/opcache.ini

RUN rm -rf /etc/nginx/sites-enabled/

EXPOSE 80

CMD ["php-fpm", "-D;", "nginx", "-g", "daemon off;"]