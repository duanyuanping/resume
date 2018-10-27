import React from 'react';
import BodySection from '../BodySection';

import './index.css';

const { resumeData: { body: bodyData } } = global;

export default () => {
	return (
  <div className="g-body">
    {
		  bodyData.map( (item, index) => <BodySection {...item} key={index}/>)
		}
  </div>
	)
}