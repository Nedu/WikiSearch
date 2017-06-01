var React = require('react');
var ReactDOM = require('react-dom');
var WikipediaViewer = require('./components/WikipediaViewer');
require('./index.css');

ReactDOM.render(<WikipediaViewer />, document.getElementById('wikipedia-viewer'));