var cp=require('child_process');

cp.fork('./',[],{
	execPath:'./worker.js'
});

