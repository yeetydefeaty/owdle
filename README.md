# OWDLE - Overwatch 2 Hero Guessing Game

A daily Overwatch 2 hero guessing game inspired by Wordle and Loldle. Guess the hero of the day using hints about their role, gender, origin, and release year!

## 🎮 How to Play

1. **Daily Challenge**: A new hero is selected every day at midnight
2. **Make Guesses**: Search and select heroes to make your guesses
3. **Get Hints**: After each guess, you'll get hints about:
   - **Role**: Tank, Damage, or Support
   - **Gender**: Male, Female, or Omnic
   - **Origin**: Country/planet of origin
   - **Release Year**: When the hero was released (with arrows indicating earlier/later)
4. **Win**: Guess the hero correctly to continue your streak!
5. **Daily Limit**: You can only play once per day

## 🎯 Features

- **Daily Hero Rotation**: Same hero for all players worldwide each day
- **Streak Tracking**: Maintain your winning streak across days
- **Statistics**: Track games played, win rate, and current streak
- **Responsive Design**: Works on desktop and mobile devices
- **Hero Search**: Easy search functionality with autocomplete
- **Visual Feedback**: Color-coded hints and smooth animations

## 🚀 Deployment Options

### GitHub Pages (Recommended - Free)
1. Create a GitHub repository
2. Push your code: `git remote add origin <your-repo-url>`
3. Go to Settings → Pages → Source → Deploy from branch
4. Select `main` branch and save
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant deployment with custom domain options

### Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployments on every push

## 🛠️ Local Development

1. Clone the repository
2. Open `index.html` in your browser, or
3. Run a local server: `python3 -m http.server 8000`
4. Visit `http://localhost:8000`

## 📁 Project Structure

```
owdle/
├── index.html          # Main HTML file
├── script.js           # Game logic and functionality
├── style.css           # Main stylesheet
├── portraits/          # Hero portrait images
├── images/             # Background and other images
└── README.md           # This file
```

## 🎨 Customization

- **Add New Heroes**: Update the `heroes` array in `script.js`
- **Modify Hints**: Change the hint categories in the `compareHeroes` function
- **Styling**: Edit `style.css` to match your preferred theme
- **Daily Reset Time**: Modify the date logic in `getHeroForDate` function

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the game!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy playing OWDLE!** 🎮✨ # owdle
# owdle
