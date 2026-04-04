#!/usr/bin/env bash
# Compress and convert portfolio images to reduce the ~151 MB image payload.
# Requirements: sharp-cli  (npm i -g sharp-cli)
#   or run with npx:  npx sharp-cli ...
#
# Usage:
#   chmod +x scripts/optimize-images.sh
#   ./scripts/optimize-images.sh
#
# What it does:
#   1. Compresses JPEGs to quality 80 (typically 40-60% size reduction)
#   2. Compresses PNGs with max compression
#   3. Leaves WebP files as-is (already optimised format)
#   4. Overwrites originals in-place — commit or back up first!

set -euo pipefail

IMAGE_DIR="src/images"

if ! command -v npx &>/dev/null; then
  echo "Error: npx not found. Install Node.js first."
  exit 1
fi

echo "=== Image Optimisation ==="
echo "Source: $IMAGE_DIR"
echo ""

BEFORE=$(du -sh "$IMAGE_DIR" | awk '{print $1}')
echo "Size before: $BEFORE"

# --- JPEG compression ---
JPEG_COUNT=0
while IFS= read -r -d '' file; do
  npx sharp-cli --input "$file" --output "$file" --quality 80 2>/dev/null && ((JPEG_COUNT++)) || true
done < <(find "$IMAGE_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)
echo "Compressed $JPEG_COUNT JPEG files"

# --- PNG compression ---
PNG_COUNT=0
while IFS= read -r -d '' file; do
  npx sharp-cli --input "$file" --output "$file" --compressionLevel 9 2>/dev/null && ((PNG_COUNT++)) || true
done < <(find "$IMAGE_DIR" -type f -iname '*.png' -print0)
echo "Compressed $PNG_COUNT PNG files"

AFTER=$(du -sh "$IMAGE_DIR" | awk '{print $1}')
echo ""
echo "Size before: $BEFORE"
echo "Size after:  $AFTER"
echo "Done! Review the results and commit when satisfied."
