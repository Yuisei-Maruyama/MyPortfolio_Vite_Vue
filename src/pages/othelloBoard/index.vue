<script setup lang="ts">
import { ref, onMounted } from 'vue'

const board = ref<HTMLDivElement>()

// 64マスの情報を保持する配列
const baseCell = new Array(64)

// 端の要素を確認するための外側のマスを追加した配列
const boardCell = new Array(91)

// INFO: xy座標からboardCell配列の値（石の状態）を取得する関数
const getDiscStatus = (x: number, y: number) => {
  return boardCell[pos(x, y)]
}

// INFO: 石の位置をxy座標から9*9の番号に変換
const pos = (x: number, y: number) => {
  return (y + 1) * 9 + x + 1
}
// INFO: 9*9の番号からx,y座標を割り出す
const pos_x = (p: number) => {
  return (p % 9) - 1
}
const pos_y = (p: number) => {
  return Math.floor(p / 9) - 1
}

const othello = () => {
  // INFO: 全てのマスにマス外を示す８を入れてしまう
  for (let i = 0; i < boardCell.length; i++) {
    boardCell[i] = 8
  }
  // INFO:碁盤内にあるマスには0を入れる
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      boardCell[pos(x, y)] = 0
    }
  }
  // INFO: 初期の配置を作る
  boardCell[pos(3, 3)] = 2
  boardCell[pos(4, 3)] = 1
  boardCell[pos(3, 4)] = 1
  boardCell[pos(4, 4)] = 2

  const turn = ref<number>(1)
}

const gBoard = (parent: string) => {
  for (let i = 0; i < 64; i++) {
    // 緑のマスを追加
    let cell = document.createElement('div')
    cell.className = 'cell'
    // TODO: 碁盤の位置が中心に来るようにちゃんと計算した数値に変える
    let x = (i % 8) * 29 + 12
    let y = Math.floor(i / 8) * 29 + 12
    cell.style.left = `${x}px`
    cell.style.top = `${y}px`
    // INFO: マスに石を配置
    let disc = document.createElement('div')
    disc.className = 'disc'
    disc.style.display = 'none'
    cell.appendChild(disc)
    // TODO:ここの部分参考コードでなんのためかわからない＋正しくないのでコメントアウト
    // cell.disc = disc

    board.value?.appendChild(cell)
    baseCell[i] = cell
  }
  othello()
  const update = () => {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        setDisc(x, y, getDiscStatus(x, y))
      }
    }
  }
  update()
}

// INFO: 石の表示非表示をする関数
// d=0: 非表示
// d=1: 黒石を表示
// d=2: 白石を表示
const setDisc = (x: number, y: number, discStatus: number) => {
  let place = y * 8 + x
  baseCell[place].disc.style.display = discStatus === 0 ? 'none' : 'block'
  if (discStatus > 0) {
    baseCell[place].disc.style.backgroundColor = discStatus === 1 ? 'black' : 'white'
  }
}


onMounted(() => {
  gBoard('board')
})
</script>
<template>
  <div :class="$style.wrapper">
    <p style="color: white">you will see my board here!</p>
    <div ref="board" :class="$style.board"></div>
  </div>
</template>
<style lang="scss" module>
.board {
  position: relative;
  height: 256px;
  width: 256px;
  margin: 0 auto;
  background-color: white;
}
</style>
<!-- TODO: 追加した要素にmoduleのクラスをつけることができるか考える -->
<style lang="scss">
.cell {
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: green;
  & > .disc {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: white;
  }
}
</style>
