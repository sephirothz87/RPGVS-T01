noise= ()=>{
	return Math.ceil(Math.random() * 9)-5
}

physicAttack = (attackP,defendP)=>{
	return Math.round(attackP*602/(defendP+602) + noise())
}

reduce = (damage,reduce)=>{
	return Math.round(damage*(1-reduce))
}