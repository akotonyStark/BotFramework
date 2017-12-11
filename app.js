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

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
   // session.send("You said: %s", session.message.text);
    session.send("Hi there, nice to meet you. I am your campus bot, you can call me Jarvis.")
});