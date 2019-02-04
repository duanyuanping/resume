import React from 'react';
import style from './index.less';

const { resumeData: { theme } } = global;

export default ({ children }) => {
  return (
    children.map((item, index) => {
      const { head: { time, title, link }, detail } = item;
      return (
        <section key={index} className={style["project-title"]}>
          <section style={{color: theme}}>
            <nav>{time}</nav>
            <nav>{title}</nav>
            <nav>{link.name}</nav>
          </section>
          <div className={style["project-content"]} dangerouslySetInnerHTML={{ __html: detail}}></div>
        </section>
      );
    })
  );
}