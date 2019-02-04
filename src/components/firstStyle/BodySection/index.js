import React from 'react';
import Segment from '../Segment';
import SectionDetail from '../SectionDetail';
import style from './index.css';

export default props => {
	return (
		<section className={style["b-segment"]} >
			<Segment tagName={props.tagName} />
			<SectionDetail { ...props.item }/>
		</section>
	);
}