# git-config

git config --global user.name "varut1976"
git config --global user.email "varut1976@gmail.com"

git config --global core.autocrlf true
git config --global core.quotepath off
git config --global core.safecrlf warn
git config --global init.defaultBranch main
git init # инициализация репозитория
git add .# добавить все файлы в track
git commit -m "описание" # сделать коммит
git status #показывает текущий статус
git diff # показывает текущие изменения
git diff --color-words # более развернуто показывает изменения
git checkout .# вернуть все к последему коммиту
git push
