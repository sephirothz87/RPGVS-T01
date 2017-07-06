//物理普攻
attack = (attacker,targeter,battle)=>{
	console.log('attack start')
	// console.log(attacker)
	// console.log(targeter)
	// console.log(battle)

	let damage = 0

	damage = physicAttack(attacker.attackP,targeter.defendP)

	//TODO,暴击判定
	if(targeter.getReduceAllNow() >0){
		damage = reduce(damage,targeter.getReduceAllNow())
	}

	console.log(damage)

	targeter.hpNow-=damage

	//死亡判定
	if(targeter.hpNow<=0){
		targeter.hpNow = 0
		targeter.isAlive = false
	}
}