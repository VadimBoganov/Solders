#!/bin/sh
set -e

# Seed the shared images volume with the site's own bundled images on first
# start, without ever clobbering files the API has since written there.
cp -rn /seed-images/. /usr/share/nginx/html/images/

exec nginx -g 'daemon off;'
