const express  = require('express')
const app = express(); //creating the web application through express
app.listen(3000, () => console.log('listening at 3000...'))
app.use(express.static('public')); //hosting static files  
app.use(express.json({limit: '1mb'}));
app.post('/api' , (request, response) =>{
	console.log('i got a request')
	console.log(request.body)
	const data = request.body;
	response.json({
		status: "success",
		latitude: data.lat,
		longitude: data.lon
	});

});