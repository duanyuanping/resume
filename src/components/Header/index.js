import React from 'react';
import './index.css';

const { resumeData: { head: headData, theme } } = global;

export default () => {
  return (
    <header className="g-head" style={{background: theme}}>
      <section className="namePosition">
        <h1>{headData.name}</h1>
        <h2>{headData.position}</h2>
      </section>
      <section className="otherInfo">
        <ul>
          <li>
            {headData.address}
          </li>
          <li>
            {headData.mobile}
          </li>
          <li>
            <a href={`Mailto:${headData.email}`}>
              {headData.email}
            </a>
          </li>
          <li>
            <a href={headData.github}>
              {headData.github.replace(/https:\/\//, '')}
            </a>
          </li>
        </ul>
      </section>
    </header>
	);
}