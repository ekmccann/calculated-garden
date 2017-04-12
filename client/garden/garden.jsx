const React = require('react');
const _ = require('lodash');
const CreateRouter = require('pico-router').createRouter;

//Pages
const HomePage = require('./home/home.jsx');



const Router = CreateRouter({
	'*' : <HomePage />
});

const Garden = React.createClass({
	getDefaultProps: function() {
		return {
			url : '/'
		};
	},
	render: function(){
		return <div className='garden'>
			Hey katiue
			<Router initialUrl={this.props.url} />
		</div>
	}
});

module.exports = Garden;
