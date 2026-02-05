# Unblocked Games Crack Hub

A professional unblocked games platform disguised as Google Docs, featuring 100+ games with a modern bento grid layout.

## Features

- 🎮 **100+ Games** - Extensive collection of unblocked games
- 🥸 **Google Docs Disguise** - Realistic Google Docs interface for stealth browsing
- 🎨 **Professional Light Theme** - Clean, business-appropriate design
- 🔍 **Advanced Search** - Search games by name, category, or description
- ⌨️ **Keyboard Shortcuts** - Cmd+K (search), Cmd+G (open), ESC (close)
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ✨ **Enhanced Shadows & Depth** - Modern visual hierarchy
- ⚡ **Fast Loading** - Optimized performance

## Deployment

### Deploy to GitHub Pages (Recommended)

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `unblocked-games-hub`
   - Make it public for GitHub Pages

2. **Upload files to repository**
   - Upload all files from this folder to your new repository
   - Or use Git commands if you have Git installed

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click Save

4. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - GitHub Actions will automatically deploy updates when you push changes

### Alternative: Deploy to Netlify

1. **Drag & Drop (Easiest)**
   - Zip the entire project folder
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the zip file to deploy

2. **Git Integration**
   - Connect your GitHub repository to Netlify
   - Automatic deployments on every push

## Local Development

```bash
# Start local server
python -m http.server 8000

# Or use any static file server
npx serve .
```

Visit `http://localhost:8000` to view the site.

## File Structure

```
├── index.html          # Main HTML file with Google Docs disguise
├── style.css           # Professional CSS with bento grid system
├── script.js           # JavaScript for games and interactions
├── games/              # Games directory (100+ games)
├── netlify.toml        # Netlify configuration
├── _redirects          # Netlify redirects
├── _headers            # Security headers
└── package.json        # Project metadata
```

## Configuration

The site is configured for optimal Netlify deployment with:

- **Security Headers** - XSS protection, content type sniffing prevention
- **Caching** - Optimized cache headers for static assets
- **Redirects** - Proper handling of game routes and security
- **Performance** - Compressed assets and efficient loading

## Keyboard Shortcuts

- `Cmd/Ctrl + K` - Focus search
- `Cmd/Ctrl + G` - Open games interface
- `ESC` - Close current view
- `Enter` - Select game or search

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Feel free to use and modify as needed.