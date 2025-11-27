# Renaming Default Branch to 'main'

## Quick Summary

Your repository needs to have its default branch renamed from `claude/card-game-rules-pwa-01RvLuoW4AccfrFGZcTWhtxX` to `main`.

Current commit: `51a4dbc6e8c739aefe58fffdd4311e2aa877480a`

## Option 1: Using GitHub Web UI (Easiest)

### GitHub Steps:

1. **Go to your repository**: https://github.com/bradwindy/card-games

2. **Create main branch**:
   - Click the branch dropdown (top left)
   - Type `main` and click "Create branch: main from claude/rename-default-branch-main-01G7QiiHSGZcSpqkwTab734k"

3. **Set as default**:
   - Go to Settings → Branches
   - Under "Default branch", click the swap icon
   - Select `main`
   - Click "Update" and confirm

4. **Clean up old branches**:
   - Go to the branches page: https://github.com/bradwindy/card-games/branches
   - Delete `claude/card-game-rules-pwa-01RvLuoW4AccfrFGZcTWhtxX`
   - Delete `claude/rename-default-branch-main-01G7QiiHSGZcSpqkwTab734k`

### Vercel Steps:

1. **Update production branch**:
   - Go to https://vercel.com/dashboard
   - Select your `card-games` project
   - Go to Settings → Git
   - Change "Production Branch" to `main`
   - Save changes

### Local Repository Update:

```bash
# Fetch the new main branch
git fetch origin main
git checkout main
git branch -u origin/main

# Delete old local branches
git branch -D claude/rename-default-branch-main-01G7QiiHSGZcSpqkwTab734k
git branch -D claude/card-game-rules-pwa-01RvLuoW4AccfrFGZcTWhtxX 2>/dev/null || true
```

## Option 2: Using GitHub API Script (Advanced)

If you prefer automation, use the provided script:

### Prerequisites:

1. Create a GitHub Personal Access Token:
   - Go to https://github.com/settings/tokens/new
   - Give it a name like "Branch Rename Script"
   - Select scope: `repo` (Full control of private repositories)
   - Click "Generate token"
   - Copy the token (you won't see it again!)

### Run the script:

```bash
# Set your GitHub token
export GITHUB_TOKEN='your_token_here'

# Make the script executable
chmod +x rename-branch-to-main.sh

# Run it
./rename-branch-to-main.sh
```

Then follow the Vercel and local repository update steps from Option 1.

## Option 3: Using GitHub CLI

```bash
# Install GitHub CLI if not already installed
# https://cli.github.com/

# Authenticate
gh auth login

# Create main branch
gh api repos/bradwindy/card-games/git/refs \
  -X POST \
  -f ref='refs/heads/main' \
  -f sha='51a4dbc6e8c739aefe58fffdd4311e2aa877480a'

# Set as default
gh repo edit bradwindy/card-games --default-branch main

# Delete old branches
gh api repos/bradwindy/card-games/git/refs/heads/claude/card-game-rules-pwa-01RvLuoW4AccfrFGZcTWhtxX -X DELETE
gh api repos/bradwindy/card-games/git/refs/heads/claude/rename-default-branch-main-01G7QiiHSGZcSpqkwTab734k -X DELETE
```

Then follow the Vercel and local repository update steps from Option 1.

## Verification Checklist

After completing the rename:

- [ ] GitHub shows `main` as the default branch
- [ ] Vercel is configured to deploy from `main`
- [ ] Local repository is on `main` branch
- [ ] Old Claude session branches are deleted
- [ ] Test push to `main` triggers Vercel deployment
- [ ] README deploy button works correctly

## Troubleshooting

**Q: Branch already exists**
- A: That's fine! Just proceed to setting it as default.

**Q: Can't delete old branches**
- A: Make sure they're not set as protected branches in Settings → Branches

**Q: Vercel isn't deploying**
- A: Check that the production branch is set correctly and try triggering a manual deploy

**Q: Lost access to Claude session branches**
- A: No problem! The `main` branch contains all your code at commit `51a4dbc6`

## Need Help?

If you encounter any issues, feel free to ask for assistance!
