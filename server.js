var http = require('http');
var connect = require('connect');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = connect();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

sendemail = function(request, response, next){
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		  auth: {
		    user: 'naveen.bizviz@gmail.com',
		    pass: 'naveen$@!n93',
		    host: 'smtp.gmail.com', 
		    ssl: true
		  }
	});
	console.log(request.body);
	var mailOptions = {
			to: 'naveen.sain@bdbizviz.com',
			subject: 'Verify Your Account',
			html: `<h2>Dear Naveen Sain</h2>
					<h3>Welcome to Yujaa Free Trail Account</h3>
					<p>Please active your account using below button</p><br>
					<a  href="http://localhost:4800/createpassword"><button>Verify Account</button></a>`
	};	
		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
		});
		next();
};
/*
forgotPassword = function(request,response,next){
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		  auth: {
		    user: 'naveen.bizviz@gmail.com',
		    pass: 'naveen$@!n93',
		    host: 'smtp.gmail.com', 
		    ssl: true
		  }
	});
	console.log(request.body.emailid);
	var mailOptions = {
			to: 'naveen.sain@bdbizviz.com',
			subject: 'Forgot Password',
			html: `<h2>Dear Naveen Sain</h2>
					<h3>Welcome to Yujaa Free Trail Account</h3>
					<p>Please active your account using below button</p><br>
					<a  href="http://localhost:4800/createpassword"><button>Verify Account</button></a>`
	};	
		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
		});
		next();
};*/

app.use("/sendemail", sendemail);
/*app.use("/forgotpassword", forgotPassword);*/
http.createServer(app).listen(8888);
console.log("Server is listening......at 8888!!");

//404 response

/*function send404Response(response) {
	response.writeHead(404, {"Content-Type":"text/plain"});
	response.write("Error 404: Page Not Found");
	response.end();
}
function doFirst(request, response, next){
	console.log("Hello");
	next();
}


app.use("/doFirst",doFirst);
app.use("/doSecond",doSecond);
function doSecond(request, response, next){
	console.log("World");
	next();
}
function onRequest(request, response) {
	if(request.method === "GET" && request.url ==="/"){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}else{
		send404Response(response);
	}	
}

http.createServer(onRequest).listen(8888);
console.log('Server is running..........');*/

