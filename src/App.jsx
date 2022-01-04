// 以下のような書き方でeslintnの警告をオフにできる
/* eslint 
react-hooks/exhaustive-deps: off, jsx-a11y/accessible-emoji: off
*/

import React, { useEffect, useState } from "react";
// default exportは1つの関数しかできないので、export const 関数名というふうに通常のexportする
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    // !をつけると逆の意味になる
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect!!!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // 第2引数にからの配列を定義すると画面表示1回目のみ実行される
    // 第2引数に変数を入れるとその変数が変化した時のみ叩かれる
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* trueの時だけ絵文字を表示 */}
      {faceShowFlag && <p>😀</p>}
    </React.Fragment>
  );
};

// 別ファイルでも使えるようにする
export default App;
