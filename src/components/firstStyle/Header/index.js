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
    <header className={style['g-head']} style={{background: theme}}>
      <section className="namePosition">
        <h1>{headData.name}</h1>
        <h2>{headData.position}</h2>
      </section>
      <section className={style.otherInfo}>
        <ul>
          <li>
            {headData.address}
            <img className={style['h-icon']} src={home} alt="home"/>
          </li>
          <li>
            {headData.mobile}
            <img className={style['h-icon']} src={mobile} alt="mobile"/>
          </li>
          <li>
            <a href={`Mailto:${headData.email}`} className={style['h-link']}>
              {headData.email}
              <img className={style['h-icon']} src={email} alt="email"/>
            </a>
          </li>
          <li>
            <a href={headData.github} className={style['h-link']}>
              {headData.github.replace(/https:\/\//, '')}
              <img className={style['h-icon']} src={github} alt="github"/>
            </a>
          </li>
          {/* <li>
            <a href={headData.gitlab} className={style['h-link']}>
              {headData.gitlab.replace(/http:\/\//, '')}
              <img className={style['h-icon']} src={gitlab} alt="github"/>
            </a>
          </li> */}
        </ul>
      </section>
    </header>
	);
}