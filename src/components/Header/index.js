import React from 'react';
import './index.css';

const home = require('../../static/home.svg');
const mobile = require('../../static/mobile.svg');
const email = require('../../static/email.svg');
const github = require('../../static/github.svg');

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
            <img className="h-icon" src={home}/>
          </li>
          <li>
            {headData.mobile}
            <img className="h-icon" src={mobile}/>
          </li>
          <li>
            <a href={`Mailto:${headData.email}`} className="h-link">
              {headData.email}
              <img className="h-icon" src={email}/>
            </a>
          </li>
          <li>
            <a href={headData.github} className="h-link">
              {headData.github.replace(/https:\/\//, '')}
              <img className="h-icon" src={github}/>
            </a>
          </li>
        </ul>
      </section>
    </header>
	);
}