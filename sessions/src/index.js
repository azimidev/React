import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

	// NOTE: bable compile this to be a constructor
	state = {
		lat: null,
		errorMessage: null,
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				// NOTE: we called setState !!!
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude,
				});
			},
			error => {
				this.setState({
					errorMessage: error.message,
				});
			},
		);
	}

	render() {
		if (this.state.errorMessage && ( ! this.state.lat || ! this.state.long)) {
			return (
				<div className="ui negative message">
					<i className="close icon"/>
					<div className="header">Error!</div>
					<p>{ this.state.errorMessage }</p>
				</div>
			);
		}

		if ( ! this.state.errorMessage && this.state.lat && this.state.long) {
			return (
				<SeasonDisplay lat={ this.state.lat }/>
			);
		}

		return <Spinner message="Please allow location..." />;
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
