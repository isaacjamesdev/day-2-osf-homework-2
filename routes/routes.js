module.exports = function(app){
    let api = app.api;
    app.get('/', api.home);
    app.get('/oddOrEven/:number', api.oddOrEven);
    app.get('/random', api.random);
    app.get('/lessThanFive/:number', api.lessThanFive);
    app.get('/array', api.array);
}