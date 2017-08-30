git remote add $1 https://github.com/1dv021/exercise-$1.git &&
git subtree add --prefix=$1 --squash $1 master &&
cd $1 &&
git ignore node,linux >> .gitignore &&
npm install &&
git add . &&
git commit -m 'Installation'
