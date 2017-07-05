function load(cb){
	console.log('load start')
	// res = {
	// 	"red":[
	// 		{
	// 			"id":1,
	// 			"name":"ZhaoYun1"
	// 		},
	// 		{
	// 			"id":1,
	// 			"name":"ZhaoYun2"
	// 		},
	// 		{
	// 			"id":1,
	// 			"name":"ZhaoYun3"
	// 		}
	// 	],
	// 	"blue":[
	// 		{
	// 			"id":1,
	// 			"name":"ZhaoYun4"
	// 		},
	// 		{
	// 			"id":1,
	// 			"name":"ZhaoYun5"
	// 		},
	// 		{
	// 			"id":1,
	// 			"name":"ZhaoYun6"
	// 		}
	// 	]
	// }
	res = {
		teams:[
				{
					name:"team_red",
					heros:[
						{
							"id":1,
							"name":"ZhaoYun1"
						},
						{
							"id":1,
							"name":"ZhaoYun2"
						},
						{
							"id":1,
							"name":"ZhaoYun3"
						}
					]
				},
				{
					name:"team_blue",
					heros:[
						{
							"id":1,
							"name":"ZhaoYun4"
						},
						{
							"id":1,
							"name":"ZhaoYun5"
						},
						{
							"id":1,
							"name":"ZhaoYun6"
						}
					]
				}
			]
	}
	// cb(res)

	// MOCK
	// 假设从上一个页面读取到的阵容信息是
	teams = [
		['001','002','001'],['002','001','002']
	]

	$.getJSON("js/cfg_hero.json",function(data){
	// Vue.$http.get("js/cfg_hero.json").then(function(data){
		console.log('get json cb start')
		battle = {
			teams:[]
		}
	    console.log(data)

	    for(team in teams){
	    	console.log(teams[team])
	    	battle.teams.push({
	    		name:'team_'+team,
	    		heros:[]
	    	})

	    	for(hero in teams[team]){
	    		console.log(teams[team][hero])
	    		// index = 
	    		console.log(data[teams[team][hero]])
	    		new_hero = data[teams[team][hero]]
	    		console.log(new_hero)
	    		console.log(battle.teams[team].heros)
	    		battle.teams[team].heros.push(new_hero)
	    		// battle['teams']['heros'].push(new_hero)
	    	}
	    }

	    //MOCK
	    battle.teams[0].heros[1].isActive = true

	    console.log(battle)

		cb(battle)
	})
}
