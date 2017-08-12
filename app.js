/*var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
	service: 'gmail',
	  auth: {
	    user: 'naveen.bizviz@gmail.com',
	    pass: 'naveen$@!n93',
	    host: 'smtp.gmail.com', 
	    ssl: true
	  }
});

var mailOptions = {
		from: 'naveen.bizviz@gmail.com',
		to: 'naveensain93@gmail.com',
		subject: 'Sending Email using Node.js',
		text: 'That was easy!'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

/*var http = require('http');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8888);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!\n');
}).listen(port);*/

/*function placeHolder(orderNumber) {
	console.log("Customer Order: ", orderNumber);
	
	cookDeleviredFood(function (){
		console.log("Delivered Food Order: ", orderNumber);
	});
} 

function cookDeleviredFood(callBack) {
	setTimeout(callBack, 5000);
}

placeHolder(1);
placeHolder(2);
placeHolder(3);
placeHolder(4);
placeHolder(5);
placeHolder(6);*/
/*sendmail: function(req, res) {
        
var server  = email.server.connect({
   user:    "puran.jmp@gmail.com", 
   password:"9314549172", 
   host:    "smtp.gmail.com", 
   ssl:     true
});
 
// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "You have signed up", 
   from:    "puran.jmp@gmail.com", 
   to:      req.body.name,
   subject: "Welcome to my app",
   attachment: 
   [
      {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
      {path:"pathtofile.zip", type:"application/zip", name:"renamed.zip"}
   ]
}, function(err, message) { 
    if(err)
    console.log(err);
    else
    res.json({success: true, msg: 'sent'});
 });
        
    }*//*console.log('Server running at http://127.0.0.1:8888');*/

