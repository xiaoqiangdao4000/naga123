

var center_ip = '127.0.0.1'
var center_port = 3000

var http_game_port = 3001

exports.mysql_config = function () {
	return {
		HOST: '127.0.0.1',
		USER: 'root',
		PSWD: 'root',
		DB: 'solt',
		PORT: 3306,
	}
}

//中心服务器
exports.centerServer_config = function () {
	return {
		//http监听客户端、游戏服务器消息 
		center_ip: center_ip,
		center_port: center_port,

		http_game_port: http_game_port,
	}
}

//游戏服配置
exports.game_server = function () {
	return {
		server: "001",
		name: 'jxlw',

		//http监听中心服务器
		http_game_port: http_game_port,
		http_game_ip: center_ip,

		//http连接中心服务器
		http_center_ip: center_ip,
		http_center_port: center_port,

		//websocke 监听客户端
		client_ip: '127.0.0.1',
		client_port: 10000,

	};
}

// var serverMap = {}

// serverMap['id'] = {
// 	ip: '100',
// 	name:'qqq'
// };

// serverMap['id1'] = {
// 	ip: '200',
// 	name:'aaaaaa'
// };

// for(var s in serverMap){
// 	var info = serverMap[s];
// 	console.log('aaa = ', info);
// }	


// serverMap = [];
// serverMap.push('111')
// console.log('cccc = ', serverMap);
var str = '10'
let len = str.length;
console.log('str =', str[1])




// let st = Number(str[len - 1]);
// console.log('st = ', st);



