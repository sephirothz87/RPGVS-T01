//用户管理英雄技能的基础JS类

class HeroBase {
	constructor(id,name,hp,mp,attackP,attackM,defendP,defendM){
		//----------------------------基础属性（面板）----------------------------
        this.id = id
        this.hp = hp
        this.mp = mp
        this.name = name

        //物攻物防法攻法防
        this.attackP = attackP
        this.attackM = attackM
        this.defendP = defendP
        this.defendM = defendM

        //免伤，暂时默认都是0
        this.reduceP = 0
        this.reduceM = 0
        this.reduceAll = 0

        //----------------------------装备----------------------------
        this.equip = []

        //----------------------------附加属性----------------------------
        this.hpPlus = 0
        this.mpPlus = 0
        this.reduceAllPlus = 0

        //----------------------------实时属性----------------------------
        this.isAlive = true
        this.isActive = false
        this.hpMaxNow = this.hp + this.hpPlus
        this.mpMaxNow = this.mp + this.mpPlus
        this.hpNow = this.hpMaxNow
        this.mpNow = this.mpMaxNow
        this.reduceAllNow = this.reduceAll + this.reduceAllPlus


        //----------------------------时序函数----------------------------
        this.onStartAttack = undefined

        this.onDamage = undefined
        this.onDamage = undefined
        this.onDamagePhysic = undefined
        this.onDamageMagic = undefined
        this.onDamageFinal = undefined




        // this.getReduceAllPlus = ()=>{return this.ReduceAllPlus}
        // // this.getReduceAllNow = ()=>{return this.reduceAllNow}
        // this.getReduceAllNow = ()=>{return this.reduceAll + this.getReduceAllPlus()}
    }

    getReduceAllPlus(){return this.reduceAllPlus}
    // this.getReduceAllNow = ()=>{return this.reduceAllNow}
    getReduceAllNow(){return this.reduceAll + this.getReduceAllPlus()}

//     onDamagePhysic(damage){
//     	return damage
//     }

//     onDamageFinal(damage){
//     	return damage
//     }

//     onDamageFinal(damage){
//     	return damage
//     }
}

class ZhaoYun extends HeroBase {
	constructor(id,name,hp,mp,attackP,attackM,defendP,defendM){
		super(id,name,hp,mp,attackP,attackM,defendP,defendM)
        // this.onDamageFinal = (damage) => {
        // 	console.log("计算赵云的最终伤害")
        // 	return damage + 100;
        // }

        // this.getReduceAll = ()=>{
        // 	new （this.hpMaxNow - this.hpNow）/this.hpMaxNow/3
        // 	return this.reduceAll
        // }

        // this.getReduceAllPlus = ()=>{
        // 	let reduce_all_plus = (this.hpMaxNow - this.hpNow)/this.hpMaxNow/3
        // 	// this.reduceAllPlus = reduce_all_plus//要不要set一下还要考虑
        // 	return reduce_all_plus;
        // }
    }

    getReduceAllPlus(){
    	let reduce_all_plus = (this.hpMaxNow - this.hpNow)/this.hpMaxNow/3
    	// this.reduceAllPlus = reduce_all_plus//要不要set一下还要考虑
    	return reduce_all_plus;
    }
}

class LvBu extends HeroBase {
}