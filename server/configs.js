
exports.mysql_config = function(){
	return {
		HOST:'127.0.0.1',
		USER:'root',
		PSWD:'root',
		DB:'solt',
		PORT:3306,
	}
}

exports.loginServer_config = function(){
	return {
		port:3000,
	}
}

exports.hallServer_config = function(){
	return {
		port:3001,
	}
}
