
exports.rest = function(req, res, callbacks) {
    var result = null;
    switch(req.method){
	case 'POST':
	callbacks.post==null?null:callbacks.post(req, res);
	break;
	case 'GET':
	callbacks.get==null?null:callbacks.get(req, res);
	break;
	case 'PUT':
	callbacks.put==null?null:callbacks.put(req, res);
	break;
	case 'DELETE':
	callbacks.del==null?null:callbacks.del(req, res);
	break;
    }
}

