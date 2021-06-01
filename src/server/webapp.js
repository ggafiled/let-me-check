const {
    render
} = require('../functions/utils');

var { replyMessage, MESSAGE_TYPE } = require('../functions/LineBot');

const Route = {};
Route.path = function(routeName, callback) {
    Route[routeName] = callback;
};

Route.path('project-list', () => {
    return render('index', {
        title: '- 🕵️‍♀️ Project List -',
    });
});

const doGet = (e) => {

    if (Route[e.parameters.v]) {
        return Route[e.parameters.v]();
    }
    return render('404');
};

const doPost = async (e) => {
    const data = JSON.parse(e.postData.contents);
    Logger.log(`[doPost()] data: ${JSON.stringify(data)}`);
    const messages = data.events[0].message.text;
    Logger.log(`[doPost()] messages: ${messages}`);
  
    replyMessage(data.events[0].replyToken, data.events[0].message.text, MESSAGE_TYPE.NORMAL);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'ok',
      })
    ).setMimeType(ContentService.JSON);
  };

module.exports = {
    doPost,
    doGet,
};