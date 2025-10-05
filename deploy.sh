#!/bin/bash

# 🚀 Developer Utils Hub - Deployment Script

echo "🚀 Starting deployment process..."

# Check if build directory exists
if [ ! -d "build" ]; then
    echo "📦 Creating production build..."
    npm run build
else
    echo "✅ Build directory already exists"
fi

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your app should be available at: https://[your-username].github.io/[repository-name]"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings → Pages"
echo "3. Check that GitHub Actions is selected as source"
echo "4. Your site will be live at the URL shown above"
