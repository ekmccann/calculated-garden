const React = require('react');
const _     = require('lodash');
const cx    = require('classnames');

const GardenEngine = require('../../../engine/garden.engine.js');
const GardenData = require('../../../engine/garden.data.js');


const Home = React.createClass({
	getDefaultProps: function() {
		return {

		};
	},
	getInitialState: function() {
		return {
			bestPartner : []
		};
	},

	handleClick : function(vegtable){
		this.setState({
			bestPartner : GardenEngine.bestPartner(vegtable)
		});
	},

	renderGardenItems : function(){
		return _.map(GardenData, (data, name)=>{
			return <div onClick={this.handleClick.bind(null, name)}>{name}</div>
		})
	},

	renderBestPartner : function(){
		return _.map(this.state.bestPartner, (partner)=>{
			return <div>{partner}</div>
		})
	},

	render: function(){
		return <div className='home'>

			{this.renderGardenItems()}
			<textarea onChange={this.handleChange} />
			{this.renderBestPartner()}
		</div>
	}
});

module.exports = Home;
