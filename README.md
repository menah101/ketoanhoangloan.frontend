## Node

```
16.14.0
```

## install

```
npm install --no-save
```

## scripts

### start

- 開発をはじめるためのコマンド

```
npm start
```

### dist:prod

- 開発資材を納品形式でビルドするためのコマンド
- ビルドされたファイル一式は `dist:prod` に出力されます

```
npm run dist:prod
```

## 補足

- `<include>` タグを利用可能にしています
- 開発時に外部 HTML を読込めます
- local 属性を使って値を渡すこともできます

https://www.npmjs.com/package/posthtml-include

## 制作するファイルの場所

- src 配下に制作に必要な資材を追加していきます

## 開発時に利用している主なモジュール

- [BrowserSync](https://www.browsersync.io/)
  - ローカルサーバー
  - liveReload
- [ESLint](https://eslint.org/)
  - JavaScript ファイルのコード品質担保のため追加しています
  - ルールセットは [eslint:recommended](https://eslint.org/docs/rules/) をベースにしています
  - コードフォーマットを揃えるために [prettier](https://prettier.io/) も併用しています
- [Sass](https://sass-lang.com/)
  - Dart Sass(1.32.8) を利用しています
- [PostCSS](https://postcss.org/)
  - ビルドした CSS の加工に利用しています
  - [autoprefixer](https://github.com/postcss/autoprefixer) でベンダープレフィックスを追加している
- [Stylelint](https://github.com/postcss/stylelint)
  - Scss の構文チェックを行っています
  - ルールセットは [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard), [stylelint-order](https://github.com/hudochenkov/stylelint-order), [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
- [PostHTML](https://github.com/posthtml/posthtml)
  - [posthtml-include](https://github.com/posthtml/posthtml-include)
    - `<include>` タグを使ってパーツのコンポーネント化に利用しています
- [CommitLint](https://github.com/conventional-changelog/commitlint)
  - コミットメッセージに統一性を持たせるために追加しています
  - ルールセットは [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) を使っています
- [Simplifyify](https://github.com/JS-DevTools/simplifyify)
  - JavaScript で `babel` を使って開発を行うためのモジュール
