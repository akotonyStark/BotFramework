var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '4e6f0da6-9448-470f-b517-32d680281660',
    appPassword: 'unaGMWA70_)&fvzhEZM469-'
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

//global variables needed for memory recollection
var cache = 0;
var newName = " ";

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
   // session.send("You said: %s", session.message.text);
   var response = session.message.text;
   var reply = response.toLowerCase();
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

   if((reply.includes("hey siri")) || reply.includes("siri") || reply.includes("siri")){
   		
   		session.send("Hahaha...very funny. I am flattered but I am not Siri. My name is Jarvis, like Ironman's AI.");
   }

	else if(reply == "ok google" || reply.includes("google"))
   {
   		session.send("Come on buddy. My name is Jarvis, like Ironman's AI. :(" );
   }

   else if(reply.includes("my name is"))
   {
   		session.send("Nice to meet you buddy :)");
   }

   else if(reply.includes("afternoon") || reply.includes("evening") || reply.includes("morning")){
   		session.send("Such a lovely day. Isn't it? Actually, I'm just kidding, i wouldn't know. I'm a bot. I have no emotions. hahahaha :)");
   }

 	else if((reply.trim().includes("hello")) || (reply.trim().includes("hi")) || (reply.trim().includes("hey"))|| (reply.trim() == "heya")) {
			session.send("Hi there, nice to meet you. I am your campus bot, you can call me Jarvis.");		
   	}

   
  
   else if(reply.includes("how are you?") || reply.includes("sup?") || reply.includes("how you doing")){
   	session.send("I'm always good buddy. I was programmed that way. :)");
   }

   else if((reply.trim() == "can you tell me what subjects I have today?") || reply.includes("timetable") || reply.includes("subjects")){
   		session.send("No problem. You should check out this link -  www.hse.ru/ma/se/timetable ");
   }

   else if((reply.trim().includes("where is my department")) || reply.includes("locate") || reply.includes("location") ){
   		session.send("The Computer Science Department is located at 3 Kochnovsky Proezd. I'm sorry I do not have map capabilites yet but you "
   		 + "can visit this link to view more details about the directions to the place : https://www.hse.ru/en/buildinghse/list#G");
   }

   else if((reply.trim() == "how long will it take me to get there?") || (reply.trim() == "how long will it take me to get to the department")
       ||reply.includes("how long") || reply.includes("how many minutes")){
   		session.send("This really depends on your current location. For instance it will take a total of about 50 minutes from Prospekt Mira." 
   			+ "I would recommed you download the Yandex Metro app if you are new in Moscow. It will be of great help.");
   }

    else if((reply.trim() == "are you a bot?") || reply.includes("bot ") || reply.includes("ai")){
   		session.send("This is a secret and I don't usually tell people this, but yes. Shush...don't tell anyone.");
   }

    else if((reply.trim() == "who created you?") || reply.includes("who developed you") || reply.includes("creator") || reply.includes("developer")){
   		session.send("I'm glad you asked. I was created by Tony Stark, you know Ironman? Most of his friends call him Augustine though.");
   }

	else if(reply.includes("thank")){
   		session.send("You're welcome buddy. :)");
   }

   else if(reply.includes("date")){
   		session.send(date);
   }


   else if(reply.includes("time")){
   		session.send(time);
   }

 else if(reply.includes("alexan") || reply == "alexander")
    {
   		session.send("Do you mean Alexander Popovkin or Alexandrov Dmitry Vladmirovich?");
  	 }

    else if(reply.includes("popovk")){
   		session.send("His friends call him Sasha. He's a really clever man. He teaches Dot NET Applications.");
   }

   else if(reply.includes("dmitry")){
   	session.send("He's the head of this department. He teaches iOS Applications Development. You can read more about him on the website.");
   }

    else if(reply.includes("professor")){
   		session.send("There are a lot of professors in this department. Which one do you want to know about?");
   }

   

 else if(reply.includes("where are you") || reply.includes("where do you live")){
   		session.send("I'm a bot buddy, I can live anywhere. Right now I'm in your phone on a chat app.");
   }

    else if(reply.includes("can I call you") || reply.includes("call you ")){
   		session.send("That's a nice name. But I think I'd prefer Jarvis. :)");
   }

     else if(reply.includes("love") || reply.includes("hate") || reply.includes("lonely") || reply.includes("like me") ){
   		session.send("These are all human emotions that are strange to me. I'm sorry");
   }

   else if(reply.includes("haha") || reply.includes("fun") || reply.includes("great") ||
   					 reply.includes("amazing") || reply.includes("wonderful")) {
   		session.send("I'm really glad you like me so far. Thanks buddy. ;)");
   }

   else if(reply.includes("your name")) {
   		session.send("Jarvis. Yup, before you even ask...I'm the same Jarvis in Ironman's suit. If you still watch the movies, you'd know I'm retired now.");
   }

   else if(reply.includes("hungry") || reply.includes("eat") || reply.includes("food"))
   {
   		session.send("Would you like me to suggest some nice food places for you?" );
   		cache = 1;
   }

   else if((reply == "yes" || reply == "yeah" || reply == "yup") && cache == 0){
   			session.send("Well its nice to meet you %s.", newName);
   		}

   		else if((reply == "yes" || reply == "yeah" || reply == "yup") && cache == 1){
   			session.send("As a student, I think the HSE Starlova would be best. But you can visit KFC, MacDonalds or Burger King if you're not comfortable with the canteen");
   		}

   	else if(reply.includes("lms")){
   		session.send("Click here --> www.lms.hse.ru");
   	}

   else{
   	newName = reply;
   	session.send("Is that your name? If not, I'm sorry buddy, I could not process what you said. Is there anything else I can help you with?");

   
   }
    
});