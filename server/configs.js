
var CLIENT_IP = '127.0.0.1'
var CLIENT_PORT = 3000
var HALL_IP = '27.0.0.1'
var HALLL_PORT = '3000'

exports.mysql_config = function () {
	return {
		HOST: '127.0.0.1',
		USER: 'root',
		PSWD: 'root',
		DB: 'solt',
		PORT: 3306,
	}
}

exports.loginServer_config = function () {
	return {
		CLIENT_PORT: CLIENT_PORT,
		HALL_IP: HALL_IP,
		HALLL_PORT: HALLL_PORT,
	}
}

exports.hallServer_config = function () {
	return {
		port: 3001,
	}
}

//大厅服配置
exports.hallServer_config = function () {
	return {
		CLIENT_PORT: CLIENT_PORT,
		HALL_IP: HALL_IP,
		HALLL_PORT: HALLL_PORT,
	};
};
