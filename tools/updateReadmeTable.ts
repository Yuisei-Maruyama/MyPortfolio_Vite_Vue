import packageJson from '../package.json'
import { readFileSync, writeFile } from 'fs-extra'

const { dependencies, devDependencies } = packageJson
const readme = readFileSync('README.md', 'utf-8')

const name: string[] = []
const version: string[] = []

const getDesc = (packageName: string) => {
  switch (packageName) {
    case 'vue':
      return 'ユーザインタフェース構築のための JavaScript'
    case 'typescript':
      return 'JavaScript に対して、静的型付けとクラスベースオブジェクト指向を加えた言語'
    case 'ts-node':
      return 'typescript のファイルを単体で実行できるモジュール'
    case 'eslint':
      return 'コードの解析'
    case 'eslint-config-prettier':
      return 'ESLint と Prettier を併用する'
    case 'prettier':
      return 'コードの整形'
    case '@typescript-eslint/parser':
      return 'ESLint を Typescript で解析できるようにする'
    case '@typescript-eslint/eslint-plugin':
      return 'ESLint で Typescript のチェックを行う'
    case 'husky':
      return 'Git コマンドフックに指定したコマンドを呼び出せる'
    case 'lint-staged':
      return 'commit したファイル(ステージングにあるファイル)に lint を実行する '
    case 'eslint-config-standard':
      return 'JavaScript Standard Styleのルールをeslintに適用する'
    case 'eslint-plugin-import':
      return 'importの順番をルール化して自動で整列させる'
    case 'eslint-plugin-node':
      return 'Node.js の記述に対するルールを設定する'
    case 'eslint-plugin-promise':
      return '非同期処理に対するルールを設定する'
    case 'fs-extra':
      return 'node.js標準のfsモジュールを vite で使用可能にする'
    case 'vite-plugin-env-compatible':
      return 'vite で process.env の形式で環境変数を使用可能にする'
    case '@vitejs/plugin-react':
      return 'vite 公式の React サポートプラグイン'
    case 'vite':
      return '従来のビルドツールと比較して、高速で動作するビルドツールパッケージ'
    case 'vite-tsconfig-paths':
      return 'vite.config.ts に tsconfig.json で指定した alias path を反映する'
    case 'vue-tsc':
      return '.vue の template 内も含めて型チェックが行えるツール'
    default:
      break
  }
  if (packageName.startsWith('@types')) {
    return `${packageName.split('@types/')[1]}の型定義ファイル`
  }
  return ''
}

Object.entries(dependencies).forEach(([key, value]) => {
  name.push(key)
  version.push(value)
})

Object.entries(devDependencies).forEach(([key, value]) => {
  name.push(key)
  version.push(value)
})

let tableBody = '| 技術 | version | 備考 |\n| ---- | ------- | ---- |\n'

for (let i = 0; i < name.length; i++) {
  tableBody = tableBody.concat(
    `| [${name[i]}](https://www.npmjs.com/package/${name[i]}) | ${version[i]} | ${getDesc(name[i])} |\n`
  )
}

writeFile(
  'README.md',
  readme.replace(
    readme.match(/### 使用パッケージ\n\n([\s\S]*)\n### Note/)?.[1] || '',
    tableBody
  ),
  (err) => {
    if (err) throw err
    console.log('正常に書き込みが完了しました')
  }
)
