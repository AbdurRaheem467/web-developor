@echo off
title Abdur Raheem - Push Portfolio to GitHub (web-developor)
color 0b

set "PATH=C:\Program Files\GitHub CLI;%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"

cd /d "c:\Users\Nova\Desktop\AntiGravity projects\Personal Website"

echo ======================================================================
echo       ABDUR RAHEEM PERSONAL PORTFOLIO - GITHUB UPLOADER
echo       Repository: AbdurRaheem467/web-developor
echo ======================================================================
echo.

git remote set-url origin https://github.com/AbdurRaheem467/web-developor.git
git add .
git commit -m "Update Abdur Raheem Personal Web Developer Portfolio" 2>nul
git branch -M main

echo.
echo Login aur Upload ka tareeqa select karein:
echo [1] Automatic Browser Login (GitHub Web)
echo [2] Enter GitHub Personal Access Token (Classic)
echo.
set /p CHOICE="Enter 1 or 2: "

if "%CHOICE%"=="2" goto USE_TOKEN

:USE_WEB
echo.
echo Browser login shuru ho raha hai...
gh auth login -h github.com -p https --web -c -s repo,workflow
gh auth setup-git
git push -u origin main --force
goto CHECK_RESULT

:USE_TOKEN
echo.
echo GitHub par token banane ke liye yeh link kholein:
echo https://github.com/settings/tokens/new
echo (repo checkbox ko tick zaroor karein)
echo.
set /p MY_TOKEN="Apna GitHub Token paste karein: "
echo.
echo Uploading to GitHub repo web-developor...
git push "https://AbdurRaheem467:%MY_TOKEN%@github.com/AbdurRaheem467/web-developor.git" main --force
goto CHECK_RESULT

:CHECK_RESULT
if %errorlevel% equ 0 (
    echo.
    echo ======================================================================
    echo MUBARAK! Tamam files web-developor repo par upload ho gayi hain!
    echo.
    echo Ab aap Vercel par ja kar "web-developor" repo ko Deploy karein,
    echo koi error nahi aayega aur website 1 minute mein live ho jayegi!
    echo.
    echo GitHub Repo Link:
    echo https://github.com/AbdurRaheem467/web-developor
    echo ======================================================================
) else (
    echo.
    echo ======================================================================
    echo Error: Upload nahi ho saka. Barah-e-karam apna Token check karein.
    echo ======================================================================
)

echo.
pause
