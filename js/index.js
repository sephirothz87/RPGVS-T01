hero_data = (id = 0, name = "Zhaoyun") => {
    return {
        id: id,
        name: name
    }
}

Vue.component('hero', {
    template: `
        <td>
            {{name}}
        </td>
    `,
    props: ['name']
})

vue_battle = new Vue({
    el: '#battle',
    data: {
        //战场上的所有信息，都包含在这个对象中
        battle: {
            teams: []
        }
    },
    mounted: function() {
        this.init('js/cfg_hero.json')
    },
    methods: {
        // init:function(jsonPath){//标准的ES5写法
        // init:jsonPath=>{//箭头函数不生效，因为this继承的问题，此时this不再是view对象，而是window
        init(jsonPath) { //这种方法可以,在vue体系下这是最简单的写法
            console.log('init start')
            this.$http.get(jsonPath).then(res => { //可以使用箭头函数
                let data = res.data
                console.log(res.data)
                    // MOCK
                    // 假设从上一个页面读取到的阵容信息是
                teams = [
                    ['001', '002', '001'],
                    ['002', '001', '002']
                ]

                battle = {
                    teams: []
                }

                for (team in teams) {
                    console.log(teams[team])
                    battle.teams.push({
                        name: 'team_' + team,
                        heros: []
                    })

                    for (hero in teams[team]) {
                        let hero_info = data[teams[team][hero]]

                        // let new_hero = new HeroBase(hero_info['id'], hero_info['name'], hero_info['hp'], hero_info['mp'])


                        let new_hero = initHero(hero_info['id'], hero_info['name'], hero_info['hp'], hero_info['mp'], hero_info['attackP'], hero_info['attackM'], hero_info['defendP'], hero_info['defendM'])

                        battle.teams[team].heros.push(new_hero)
                    }
                }

                //MOCK
                battle.teams[0].heros[1].isActive = true


                // this.teams = battle.teams
                this.battle = battle
            })
        }
    }
})
