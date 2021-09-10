import React, { Fragment } from 'react';
import Header from './Header';
import Body from './Body';

export default () => {
  return (
    <Fragment>
      <div className="g-wrap">
        个人网站备案中，请稍后再试。
        <div>
        <a href="https://beian.miit.gov.cn">渝ICP备20002213号-3</a>
        </div>
      </div>
    </Fragment>
  )
}