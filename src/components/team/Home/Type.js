import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from 'react-redux';

function Type() {
  const language = useSelector(state => state.language.language);

  const english = ["Full Stack Developers", "Freelancers", "Software Developers", "Project Managers", "Project Designers"];
  const japanese = ['フルスタック開発者', 'フリーランサー', 'ソフトウェア開発者', 'プロジェクトマネージャー', 'プロジェクトデザイナー']
  return (
    <Typewriter
      options={{
        strings: language === 'English' ? english : japanese,
        autoStart: true,
        loop: true,
        stringSplitter: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
