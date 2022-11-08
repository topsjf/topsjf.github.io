### ssh校验
ssh -T git@github.com

### 创建本地项目
mkdir notejf.github.io
cd notejf.github.io

git init
git add -A
### 创建分支（刚创建的空项目，没有分支时）
git branch -M main
### 提交本地代码
git commit -m '提交代码了丫'
### 与远程仓库关联
git remote add origin https://github.com/note-jf/notejf.github.io.git
git remote set-url origin https://自己的token@github.com/notejf/notejf.github.io.git

### 推送
git push -f origin main
