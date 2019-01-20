import React from 'react';
import style from './index.less';

const home = require('../../../static/home.svg');
const mobile = require('../../../static/mobile.svg');
const email = require('../../../static/email.svg');
const github = require('../../../static/github.svg');
const gitlab = require('../../../static/gitlab.svg');

const { resumeData: { head: headData, theme } } = global;

export default () => {
  return (
    <header className="g-head" style={{background: theme}}>
      <section className="name-position">
        <h1>{headData.name}</h1>
        <h3>求职意向：{headData.position}</h3>
      </section>
      <section className={style.school}>
        <ul>
          <li>{headData.school}</li>
          <li>{headData.degree}</li>
        </ul>
      </section>
      <section className="personal">
        <ul>
          <li>
            {headData.mobile}
            <img className="h-icon" src={mobile} alt="mobile"/>
          </li>
          <li>
            <a href={`Mailto:${headData.email}`} className="h-link">
              {headData.email}
              <img className="h-icon" src={email} alt="email"/>
            </a>
          </li>
          <li>
            <a href={headData.github} className="h-link">
              {headData.github.replace(/https:\/\//, '')}
              <img className="h-icon" src={github} alt="github"/>
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}