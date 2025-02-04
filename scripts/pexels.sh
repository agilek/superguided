#!/bin/bash

# Pexels API key (PUT YOUR API KEY HERE)
API_KEY="u2d5eOXBNLpODfinReccop4pmpAZ1QkKWaSe5UwvEYqx2bNMt4pXMdDv"

# Array of keywords (city names)
KEYWORDS=("amsterdam" "athens" "barcelona" "bergen" "berlin" "bilbao" "bratislava" "brussels" "budapest" "copenhagen" "dublin" "dubrovnik" "edinburgh" "florence" "geneva" "glasgow" "hamburg" "helsinki" "istanbul" "krakow" "lille" "london" "madrid" "milan" "munich" "paris" "prague" "reykjavik" "rome" "stockholm" "venice" "vienna" "warsaw" "zurich")

# Number of images to download per city
NUM_IMAGES=4

# Base output directory
BASE_OUTPUT_DIR="city_images"

# ----------------------------------------------------------------------
# Function to download an image from a URL
# ----------------------------------------------------------------------
download_image() {
  local url=$1
  local filename=$2
  echo "Downloading: $filename from $url"
  curl -s -o "$filename" "$url"
  if [ $? -eq 0 ]; then
    echo "Downloaded: $filename"
  else
    echo "Error downloading: $filename"
  fi
}

# ----------------------------------------------------------------------
# Main script
# ----------------------------------------------------------------------

# Check if API key is set
if [ -z "$API_KEY" ]; then
  echo "Error: Pexels API key is not set. Please add your API key to the API_KEY variable in the script."
  exit 1
fi

# Create base output directory if it doesn't exist
mkdir -p "$BASE_OUTPUT_DIR"

# Loop through each keyword
for KEYWORD in "${KEYWORDS[@]}"; do
  echo "Processing: $KEYWORD"

  # Create output directory for the current city
  OUTPUT_DIR="$BASE_OUTPUT_DIR/$KEYWORD"
  mkdir -p "$OUTPUT_DIR"

  # Build the API request URL (request enough images)
  # We set per_page higher because the API sometimes returns fewer images than requested.
  API_URL="https://api.pexels.com/v1/search?query=$KEYWORD&per_page=$((NUM_IMAGES + 5))"

  # Make the API request and parse the JSON response
  RESPONSE=$(curl -s -H "Authorization: $API_KEY" "$API_URL")
    
  # Check for request errors
  if [[ "$RESPONSE" == *"error"* ]]; then
      echo "Error: API request failed for $KEYWORD:"
      echo "$RESPONSE"
      continue # Skip to the next city
  fi

  # Download images for the current city
  image_counter=1
  echo "$RESPONSE" | jq -r '.photos[] | .src.original' | while read -r image_url; do
    filename="${OUTPUT_DIR}/image-${image_counter}.jpg"

    download_image "$image_url" "$filename"

    image_counter=$((image_counter + 1))
    if [ $image_counter -gt $NUM_IMAGES ]; then
      break  # Stop downloading images for this city once we have enough
    fi
  done
done

echo "Finished downloading images to: $BASE_OUTPUT_DIR"