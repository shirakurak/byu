# Git

## よく使うコマンド

- `git branch`
- `git checkout`
- `git diff`
- `git status`
- `git add`
- `git commit`
- `git push`
- `git log`

参考：[Gitでよく使うコマンド一覧](https://qiita.com/uhooi/items/c26c7c1beb5b36e7418e)

## ブランチを作成する

参考：[git コマンド branchの作り方](https://qiita.com/TetsuTaka/items/5ab227a8bd2cd7106833)

## 一連の流れ（例）

### `git pull`

最新の内容を取り込む。

```bash
shirakura@YN957 MINGW64 ~/Documents/05_GitLab/vuejs (develop)
$ git pull
info: detecting host provider for 'https://gitlab.sisinc.co.jp/'...
info: detecting host provider for 'https://gitlab.sisinc.co.jp/'...
info: detecting host provider for 'https://gitlab.sisinc.co.jp/'...
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), 341 bytes | 18.00 KiB/s, done.
From https://gitlab.sisinc.co.jp/3sd/study/vuejs
   74cba4a..f2f5d5d  develop    -> origin/develop
   277b446..f2f5d5d  main       -> origin/main
Updating 74cba4a..f2f5d5d
Fast-forward
```

### `git status`

ローカルの現状を確認する。

```bash
shirakura@YN957 MINGW64 ~/Documents/05_GitLab/vuejs (develop)
$ git status
On branch develop
Your branch is up to date with 'origin/develop'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/00_GitLab.md

no changes added to commit (use "git add" and/or "git commit -a")
```

### `git add`

指定ファイルをステージングエリアへ移動。

```bash
shirakura@YN957 MINGW64 ~/Documents/05_GitLab/vuejs (develop)
$ git add README.md
```

### `git commit`

```bash
shirakura@YN957 MINGW64 ~/Documents/05_GitLab/vuejs (develop)
$ git commit -m "fix type"
[develop d541fb2] fix type
 1 file changed, 1 insertion(+), 1 deletion(-)
```

### `git push`

```bash
shirakura@YN957 MINGW64 ~/Documents/05_GitLab/vuejs (develop)
$ git push
info: detecting host provider for 'https://gitlab.sisinc.co.jp/'...
info: detecting host provider for 'https://gitlab.sisinc.co.jp/'...
info: detecting host provider for 'https://gitlab.sisinc.co.jp/'...
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 330 bytes | 330.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote:
remote: To create a merge request for develop, visit:
remote:   https://gitlab.sisinc.co.jp/3sd/study/vuejs/-/merge_requests/new?merge_request%5Bsource_branch%5D=develop
remote:
To https://gitlab.sisinc.co.jp/3sd/study/vuejs.git
   f2f5d5d..d541fb2  develop -> develop
```

## Teamsとの連携

Incoming Webhookを用いることで、push, issueの発行、Merge Requestのオープンなどの際、GitLabからTeamsの特定のチャネルへ通知することができます。
参考：[GitlabをMicrosoft Teamsと連携させてみる](https://qiita.com/tsgkdt/items/e1148fd2f5960500d7d9)
