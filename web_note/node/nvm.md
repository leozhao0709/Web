# NVM

## 1. install

-   `brew install nvm`
-   In you bashfile, add the following

```shell
# Node
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

-   `source ~/.zshrc`

## 2. usage

-   `nvm ls-remote` show remote node version
-   `nvm ls` show local node version
-   `nvm install [version]`
-   `nvm use [version]`
-   `nvm alias default 4.2.4` to give set default node version