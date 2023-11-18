#!/bin/bash


docker ps --all | grep mariadb-food || docker run -d --name mariadb-food -p 127.0.0.1:3306:3306 --env MARIADB_USER=mariadb --env MARIADB_PASSWORD=mariadb --env MARIADB_DATABASE=mariadb --env MARIADB_ROOT_PASSWORD=mariadb mariadb:latest
# sleep 10
# php artisan migrate
# php artisan serve
