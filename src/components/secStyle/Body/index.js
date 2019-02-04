import React from 'react';
import Segment from './Segment';
import Project from './Project';
import Skill from './Skill';
import style from './index.less';

const { resumeData: { body } } = global;

export default () => {
  return (
    <div className={style.body}>
      {
        body.map((content, index) => (
          <section key={index}>
            <Segment>{content.tagName}</Segment>
            {
              content.item.type === 'normal'
              ? <Project>{content.item.describe}</Project>
              : <Skill>{content.item.describe}</Skill>
            }
          </section>
        ))
      }
    </div>
  )
}