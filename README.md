# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# My Portfolio of Vue Vite

## Environment

| 技術 | version |
| ---- | ------- |
| Node | v16.15.0 |
| NPM | v8.5.5 |


```bash
npm i
npm run dev
```

### Huskyの設定方法

```bash
npx husky-init && npm install
```

you have a file called `.husky/pre-commit`, so change it to run `npm run lint-fix`.  

(before)
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm test
```

(after)
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-fix // <- change
```

### ESLint Rules for Vue

> Vue3 Lint Rules
https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-3-x

### 使用パッケージ

| 技術 | version | 備考 |
| ---- | ------- | ---- |
| [fs-extra](https://www.npmjs.com/package/fs-extra) | ^10.1.0 | node.js標準のfsモジュールを vite で使用可能にする |
| [vite-plugin-env-compatible](https://www.npmjs.com/package/vite-plugin-env-compatible) | ^1.1.1 | vite で process.env の形式で環境変数を使用可能にする |
| [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths) | ^3.5.0 | vite.config.ts に tsconfig.json で指定した alias path を反映する |
| [vue](https://www.npmjs.com/package/vue) | ^3.2.25 | ユーザインタフェース構築のための JavaScript |
| [@types/fs-extra](https://www.npmjs.com/package/@types/fs-extra) | ^9.0.13 | fs-extraの型定義ファイル |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | ^5.28.0 | ESLint で Typescript のチェックを行う |
| [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue) | ^2.3.3 | vite で Vue.js を使用するためのプラグイン |
| [eslint](https://www.npmjs.com/package/eslint) | ^8.18.0 | コードの解析 |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) | ^8.5.0 | ESLint と Prettier を併用する |
| [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard) | ^17.0.0 | JavaScript Standard Styleのルールをeslintに適用する |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | ^2.26.0 | importの順番をルール化して自動で整列させる |
| [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) | ^11.1.0 | Node.js の記述に対するルールを設定する |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) | ^6.0.0 | 非同期処理に対するルールを設定する |
| [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) | ^9.1.1 | .vue ファイルの静的検証に対するルールを設定する |
| [husky](https://www.npmjs.com/package/husky) | ^8.0.0 | Git コマンドフックに指定したコマンドを呼び出せる |
| [lint-staged](https://www.npmjs.com/package/lint-staged) | ^13.0.2 | commit したファイル(ステージングにあるファイル)に lint を実行する  |
| [prettier](https://www.npmjs.com/package/prettier) | ^2.7.1 | コードの整形 |
| [typescript](https://www.npmjs.com/package/typescript) | ^4.5.4 | JavaScript に対して、静的型付けとクラスベースオブジェクト指向を加えた言語 |
| [vite](https://www.npmjs.com/package/vite) | ^2.9.9 | 従来のビルドツールと比較して、高速で動作するビルドツールパッケージ |
| [vue-tsc](https://www.npmjs.com/package/vue-tsc) | ^0.34.7 | .vue の template 内も含めて型チェックが行えるツール |

### Note

※ 上記テーブルは`tools/updateReadmeTable.ts`によって生成され、コミット時に自動更新されます。

### コンポーネント作成にあたって

https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets をインストール

```
vuein
```

と入力し、補完して雛形を作成する。

