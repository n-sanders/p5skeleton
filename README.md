# p5 Skeleton

This is a base web project implementing p5.js.

# cloning this skeleton project

1. Open powershell
2. Create a bare clone of the repo
```
PS> git clone --bare https://github.com/exampleuser/old-repository.git
```
3. Create the new repo in github
4. Mirror-push to the new repo
```
PS> cd old-repository.git
PS> git push --mirror https://github.com/exampleuser/new-repository.git
```
5. Remove the temporary local repository you created in step 1.
```
PS> cd ..
PS> rm -rf old-repository.git
```

# Running locally

Requires gulp and gulp-webserver.

```
npm install -g gulp-cli
npm install -g gulp
npm install -D gulp-webserver
gulp watch
```
