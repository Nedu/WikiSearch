var React = require('react');
var FontAwesome = require('react-fontawesome');
var axios = require('axios');

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(event) {
		this.setState({
			searchTerm: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let searchTerm = this.state.searchTerm.trim(); 
        if (!searchTerm) { 
            return;
        }
        this.props.onSearch(searchTerm);
	}

	render() {
		return(
			<div>
				<h1>WikiSearch</h1>
				<form onSubmit={this.handleSubmit}>
					<input id="searchbox" type="text" placeholder="Enter a term to search!" onChange={this.handleInput} value={this.state.searchTerm}/><br />
					<button type="submit" value="Submit"><FontAwesome name='search' /> Search</button>
					<a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank"><FontAwesome name='random'  /> Random Article</a>
				</form>
			</div>
		);
	}
}

module.exports = SearchBar;