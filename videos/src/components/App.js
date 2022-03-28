import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../APIs/Youtube';
import VideoDetail from './VideoDetail';

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
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar OnFormSubmit={this.OnTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList OnVideoSelect={this.OnVideoSelect} videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
