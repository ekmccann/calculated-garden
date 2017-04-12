
const React = require('react');
const _     = require('lodash');
const cx    = require('classnames');


const Home = React.createClass({
	getDefaultProps: function() {
		return {

		};
	},

	handleChange : function(event){
		console.log(event.target.value);

		engine.multipart(event)
	},

	render: function(){
		return <div className='home'>
			<textarea onChange={this.handleChange} />
		</div>
	}
});

module.exports = Home;
