# Butter Bloom website

A responsive bakery, gifting and celebration website built with HTML, CSS and JavaScript.

## Run in VS Code
1. Extract `butter_bloom_website.zip`.
2. Open the `butter_bloom_website` folder in VS Code.
3. Open `index.html` in your browser. Recommended: install the **Live Server** extension, then right-click `index.html` → **Open with Live Server**.

## Add your own photos
Put your image files into the folders below. Keep the filenames exactly the same as shown, or update the matching `src` in `index.html`.

- Main hero cake: `images/hero-cake.jpg`
- Cake card: `images/cakes/cake-1.jpg`
- Cake combo card: `images/cake-combos/combo-1.jpg`
- Bouquet card: `images/bouquets/bouquet-1.jpg`
- Hamper card: `images/hampers/hamper-1.jpg`
- Cupcake card: `images/cupcakes/cupcake-1.jpg`
- Celebration / photoshoot image: `images/occasions/celebration.jpg`

Use JPG, PNG or WebP. If you use another extension, update the corresponding `src` in `index.html`. The sample online photos are fallback images only; replace them with your own photos for the final site.

## Set up WhatsApp ordering
Open `script.js` and change:
```js
const WHATSAPP_NUMBER = "";
```
to your WhatsApp number using country code and digits only. Example format: `919876543210` (example only, not a real business contact).

## Add Instagram
In `script.js`, change:
```js
const INSTAGRAM_URL = "";
```
to your Instagram profile URL, e.g. `https://www.instagram.com/yourusername/`.

## Add starting prices
In `index.html`, search for `From ₹___` and replace each placeholder with your actual starting price, for example `From ₹499`.

## Add reviews
Replace the three sample review cards with real customer reviews and get permission before publishing names or photos.

## Important
- The enquiry form opens a pre-filled WhatsApp message; it does not store form submissions in a database.
- A real online payment / checkout system would need a secure backend or payment provider.
- Google Fonts and fallback sample images need an internet connection. Your own local photos will work offline.
