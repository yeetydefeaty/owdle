// Overwatch 2 Hero Data
const heroes = [
    {
        name: "Ana",
        role: "Support",
        gender: "Female",
        origin: "Egypt",
        releaseYear: 2016,
        image: "./portraits/ana.png",
        description: "A founding member of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for.",
        aliases: ["ana"]
    },
    {
        name: "Ashe",
        role: "Damage",
        gender: "Female",
        origin: "USA",
        releaseYear: 2018,
        image: "./portraits/ashe.png",
        description: "The ambitious and calculating leader of the Deadlock Gang, Ashe is a force to be reckoned with.",
        aliases: ["ashe"]
    },
    {
        name: "Baptiste",
        role: "Support",
        gender: "Male",
        origin: "Haiti",
        releaseYear: 2019,
        image: "./portraits/baptiste.png",
        description: "A combat medic and former Talon operative, Baptiste now uses his skills to help those in need.",
        aliases: ["baptiste", "bap"]
    },
    {
        name: "Bastion",
        role: "Damage",
        gender: "Omnic",
        origin: "Germany",
        releaseYear: 2016,
        image: "./portraits/bastion.png",
        description: "A curious and gentle robot, Bastion is fascinated by nature and seeks to understand the world around it.",
        aliases: ["bastion", "bast"]
    },
    {
        name: "Brigitte",
        role: "Support",
        gender: "Female",
        origin: "Sweden",
        releaseYear: 2018,
        image: "./portraits/brigitte.png",
        description: "A valiant squire who fights alongside the newest Overwatch agents, Brigitte Lindholm is a stalwart support hero.",
        aliases: ["brigitte", "brig", "brigitte lindholm"]
    },
    {
        name: "Cassidy",
        role: "Damage",
        gender: "Male",
        origin: "USA",
        releaseYear: 2016,
        image: "./portraits/cassidy.png",
        description: "Armed with his Peacekeeper revolver, the outlaw Jesse McCree doles out justice on his own terms.",
        aliases: ["cassidy", "mccree", "jesse", "jesse mccree"]
    },
    {
        name: "D.Va",
        role: "Tank",
        gender: "Female",
        origin: "South Korea",
        releaseYear: 2016,
        image: "./portraits/dva.png",
        description: "A former professional gamer, D.Va now pilots a state-of-the-art mech to defend her country.",
        aliases: ["dva", "d.va", "d-va", "d.va", "hannah song", "song"]
    },
    {
        name: "Doomfist",
        role: "Tank",
        gender: "Male",
        origin: "Nigeria",
        releaseYear: 2017,
        image: "./portraits/doomfist.png",
        description: "A living weapon, Doomfist's cybernetics make him a highly-mobile, powerful frontline fighter.",
        aliases: ["doomfist", "doom", "akande ogundimu"]
    },
    {
        name: "Echo",
        role: "Damage",
        gender: "Omnic",
        origin: "Switzerland",
        releaseYear: 2020,
        image: "./portraits/echo.png",
        description: "An evolutionary robot programmed with a rapidly adapting artificial intelligence, Echo represents the cutting edge of technology.",
        aliases: ["echo"]
    },
    {
        name: "Genji",
        role: "Damage",
        gender: "Male",
        origin: "Japan",
        releaseYear: 2016,
        image: "./portraits/genji.png",
        description: "A cyborg ninja, Genji Shimada has made peace with the augmented body he once rejected.",
        aliases: ["genji", "genji shimada"]
    },
    {
        name: "Hanzo",
        role: "Damage",
        gender: "Male",
        origin: "Japan",
        releaseYear: 2016,
        image: "./portraits/hanzo.png",
        description: "Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer.",
        aliases: ["hanzo", "hanzo shimada"]
    },
    {
        name: "Freja",
        role: "Damage",
        gender: "Female",
        origin: "Norway",
        releaseYear: 2024,
        image: "./portraits/freja.png",
        description: "A fierce warrior from the frozen north, Freja wields ice and frost to control the battlefield and protect her allies.",
        aliases: ["freja", "ice queen", "frost"]
    },
    {
        name: "Hazard",
        role: "Tank",
        gender: "Male",
        origin: "USA",
        releaseYear: 2024,
        image: "./portraits/hazard.png",
        description: "A former military specialist, Hazard uses advanced technology and tactical expertise to control the battlefield and protect his team.",
        aliases: ["hazard", "haz"]
    },
    {
        name: "Illari",
        role: "Support",
        gender: "Female",
        origin: "Peru",
        releaseYear: 2023,
        image: "./portraits/illari.png",
        description: "A Peruvian warrior who wields the power of the sun, Illari fights to protect her people and their ancient traditions.",
        aliases: ["illari"]
    },
    {
        name: "Junker Queen",
        role: "Tank",
        gender: "Female",
        origin: "Australia",
        releaseYear: 2022,
        image: "./portraits/junker_queen.png",
        description: "The ruthless ruler of Junkertown, Junker Queen is a brutal and unpredictable force of nature.",
        aliases: ["junker queen", "jq", "queen"]
    },
    {
        name: "Junkrat",
        role: "Damage",
        gender: "Male",
        origin: "Australia",
        releaseYear: 2016,
        image: "./portraits/junkrat.png",
        description: "A demolition-loving madman, Junkrat is an explosives-obsessed freak who lives to cause chaos and destruction.",
        aliases: ["junkrat", "junk", "jamison fawkes"]
    },
    {
        name: "Juno",
        role: "Support",
        gender: "Female",
        origin: "Mars",
        releaseYear: 2024,
        image: "./portraits/juno.png",
        description: "A mysterious new hero with unique abilities and a compelling backstory.",
        aliases: ["juno"]
    },
    {
        name: "Kiriko",
        role: "Support",
        gender: "Female",
        origin: "Japan",
        releaseYear: 2022,
        image: "./portraits/kiriko.png",
        description: "A kunoichi who heals by the light of her fox spirit, Kiriko Kamori channels both her spiritual and ninja skills to protect her family and city.",
        aliases: ["kiriko", "kiriko kamori"]
    },
    {
        name: "Lifeweaver",
        role: "Support",
        gender: "Male",
        origin: "Thailand",
        releaseYear: 2023,
        image: "./portraits/lifeweaver.png",
        description: "A brilliant scientist and compassionate healer, Lifeweaver uses his biolight technology to protect and nurture life.",
        aliases: ["lifeweaver", "weaver", "niran"]
    },
    {
        name: "Lucio",
        role: "Support",
        gender: "Male",
        origin: "Brazil",
        releaseYear: 2016,
        image: "./portraits/lucio.png",
        description: "A freedom fighter and international celebrity, Lúcio's music and actions inspire social change and hope.",
        aliases: ["lucio", "lúcio"]
    },
    {
        name: "Mauga",
        role: "Tank",
        gender: "Male",
        origin: "Samoa",
        releaseYear: 2023,
        image: "./portraits/mauga.png",
        description: "A Samoan warrior with a love for firepower and destruction, Mauga is a force of nature on the battlefield.",
        aliases: ["mauga"]
    },
    {
        name: "Mei",
        role: "Damage",
        gender: "Female",
        origin: "China",
        releaseYear: 2016,
        image: "./portraits/mei.png",
        description: "A climatologist and adventurer, Mei-Ling Zhou is a force for good who fights to protect the environment.",
        aliases: ["mei", "mei-ling", "mei ling zhou"]
    },
    {
        name: "Mercy",
        role: "Support",
        gender: "Female",
        origin: "Switzerland",
        releaseYear: 2016,
        image: "./portraits/mercy.png",
        description: "A guardian angel to those in her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.",
        aliases: ["mercy", "angela", "angela ziegler"]
    },
    {
        name: "Moira",
        role: "Support",
        gender: "Female",
        origin: "Ireland",
        releaseYear: 2017,
        image: "./portraits/moira.png",
        description: "A controversial geneticist who seeks to unlock the secrets of life and death, regardless of the cost.",
        aliases: ["moira", "moira o'deorain"]
    },
    {
        name: "Orisa",
        role: "Tank",
        gender: "Omnic",
        origin: "Nigeria",
        releaseYear: 2017,
        image: "./portraits/orisa.png",
        description: "Built from the remains of an OR15 defense robot, Orisa is the city of Numbani's steadfast protector.",
        aliases: ["orisa"]
    },
    {
        name: "Pharah",
        role: "Damage",
        gender: "Female",
        origin: "Egypt",
        releaseYear: 2016,
        image: "./portraits/pharah.png",
        description: "Soaring through the air like a rocket, Pharah unleashes her rockets from above to rain justice from the sky.",
        aliases: ["pharah", "fareeha", "fareeha amari"]
    },
    {
        name: "Ramattra",
        role: "Tank",
        gender: "Omnic",
        origin: "India",
        releaseYear: 2022,
        image: "./portraits/ramattra.png",
        description: "The leader of Null Sector, Ramattra fights for omnic rights through any means necessary.",
        aliases: ["ramattra", "rama"]
    },
    {
        name: "Reaper",
        role: "Damage",
        gender: "Male",
        origin: "USA",
        releaseYear: 2016,
        image: "./portraits/reaper.png",
        description: "A mercenary and terrorist, Reaper is a living shadow who hunts his enemies and brings death wherever he goes.",
        aliases: ["reaper", "gabriel", "gabriel reyes", "reyes"]
    },
    {
        name: "Reinhardt",
        role: "Tank",
        gender: "Male",
        origin: "Germany",
        releaseYear: 2016,
        image: "./portraits/reinhardt.png",
        description: "A champion of a bygone age, Reinhardt fights to uphold the values that inspired the Overwatch organization.",
        aliases: ["reinhardt", "rein"]
    },
    {
        name: "Roadhog",
        role: "Tank",
        gender: "Male",
        origin: "Australia",
        releaseYear: 2016,
        image: "./portraits/roadhog.png",
        description: "A ruthless killer with a well-earned reputation for cruelty and wanton destruction, Roadhog is a one-man apocalypse.",
        aliases: ["roadhog", "hog", "mako"]
    },
    {
        name: "Sigma",
        role: "Tank",
        gender: "Male",
        origin: "Netherlands",
        releaseYear: 2019,
        image: "./portraits/sigma.png",
        description: "An eccentric astrophysicist, Sigma is an experimental gravity-manipulating weapon who seeks to unlock the secrets of the universe.",
        aliases: ["sigma", "siebren"]
    },
    {
        name: "Sojourn",
        role: "Damage",
        gender: "Female",
        origin: "Canada",
        releaseYear: 2022,
        image: "./portraits/sojourn.png",
        description: "A former Overwatch captain, Sojourn is a force to be reckoned with on the battlefield.",
        aliases: ["sojourn", "vivian", "vivian chase"]
    },
    {
        name: "Soldier: 76",
        role: "Damage",
        gender: "Male",
        origin: "USA",
        releaseYear: 2016,
        image: "./portraits/soldier_76.png",
        description: "A vigilante who fights to expose the truth behind Overwatch's collapse, Soldier: 76 is determined to bring those responsible to justice.",
        aliases: ["soldier 76", "soldier76", "soldier", "76", "jack", "jack morrison"]
    },
    {
        name: "Sombra",
        role: "Damage",
        gender: "Female",
        origin: "Mexico",
        releaseYear: 2016,
        image: "./portraits/sombra.png",
        description: "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.",
        aliases: ["sombra", "olivia", "olivia colomar"]
    },
    {
        name: "Symmetra",
        role: "Damage",
        gender: "Female",
        origin: "India",
        releaseYear: 2016,
        image: "./portraits/symmetra.png",
        description: "A hard-light architect, Symmetra bends reality to her will, creating structures and weapons from pure light.",
        aliases: ["symmetra", "sym", "satya", "satya vaswani"]
    },
    {
        name: "Torbjörn",
        role: "Damage",
        gender: "Male",
        origin: "Sweden",
        releaseYear: 2016,
        image: "./portraits/torbjorn.png",
        description: "A brilliant engineer, Torbjörn specializes in weapons design and is at his best building turrets and arming his allies.",
        aliases: ["torbjorn", "torb", "torbjörn"]
    },
    {
        name: "Tracer",
        role: "Damage",
        gender: "Female",
        origin: "UK",
        releaseYear: 2016,
        image: "./portraits/tracer.png",
        description: "A former Overwatch agent, Tracer is a force for good who fights to make the world a better place.",
        aliases: ["tracer", "lena", "lena oxton"]
    },
    {
        name: "Venture",
        role: "Damage",
        gender: "Non-binary",
        origin: "Canada",
        releaseYear: 2024,
        image: "./portraits/venture.png",
        description: "A thrill-seeking archaeologist, Venture uses their drilling expertise to unearth ancient secrets and protect the world.",
        aliases: ["venture"]
    },
    {
        name: "Widowmaker",
        role: "Damage",
        gender: "Female",
        origin: "France",
        releaseYear: 2016,
        image: "./portraits/widowmaker.png",
        description: "A perfect assassin who shows neither emotion nor remorse, Widowmaker is a living weapon.",
        aliases: ["widowmaker", "widow", "amélie", "amélie lacroix", "amelie"]
    },
    {
        name: "Winston",
        role: "Tank",
        gender: "Male",
        origin: "Moon",
        releaseYear: 2016,
        image: "./portraits/winston.png",
        description: "A genetically engineered gorilla and a brilliant scientist, Winston is a force for good and a founding member of Overwatch.",
        aliases: ["winston"]
    },
    {
        name: "Wrecking Ball",
        role: "Tank",
        gender: "Male",
        origin: "Australia",
        releaseYear: 2018,
        image: "./portraits/wrecking_ball.png",
        description: "A resourceful hamster in a spherical mech, Wrecking Ball rolls through the battlefield, causing chaos and destruction.",
        aliases: ["wrecking ball", "ball", "hamster", "hammond"]
    },
    {
        name: "Zarya",
        role: "Tank",
        gender: "Female",
        origin: "Russia",
        releaseYear: 2016,
        image: "./portraits/zarya.png",
        description: "One of the world's strongest women, Zarya uses her strength to protect those she cares about.",
        aliases: ["zarya", "aleksandra", "aleksandra zaryanova"]
    },
    {
        name: "Zenyatta",
        role: "Support",
        gender: "Omnic",
        origin: "Nepal",
        releaseYear: 2016,
        image: "./portraits/zenyatta.png",
        description: "An omnic monk who seeks spiritual enlightenment, Zenyatta is an agent of harmony and healing.",
        aliases: ["zenyatta", "zen"]
    }
];

// Game state
let currentHero;
let guesses = [];
let guessedHeroes = []; // Track guessed heroes
let guessesMade = 0;
let maxGuesses = 6;
let gameWon = false;
let gameOver = false;

// Game statistics
let gameStats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0
};

// DOM elements
let heroImage;
let heroSearch;
let searchResults;
let resultMessage;
let heroDetails;
let resultsSection;
let revealButton;

let gamesPlayedSpan;
let winRateSpan;
let currentStreakSpan;
let guessesRemainingSpan;

// Initialize the game
function initGame() {
    // Get DOM elements
    heroImage = document.getElementById('heroImage');
    heroSearch = document.getElementById('heroSearch');
    searchResults = document.getElementById('searchResults');
    resultMessage = document.getElementById('resultMessage');
    heroDetails = document.getElementById('heroDetails');
    resultsSection = document.getElementById('resultsSection');
    revealButton = document.getElementById('revealButton');
    gamesPlayedSpan = document.getElementById('gamesPlayed');
    winRateSpan = document.getElementById('winRate');
    currentStreakSpan = document.getElementById('currentStreak');
    guessesRemainingSpan = document.getElementById('guessesRemaining');
    
    // Add event listeners
    heroSearch.addEventListener('input', handleSearch);
    heroSearch.addEventListener('keypress', handleKeyPress);
    
    // Click outside to close search results
    document.addEventListener('click', (e) => {
        if (!heroSearch.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Reveal button
    revealButton.addEventListener('click', revealHero);
    
    // Share button
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', shareResult);
    }
    
    // Load stats
    loadStats();
    updateStatsDisplay();
    updateDailyIndicator();
    
    // Start new game
    startNewGame();
    
    // Update countdown every minute
    setInterval(updateDailyIndicator, 60000);
}

// Load stats from localStorage
function loadStats() {
    const savedStats = localStorage.getItem('owdleStats');
    if (savedStats) {
        gameStats = JSON.parse(savedStats);
        updateStatsDisplay();
    }
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('owdleStats', JSON.stringify(gameStats));
}

// Update stats display
function updateStatsDisplay() {
    gamesPlayedSpan.textContent = gameStats.gamesPlayed;
    const winRate = gameStats.gamesPlayed > 0 ? Math.round((gameStats.gamesWon / gameStats.gamesPlayed) * 100) : 0;
    winRateSpan.textContent = `${winRate}%`;
    currentStreakSpan.textContent = gameStats.currentStreak;
}

// Update daily indicator with next hero time
function updateDailyIndicator() {
    const dailyIndicator = document.getElementById('dailyIndicator');
    if (dailyIndicator) {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const timeUntilNext = tomorrow - now;
        const hours = Math.floor(timeUntilNext / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilNext % (1000 * 60 * 60)) / (1000 * 60));
        
        if (hasPlayedToday()) {
            dailyIndicator.textContent = `Next hero in ${hours}h ${minutes}m`;
        } else {
            dailyIndicator.textContent = 'Daily Challenge';
        }
    }
}

// Get hero for a specific date (consistent across all users)
function getHeroForDate(date) {
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD format
    const seed = dateString.split('-').join(''); // Convert to number for seeding
    const heroIndex = parseInt(seed) % heroes.length;
    return heroes[heroIndex];
}

// Get today's hero
function getTodaysHero() {
    const today = new Date();
    return getHeroForDate(today);
}

// Check if we need to start a new daily game
function shouldStartNewDailyGame() {
    const lastPlayedDate = localStorage.getItem('owdleLastPlayedDate');
    const today = new Date().toISOString().split('T')[0];
    
    return lastPlayedDate !== today;
}

// Check if the player has already played today
function hasPlayedToday() {
    const lastPlayedDate = localStorage.getItem('owdleLastPlayedDate');
    const today = new Date().toISOString().split('T')[0];
    
    return lastPlayedDate === today;
}

// Start a new game
function startNewGame() {
    // Check if we need a new daily hero
    if (shouldStartNewDailyGame()) {
        // New day, get today's hero
        currentHero = getTodaysHero();
        localStorage.setItem('owdleLastPlayedDate', new Date().toISOString().split('T')[0]);
        
        // Don't reset streak here - it will be handled in makeGuess when the game ends
    } else {
        // Same day, load the hero from localStorage or get today's hero
        const savedHeroName = localStorage.getItem('owdleCurrentHero');
        if (savedHeroName) {
            currentHero = heroes.find(hero => hero.name === savedHeroName);
        }
        if (!currentHero) {
            currentHero = getTodaysHero();
        }
    }
    
    // Save current hero to localStorage
    localStorage.setItem('owdleCurrentHero', currentHero.name);
    
    // Reset game state
    guesses = [];
    guessedHeroes = []; // Reset guessed heroes
    gameWon = false;
    gameOver = false; // Reset gameOver
    
    // Reset UI
    heroImage.innerHTML = '<div class="silhouette"></div>';
    revealButton.classList.remove('show');
    // selectedHeroDiv.innerHTML = '<p>Select a hero to make your guess</p>'; // This line was removed
    // guessButton.disabled = true; // This line was removed
    resultsSection.style.display = 'none';
    heroSearch.value = '';
    searchResults.style.display = 'none';
    
    // Update guess counter
    updateGuessCounter();
    
    // Clear previous guesses
    const guessesContainer = document.getElementById('guessesContainer');
    if (guessesContainer) {
        guessesContainer.remove();
    }
    
    console.log('Current hero:', currentHero.name); // For debugging
}

// Update guess counter display
function updateGuessCounter() {
    const remaining = maxGuesses - guesses.length;
    guessesRemainingSpan.textContent = remaining;
    
    // Change color based on remaining guesses
    const counter = document.querySelector('.guess-counter');
    if (remaining <= 2) {
        counter.style.color = '#f87171';
        counter.style.borderColor = 'rgba(248, 113, 113, 0.5)';
        counter.style.background = 'rgba(248, 113, 113, 0.1)';
    } else if (remaining <= 3) {
        counter.style.color = '#fbbf24';
        counter.style.borderColor = 'rgba(251, 191, 36, 0.5)';
        counter.style.background = 'rgba(251, 191, 36, 0.1)';
    } else {
        counter.style.color = '#ff6b35';
        counter.style.borderColor = 'rgba(255, 107, 53, 0.3)';
        counter.style.background = 'rgba(255, 107, 53, 0.1)';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Hero search
    heroSearch.addEventListener('input', handleSearch);
    heroSearch.addEventListener('focus', () => {
        if (heroSearch.value.trim()) {
            showSearchResults();
        }
    });
    heroSearch.addEventListener('keypress', handleKeyPress); // Handle Enter key press
    
    // Click outside to close search results
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
    
    // Reveal button
    revealButton.addEventListener('click', revealHero);
    
    // Guess button
    // guessButton.addEventListener('click', makeGuess); // This line was removed
    
    // New game button
    // newGameButton.addEventListener('click', startNewGame); // This line was removed
}

// Handle search input
function handleSearch() {
    const query = heroSearch.value.trim().toLowerCase();
    
    if (query === '') {
        searchResults.style.display = 'none';
        return;
    }
    
    const matches = heroes.filter(hero => 
        hero.aliases.some(alias => alias.toLowerCase().includes(query)) ||
        hero.name.toLowerCase().includes(query)
    );
    
    if (matches.length > 0) {
        displaySearchResults(matches);
    } else {
        searchResults.style.display = 'none';
    }
}

// Display search results
function displaySearchResults(matches) {
    searchResults.innerHTML = '';
    searchResults.style.display = 'block';
    
    matches.forEach(hero => {
        const resultItem = document.createElement('div');
        const isAlreadyGuessed = guessedHeroes.includes(hero.name);
        
        resultItem.className = `search-result-item ${isAlreadyGuessed ? 'already-guessed' : ''}`;
        resultItem.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TzwvdGV4dD4KPC9zdmc+Cg=='">
            <span>${hero.name}</span>
            ${isAlreadyGuessed ? '<span class="already-guessed-text">Already guessed</span>' : ''}
        `;
        
        if (!isAlreadyGuessed) {
            resultItem.addEventListener('click', () => {
                makeGuess(hero);
                heroSearch.value = '';
                searchResults.style.display = 'none';
            });
        }
        
        searchResults.appendChild(resultItem);
    });
}

// Show search results
function showSearchResults() {
    searchResults.style.display = 'block';
}

// Select a hero
function selectHero(hero) {
    // selectedHero = hero; // This line was removed
    // selectedHeroDiv.innerHTML = ` // This line was removed
    //     <div class="selected-hero-content"> // This line was removed
    //         <img src="${hero.image}" alt="${hero.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjMwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk88L3RleHQ+Cjwvc3ZnPgo='"> // This line was removed
    //         <div> // This line was removed
    //             <h3>${hero.name}</h3> // This line was removed
    //             <p>${hero.role}</p> // This line was removed
    //         </div> // This line was removed
    //     </div> // This line was removed
    // `; // This line was removed
    // guessButton.disabled = false; // This line was removed
    searchResults.style.display = 'none';
    heroSearch.value = '';
}

// Compare heroes and get hints
function compareHeroes(guessedHero, targetHero) {
    const hints = {
        role: guessedHero.role === targetHero.role ? 'correct' : 'incorrect',
        gender: guessedHero.gender === targetHero.gender ? 'correct' : 'incorrect',
        origin: guessedHero.origin === targetHero.origin ? 'correct' : 'incorrect',
        releaseYear: guessedHero.releaseYear === targetHero.releaseYear ? 'correct' : 
                    guessedHero.releaseYear < targetHero.releaseYear ? 'earlier' : 'later'
    };
    
    return hints;
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const query = heroSearch.value.trim().toLowerCase();
        if (query === '') return;
        
        const matches = heroes.filter(hero => 
            (hero.aliases.some(alias => alias.toLowerCase().includes(query)) ||
            hero.name.toLowerCase().includes(query)) &&
            !guessedHeroes.includes(hero.name) // Filter out already guessed heroes
        );
        
        if (matches.length === 1) {
            makeGuess(matches[0]);
            heroSearch.value = '';
            searchResults.style.display = 'none';
        } else if (matches.length > 1) {
            // If multiple matches, select the first one
            makeGuess(matches[0]);
            heroSearch.value = '';
            searchResults.style.display = 'none';
        }
    }
}

// Make a guess
function makeGuess(hero) {
    if (gameOver) return;
    
    // Check if hero was already guessed
    if (guessedHeroes.includes(hero.name)) {
        return; // Don't allow duplicate guesses
    }
    
    // Add hero to guessed list
    guessedHeroes.push(hero.name);
    
    const hints = {
        role: hero.role === currentHero.role ? 'correct' : 'incorrect',
        gender: hero.gender === currentHero.gender ? 'correct' : 'incorrect',
        origin: hero.origin === currentHero.origin ? 'correct' : 'incorrect',
        releaseYear: hero.releaseYear === currentHero.releaseYear ? 'correct' : 
                    hero.releaseYear < currentHero.releaseYear ? 'earlier' : 'later'
    };
    
    displayGuess(hero, hints, hero.name === currentHero.name);
    
    if (hero.name === currentHero.name) {
        gameWon = true;
        gameOver = true;
        gameStats.gamesWon++;
        gameStats.currentStreak++;
        showFinalResults();
    } else {
        guessesMade++;
        if (guessesMade >= maxGuesses) {
            gameOver = true;
            // Only reset streak if this is a new day and the player lost
            if (shouldStartNewDailyGame()) {
                gameStats.currentStreak = 0;
            }
            showFinalResults();
        }
    }
    
    // Only increment games played if this is a new day or the player hasn't played today yet
    if (!hasPlayedToday()) {
        gameStats.gamesPlayed++;
    }
    saveStats();
    updateStatsDisplay();
    updateDailyIndicator();
    
    // Show ads after game completion
    if (window.adManager && window.adManager.showAdsAfterGame) {
        window.adManager.showAdsAfterGame();
    }
}

// Display a guess with hints
function displayGuess(hero, hints, isCorrect) {
    let guessesContainer = document.getElementById('guessesContainer');
    if (!guessesContainer) {
        guessesContainer = document.createElement('div');
        guessesContainer.id = 'guessesContainer';
        guessesContainer.className = 'guesses-container';
        document.querySelector('.game-container').insertBefore(guessesContainer, document.querySelector('.guess-section'));
    }
    
    const guessElement = document.createElement('div');
    guessElement.className = `guess-item ${isCorrect ? 'correct' : ''}`;
    
    // Get release year hint text and icon
    let releaseYearHint = '';
    if (hints.releaseYear === 'correct') {
        releaseYearHint = `${hero.releaseYear}`;
    } else if (hints.releaseYear === 'earlier') {
        releaseYearHint = `${hero.releaseYear} ↑`;
    } else {
        releaseYearHint = `${hero.releaseYear} ↓`;
    }
    
    guessElement.innerHTML = `
        <div class="guess-hero" style="opacity: 0;">
            <img src="${hero.image}" alt="${hero.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk88L3RleHQ+Cjwvc3ZnPgo='">
            <span class="hero-name">${hero.name}</span>
        </div>
        <div class="guess-hints">
            <div class="hint-item ${hints.role}" style="opacity: 0;">
                <span class="hint-label">Role:</span>
                <span class="hint-value">${hero.role}</span>
            </div>
            <div class="hint-item ${hints.gender}" style="opacity: 0;">
                <span class="hint-label">Gender:</span>
                <span class="hint-value">${hero.gender}</span>
            </div>
            <div class="hint-item ${hints.origin}" style="opacity: 0;">
                <span class="hint-label">Origin:</span>
                <span class="hint-value">${hero.origin}</span>
            </div>
            <div class="hint-item ${hints.releaseYear}" style="opacity: 0;">
                <span class="hint-label">Year:</span>
                <span class="hint-value">${releaseYearHint}</span>
            </div>
        </div>
    `;
    
    guessesContainer.appendChild(guessElement);
    
    // Trigger animations after element is added to DOM
    setTimeout(() => {
        const heroElement = guessElement.querySelector('.guess-hero');
        const hintItems = guessElement.querySelectorAll('.hint-item');
        
        // Animate hero portrait and name
        heroElement.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
        heroElement.style.opacity = '1';
        heroElement.style.transform = 'translateY(0)';
        
        // Animate hints in sequence
        hintItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, (index + 1) * 250); // 250ms delay between each hint
        });
    }, 10); // Small delay to ensure DOM is ready
}

// Reveal the current hero
function revealHero() {
    if (currentHero) {
        heroImage.innerHTML = `
            <img src="${currentHero.image}" alt="${currentHero.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk88L3RleHQ+Cjwvc3ZnPgo='">
        `;
        revealButton.classList.add('show');
        heroSearch.value = '';
        searchResults.style.display = 'none';
    }
}

// Share result function
function shareResult() {
    const guesses = guessedHeroes.length;
    const result = gameWon ? 'Won' : 'Lost';
    const shareText = `OWDLE ${result} in ${guesses}/6\n\n${currentHero.name}\nRole: ${currentHero.role}\nGender: ${currentHero.gender}\nOrigin: ${currentHero.origin}\nYear: ${currentHero.releaseYear}\n\nPlay at: https://yeetydefeaty.github.io/owdle`;
    
    if (navigator.share) {
        navigator.share({
            title: 'OWDLE Result',
            text: shareText,
            url: 'https://yeetydefeaty.github.io/owdle'
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Result copied to clipboard!');
        }).catch(() => {
            // Final fallback: show text
            prompt('Copy this result:', shareText);
        });
    }
}

// Show final results
function showFinalResults() {
    resultsSection.style.display = 'block';
    resultMessage.textContent = gameWon ? 'Congratulations! You guessed the hero!' : 'Game Over! The hero was:';
    heroDetails.innerHTML = `
        <h2>${currentHero.name}</h2>
        <p>${currentHero.description}</p>
        <p>Role: ${currentHero.role}</p>
        <p>Gender: ${currentHero.gender}</p>
        <p>Origin: ${currentHero.origin}</p>
        <p>Release Year: ${currentHero.releaseYear}</p>
    `;
    heroImage.innerHTML = `
        <img src="${currentHero.image}" alt="${currentHero.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk88L3RleHQ+Cjwvc3ZnPgo='">
    `;
}

// Main game loop
function main() {
    initGame();
}

// Start the game
document.addEventListener('DOMContentLoaded', main);