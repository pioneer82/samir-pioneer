import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from 'react-redux';

const STRINGS = {
  English: [
    "Full Stack Developers",
    "Freelancers",
    "Software Developers",
    "Project Managers",
    "Project Designers"
  ],
  Japanese: [
    'フルスタック開発者',
    'フリーランサー',
    'ソフトウェア開発者',
    'プロジェクトマネージャー',
    'プロジェクトデザイナー'
  ]
};

function Type() {
  const language = useSelector(state => state.language.language);
  const strings = STRINGS[language] || STRINGS.English;

  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;