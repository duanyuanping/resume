import React from 'react';
import './index.css';

const { resumeData: { theme } } = global;
const listStyle=`<i class="b-list-style" style='background: ${theme}'></i>`;

export default props => {
	const { type, describe } = props;
	return (
		<div className="b-detail">
			<ul>
				{describe.map((item, index) => {
					return type === 'normal'
						? (<li className={type} key={index}>
							<header>
								<h4 className="b-detail-head b-detail-time">{item.head.time}</h4>
								<h4 className="b-detail-head">{item.head.title}</h4>
								<h4 className="b-detail-head b-detail-link" style={{display: item.head.link.name ? 'block' : 'none'}}><a href={item.head.link.url} style={{border: `1px solid ${theme}`, color: theme}}>{item.head.link.name}</a></h4>
							</header>
							<div className="b-detail-content" dangerouslySetInnerHTML={{__html: item.detail}}></div>
						</li>)
						: (<li key={index} style={{marginTop: index === 0 ? '10px' : 0}}>
							<p className="b-detail-content" dangerouslySetInnerHTML={{__html: `${listStyle}${item}`}}></p>
						</li>);
				})}
			</ul>
		</div>
	);
}