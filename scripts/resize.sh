#!/bin/bash

# Base directory containing the city folders
BASE_DIR="city_images"

# Target width for resizing
TARGET_WIDTH=600

# ----------------------------------------------------------------------
# Function to resize an image
# ----------------------------------------------------------------------
resize_image() {
  local image_path=$1
  local width=$2

  echo "Resizing: $image_path to width: $width"
  # Use ImageMagick's 'convert' command to resize
  # You might need to install ImageMagick. On macOS with Homebrew: `brew install imagemagick`
  convert "$image_path" -resize "$width"x "$image_path" 

  if [ $? -eq 0 ]; then
    echo "Resized: $image_path"
  else
    echo "Error resizing: $image_path"
  fi
}

# ----------------------------------------------------------------------
# Main script
# ----------------------------------------------------------------------

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null
then
    echo "ImageMagick could not be found. Please install it."
    echo "On macOS with Homebrew, you can use: brew install imagemagick"
    exit 1
fi

# Find all .jpg and .jpeg files within the base directory and its subfolders
find "$BASE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read -r image_file; do
  resize_image "$image_file" "$TARGET_WIDTH"
done

echo "Finished resizing images."