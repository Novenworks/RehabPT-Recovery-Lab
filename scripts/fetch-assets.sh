#!/usr/bin/env bash
set -euo pipefail
BASE="public/assets/rehabpt"
mkdir -p "$BASE"/{brand,pt,recovery-lab,hbot,sauna,cold-plunge,compression,red-light,shockwave,other}
cdn() { curl -sL "$1" -o "$2"; }
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/e87964f7-acb7-4296-bbae-6721182da0fd/RehabPT+logo.png?format=1500w" "$BASE/brand/logo.png"
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/09908496-882b-47b4-9ba9-98ffa68fef24/Physical+Therapy.jpg?format=2500w" "$BASE/pt/physical-therapy.jpg"
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/514ff888-333a-4b5c-ae81-67e76cb55554/RehabPT+Hyperbaric+Chamber+Newport+Beach+Costa+Mesa.png?format=2500w" "$BASE/hbot/hbot.png"
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/b082d229-574b-4795-99e8-2b0048ad5397/RehabPT+shockwave+therapy.png?format=2500w" "$BASE/shockwave/shockwave.png"
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/55f77a59-a2ac-4a8d-835a-9581b2edcc96/Rehabpt+infared+sauna+costa+mesa.png?format=2500w" "$BASE/sauna/sauna.png"
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/cb6c8581-dcc3-4a21-a504-70f58b636351/Cold+Plunge+RehabPT+Costa+Mesa.png?format=2500w" "$BASE/cold-plunge/cold-plunge.png"
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/bec56592-991e-464b-81d5-07aac363da6b/Normatec_3_Legs_5.jpg?format=2500w" "$BASE/compression/normatec.jpg"
cdn "https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/76c99523-fc81-460d-98ae-9dd5d85b265f/Red+Light+Therapy+Newport+Beach+RehabPT.png?format=2500w" "$BASE/red-light/red-light.png"
echo "assets fetched"
