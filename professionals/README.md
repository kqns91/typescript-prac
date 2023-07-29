# プロになるためのTypescript入門

## Chapter02
- letはletが絶対に必要な場合のみ使用する
- nullよりもundefinedの方がサポートが厚い

## Chapter03
- オプショナルプロパティ
  - ?をつけることでオプショナルにできる

```ts
type Obj = {
  foo: boolean;
  bar?: boolean;
}

if (obj.bar !== undefined) {
  console.log(obj.bar * 1000);
}
```

- 読み取り専用プロパティ
  - readonlyをつける
  - 再代入不可

- 型引数を持つ型(ジェネリック型)

```ts
type Familu<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const obj: Family<number, string> = {
  mother: 0,
  father: 100,
  child: "1000"
}
```

## Chapter08

- Promise
  - 非同期処理を行う関数は関数を受け取らずにPromiseオブジェクトを返す。
  - Promiseオブジェクトに対して、終わった後に行う処理を表す関数を登録する。
  - settlement
    - Promiseの結果が決まること
    - fulfill(成功)、reject(失敗)
    - thenは引数としてコールバック関数を受けとる。コールバック関数は当該Promiseオブジェクトが表す非同期処理が完了した時点で呼び出される。
    - 失敗時のコールバック関数はcatchで登録。
    - finallyは成功しても、失敗しても呼び出される。

```ts
import { readFile } from "fs/promises";

readFile('foo.txt', 'utf-8').then((res) => {
  cosole.log(res);
}).catch((err: unknown) => {
  console.log('読み込みに失敗しました。');
});
```

