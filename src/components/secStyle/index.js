import React, { Fragment } from 'react';
import Header from './Header';
import Body from './Body';

export default () => {
  return (
    <Fragment>
      <div className='g-wrap'>
        <Header />
        <Body />
        <a href="https://beian.miit.gov.cn">渝ICP备20002213号-2</a>
      </div>
    </Fragment>
  )
}