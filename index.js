

 class Fetch {
  async getCurrent(lat,lon) {
  
  

     const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";

    const response = await fetch(
	
     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${myKey}`
	  
	  
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
  
   
  
		async  fetchUUIDbodytempData() {
	
	// const response = await fetch('http://192.168.0.8:1240/'); 
	const response = await fetch('http://localhost:1240/'); 
	
	
	//"alert_message.txt"
const body = await response.text();
console.log(body);
 return body;
}


}	




const fetch = require('node-fetch');

 


			var path = require('path');		 		 
			var dir = path.join(__dirname, 'public'); 		 
			var options = { /* ... */ }; 
			console.log('__dir = ' + __dirname);
			console.log('dir = ' + dir);
			
			const express = require('express');
			var app = express();
			

	app.locals.appVersion = require ('./appVersion2.json');		
			
			
			
			
			
			
			app.use(express.static(dir));; 

			const http3server = require('http').createServer(app); 
			const io = require('socket.io')(http3server);	 
			
			app.get('/', (req, res) => {  
				res.sendFile( dir + '/index.html');
			}); 
			
			 

			http3server.listen(5003, () => {
						console.log('GBT  BROWSERS are listening on *:5001'); 
						}); 			

			var fs = require('fs');	  


			 const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
			 
			const latitude =  38.4039;
			const longitude =   -96.1817; 
			const ft = new Fetch();
			var utcDateAsString;
			var localTempF;  
			

			var longitude_message = -107.6504, latitude_message = 34.0844;
			var longitude_float = -107.6504, latitude_float = 34.0844, body_temp= 98.6;
			var longitude_floatx = -107.6504, latitude_floatx = 34.0844, body_tempx= 98.6;
			var longitude_float_icon = -107.6504, latitude_float_icon = 34.0844, body_temp_icon= 98.6;
			 
			var UUID = 7777;
			body_temp2 = 102.2;
			var msg_flag = 0;
			var counter2 = 0; 
			var outputstring1, outputstring2;
			var ambient, Tamb, SPO2, heartrate, phone_type, phone_OSversion, qTerm_app_version, deviceFW_version;
			var fs = require('fs');	  
			


var data = {"x":"75","y":"100"};
var datatest1= [{}];
var datatest2= [{}];
var datatest3= [{}];
var datatest4= [{}];
var datatest5= [{}];
 
var datatest6= [{}];
var datatest7= [{}];
var datatest8= [{}];
var datatest9= [{}];
var datatest10= [{}];
 
var datatest11= [{}];
var datatest12= [{}];
var datatest13= [{}];
var datatest14= [{}];
var datatest15= [{}];
 
var datatest16= [{}];
var datatest17= [{}];
var datatest18= [{}];
var datatest19= [{}];
var datatest20= [{}];

var datatest21= [{}];
var datatest22= [{}];
var datatest23= [{}];
var datatest24= [{}];
var datatest25= [{}];
var datatest26= [{}];
var datatest27= [{}];
 

	   io.on('connection', client2 => {		
				console.log('connected to a GBT browser on 3000');
				
			
				const _id = client2.id
				console.log('Socket Connected: ' + _id) 
				
				client2.on('disconnect', () => {
				
					console.log('Socket disconnected: ' + _id) 
					})  
					 
				

		
				   
				  client2.on('chat message', (msg1, msg2, msg3, msg4,msg5,msg6,msg7,msg8,msg9,msg10,msg11,msg12) => {
				  
					 
					
					 
					UUID =    msg1 ;
					longitude_message =  Number( msg2.toFixed(7) ); 
					latitude_message =  Number( msg3.toFixed(7) ); 
					body_temp =  Number( msg4.toFixed(1) ); 
					heartrate = msg5;
					SPO2 = msg6;
					ambient = msg7; 
					Tamb = msg8;
					phone_type = msg9;
					phone_OSversion = msg10;
					qTerm_app_version = msg11;
					deviceFW_version = msg12;
					
					
					console.log('RAW data from cell app:'  );  
				 
					console.log(  UUID,  longitude_message,   latitude_message, body_temp, heartrate, SPO2, ambient, Tamb, phone_type, phone_OSversion, qTerm_app_version, deviceFW_version );
						
					
					if (body_temp == 655)
					{
				
					body_temp2 = 0;
					} 
					else
					{
					body_temp2 = body_temp / 10;
					}
					
					Tamb = msg8/10 + 16 
					Tamb = Tamb*9/5 + 32; 
					Tamb = Number ( Tamb.toFixed(1)  );
					
					
					longitude_float = parseFloat(longitude_message);
					latitude_float = parseFloat(latitude_message);  
					
					
														
														
														
														
								
						
							  ft.getCurrent(latitude_float,longitude_float).then((data) => {
					
									
											localTempF = (data.current.temp - 273.15)*9/5 + 32;
											localTempF = Number ( localTempF.toFixed(1));
											 
										
											var timezone_offset = data.timezone_offset;	 
										
											var n = Date.now(); 
											var d2 = new Date(); 
											n = n + timezone_offset  * 1000;
											var tempDate = new Date(n); 
											utcDateAsString = tempDate.toUTCString();
										
						 
											date = Date(); 											
											var d = new Date();											
											var timeSecs = (d.valueOf() - 1625438853409)/1000;   //seconds since 4:51pm on 4JULY2021
											timeSecs =  Number( timeSecs.toFixed(0) );
											  
											
									
											const KEY = "AIzaSyB4uM-Ph2vQj2bFiQBrjo9XW0mO-4aGq80";
											let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude_float},${longitude_float}&key=${KEY}`;
										  fetch(url)
											.then(response => response.json())
											.then(data => {
														  console.log(data);
														  let parts = data.results[0].address_components;
									   
														 
													
														GEO= data.results[1].formatted_address;  // example:  Yoder, CO 80864, USA"
														
														
													
														if (heartrate == 11){ heartrate = 0;}
														if (SPO2 == 10){ SPO2 = 0;}
														 
														 
														console.log('data to GBT browser:'  );  //to index.html socket 
														console.log(  UUID,  longitude_float, latitude_float, body_temp2, heartrate, SPO2, ambient, Tamb,  timeSecs, utcDateAsString, GEO ,localTempF ); 
														
														 
														io.emit('data', UUID,  longitude_float, latitude_float, body_temp2, heartrate, SPO2, ambient, localTempF,  timeSecs, utcDateAsString, GEO ); 
														
														
														
													
														ft.fetchUUIDbodytempData().then((data) => {
														  console.log(data);
													
														var obj = JSON.parse(data);
														var string_body_temp = String(body_temp2);
														 obj.push({"UUID":UUID,"bodytemp":string_body_temp});
														var jsonStr = JSON.stringify(obj);
														
														const fs2 = require('fs');
														 
													
														fs2.writeFile("GBT_UUID_bodytemp-json-array.csv", jsonStr, (err) => { //writing back to the SOURCE file after appending new data

														  if (err)
															console.log(err);
														  else {
															console.log("File written successfully\n");
															console.log("The written has the following contents:");
														 
															console.log(fs.readFileSync("GBT_UUID_bodytemp-json-array.csv", "utf8"));
														  }
														});

														  })
  
  
  
  
														  
					 
													
														data = {"x":"75","y":"100"};
														
														
													
														data.x = Tamb;
														console.log(' Tamb = ', Tamb);//works
														
														data.y = body_temp2;
														console.log(' body_temp = ', body_temp);//works
														
														console.log('data = ', data);//works  
														
							
							 
							 
												
													if ( (body_temp2 > 50) && (body_temp2 < 130) )  
															{	
														
																switch(UUID) { 
																  case '00:81:F9:FD:B9:BB':  
																		datatest1.push(data); 
																		console.log('datatest1 = ',datatest1);
																	break;
																  case 'TESTBROWSER      ':  
																		datatest2.push(data); 
																		console.log('datatest2 = ',datatest2);
																	break;
																  case '00:81:F9:FD:AB:24':   
																		datatest3.push(data); 
																		console.log('datatest3 = ',datatest3);
																	break;
																  case '00:81:F9:FD:C7:5D':  
																		datatest4.push(data); 
																		console.log('datatest4 = ',datatest4);
																	break;
																  case '00:81:F9:FD:A8:DD': 
																		datatest5.push(data); 
																		console.log('datatest5 = ',datatest5);
																	break;
																	
																	
																	 case '00:81:F9:FD:AE:92':  
																		datatest6.push(data); 
																		console.log('datatest6 = ',datatest6);
																	break;
																  case '00:81:F9:FD:B0:27':  
																		datatest7.push(data); 
																		console.log('datatest7 = ',datatest7);
																	break;
																  case '00:81:F9:FD:B1:B8':   
																		datatest8.push(data); 
																		console.log('datatest8 = ',datatest8);
																	break;
																  case '00:81:F9:FD:C4:3C':  
																		datatest9.push(data); 
																		console.log('datatest9 = ',datatest9);
																	break;
																  case '00:81:F9:FD:CA:9E': 
																		datatest10.push(data); 
																		console.log('datatest10 = ',datatest10);
																	break;
																 
																 
																 
																  case '00:81:F9:FD:B9:B2':  
																		datatest11.push(data); 
																		console.log('datatest11 = ',datatest11);
																	break;
																  case '00:81:F9:FD:D4:77':  
																		datatest12.push(data); 
																		console.log('datatest12 = ',datatest12);
																	break;
																  case '58:93:D8:3F:59:7D':  
																		datatest13.push(data); 
																		console.log('datatest13 = ',datatest13);
																	break;
																  case '00:81:F9:FD:C4:64':  
																		datatest14.push(data); 
																		console.log('datatest14 = ',datatest14);
																	break;
																  case '00:81:F9:FD:C9:44': 
																		datatest15.push(data); 
																		console.log('datatest15 = ',datatest15);
																	break;
																 
																 
																 
																  case '58:93:D8:3F:5A:19':  
																		datatest16.push(data); 
																		console.log('datatest16 = ',datatest16);
																	break;
																  case '00:81:F9:FE:15:C6': 
																		datatest17.push(data); 
																		console.log('datatest17 = ',datatest17);
																	break;
																  case '00:81:F9:FD:DA:49':  
																		datatest18.push(data); 
																		console.log('datatest18 = ',datatest18);
																	break;
																  case '19':  
																		datatest19.push(data); 
																		console.log('datatest19 = ',datatest19);
																	break;
																  case '20': 
																		datatest20.push(data); 
																		console.log('datatest20 = ',datatest20);
																	break;
																	
																	
																	
																	
																	 case '60:98:66:55:5E:5C':  
																		datatest21.push(data); 
																		console.log('datatest21 = ',datatest21);
																	break;
																  case '60:98:66:55:5F:5D': 
																		datatest22.push(data); 
																		console.log('datatest22 = ',datatest22);
																	break; 
																  case '60:98:66:55:5F:35':  
																		datatest23.push(data); 
																		console.log('datatest23 = ',datatest23);
																	break;
																  case '60:98:66:55:5E:63': 
																		datatest24.push(data); 
																		console.log('datatest24 = ',datatest24);
																	break;
																  case '00:81:F9:FD:DC:C9':  
																		datatest25.push(data); 
																		console.log('datatest25 = ',datatest25);
																	break;
																  case '00:81:F9:FD:D6:FE':  
																		datatest26.push(data); 
																		console.log('datatest26 = ',datatest26);
																	break;
																  case '60:98:66:4B:2C:5E': 
																		datatest27.push(data); 
																		console.log('datatest27 = ',datatest27);
																	break;
																 
																 
																 
																  default:
																	 
																	console.log('UNRECOGNIZED DEVICE. NO UPDATES TO ARRAY(S)!',UUID);
																} 
												 
																io.emit('ChartJS data', datatest1, datatest2, datatest3, datatest4, datatest5, datatest6, datatest7, datatest8, datatest9, datatest10 , datatest11, datatest12, datatest13, datatest14, datatest15 , datatest16, datatest17, datatest18, datatest19, datatest20, datatest21 ,  datatest22, datatest23, datatest24, datatest25 , datatest26, datatest27);
																console.log('io.emit...ChartJS data...!', body_temp2);
															}



 
													
															longitude_floatx = (longitude_float.toString() ).padStart(14);
															latitude_floatx = (latitude_float.toString() ).padStart(14);
															body_temp2x =   (body_temp2.toString() ).padStart(6); 
															heartrate =   (heartrate.toString() ).padStart(6); 
															SPO2 =   (SPO2.toString() ).padStart(6); 
															ambient =   (ambient.toString() ).padStart(6); 
															Tamb =   (Tamb.toString() ).padStart(6); 
															utcDateAsString =   (utcDateAsString.toString() ).padStart(35); 
															localTempF =   (localTempF.toString() ).padStart(6); 
															GEO =   (GEO.toString() ).padStart(50); 
															phone_type =   (phone_type.toString() ).padStart(28); 
															phone_OSversion =   (phone_OSversion.toString() ).padStart(25); 
															
														
														    longitude_float_icon = (longitude_float.toString() ).padStart(12);
															latitude_float_icon = (latitude_float.toString() ).padStart(10);
															body_temp2_icon =   (body_temp2.toString() ).padStart(3);
												 
													 
													
														outputstring2 =  UUID +","+ longitude_floatx +","+ latitude_floatx+"," + body_temp2x+"," + heartrate+"," + SPO2+"," + ambient+"," + Tamb+", " + utcDateAsString+", " + timeSecs+", " + localTempF+", " + GEO+", " + phone_type+", " +phone_OSversion+", " + "appVersion:" + qTerm_app_version+", " +  "deviceFWversion" + deviceFW_version +  '\r\n'; 
										 		 		
														 outputstring3 =   '\r\n' +  latitude_float_icon  + "," + longitude_float_icon  + "," + body_temp2_icon + " "; 
														
														 outputstring4 =   '\r\n' +  UUID  + "," + body_temp2 + " "; 
														
														 
														
													
														
														fs.appendFile('GBT_log_file.csv',   outputstring2 ,  function (err) {
														if (err) throw err;
														console.log('Saved to GBT_log_file.csv!');    
															}); 
															
															 
															
												
															
															fs.appendFile('GBT_bodytemp_ave.csv',   outputstring4 ,  function (err) {
														if (err) throw err;
														console.log('Saved to GBT_bodytemp_ave.csv');    
															}); 
															
															
															
														 
														 	
											
															
																	
													 	fs.appendFile( dir + '/GBT_google_map_info2.csv',   outputstring3 ,  function (err) {
													 if (err) throw err;
													 console.log('GBT_google_map_info2.csv!');    
												 	}); 	
											
											
											}); 
											
					
								})
														
														
				  }); 

					
				 		  
			}); 
		
	app.on('error', function(e){
	console.log(' io.on(error)'  );  
	console.log(e);
		 
			});   	

	
	
	
		
		
 

		const app2 = require('express')();
		const http2server = require('http').createServer(app2);
		const io2 = require('socket.io')(http2server);	 
	  
				
		
		app2.get('/', (req, res) => {
		  res.sendFile(__dirname + '/GBT_redirect_page.html'); 
		}); 
		
	

		http2server.listen(3003, () => {
		console.log('CHAT BROWSERS are listening on *:8000');
		});





const http5 = require("http");
const fs5 = require("fs");

const server5 = http5.createServer(function(req, res) {
  let img = __dirname + "/GBT_log_file.csv";   



  fs5.readFile(img, function(err, content) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such image</h1>");
    } else {
   
	  res.writeHead(200, { "Content-type": "text/plain" });  
      res.end(content);
    }
  });
});

server5.listen(1241, function() {
  console.log("GBT LOG FILE Server running on port 1236");
});

	

 
	 
		

		const app6 = require('express')();
		const http6server = require('http').createServer(app6);
		
			
		app6.get('/', (req, res) => {
		  res.sendFile(__dirname + '/geocoding.html');  
				  
		   
		}); 	 
	
		http6server.listen(5015, () => {
		console.log('GEOLOCATION SERVER  on port 5012');
		});	



const http8 = require("http");
const fs8 = require("fs");

const server8 = http8.createServer(function(req, res) {
  let img = __dirname + "/appVersionJSON.txt";   



  fs8.readFile(img, function(err, content) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such image</h1>");
    } else {
     
	  res.writeHead(200, { "Content-type": "text/plain" }); 
      res.end(content);
    }
  });
});

server8.listen(1242, function() {
  console.log("GBT JSON Server running on port 1237");
});

const http9 = require("http");
const fs9 = require("fs");

const server9 = http9.createServer(function(req, res) {
 
  let img = "GBT_UUID_bodytemp-json-array.csv";  
 

  fs9.readFile(img, function(err, content) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such image</h1>");
    } else {
    
	  res.writeHead(200, { "Content-type": "text/plain" }); 
      res.end(content);
    }
  });
});

server9.listen(1240, function() {
  console.log("GBT UUID/BODYTEMP Server running on port 1238");
});



		
		console.log('GBT index.js NODEJS project load completed!');
		

