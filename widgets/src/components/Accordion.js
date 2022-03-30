import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		let titleClassName = 'title';
		let contentClassName = 'content';

		if (activeIndex === index) {
			titleClassName += ' active';
			contentClassName += ' active';
		}

		return (
			<React.Fragment key={item.title}>
				<div
					className={titleClassName}
					onClick={() => {
						onTitleClick(index);
					}}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={contentClassName}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
