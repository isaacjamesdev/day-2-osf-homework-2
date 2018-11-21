let api = {};

api.home  = (req,res)=>{
    res.render('home');
}

api.oddOrEven = (req,res)=>{
    let result;
    req.params.number % 2 ? result = 'odd' : result = 'even';
    res.render('oddOrEven',{
        number: req.params.number,
        result: result
    });
}

api.random  = (req,res)=>{
    result = require('./random')();
    res.render('random',{
        result: result
    });
}

api.lessThanFive = (req,res)=>{
    req.params.number < 5 ? res.render('lessThanFive',{
        number: req.params.number
    }) : res.send(req.params.number)
}

api.array = (req,res)=>{
    res.render('array',{
        numbers: [1,2,3,4,5,6,7,8,9,10]
    })
}


module.exports = api;