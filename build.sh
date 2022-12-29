#!/bin/bash

app_dir="/var/www/html/wizky-website-v2"

cd $app_dir

npm install
npm run build
next export;

sudo chown -R www-data:www-data $app_dir

exit 0