var React = require('react');

class Result extends React.Component {
	render() {
		var results = this.props.results[1].map((result, index) => {
            return (
                <div key={index}> 
                	<a id="result" href={this.props.results[3][index]} target="_blank">
                		<div>
		                    <h2>{this.props.results[1][index]}</h2>
		                    <p>{this.props.results[2][index]}</p>
		                </div>
                    </a>
                </div>
            );
        });
 
        return (<div>{results}</div>);
	}
}

module.exports = Result;