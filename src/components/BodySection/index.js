import React from 'react';
import Segment from '../Segment';
import SectionDetail from '../SectionDetail';
import './index.css';

export default props => {
	console.log(props)
	return (
		<div className="b-segment" >
			<Segment tagName={props.tagName} />
			<SectionDetail { ...props.item }/>
		</div>
	);
}