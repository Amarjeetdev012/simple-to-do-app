module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render("todo")
    });

    // app.post('/todo', urlencodedParser,function (req, res) {
        
    // });

    // app.delete('/todo/:item', function (req, res) {
     
    // });

};