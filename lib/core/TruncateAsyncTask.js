var fs = require('fs');

var task = function(fd, fileSize) {
	this.fd = fd;
	this.fileSize = fileSize;
	
};
var _execute = function(callback) {
	
	this.callback = callback;
	var self = this;
	setTimeout(() => {
		fs.ftruncate(this.fd, this.fileSize, self.callback);
	}, 350);
	//this.callback();
	console.log('file is truncated');
};


task.prototype.execute = _execute;

module.exports = task;