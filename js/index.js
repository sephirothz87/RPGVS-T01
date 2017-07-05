// $(function() {
//     console.log("start")

//     load(init)
// })

// $.getJSON("js/cfg_hero.json?jsoncallback=?",function(data){
    
// $.getJSON("js/cfg_hero.json",function(data){
//     console.log("aaa") 
//     console.log(data)
//     // alert(data)
// })


// vue_main = new Vue({
//     el: '.main',
//     data: {
//         title: 'RPG VS',

//         // aaa:'a'
//     }
// })

hero_data = (id=0,name="Zhaoyun")=>{
    return  {
        id:id,
        name:name
    }
}

Vue.component('hero',{
    // template:`
    //     <div>
    //         hahaha
    //     </div>
    // `

    // template:`
    //     <td>
    //         hahaha
    //     </td>
    // `

    template:`
        <td>
            {{name}}
        </td>
    `
    ,
    // data: ()=>{return hero_data}
    // data: ()=>{return {
    //     id:0,
    //     name:"ZhaoYun1"
    // }}

    // data: hero_data

    props:['name']
})


vue_battle = new Vue({
    el: '#battle',
    // component:{
    //     'hero':{
    //         template:'<td></td>'
    //     }
    // },
    data: {
        // r_heros: [{
        //     "id": 1,
        //     "name": "ZhaoYun1"
        // }, {
        //     "id": 1,
        //     "name": "ZhaoYun2"
        // }, {
        //     "id": 1,
        //     "name": "ZhaoYun3"
        // }],
        // b_heros: [{
        //     "id": 1,
        //     "name": "ZhaoYun1"
        // }, {
        //     "id": 1,
        //     "name": "ZhaoYun2"
        // }, {
        //     "id": 1,
        //     "name": "ZhaoYun3"
        // }]

        // r_heros: [],
        // b_heros: []

        teams:[],
        // heros:[]
    },
    ready:function(){
        this.init('js/cfg_hero.json')
    },
    methods:{
        // init:function(jsonPath){//标准的ES5写法
        // init:jsonPath=>{//箭头函数不生效，因为this继承的问题，此时this不再是view对象，而是window
        init(jsonPath){//这种方法可以,在vue体系下这是最简单的写法
            console.log('init start')
            // let self = this;
            // self.$http.get(jsonPath).then(function(res){//标准写法
            this.$http.get(jsonPath).then(res=>{//可以使用箭头函数
                let data = res.data
                console.log(res.data)
                // MOCK
                // 假设从上一个页面读取到的阵容信息是
                teams = [
                    ['001','002','001'],['002','001','002']
                ]

                battle = {
                    teams:[]
                }

                for(team in teams){
                    console.log(teams[team])
                    battle.teams.push({
                        name:'team_'+team,
                        heros:[]
                    })

                    for(hero in teams[team]){
                        console.log(teams[team][hero])
                        console.log(data[teams[team][hero]])

                        let new_hero = {
                            id:data[teams[team][hero]]['id'],
                            name:data[teams[team][hero]]['name'],
                            hp:data[teams[team][hero]]['hp'],
                            mp:data[teams[team][hero]]['mp']
                        }

                        // new_hero = data[teams[team][hero]]
                        console.log(new_hero)
                        console.log(battle.teams[team].heros)
                        battle.teams[team].heros.push(new_hero)
                    }
                }

                //MOCK
                battle.teams[0].heros[1].isActive = true


                this.teams = battle.teams
            })
        }
    }
})


vue_battle.init('js/cfg_hero.json')



// init = (res) => {
//     console.log(res)

//     // vue_battle.r_heros = res.red
//     // vue_battle.b_heros = res.blue
//     vue_battle.teams = res.teams
//     // vue_battle.heros = res.teams.heros

    
// }


// console.log("start")

// load(init)
