import unsplash from '../api/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

	state = { images: [] };

	async onSearchSubmit(term) {
		const { data } = await unsplash.get('/search/photos', {
			params: {
				query: term
			}
		});
		this.setState({images: data.results});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
