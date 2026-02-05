@echo off
echo 🚀 Deploying Unblocked Games Crack Hub to Netlify...

REM Check if netlify-cli is installed
netlify --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Netlify CLI not found. Installing...
    npm install -g netlify-cli
)

REM Check if user is logged in
netlify status >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔐 Please login to Netlify...
    netlify login
)

REM Deploy to production
echo 📦 Deploying to production...
netlify deploy --prod

echo ✅ Deployment complete!
echo 🌐 Your site is now live!

REM Show site URL
netlify status | findstr "Website URL"

pause