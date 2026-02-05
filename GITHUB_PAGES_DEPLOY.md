# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `unblocked-games-hub` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Files
**Option A: Web Interface (Easiest)**
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files from this folder
3. Scroll down and click "Commit changes"

**Option B: If you have Git installed**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Branch: **main**
6. Folder: **/ (root)**
7. Click "Save"

### Step 4: Access Your Site
- Your site will be live at: `https://yourusername.github.io/repository-name`
- It may take 5-10 minutes for the first deployment
- GitHub Actions will automatically deploy future updates

## Features Included

✅ **Professional UI** - Clean light theme suitable for work environments
✅ **100+ Games** - Extensive game collection
✅ **Google Docs Disguise** - Stealth browsing capability
✅ **Responsive Design** - Works on all devices
✅ **Auto-Deploy** - GitHub Actions handles deployments
✅ **Free Hosting** - No cost with GitHub Pages
✅ **Custom Domain Support** - Add your own domain if desired

## Troubleshooting

**Site not loading?**
- Wait 10 minutes after enabling Pages
- Check that repository is public
- Verify all files were uploaded correctly

**Games not working?**
- Ensure all files in the `games/` folder were uploaded
- Check browser console for any errors

**Want a custom domain?**
- Add a `CNAME` file with your domain name
- Configure DNS settings with your domain provider

## Updates

To update your site:
1. Make changes to files locally
2. Upload changed files to GitHub (or use Git push)
3. GitHub Actions will automatically deploy updates

Your site will be live and accessible worldwide for free!