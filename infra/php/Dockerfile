FROM php:8.2-fpm

COPY ./php.ini /usr/local/etc/php/php.ini

ARG USERNAME=gonzales
ARG GROUPNAME=gonzales
ARG UID=1000
ARG GID=1000
ARG PASSWORD=password

RUN apt-get update \
    && apt-get install -y \
    build-essential \
    git \
    zip \
    unzip \
    vim \
    curl \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    libfontconfig1 \
    libxrender1 \
    jpegoptim optipng pngquant gifsicle 
  
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install pdo_mysql mysqli exif
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

RUN groupadd -g 1000 php && \
    useradd -u 1000 -ms /bin/bash -g php laravel

USER laravel


WORKDIR /var/www
