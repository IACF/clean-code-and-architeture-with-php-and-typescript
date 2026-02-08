# PHP 8.3 CLI + Composer para exercícios Clean Code e Clean Architecture
FROM php:8.3-cli

# Dependências para extensões PHP
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libonig-dev \
    --no-install-recommends \
    && docker-php-ext-install -j$(nproc) \
    zip \
    pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1

# Working dir será sobrescrito pelo compose; padrão para build
WORKDIR /app/php
