git init
git branch -M master
git remote add origin https://github.com/apinboy/webpage.git
git remote -v
git add .
git commit -m "PWA v1"

如果修改網頁，以後只要：
cd C:\app\hello2
git add .
git commit -m "更新內容"
git push
git add .
git commit -m "fix pwa icons"
git push