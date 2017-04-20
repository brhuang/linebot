var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 	'1511277990',
  channelSecret: 'a87637aebbb9186c76cd451455f33030',
  channelAccessToken: 'kJjp1nfyuQ3pusCTqL5vXJv0EwkmF8/UM684cyPWtMadlQuQfl4e/1Utb6EMZ6llASZ3Z+SYgpZhfP68dYXdO2oreQUyeER2Z2+KRqEFDBrR5ys1RIdhAC5gZZ1frfRNeGfP8mSkrHT5PaWmpMjVrgdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
  event.reply('Hello');
});

//bot.reply(event.replyToken, 'Hello, world' );
//event.reply('Hello');

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
