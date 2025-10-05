#!/bin/bash

# Release creation script for Susith Alwis Portfolio
# Usage: ./scripts/create-release.sh [version]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}INFO: $1${NC}"
}

print_success() {
    echo -e "${GREEN}SUCCESS: $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}WARNING: $1${NC}"
}

print_error() {
    echo -e "${RED}ERROR: $1${NC}"
}

# Check if version is provided
if [ -z "$1" ]; then
    print_error "Please provide a version number"
    echo "Usage: $0 [version]"
    echo "Examples:"
    echo "  $0 1.0.0        # Stable release"
    echo "  $0 1.1.0-beta   # Beta release"
    echo "  $0 2.0.0-rc.1   # Release candidate"
    exit 1
fi

VERSION=$1

# Validate version format
if [[ ! $VERSION =~ ^v?[0-9]+\.[0-9]+\.[0-9]+(-[a-zA-Z0-9]+(\.[0-9]+)?)?$ ]]; then
    print_error "Invalid version format. Use semantic versioning (e.g., 1.0.0, 1.1.0-beta, 2.0.0-rc.1)"
    exit 1
fi

# Add 'v' prefix if not present
if [[ ! $VERSION =~ ^v ]]; then
    VERSION="v$VERSION"
fi

print_info "Creating release $VERSION"

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    print_warning "You are not on the main branch (current: $CURRENT_BRANCH)"
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Aborted"
        exit 1
    fi
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    print_error "You have uncommitted changes. Please commit or stash them first."
    git status --short
    exit 1
fi

# Pull latest changes
print_info "Pulling latest changes..."
git pull origin main

# Check if tag already exists
if git tag | grep -q "^$VERSION$"; then
    print_error "Tag $VERSION already exists"
    exit 1
fi

# Create and push tag
print_info "Creating tag $VERSION..."
git tag -a "$VERSION" -m "Release $VERSION"

print_info "Pushing tag to origin..."
git push origin "$VERSION"

print_success "Tag $VERSION created and pushed successfully!"

echo
print_info "What happens next:"
echo "1. GitHub will automatically create a release"
echo "2. Changelog will be generated from commits"
echo "3. Production deployment will be triggered automatically"
echo "4. Your site will be deployed to production"

echo
print_warning "Monitor the following:"
echo "- GitHub Actions: https://github.com/SusithD/Susith-Alwis-Profolio-2025/actions"
echo "- Deployments: https://github.com/SusithD/Susith-Alwis-Profolio-2025/deployments"
echo "- Releases: https://github.com/SusithD/Susith-Alwis-Profolio-2025/releases"

echo
print_success "Release process initiated!"