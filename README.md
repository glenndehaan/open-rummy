# Open Rummy

<img alt='Icon' width='100' src='https://user-images.githubusercontent.com/7496187/113696599-81358900-96d2-11eb-8bd6-94244145b85d.png'/>

A companion website for playing the Open Rummy card game

## Features
- Game instructions
- Automated point calculations
- Round win status
- Current player turn
- Payout calculations
- Storage fallback for incomplete games
- Service Worker for offline support
- Wake-Lock API for keeping your screen awake on supported browsers
- CSV Exports

## Structure
- ES6 Javascript
- Preact
- Unistore
- Mitt
- Webpack

## Live Site
https://open-rummy.com

## App
<a href='https://play.google.com/store/apps/details?id=com.open_rummy.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' width='200' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>

## Development Usage
- Install NodeJS 14.0 or higher.
- Run `npm ci` in the root folder
- Run `npm start` in the root folder

Then open up your favorite browser and go to http://localhost:3467/

## Build Usage
- Install NodeJS 14.0 or higher.
- Run `npm ci` in the root folder
- Run `npm run build` in the root folder

## Improvements
- *Undo button in button bar*
- Share game via qr code

## License

MIT
