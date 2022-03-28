import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/Youtube';

class App extends React.Component {
	state = { videos: [] };

	OnTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar OnFormSubmit={this.OnTermSubmit} />I have {this.state.videos.length}
			</div>
		);
	}
}

export default App;
