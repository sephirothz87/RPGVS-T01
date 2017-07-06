//用于初始化英雄

initHero = (id,name,hp,mp,attackP,attackM,defendP,defendM) => {
    var hero

    switch(id){
        case 1:
        console.log(1)
        hero = new ZhaoYun(id,name,hp,mp,attackP,attackM,defendP,defendM)
        break
        case 2:hero = new LvBu(id,name,hp,mp,attackP,attackM,defendP,defendM)
        break
    }

    return hero
}