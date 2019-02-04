import React from 'react';
import classnames from 'classnames';
import style from './index.css';

const { resumeData: { theme } } = global;

export default ({ tagName }) => {
	return (
  <header className={style["b-tagName"]}>
    <span className={classnames(style.line, style.lineL)} style={{borderTop: `1px solid ${theme}` }}/>
    <h3 className={style["tagName"]} style={{background: theme}}>{tagName}</h3>
    <span className={classnames(style.line, style.lineR)} style={{borderTop: `1px solid ${theme}` }} />
  </header>		
	);
}