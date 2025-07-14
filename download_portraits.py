#!/usr/bin/env python3
import requests
import os
from urllib.parse import urljoin

# Hero portrait URLs from Overwatch wiki
hero_portraits = {
    "Ana": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Ana-portrait.png",
    "Ashe": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/76/Ashe-portrait.png",
    "Baptiste": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5a/Baptiste-portrait.png",
    "Bastion": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/56/Bastion-portrait.png",
    "Brigitte": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3f/Brigitte-portrait.png",
    "Cassidy": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Cassidy-portrait.png",
    "D.Va": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7c/D.Va-portrait.png",
    "Doomfist": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/57/Doomfist-portrait.png",
    "Echo": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8a/Echo-portrait.png",
    "Genji": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8d/Genji-portrait.png",
    "Hanzo": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8e/Hanzo-portrait.png",
    "Illari": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Illari-portrait.png",
    "Junker Queen": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9a/Junker_Queen-portrait.png",
    "Junkrat": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Junkrat-portrait.png",
    "Kiriko": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9b/Kiriko-portrait.png",
    "Lifeweaver": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9c/Lifeweaver-portrait.png",
    "Lucio": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/76/Lucio-portrait.png",
    "Mauga": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9d/Mauga-portrait.png",
    "Mei": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Mei-portrait.png",
    "Mercy": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7c/Mercy-portrait.png",
    "Moira": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Moira-portrait.png",
    "Orisa": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Orisa-portrait.png",
    "Pharah": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Pharah-portrait.png",
    "Ramattra": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9e/Ramattra-portrait.png",
    "Reaper": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Reaper-portrait.png",
    "Reinhardt": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Reinhardt-portrait.png",
    "Roadhog": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Roadhog-portrait.png",
    "Sigma": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Sigma-portrait.png",
    "Sojourn": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9f/Sojourn-portrait.png",
    "Soldier: 76": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Soldier_76-portrait.png",
    "Sombra": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Sombra-portrait.png",
    "Symmetra": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Symmetra-portrait.png",
    "Torbjörn": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Torbjorn-portrait.png",
    "Tracer": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Tracer-portrait.png",
    "Widowmaker": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Widowmaker-portrait.png",
    "Winston": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Winston-portrait.png",
    "Wrecking Ball": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Wrecking_Ball-portrait.png",
    "Zarya": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Zarya-portrait.png",
    "Zenyatta": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Zenyatta-portrait.png"
}

def download_portrait(hero_name, url, folder="portraits"):
    """Download a hero portrait and save it locally"""
    if not os.path.exists(folder):
        os.makedirs(folder)
    
    # Clean filename
    filename = hero_name.replace(":", "").replace(" ", "_").lower() + ".png"
    filepath = os.path.join(folder, filename)
    
    try:
        print(f"Downloading {hero_name}...")
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"✓ Downloaded {hero_name} -> {filepath}")
        return filepath
    except Exception as e:
        print(f"✗ Failed to download {hero_name}: {e}")
        return None

def main():
    print("Downloading Overwatch 2 Hero Portraits...")
    print("=" * 50)
    
    successful_downloads = []
    failed_downloads = []
    
    for hero_name, url in hero_portraits.items():
        result = download_portrait(hero_name, url)
        if result:
            successful_downloads.append(hero_name)
        else:
            failed_downloads.append(hero_name)
    
    print("\n" + "=" * 50)
    print(f"Download Summary:")
    print(f"✓ Successful: {len(successful_downloads)}")
    print(f"✗ Failed: {len(failed_downloads)}")
    
    if failed_downloads:
        print(f"\nFailed downloads: {', '.join(failed_downloads)}")
    
    if successful_downloads:
        print(f"\nAll portraits saved in 'portraits/' folder")
        print("You can now update the script.js file to use local paths like './portraits/ana.png'")

if __name__ == "__main__":
    main() 