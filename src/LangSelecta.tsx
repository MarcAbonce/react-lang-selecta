import React from 'react';

type Lang = {
  name: string;
  flag: string;
  code: string;
};

type LangSelectaProps = {
  langs: Lang[];
};

function LangSelecta({ langs } : LangSelectaProps) {
  return (
    <select>
      {langs.map(lang => (
        <option value={lang.code}>{lang.flag} {lang.name}</option>
      ))}
    </select>
  );
}

export default LangSelecta;
