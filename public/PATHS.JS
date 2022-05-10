var path = require('path');		 		 
			var dir = path.join(__dirname, 'public'); 		 
			var options = { /* ... */ }; 
			console.log('__dir = ' + __dirname);
			console.log('dir = ' + dir);
			
			const express = require('express');
			var app = express();
			app.use(express.static(dir));; 

			const http3server = require('http').createServer(app); 
			const io = require('socket.io')(http3server);	 
			
			app.get('/', (req, res) => { 
			  //res.sendFile(__dirname + '/index.html');
				res.sendFile( dir + '/index.html');
			}); 
			
			
			
			
			
			
			
			function change_page(){
  var path = require('path');		 		 
			var dir = path.join(__dirname, 'public'); 		 
			var options = { /* ... */ }; 
			console.log('__dir = ' + __dirname);
			console.log('dir = ' + dir);
			
			const express = require('express');
			var app = express();
			app.use(express.static(dir));; 

			const http3server = require('http').createServer(app); 
			const io = require('socket.io')(http3server);	 
			
			app.get('/', (req, res) => {  
				res.sendFile( dir + '/index-chat.html');
			}); 
		}); 
} 