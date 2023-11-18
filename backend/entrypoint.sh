#!/bin/bash

cd /var/www/html
php artisan migrate

service cron start

docker-php-entrypoint $@