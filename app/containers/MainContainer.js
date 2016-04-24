var React = require('react');

var MainContainer = React.createClass({

	render: function() {
		return (
			<div>Main
				{this.props.children}
			</div>
		);
	}

});

module.exports = MainContainer;