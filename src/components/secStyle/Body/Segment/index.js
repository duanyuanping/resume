import React from 'react';

import style from './index.less';

const { resumeData: { theme } } = global;

export default ({ children }) => {
  return (
    <header className={style.segment} style={{color: theme}}>
      {children}
    </header>
  );
}