# Daily Automation Script
# Prerequisites: GitHub CLI (gh) installed and authenticated

$ErrorActionPreference = "Stop"

# 1. New property generation
Write-Host "--- Generating New CSS Template ---"
npx tsx scripts/generate-template.ts

# 2. Get the new property name (last added file)
$newFile = git ls-files --others --exclude-standard src/templates/*.tsx | Select-Object -Last 1
if (-not $newFile) {
    Write-Host "No changes detected. Exiting."
    exit
}

$propName = [System.IO.Path]::GetFileNameWithoutExtension($newFile)
$branchName = "auto/feature-$propName-$(Get-Date -Format 'yyyyMMdd')"

# 3. Git operations
Write-Host "--- Git Operations: $branchName ---"
git checkout -b $branchName
git add .
git commit -m "feat: add daily CSS template for $propName"

# 4. Push and PR
Write-Host "--- Pushing and Creating PR ---"
git push origin $branchName

# PR Creation (Requires gh CLI)
if (Get-Command gh -ErrorAction SilentlyContinue) {
    gh pr create --title "Daily Update: New CSS Template ($propName)" --body "Automated PR to add the $propName CSS template demo."
} else {
    Write-Warning "GitHub CLI (gh) not found. PR not created automatically."
}

Write-Host "--- Automation Completed Successfully ---"
