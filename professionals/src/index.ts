import { readFile } from "fs/promises";

const p = readFile("example.txt", "utf-8");

p.then((data) => {
  console.log(data);
}).catch((err: unknown) => {
  console.log("ファイルの読み込みに失敗しました。");
});
console.log("ファイル読み込みを開始します。");

// const p = new Promise<number>((resolve) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 3000);
// });

// p.then((num) => {
//   console.log(`結果は${num}`);
// });