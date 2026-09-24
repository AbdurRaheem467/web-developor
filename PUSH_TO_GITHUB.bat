@echo off
title Abdur Raheem - Push Portfolio to GitHub
color 0b

set "PATH=C:\Program Files\GitHub CLI;%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"

echo ======================================================================
echo       ABDUR RAHEEM PERSONAL PORTFOLIO - GITHUB PUBLISHER
echo ======================================================================
echo.

cd /d "%~dp0"

echo [1/4] Checking Git Status and Staging Files...
git add .
git commit -m "Update Abdur Raheem Personal Web Developer Portfolio" 2>nul
echo Git files staged and committed.
echo.

echo [2/4] Checking GitHub Login...
gh auth status >nul 2>&1
if %errorlevel% neq 0 (
    echo ======================================================================
    echo Please Authorize GitHub in your Browser:
    echo 1. Ek 8-character code clipboard par copy ho chuka hoga.
    echo 2. Browser khul raha hai, wahan Code Paste (Ctrl+V) karein.
    echo 3. 'Continue' aur 'Authorize github' par click karein.
    echo ======================================================================
    echo.
    gh auth login -h github.com -p https --web -c -s repo,workflow
)

echo.
echo [3/4] Configuring Git Credentials...
gh auth setup-git

echo.
echo [4/4] Pushing Portfolio to GitHub Repositories...
echo.
echo [A] Pushing to AbdurRaheem467/Abdurraheem...
git remote set-url origin https://github.com/AbdurRaheem467/Abdurraheem.git
git branch -M main
git push -u origin main --force

echo.
echo [B] Pushing to AbdurRaheem467/personal-website...
git push "https://github.com/AbdurRaheem467/personal-website.git" main --force

echo.
echo [C] Enabling GitHub Pages on personal-website...
gh api repos/AbdurRaheem467/personal-website/pages -X POST -F "build_type=legacy" -F "source[branch]=main" -F "source[path]=/" >nul 2>&1

echo.
echo ======================================================================
echo SUCCESS! Aapka Personal Web Developer Portfolio Live Ho Chuka Hai!
echo.
echo Live Link 1 (Personal Website):
echo https://abdurraheem467.github.io/personal-website/
echo.
echo Live Link 2 (Main Profile):
echo https://abdurraheem467.github.io/Abdurraheem/
echo ======================================================================
echo.
pause
