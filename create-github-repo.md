# Quick GitHub Pages Setup

## Method 1: Manual Upload (Recommended - No Git Required)

### 1. Create Repository
- Go to [GitHub.com](https://github.com)
- Click "+" → "New repository"
- Name: `unblocked-games-hub`
- Make it **Public**
- Click "Create repository"

### 2. Upload Files
- Click "uploading an existing file"
- Select ALL files from this folder and drag them in
- Commit changes

### 3. Enable Pages
- Go to Settings → Pages
- Source: "Deploy from a branch"
- Branch: main, Folder: / (root)
- Save

### 4. Your Site
- Will be live at: `https://yourusername.github.io/unblocked-games-hub`
- Takes 5-10 minutes for first deployment

## Method 2: Using GitHub Desktop (If you prefer GUI)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Create new repository in GitHub Desktop
3. Copy all files to the repository folder
4. Commit and publish to GitHub
5. Enable Pages in repository settings

## Method 3: Command Line (If Git is installed)

```bash
# Initialize repository
git init
git add .
git commit -m "Deploy unblocked games hub"

# Connect to GitHub (replace with your details)
git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
git branch -M main
git push -u origin main
```

Then enable Pages in repository settings.

---

**Your professional games hub will be live and accessible worldwide for free!**