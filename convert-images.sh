#!/bin/bash
# Converts all JPG/PNG images in img/products/ to WebP format.
# Original files are kept; WebP files are written alongside them.
# Usage: ./convert-images.sh [quality]  (default quality: 82)

cd "$(dirname "$0")"

PRODUCTS_IMG_DIR="img/products"
QUALITY="${1:-82}"

if ! command -v convert &>/dev/null; then
  echo "ERROR: ImageMagick 'convert' not found. Install it first."
  exit 1
fi

converted=0
skipped=0
failed=0

for f in "$PRODUCTS_IMG_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -f "$f" ] || continue
  out="${f%.*}.webp"
  if convert "$f" -quality "$QUALITY" "$out"; then
    echo "OK: $f -> $out"
    converted=$((converted + 1))
  else
    echo "FAIL: $f"
    failed=$((failed + 1))
  fi
done

echo ""
echo "Done — converted: $converted, failed: $failed"
