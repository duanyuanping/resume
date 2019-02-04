import React from 'react';
import style from './index.less';

export default ({ children }) => {
  return (
    <section className={style.skill}>
      {
        children.map((des, index) => <article key={index} className={style["skill-content"]} dangerouslySetInnerHTML={{ __html: des }}></article>)
      }
    </section>
  );
}