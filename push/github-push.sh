### ssh校验
ssh -T git@github.com

### 创建本地项目
mkdir topsjf.github.io
cd topsjf.github.io

git init
git add -A
### 提交本地代码
git commit -m '提交代码了丫'

### 创建分支（刚创建的空项目，没有分支时）
git branch -M main

### 与远程仓库关联
git remote add origin git@github.com:topsjf/topsjf.github.io.git

### 推送
git push -f origin main

























