const express = require("express");
const app = express();
app.use(express.static(__dirname + './build'));

const vitreumRender = require('vitreum/steps/render');
const templateFn = require('./client/template.js');

app.get('*', (req, res)=>{
	return vitreumRender('garden', templateFn, {
			url : req.originalUrl
		})
		.then((page) => {
			return res.send(page)
		})
		.catch((err)=>{
			return res.json(err)
		});
});

const PORT = process.env.PORT || 8000;
const httpServer = app.listen(PORT, () => {
	console.log(`server on port:${PORT}`);
});