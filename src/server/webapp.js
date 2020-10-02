const {
    render
} = require('../functions/utils');

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

module.exports = {
    doPost,
    doGet,
};