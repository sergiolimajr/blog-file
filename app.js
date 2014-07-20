var express  = require('express'),
	app = express(),
  	swig = require('swig'),
  	http = require('http'),
  	path =require('path'),
  	adminRoute = require('./routes'),
  	server = require('http').createServer(app);
  	io = require('socket.io').listen(server);
  	marked = require('marked'),
  	fs   = require('fs')
  	blog = require('./blog');

// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view cache', false);

swig.setDefaults({ cache: false });

app.get('/', function (req, res, next) {
	blog.listPosts();
	blog.hello(function(results){
		res.render('blog', {resultado: results, profile:{title: 'Blog do Nicholas'}});
	});
});

app.get('/admin', adminRoute.index);
app.get('/admin/new-post', adminRoute.new);
app.get('/admin/edit-post', function (req, res) {
  res.render('admin');
});
io.sockets.on('connection', require('./socket'));
server.listen(3000, function () {
  console.log('Express server listening on port ' + 3000);
});

