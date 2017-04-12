
const React = require('react');
const _     = require('lodash');
const cx    = require('classnames');

const Garden = React.createClass({
	getDefaultProps: function() {
		return {

		};
	},
	render: function(){
		return <div className='garden'>
			Garden Component Ready.
		</div>
	}
});

module.exports = Garden;
