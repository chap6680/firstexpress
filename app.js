const express = require ('express')

const app = express();

//pug default is a view folder
app.set('view engine', pug);

app.get('/',(request, response) =>{
	response.send('<h1>hello</h1>');
});

app.get('/hello',(request, response) =>{
	response.send('<h1>hello path directory</h1>');
});


app.listen(3000, () => { 
	console.log('Server running on :3000');
});
