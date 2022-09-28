import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
/* eslint react-hooks/exhaustive-deps: off */
const App = () => {
  // 変数numとnumの状態を更新していく関数setNum
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwhichShowFalg = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectの第二引数に殻の配列を渡すと最初の１回のみ処理が通る
  // 配列に設定した変数の値が変わった時のみ処理が通る
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気満タン</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwhichShowFalg}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

// このコンポーネントを他のファイルで使用できるようにexport
export default App;
