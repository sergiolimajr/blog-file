var marked = require('marked'),
  	fs   = require('fs');

module.exports = {
	read: function (callback){
	    fs.readFile('teste.md',{encoding: 'utf-8'}, function (err, data) {
			if (err) throw err;
  			callback(data);		
		});
	},
	listPosts: function(){
		var files = require('./post/_data.json');
		files.posts.forEach(function(item){
		 console.log(item.title);
		});
	},
	hello: function(callback){
		this.read(function(data){
			callback(marked(data));
		});
	}	
}