#!/bin/bash
# Script to rename default branch to 'main' on GitHub
# Requires: GitHub Personal Access Token with 'repo' scope

set -e

# Configuration
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
REPO_OWNER="bradwindy"
REPO_NAME="card-games"
SOURCE_SHA="51a4dbc6e8c739aefe58fffdd4311e2aa877480a"

if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN environment variable is not set"
    echo "Please set it with: export GITHUB_TOKEN='your_token_here'"
    echo "Create a token at: https://github.com/settings/tokens/new"
    echo "Required scope: repo"
    exit 1
fi

echo "Step 1: Creating 'main' branch..."
curl -s -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/git/refs" \
  -d "{\"ref\":\"refs/heads/main\",\"sha\":\"$SOURCE_SHA\"}" | grep -q "ref" && echo "✓ Branch 'main' created" || echo "✗ Failed to create branch (may already exist)"

echo ""
echo "Step 2: Setting 'main' as default branch..."
curl -s -X PATCH \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME" \
  -d '{"default_branch":"main"}' | grep -q "default_branch" && echo "✓ Default branch set to 'main'" || echo "✗ Failed to set default branch"

echo ""
echo "Step 3: Deleting old Claude session branches..."
for branch in "claude/card-game-rules-pwa-01RvLuoW4AccfrFGZcTWhtxX" "claude/rename-default-branch-main-01G7QiiHSGZcSpqkwTab734k"; do
    echo "Deleting $branch..."
    curl -s -X DELETE \
      -H "Authorization: token $GITHUB_TOKEN" \
      -H "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/git/refs/heads/$branch" && echo "✓ Deleted $branch" || echo "✗ Failed to delete $branch"
done

echo ""
echo "✅ GitHub branch rename complete!"
echo ""
echo "Next steps:"
echo "1. Update Vercel to deploy from 'main' branch"
echo "2. Run: git fetch origin main && git checkout main"
echo "3. Run: git branch -D claude/rename-default-branch-main-01G7QiiHSGZcSpqkwTab734k"
