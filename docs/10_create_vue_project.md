# プロジェクト作成手順

インストール系の手順は既に行っていたらスキップ。

## Nodejs インストール

推奨版をダウンロードしてインストール
<https://nodejs.org/ja/>

```bash
  $ node -v
  v14.16.0

  $ npm -v
  6.14.11
```

## vue-cli インストール

```bash
  $ npm install -g @vue/cli

  $ vue --version
  @vue/cli 4.5.12
```

## vueプロジェクト作成

プロジェクトの生成
`Manually select features` を選択

```bash
  $ vue create プロジェクト名
  Vue CLI v4.5.12
  ? Please pick a preset: (Use arrow keys)
  Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  > Manually select features
```

↓の要領で選択
`*`がついた機能をインストールします。スペースキーでトグルする。

```bash
Vue CLI v4.5.12
? Please pick a preset: Manually select features
? Check the features needed for your project:
 (*) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 (*) Unit Testing
>(*) E2E Testing
```

バージョン選択
`2.x` を選択

```bash
  ? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
  > 2.x
    3.x (Preview)
```

routerをヒストリーモードにするか？
`n` を入力

```bash
  ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
```

CSS プリプロセッサの選択
`Sass/SCSS (with dart-sass)` を選択

```bash
  ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
  > Sass/SCSS (with dart-sass)
    Sass/SCSS (with node-sass)
    Less
    Stylus
```

ESLintの選択
`ESLint + Prettier` を選択（構文チェック + コードフォーマッター）

```bash
  ? Pick a linter / formatter config: (Use arrow keys)
    ESLint with error prevention only
    ESLint + Airbnb config
    ESLint + Standard config
  > ESLint + Prettier
```

Lintのタイミング
`Lint on save` を選択

```bash
  ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
  > (*) Lint on save
    ( ) Lint and fix on commit (requires Git)
```

ユニットテストツールの選択
`Jest` を選択

```bash
  ? Pick a unit testing solution:
    Mocha + Chai
  > Jest
```

E2Eテストツールの選択
`Cypress (Chrome only)` を選択

```bash
  ? Pick an E2E testing solution: (Use arrow keys)
  > Cypress (Chrome only)
    Nightwatch (WebDriver-based)
    WebdriverIO (WebDriver/DevTools based)
```

設定ファイルは個別に設定する
`In dedicated config files` を選択

```bash
  ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
  > In dedicated config files
    In package.json
```

プリセットの保存
必要なければ `N` を入力

```bash
  ? Save this as a preset for future projects? (y/N)
```

プロジェクトが生成されるのでしばらく待つ

```bash
  Vue CLI v4.5.12
  ✨  Creating project in path/to/プロジェクト名.
  ⚙️  Installing CLI plugins. This might take a while...
  
  [ .................] \ fetchMetadata: sill install loadAllDepsIntoIdealTree
```

下記が表示されれば完了

```bash
  added 1648 packages from 939 contributors and audited 1652 packages in 78.419s
  72 packages are looking for funding
    run `npm fund` for details
    
    found 4 low severity vulnerabilities
    run `npm audit fix` to fix them, or `npm audit` for details
    🚀  Invoking generators...
    📦  Installing additional dependencies...
    
    added 57 packages from 33 contributors, updated 1 package and audited 1709 packages in 17.285s
    
    78 packages are looking for funding
    run `npm fund` for details
    
    found 4 low severity vulnerabilities
    run `npm audit fix` to fix them, or `npm audit` for details
    ⚓  Running completion hooks...
    
    📄  Generating README.md...
    
    🎉  Successfully created project プロジェクト名.
    👉  Get started with the following commands:
    
    $ cd プロジェクト名
    $ npm run serve
```
