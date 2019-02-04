import React from 'react';
import Masonry from 'react-masonry-component';
import BodySection from '../BodySection';
import style from './index.css';

const { resumeData: { body: bodyData } } = global;
const masonryOptions = {
  transitionDuration: 0,
};

export default () => {
	return (
  <div className={style["g-body"]}>
    <Masonry
      className={style['my-gallery-class']} // default ''
      elementType={'div'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {
        bodyData.map( (item, index) => <BodySection {...item} key={index}/>)
      }
    </Masonry>
  </div>
	)
}