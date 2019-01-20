import React from 'react';
import './index.css';

const { resumeData: { theme } } = global;

export default ({ tagName }) => {
	return (
  <header className="b-tagName">
    <span className="line lineL" style={{borderTop: `1px solid ${theme}` }}/>
    <h3 className="tagName" style={{background: theme}}>{tagName}</h3>
    <span className="line lineR" style={{borderTop: `1px solid ${theme}` }} />
  </header>		
	);
}