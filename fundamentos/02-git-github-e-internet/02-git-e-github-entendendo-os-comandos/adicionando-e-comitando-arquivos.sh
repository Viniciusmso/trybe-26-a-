!#bin/bash
mkdir iniciando-git && cd iniciando-git/
git init 
touch meu_arquivo.txt
git status
git add. 
git commit -m "Criar o arquivo meu_arquivo.txt"
git remote add origin git@github.com:user-github/name-name.git
git remote -v
git push orgin master