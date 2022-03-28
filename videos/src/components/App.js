import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../APIs/Youtube';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	OnTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({ videos: response.data.items });
	};

	OnVideoSelect = (video) => {
		console.log('From the app!', video);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar OnFormSubmit={this.OnTermSubmit} />
				<VideoList OnVideoSelect={this.OnVideoSelect} videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
