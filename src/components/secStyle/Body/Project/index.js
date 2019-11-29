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
            <nav>
              <a
                href={link.href ? link.href : 'javascript:;'}
                style={{
                  padding: '0 5px',
                  cursor: link.href ? 'point' : 'auto',
                  color: 'rgb(37, 119, 227)',
                }}
              >
                {link.name}
              </a>
            </nav>
          </section>
          <div className={style["project-content"]} dangerouslySetInnerHTML={{ __html: detail}}></div>
        </section>
      );
    })
  );
}