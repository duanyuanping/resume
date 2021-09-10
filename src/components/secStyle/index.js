import React, { Fragment } from 'react';
import Header from './Header';
import Body from './Body';

export default () => {
  return (
    <Fragment>
      <div className='g-wrap'>
        <Header />
        <Body />
      </div>
    </Fragment>
  )
}