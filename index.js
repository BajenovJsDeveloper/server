const express  = require('express');
const app = express();


app.get('/',function (req, res) {
	res.send('<h1>Home page</h1>')	
})

app.get('/about', function(req, res){
	res.send('<h1>About page</h1>')
})

app.get('*', function(req, res){
	res.send('<h1>Error 404, page not found!!</h1>')
})

app.listen(3000, ()=>{
	console.log('server runing on port: 3000');
})