import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	OnInputChanged = (event) => {
		this.setState({ term: event.target.value });
	};

	OnFormSubmit = (event) => {
		event.preventDefault();

		// TODO: Make sure we call callback from parent component
		this.props.OnFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.OnFormSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input type="text" value={this.state.term} onChange={this.OnInputChanged} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
