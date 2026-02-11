// Game Data with Enhanced Metadata
const games = [
    { name: "1v1.LOL", path: "games/1v1lol.html", category: "Action", featured: true, description: "Fast-paced battle royale shooter", rating: 4.8 },
    { name: "8 Ball Pool", path: "games/8ball.html", category: "Sports", featured: false, description: "Classic billiards game", rating: 4.5 },
    { name: "A Small World Cup", path: "games/asmallworldcup/index.html", category: "Sports", featured: true, description: "Ragdoll physics soccer", rating: 4.7 },
    { name: "Balatro", path: "games/balatro/index.html", category: "Card", featured: false, description: "Poker-inspired roguelike" },
    { name: "Basket Stars", path: "games/basket-stars/index.html", category: "Sports", featured: false, description: "Basketball shooting game" },
    { name: "Bike Obby", path: "games/bikeobby/index.html", category: "Racing", featured: false, description: "Motorcycle obstacle course" },
    { name: "BitLife", path: "games/bitlife/index.html", category: "Simulation", featured: true, description: "Life simulation game" },
    { name: "Binding of Isaac", path: "games/binding-of-issac.html", category: "RPG", featured: false, description: "Roguelike dungeon crawler" },
    { name: "Block Blast", path: "games/block-blast.html", category: "Puzzle", featured: false, description: "Tetris-style puzzle game" },
    { name: "Bloons TD", path: "games/btd/index.html", category: "Strategy", featured: true, description: "Tower defense classic" },
    { name: "Buckshot Roulette", path: "games/buckshot-roulette/index.html", category: "Horror", featured: false, description: "Intense survival horror" },
    { name: "Burrito Bison", path: "games/burritobison/index.html", category: "Action", featured: false, description: "Launch and smash adventure" },
    { name: "CC3D", path: "games/cc3d.html", category: "Sandbox", featured: false, description: "3D creative building" },
    { name: "CGFC25", path: "games/cgfc25.html", category: "Sports", featured: false, description: "Football championship" },
    { name: "Clash Royale", path: "games/clash-royal.html", category: "Strategy", featured: true, description: "Real-time strategy battles" },
    { name: "Cluster Rush", path: "games/cluster-rush/index.html", category: "Parkour", featured: false, description: "Truck jumping madness" },
    { name: "Code Editor", path: "games/code-editor.html", category: "Tools", featured: false, description: "Web-based code editor" },
    { name: "Cookie Clicker", path: "games/cookie-clicker.html", category: "Idle", featured: false, description: "Addictive clicking game" },
    { name: "Core Ball", path: "games/coreball.html", category: "Arcade", featured: false, description: "Precision timing challenge" },
    { name: "Crossy Road", path: "games/crossy-road.html", category: "Arcade", featured: false, description: "Endless road crossing" },
    { name: "Cuphead", path: "games/cuphead/index.html", category: "Action", featured: true, description: "Hand-drawn boss battles" },
    { name: "Deadish", path: "games/deadish/index.html", category: "Horror", featured: false, description: "Zombie survival horror" },
    { name: "Deadly Descent", path: "games/deadlydescent/index.html", category: "Racing", featured: false, description: "Extreme skiing adventure" },
    { name: "Death Run 3D", path: "games/death-run-3d/index.html", category: "Parkour", featured: false, description: "Deadly obstacle course" },
    { name: "Doblox", path: "games/doblox.html", category: "Sandbox", featured: false, description: "Block building world" },
    { name: "DOOM", path: "games/doom/index.html", category: "Shooter", featured: true, description: "Classic FPS action" },
    { name: "Drift Boss", path: "games/drift-boss/index.html", category: "Racing", featured: false, description: "Endless drifting challenge" },
    { name: "Drive Mad", path: "games/drive-mad/index.html", category: "Racing", featured: false, description: "Physics-based driving" },
    { name: "Eaglercraft", path: "games/eag112.html", category: "Sandbox", featured: false, description: "Minecraft in browser" },
    { name: "Eggy Car", path: "games/eggy-car/index.html", category: "Racing", featured: false, description: "Egg transport challenge" },
    { name: "Emulator JS", path: "games/emulatorjs.html", category: "Emulator", featured: false, description: "Retro game emulator" },
    { name: "Escape Road", path: "games/escaperoad/index.html", category: "Racing", featured: false, description: "Police chase escape" },
    { name: "FNAF", path: "games/FNAF/index.html", category: "Horror", featured: true, description: "Five Nights at Freddy's" },
    { name: "Football Bros", path: "games/football-bros/index.html", category: "Sports", featured: false, description: "American football action" },
    { name: "Free Rider", path: "games/freerider/index.html", category: "Racing", featured: false, description: "BMX bike stunts" },
    { name: "Geometry Dash", path: "games/geometrydash/index.html", category: "Rhythm", featured: true, description: "Rhythm-based platformer" },
    { name: "Getaway Shootout", path: "games/getaway-shootout/index.html", category: "Action", featured: false, description: "Chaotic multiplayer battles" },
    { name: "Gladihoppers", path: "games/gladdihoppers.html", category: "Fighting", featured: false, description: "Gladiator combat arena" },
    { name: "Google Baseball", path: "games/googlebaseball/index.html", category: "Sports", featured: false, description: "Simple baseball game" },
    { name: "Gorilla Tag", path: "games/gorilla-tag/index.html", category: "Multiplayer", featured: false, description: "VR-style tag game" },
    { name: "Granny", path: "games/granny/index.html", category: "Horror", featured: false, description: "Escape the house horror" },
    { name: "Gun Spin", path: "games/gun-spin/index.html", category: "Action", featured: false, description: "Physics gun spinning" },
    { name: "Happy Wheels", path: "games/happyweels/index.html", category: "Ragdoll", featured: true, description: "Ragdoll physics mayhem" },
    { name: "Harvest Simulator", path: "games/harvestsimulator/index.html", category: "Simulation", featured: false, description: "Farming simulation" },
    { name: "Hill Climb Racing", path: "games/hcrl.html", category: "Racing", featured: false, description: "Physics-based hill climbing" },
    { name: "Hollow Knight", path: "games/hollow-knight/index.html", category: "Adventure", featured: false, description: "Metroidvania masterpiece" },
    { name: "Hotline Miami", path: "games/hotline-miami.html", category: "Action", featured: false, description: "Top-down action thriller" },
    { name: "Hyper Sandbox", path: "games/hyper-sandbox.html", category: "Sandbox", featured: false, description: "Creative sandbox world" },
    { name: "Idle Breakout", path: "games/idle-breakout/index.html", category: "Idle", featured: false, description: "Idle brick breaker" },
    { name: "Level Devil", path: "games/level-devil/index.html", category: "Platformer", featured: false, description: "Devilishly hard platformer" },
    { name: "Little Alchemy 2", path: "games/littlealchemy2/index.html", category: "Puzzle", featured: false, description: "Element combining puzzle" },
    { name: "Mario Bros", path: "games/mario-bros/index.html", category: "Platformer", featured: true, description: "Classic Nintendo platformer" },
    { name: "Minecraft", path: "games/minecraft.html", category: "Sandbox", featured: true, description: "Block building adventure" },
    { name: "Monkey Mart", path: "games/monkey-mart/index.html", category: "Management", featured: false, description: "Store management sim" },
    { name: "Moto X3M", path: "games/motox3m-all/index.html", category: "Racing", featured: false, description: "Motorcycle stunt racing" },
    { name: "Mr Bullet", path: "games/mrbullet/index.html", category: "Puzzle", featured: false, description: "Physics shooting puzzles" },
    { name: "Music Player", path: "games/musicplayer/index.html", category: "Music", featured: false, description: "Web music player" },
    { name: "Music Player 2", path: "games/musicplayer2/index.html", category: "Music", featured: false, description: "Advanced music player" },
    { name: "Nextbots", path: "games/nextbots.html", category: "Horror", featured: false, description: "AI chase horror game" },
    { name: "Nazi Zombies Portable", path: "games/nzp.html", category: "Shooter", featured: false, description: "Zombie survival shooter" },
    { name: "Only Up Obby", path: "games/onlyupobby/index.html", category: "Parkour", featured: false, description: "Vertical climbing challenge" },
    { name: "Plants vs Brainrots", path: "games/plants-vs-brainrots/index.html", category: "Strategy", featured: false, description: "Tower defense parody" },
    { name: "Plants vs Zombies", path: "games/pvz.html", category: "Strategy", featured: true, description: "Classic tower defense" },
    { name: "Plants vs Zombies 2", path: "games/pvz2.html", category: "Strategy", featured: false, description: "Tower defense sequel" },
    { name: "Police Pursuit", path: "games/police-pursuit/index.html", category: "Racing", featured: false, description: "High-speed police chase" },
    { name: "Polytrack", path: "games/polytrack/index.html", category: "Racing", featured: false, description: "Low-poly racing game" },
    { name: "Ragdoll Archers", path: "games/ragdoll-archers/index.html", category: "Action", featured: false, description: "Physics archery battles" },
    { name: "Ragdoll Hit", path: "games/ragdoll-hit/index.html", category: "Ragdoll", featured: false, description: "Ragdoll physics combat" },
    { name: "Retro Bowl", path: "games/retrobowl/index.html", category: "Sports", featured: true, description: "Retro American football" },
    { name: "Retro Bowl College", path: "games/retrobowlcollege/index.html", category: "Sports", featured: false, description: "College football edition" },
    { name: "Retro Highway", path: "games/retro-highway/index.html", category: "Racing", featured: false, description: "Retro motorcycle racing" },
    { name: "Riddle School", path: "games/riddle-school/index.html", category: "Adventure", featured: false, description: "Point-and-click adventure" },
    { name: "Riot", path: "games/riot/index.html", category: "Action", featured: false, description: "Intense action combat" },
    { name: "Run 3", path: "games/run/index.html", category: "Parkour", featured: true, description: "Endless space running" },
    { name: "Ruffle", path: "games/ruffle.html", category: "Emulator", featured: false, description: "Flash game emulator" },
    { name: "Sandbox City", path: "games/sanbox-city/index.html", category: "Sandbox", featured: false, description: "City building sandbox" },
    { name: "Sandboxels", path: "games/sandboxels/index.html", category: "Sandbox", featured: false, description: "Pixel physics sandbox" },
    { name: "Sandtris", path: "games/sandtris/index.html", category: "Puzzle", featured: false, description: "Sand physics Tetris" },
    { name: "Sandtrix", path: "games/sandtrix/index.html", category: "Puzzle", featured: false, description: "Sand particle puzzle" },
    { name: "Slope", path: "games/slope/index.html", category: "Arcade", featured: true, description: "Endless slope racing" },
    { name: "Smash Karts", path: "games/smash-karts.html", category: "Racing", featured: false, description: "Kart racing battles" },
    { name: "Snow Rider", path: "games/snow-rider/index.html", category: "Racing", featured: false, description: "Snowboard racing game" },
    { name: "Snow Battle IO", path: "games/snowbattleio/index.html", category: "Multiplayer", featured: false, description: "Snowball fight arena" },
    { name: "Soccer Bros", path: "games/soccer-bros.html", category: "Sports", featured: false, description: "Soccer physics game" },
    { name: "Sonic", path: "games/sonic/index.html", category: "Platformer", featured: false, description: "Classic Sonic adventure" },
    { name: "Soundboard", path: "games/soundboard.html", category: "Music", featured: false, description: "Interactive soundboard" },
    { name: "Space Wave", path: "games/space-wave/index.html", category: "Arcade", featured: false, description: "Space wave surfing" },
    { name: "Steal a Brainrot", path: "games/steal-a-brainrot/index.html", category: "Action", featured: false, description: "Stealth action game" },
    { name: "Stickman Hook", path: "games/stickman-hook/index.html", category: "Parkour", featured: false, description: "Swinging stickman game" },
    { name: "Stunt Bike Extreme", path: "games/stunt-bike-extreme/index.html", category: "Racing", featured: false, description: "Extreme bike stunts" },
    { name: "Subway Surfers", path: "games/subway-surfers/index.html", category: "Parkour", featured: true, description: "Endless subway running" },
    { name: "Super Mario 64", path: "games/super-mario-64/index.html", category: "Platformer", featured: false, description: "3D Mario adventure" },
    { name: "Survival Race", path: "games/survival-race.html", category: "Racing", featured: false, description: "Survival racing challenge" },
    { name: "Tag", path: "games/tag/index.html", category: "Multiplayer", featured: false, description: "Classic tag game" },
    { name: "Tanuki Sunset", path: "games/tanuki-sunset/index.html", category: "Racing", featured: false, description: "Retro skateboard racing" },
    { name: "Terraria", path: "games/terraria/index.html", category: "Sandbox", featured: true, description: "2D sandbox adventure" },
    { name: "Tiny Fishing", path: "games/tiny-fishing/index.html", category: "Idle", featured: false, description: "Relaxing fishing game" },
    { name: "TNMN", path: "games/tnmn.html", category: "Horror", featured: false, description: "Psychological horror game" },
    { name: "Tomb of the Mask", path: "games/tombofthemask/index.html", category: "Arcade", featured: false, description: "Retro arcade adventure" },
    { name: "Traffic Jam", path: "games/trafficjam.html", category: "Puzzle", featured: false, description: "Traffic flow puzzle" },
    { name: "Tunnel Rush", path: "games/tunnel-rush/index.html", category: "Arcade", featured: false, description: "High-speed tunnel racing" },
    { name: "Ultrakill", path: "games/ultrakill/index.html", category: "Shooter", featured: false, description: "Fast-paced FPS action" },
    { name: "Undertale", path: "games/undertale.html", category: "RPG", featured: false, description: "Indie RPG masterpiece" },
    { name: "Unfair Mario", path: "games/unfairmario.html", category: "Platformer", featured: false, description: "Brutally difficult Mario" },
    { name: "Vex", path: "games/vex/index.html", category: "Parkour", featured: false, description: "Stickman parkour series" },
    { name: "Vice City", path: "games/vicecity/index.html", category: "Action", featured: false, description: "Open-world crime game" },
    { name: "Vox", path: "games/vox.html", category: "Music", featured: false, description: "Voice synthesizer tool" },
    { name: "We Become What We Behold", path: "games/webecomewhatwebehold/index.html", category: "Story", featured: false, description: "Interactive social commentary" },
    { name: "WHG", path: "games/whg.html", category: "Action", featured: false, description: "Web-based action game" },
    { name: "WorldBox", path: "games/worldbox/index.html", category: "Simulation", featured: false, description: "God simulation sandbox" },
    { name: "Yohoho", path: "games/yohoho/index.html", category: "Multiplayer", featured: false, description: "Pirate battle royale" }
];

// State Management
let currentView = 'grid';
let filteredGames = [...games];
let isGamePlayerOpen = false;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed') || '[]');
let darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');

// Initialize Application
function init() {
    renderFeaturedGamesGrid();
    renderGamesList();
    updateGameCount();
    applyDarkMode();
    setupKeyboardShortcuts();
}

// Render Featured Games in Sidebar
function renderFeaturedGamesGrid() {
    const featuredGames = games.filter(game => game.featured).slice(0, 6);
    const featuredGrid = document.getElementById('featuredGamesGrid');
    
    if (!featuredGrid) return;
    
    featuredGrid.innerHTML = featuredGames.map(game => `
        <div class="featured-game-card" onclick="loadGame('${game.path}', '${game.name}')">
            <div class="featured-game-name">${game.name}</div>
            <div class="featured-game-category">${game.category}</div>
        </div>
    `).join('');
}

// Render Games List in Sidebar
function renderGamesList() {
    const gamesList = document.getElementById('gamesList');
    
    if (!gamesList) return;
    
    gamesList.innerHTML = filteredGames.map(game => `
        <div class="game-item" style="position: relative;">
            <div onclick="loadGame('${game.path}', '${game.name}')" style="flex: 1; cursor: pointer;">
                <div class="game-item-name">${game.name}</div>
                <div class="game-item-category">
                    ${game.category}
                    ${game.rating ? `<span style="color: #fbbf24; margin-left: 8px;">★ ${game.rating}</span>` : ''}
                </div>
            </div>
            <button onclick="toggleFavorite('${game.name}', '${game.path}')" 
                    style="background: none; border: none; cursor: pointer; font-size: 20px; padding: 8px;">
                ${isFavorite(game.name) ? '❤️' : '🤍'}
            </button>
        </div>
    `).join('');
}

function updateGameCount() {
    const count = filteredGames.length;
    const gameCountElement = document.getElementById('gameCount');
    if (gameCountElement) {
        gameCountElement.textContent = `${count} game${count !== 1 ? 's' : ''}`;
    }
}

// Game Management
function openGames() {
    const overlay = document.getElementById('gameOverlay');
    overlay.classList.add('active');
}

function closeGames() {
    const overlay = document.getElementById('gameOverlay');
    overlay.classList.remove('active');
    // Reset game display
    document.getElementById('gameIframe').style.display = 'none';
    document.getElementById('gamePlaceholder').style.display = 'flex';
    document.getElementById('gameIframe').src = '';
}

function closeGameFrame() {
    closeGames();
}

function loadGame(gamePath, gameName) {
    const gameIframe = document.getElementById('gameIframe');
    const gamePlaceholder = document.getElementById('gamePlaceholder');
    const currentGameTitle = document.getElementById('currentGameTitle');
    
    // Update title
    currentGameTitle.textContent = gameName;
    
    // Show iframe, hide placeholder with animation
    gamePlaceholder.style.opacity = '0';
    setTimeout(() => {
        gamePlaceholder.style.display = 'none';
        gameIframe.style.display = 'block';
        gameIframe.src = gamePath;
        setTimeout(() => gameIframe.style.opacity = '1', 50);
    }, 300);
    
    // Add to recently played
    addToRecentlyPlayed(gameName, gamePath);
}

// Favorites System
function toggleFavorite(gameName, gamePath) {
    const index = favorites.findIndex(f => f.name === gameName);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push({ name: gameName, path: gamePath });
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderGamesList();
}

function isFavorite(gameName) {
    return favorites.some(f => f.name === gameName);
}

// Recently Played
function addToRecentlyPlayed(gameName, gamePath) {
    recentlyPlayed = recentlyPlayed.filter(g => g.name !== gameName);
    recentlyPlayed.unshift({ name: gameName, path: gamePath, timestamp: Date.now() });
    recentlyPlayed = recentlyPlayed.slice(0, 10);
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
}

// Dark Mode
function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    applyDarkMode();
}

function applyDarkMode() {
    if (darkMode) {
        document.documentElement.style.setProperty('--color-bg-primary', '#0f0f0f');
        document.documentElement.style.setProperty('--color-bg-secondary', '#1a1a1a');
        document.documentElement.style.setProperty('--color-text-primary', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--color-bg-primary', '#0f0f0f');
        document.documentElement.style.setProperty('--color-bg-secondary', '#1a1a1a');
        document.documentElement.style.setProperty('--color-text-primary', '#ffffff');
    }
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Escape to close games
        if (e.key === 'Escape' && document.getElementById('gameOverlay').classList.contains('active')) {
            closeGames();
        }
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('sidebarSearch');
            if (searchInput) searchInput.focus();
        }
    });
}

function toggleFullscreen() {
    const gameDisplay = document.querySelector('.game-display-content');
    
    if (!document.fullscreenElement) {
        gameDisplay.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Search Handler
function searchGames() {
    const query = document.getElementById('sidebarSearch').value.toLowerCase().trim();
    
    if (query === '') {
        filteredGames = [...games];
    } else {
        filteredGames = games.filter(game => 
            game.name.toLowerCase().includes(query) ||
            game.category.toLowerCase().includes(query) ||
            game.description.toLowerCase().includes(query)
        );
    }
    
    renderGamesList();
    updateGameCount();
}

// Show Favorites
function showFavorites() {
    if (favorites.length === 0) {
        alert('No favorites yet! Click the heart icon on any game to add it to favorites.');
        return;
    }
    
    const favoriteGames = games.filter(game => isFavorite(game.name));
    filteredGames = favoriteGames;
    renderGamesList();
    updateGameCount();
    
    // Clear search
    const searchInput = document.getElementById('sidebarSearch');
    if (searchInput) searchInput.value = '';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Chat functionality - Real Multiplayer using Firebase
let isChatOpen = false;
let currentUser = {
    username: 'Anonymous',
    avatar: '🎯',
    id: Math.random().toString(36).substr(2, 9)
};

// Firebase configuration (using a public demo database)
const firebaseConfig = {
    databaseURL: "https://games-chat-hub-default-rtdb.firebaseio.com/"
};

let database;
let messagesRef;

function initializeFirebase() {
    // Simple Firebase REST API implementation
    database = firebaseConfig.databaseURL;
    messagesRef = database + '/messages.json';
}

function toggleChat() {
    const chatPanel = document.getElementById('chatPanel');
    isChatOpen = !isChatOpen;
    
    if (isChatOpen) {
        chatPanel.classList.add('active');
        initializeFirebase();
        loadChatMessages();
        startChatPolling();
    } else {
        chatPanel.classList.remove('active');
        stopChatPolling();
    }
}

let chatPollingInterval;

function startChatPolling() {
    // Poll for new messages every 3 seconds
    chatPollingInterval = setInterval(loadChatMessages, 3000);
}

function stopChatPolling() {
    if (chatPollingInterval) {
        clearInterval(chatPollingInterval);
    }
}

function loadChatMessages() {
    fetch(messagesRef)
        .then(response => response.json())
        .then(data => {
            if (data) {
                const messages = Object.values(data).sort((a, b) => a.timestamp - b.timestamp);
                const chatContainer = document.getElementById('chatMessages');
                
                // Clear existing messages (except initial ones)
                const existingMessages = chatContainer.querySelectorAll('.chat-message:not(.initial-message)');
                existingMessages.forEach(msg => msg.remove());
                
                // Display last 20 messages
                const recentMessages = messages.slice(-20);
                recentMessages.forEach(message => {
                    displayMessage(message);
                });
            }
        })
        .catch(error => {
            console.log('Using offline mode');
            loadLocalMessages();
        });
}

function loadLocalMessages() {
    const localMessages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    const chatContainer = document.getElementById('chatMessages');
    
    // Clear existing messages
    const existingMessages = chatContainer.querySelectorAll('.chat-message:not(.initial-message)');
    existingMessages.forEach(msg => msg.remove());
    
    localMessages.forEach(message => {
        displayMessage(message);
    });
}

function saveMessage(message) {
    // Save to Firebase
    const messageId = 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    const messageUrl = database + '/messages/' + messageId + '.json';
    
    fetch(messageUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .catch(error => {
        // Fallback to local storage
        saveMessageLocally(message);
    });
}

function saveMessageLocally(message) {
    const localMessages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    localMessages.push(message);
    
    // Keep only last 20 messages locally
    if (localMessages.length > 20) {
        localMessages.splice(0, localMessages.length - 20);
    }
    
    localStorage.setItem('chatMessages', JSON.stringify(localMessages));
}

function changeUsername() {
    const newUsername = prompt('Enter your username (max 20 characters):');
    if (newUsername && newUsername.trim().length > 0 && newUsername.length <= 20) {
        const oldUsername = currentUser.username;
        currentUser.username = newUsername.trim();
        document.getElementById('currentUsername').textContent = currentUser.username;
        
        // Send system message about name change
        if (oldUsername !== 'Anonymous') {
            sendSystemMessage(`${oldUsername} changed name to ${currentUser.username}`);
        } else {
            sendSystemMessage(`${currentUser.username} joined the chat`);
        }
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const messageText = chatInput.value.trim();
    
    if (messageText && messageText.length <= 200) {
        const message = {
            username: currentUser.username,
            avatar: currentUser.avatar,
            text: messageText,
            timestamp: Date.now(),
            userId: currentUser.id,
            isSystem: false
        };
        
        // Save message
        saveMessage(message);
        
        chatInput.value = '';
        
        // Reload messages to show the new one
        setTimeout(loadChatMessages, 500);
    }
}

function sendSystemMessage(text) {
    const message = {
        username: 'System',
        avatar: 'ℹ️',
        text: text,
        timestamp: Date.now(),
        isSystem: true
    };
    
    saveMessage(message);
    setTimeout(loadChatMessages, 500);
}

function displayMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Check if message already exists
    const existingMessage = chatMessages.querySelector(`[data-timestamp="${message.timestamp}"]`);
    if (existingMessage) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.setAttribute('data-timestamp', message.timestamp);
    
    const messageTime = new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    const isOwnMessage = message.userId === currentUser.id;
    const messageClass = message.isSystem ? 'system-message' : (isOwnMessage ? 'own-message' : 'user-message');
    
    messageDiv.className = `chat-message ${messageClass}`;
    
    if (message.isSystem) {
        messageDiv.innerHTML = `
            <div class="message-avatar">${message.avatar}</div>
            <div class="message-content">
                <p style="color: var(--color-text-tertiary); font-style: italic;">${escapeHtml(message.text)}</p>
                <span class="message-time">${messageTime}</span>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">${message.avatar}</div>
            <div class="message-content">
                <div class="message-header">
                    <span class="username">${escapeHtml(message.username)}</span>
                    ${isOwnMessage ? '<span class="user-badge own">You</span>' : ''}
                </div>
                <p>${escapeHtml(message.text)}</p>
                <span class="message-time">${messageTime}</span>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize chat when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Update online count periodically
    setInterval(() => {
        const onlineCount = document.getElementById('onlineCount');
        if (onlineCount) {
            const count = Math.floor(Math.random() * 5) + 3; // 3-7 users online
            onlineCount.textContent = `${count} users online`;
        }
    }, 30000);
});

// Export functions for global access
window.openGames = openGames;
window.closeGames = closeGames;
window.loadGame = loadGame;
window.closeGameFrame = closeGameFrame;
window.toggleFullscreen = toggleFullscreen;
window.searchGames = searchGames;
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;
window.changeUsername = changeUsername;
window.toggleFavorite = toggleFavorite;
window.showFavorites = showFavorites;
window.toggleDarkMode = toggleDarkMode;