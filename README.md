# Marvel Math Quiz App

A fun, colorful daily math quiz app themed with Marvel heroes, made for CBSE Class 4 (and all Marvel fans!). Features Iron Man, Spider-Man, and Captain America with superhero banners/icons, uplifting UI, rewards, and progress streak tracking.

## ✨ Features

- **Marvel-Themed UI** – Colorful design perfect for kids, featuring banners/icons for Iron Man, Spider-Man, and Captain America.
- **Daily Quiz** – 5 questions each day (4 MCQs + 1 descriptive!).
- **Rewards** – Earn Marvel badges as pop-up rewards for playing and keeping streaks.
- **Progress Tracking** – See your play streak and quiz completion status.
- **Easy to Customize** – Add your own heroes/questions!

## 🚀 Usage

1. Clone/download this repo:
   ```bash
   git clone https://github.com/ashfaqashraf/marvel-math-quiz-app.git
   cd marvel-math-quiz-app
   ```
2. Install dependencies (React, etc.):
   ```bash
   npm install
   ```
3. Start the app locally in dev mode:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser!

## 🗂️ Structure

- `src/App.js` — Main React app, logic and UI.
- `src/questions.js` — Marvel-themed kid-friendly math questions.
- `src/index.js` — React app entry point.

*Add assets (images/icons) to* `src/assets/` *for each hero.*

## 🦸 Deployment (GitHub Pages)

1. Install Gh Pages:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add these scripts to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/marvel-math-quiz-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy!
   ```bash
   npm run deploy
   ```
4. Visit your site on GitHub Pages.

## ⚙️ Customization Tips

- **Add More Heroes**: Add hero images to `src/assets`, update the `badges` object in `App.js`.
- **New Questions**: Edit/add items in `src/questions.js`.
- **Change Theme**: Tweak colors in `App.css` or add your own styles.
- **Difficulty Levels**: Expand the questions data structure with levels if you wish.

## 📧 Issues/Suggestions

Found a bug or want more superheroes included? Open an issue or pull request!
