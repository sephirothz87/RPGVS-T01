class HeroBase {
	constructor(){
        this.id = 0
        this.hp = 100
        this.mp = 100
        this.name = 'Hero'
    }
	constructor(id,hp,mp,name){
        this.id = id
        this.hp = hp
        this.mp = mp
        this.name = name
    }
}

class ZhaoYun extends HeroBase {
}