var React = require('react');
var SearchBar = require('./SearchBar');
var Result = require('./Result');
var axios = require('axios');

class WikipediaViewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [
				'', [], [], []
			]
		};
	}

	handleSearch(searchTerm) {
		const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=api&origin=*&search=' + searchTerm;
	    axios.get(url) 
	      .then(response => {
	        this.setState({ results: response.data })
	      }) 
	      .catch(err => {
	        this.setState({ results: response.data })
	      });
	}

	render() {
		return (
			<div className="container">
				<SearchBar onSearch={this.handleSearch.bind(this)}/>
				<Result results={this.state.results} />
			</div>
		);
	}
}

module.exports = WikipediaViewer;