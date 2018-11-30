
var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');
var modelo = require('modelo/Usuarios');
var crypto = require('crypto');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * @api {get} /getUser/:username Request User information
 * @apiName getUser
 * @apiGroup User
 */

 app.get('/getUser/:username', function(req,res){
	 	 
    var username= req.params.username;

       if(username)
         {
          modelo.getUser(username,function(error, data)
           {

             if (typeof data !== 'undefined' && data.length > 0)
                 {
                   res.json(200,data);
                 }
                   else
                 {
                   res.json(404,{"msg":"no existe"});
                 }
           });
         }

          else
        {
         res.json(500,{"msg":"Error"}); 
        }
          });
 

app.put('/addUser', function(req,res){
	
 var username= req.param('username');
 var password= req.param('password');	
 var email= req.param('email');	
 
 console.log(username,password,email);
 
 if(username && password && email){
    password = crypto.createHash('md5').update(password).digest("hex");
	
	modelo.addUser(username,password,email,function(error, data)
      {
	    if (data)
           {
            res.json(200,data);
           }
 
            else
           {
            res.json(404,{"msg":"no existe"});
           }
	
	 });
	
   }
    else
   {
     res.json(500,{"msg":"Error"});
    }
	
});	
  
  
 app.post('/activateUser', function(req,res){
	 
	var username= req.param('username');
	
	if(username){
		
		modelo.activateUser(username,function(error, data)
		{
		 if (data)
                 {
                   res.json(200,data);
                 }
                   else
                 {
                   res.json(404,{"msg":"no existe"});
                 }
           });
         }

          else
        {
         res.json(500,{"msg":"Error"}); 
        }
		
		
	   });
		

 
app.post('/deactivateUser', function(req,res){
		var username= req.param('username');
	
	if(username){
		
		modelo.deactivateUser(username,function(error, data)
		{
		 if (data)
                 {
                   res.json(200,data);
                 }
                   else
                 {
                   res.json(404,{"msg":"no existe"});
                 }
           });
         }

          else
        {
         res.json(500,{"msg":"Error"}); 
        }
		
	
	
});


var server = app.listen(8080, function () {
    console.log('Servidor activo..'); 
});


