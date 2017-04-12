
const React = require('react');
const _     = require('lodash');
const cx    = require('classnames');

const Home = React.createClass({
	getDefaultProps: function() {
		return {

		};
	},
	render: function(){
		return <div className='home'>
			Home Component Ready.
		</div>
	}
});

module.exports = Home;
