import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../APIs/Youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.OnTermSubmit('asmongold');
	}

	OnTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
	};

	OnVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar OnFormSubmit={this.OnTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								OnVideoSelect={this.OnVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
