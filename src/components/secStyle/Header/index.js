import React from 'react';
import style from './index.less';

const mobile = require('../../../static/mobile(blue).svg');
const email = require('../../../static/email(blue).svg');
const github = require('../../../static/github(blue).svg');

const { resumeData: { head: headData, theme } } = global;

export default () => {
  return (
    <header className={style["g-head"]}>
      <section className={style["name-position"]}>
        <h1 style={{color: theme}}>{headData.name}</h1>
        <h3>求职意向：{headData.position}</h3>
      </section>
      <section className={style.school}>
        <ul>
          <li>{headData.school}</li>
          <li>{headData.degree}</li>
        </ul>
      </section>
      <section className={style.personal}>
        <ul>
          <li>
            <img className="h-icon" src={mobile} alt="mobile"/>
            <span className={style["personal-content"]}>{headData.mobile}</span>
          </li>
          <li>
            <a href={`Mailto:${headData.email}`} className="h-link">
              <img className="h-icon" src={email} alt="email"/>
              <span className={style["personal-content"]}>{headData.email}</span>
            </a>
          </li>
          <li>
            <a href={headData.github} className="h-link">
              <img className="h-icon" src={github} alt="github"/>
              <span className={style["personal-content"]}>{headData.github.replace(/https:\/\//, '')}</span>
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}