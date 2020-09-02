# Friday Demo

This is a project for our Friday demo.

# Installations
It is required to install some modules on your computers.
___

### 1. IDE
Please install Visual Studio Code: https://code.visualstudio.com/
___

### 2. Node JS
Please install nvm
Main repo + NVM for macOS: https://github.com/nvm-sh/nvm
NVM for Windows: https://github.com/coreybutler/nvm-windows

Intall both latest version and LTS
```
nvm install --lts
nvm install 14.9.0
```
and practive with 
```
nvm use <nodejs version you want to use>
node -v
npm -v
```
___

### 3. Clone the repo
_Note:_
_Maybe it is required to configure you ssh key to clone/commit/push._
_Follow thw guides:_ 

* https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
* https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

_In case of any problems just contact you mentor_

Clone the repo with default name:
```
git clone git@edu-gitlab.leverx-group.com:nodejs-september-2020/friday_demo.git
```

or with the name you prefer
```
git clone git@edu-gitlab.leverx-group.com:nodejs-september-2020/friday_demo.git new_name
```



# Prepare project workspace
It is required to create a new branch and add some files

### 1. Create a new branch
Create a new branch with your name and surname:
```
git checkout -b <name>.<surname>
```

example:
```
git checkout -b margarita.krivorot
```

Check if you can make a push into a repo - push your new created branch:
```
git push -u origin <name>.<surname>
```
or
```
git push -set-upstream origin <name>.<surname>
```
___

### 2. Add filed to data folder
Add one big (e.g. pdf) file and not so big file (.txt) to a data folder
Please do not commit this files
