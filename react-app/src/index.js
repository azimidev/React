import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui comments container" style={ { marginTop: '30px' } }>
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					date="2 days ago"
					comment="Nice comment!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					date="1 day ago"
					comment="Awesome comment!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Hazz"
					date="3 days ago"
					comment="Marvelous comment!"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
