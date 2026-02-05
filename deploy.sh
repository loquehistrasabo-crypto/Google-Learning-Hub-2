#!/bin/bash

# Deployment script for Netlify
echo "🚀 Deploying Unblocked Games Crack Hub to Netlify..."

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Check if user is logged in
if ! netlify status &> /dev/null; then
    echo "🔐 Please login to Netlify..."
    netlify login
fi

# Check if site is linked
if ! netlify status | grep -q "Site id:"; then
    echo "🔗 Site not linked. Initializing..."
    netlify init
fi

# Deploy to production
echo "📦 Deploying to production..."
netlify deploy --prod

echo "✅ Deployment complete!"
echo "🌐 Your site is now live!"

# Show site URL
netlify status | grep "Website URL"