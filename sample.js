console.log("Hello")

// Route.get('/login',controlserver.log);

// Route.get('/mailid',controlserver.mail);

//app.get('/', routeserver);

/*const data = new Book({name: 'Kavitha', age:21});
data.save();*/

/*app.get('/', (req, res) => {
    res.send('Performing get operation');
}) */

/*app.post('/details', async (req, res) => {
    var book = new Book({
        name: req.body.name,
        age: req.body.age,
    });
    await book.save();
    return res.json({message:'Successfully Saved'});
})


app.get('/name/:id', (req, res) => {
    Book.findById(req.params.id).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log("Error!");
    })
})

app.delete('/clear/:id', (req, res) => {
    console.log(req.params.id);
    Book.deleteOne({id:(req.params.id)}, (err, resp)=>{
        res.send(resp);
    })
})

app.put("/", (req, res) =>{
    //res.send("performing put operation");
    Book.updateOne(
    {name:"abdc"},
    {$set:(req.body)}, (err) => {
        if(!err) res.send("Data Updated");
    })
})*/
//const routeserver = require('./router/routeserver');







/*app.get('/', function(req, res){
    res.send("Hello world")
})

app.post('/login', function(req, res){
    res.send("Hiii world")
})

app.put('/email', function(req, res){
    res.send("Got a put request")
})

//Using next statement 

app.get('/account',(req, res, next) => {
    console.log("middleware crossing all")
    next()
})

app.get('/account',(req, res) => {
    console.log("Accessing all")
    res.json({
        message: 'checking middleware'
    })
})

app.get('/name', (req, res) => {
    res.send("Control from next statement")
})

//Request params

app.get('/user/:userid/book/:bookid', (req, res) => {
    res.send(req.params)
})

app.get('/email/:emailid/password/:passcode', (req, res) => {
    res.send(req.params)
})

//Array of Functions

const cb1 = function(req, res, next) {
    console.log("callback 1");
    next()
}

const cb2 = function(req, res, next) {
    console.log("callback 2");
    next()
}

const cb3 = function(req, res) {
    res.send("Array of Functions")
}

app.get('/arroffun', [cb1, cb2, cb3])

// Individual function & array of fucntion

app.get('/indfun', [cb1, cb2], (req, res, next) => {
    console.log("Individual and array of function");
    next()
}, (req, res) => {
    res.send("Array function and Individual function ")
})

// Route()

app.route('/animal')
    .get((req, res) => {
        res.send("Inside get Funtion ")
    })
    .post((req, res) => {
        res.send("Inside Post Function")
    })
    .put((req, res) => {
        res.send("Inside put Function")
    })*/