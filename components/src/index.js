import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

if (module.hot) {
	module.hot.accept();
}

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard />
			<CommentDetail
				author="Sam"
				timeAgo="Today at 4:45PM"
				avatar={faker.image.avatar()}
				post="Wow!!"
			/>
			<CommentDetail
				author="Jane"
				timeAgo="Today at 4:50PM"
				avatar={faker.image.avatar()}
				post="This is great stuff!"
			/>
			<CommentDetail
				author="Omar"
				timeAgo="Today at 5:01PM"
				avatar={faker.image.avatar()}
				post="ehh, I'm not impressed.."
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
