supply = []
basic = []
east = []
north = []

// 基本
// 6
b2 = ["隠れ家","寄付","城壁","斥候","願いの泉","早馬"]
// 8
b3 = ["埋もれた財宝","交易船","御用商人","都市開発","破城槌","星読みの魔女","魔法の護符","よろず屋"]
// 8
b4 = ["追い立てられた魔獣","お付きの侍女","開墾令","銀行","図書館","のみの市","補給部隊","歩兵大隊"]
// 7
b5 = ["皇室領","近衛騎士団","呪詛の魔女","舞踏会","冒険者","魅了術の魔女","錬金術師",]
// 2
b6 = ["辺境伯","噂好きの公爵夫人"]

// 極東
// 3
e2 = ["家守の精霊","お金好きの妖精","楽市楽座"]
// 6
e3 = ["区画整理","クノイチ","高価な美術品","伝書鳩","密偵","弓兵隊"]
// 7
e4 = ["鬼族の戦士","課税","鉱山都市","サムライ","港町","見習い魔女","割符"]
// 3
e5 = ["陰陽師","騎馬武者","結盟"]
// 3
e6 = ["公正な取引","大名","精霊契約"]

// 北限
n2 = ["ケットシー","幸運の銀貨"]
n3 = ["洗礼","名馬"]
n4 = ["ドワーフの宝石職人"]
n5 = ["豪商","地方役人"]
n6 = ["工業都市","独占"]

basic.push(...b2)
basic.push(...b3)
basic.push(...b4)
basic.push(...b5)
basic.push(...b6)

east.push(...e2)
east.push(...e3)
east.push(...e4)
east.push(...e5)
east.push(...e6)

north.push(...n2)
north.push(...n3)
north.push(...n4)
north.push(...n5)
north.push(...n6)

randomizer = []
supnum = []

function supply_select(){
    var arr = [];
    supnum.length = 0
    for(var i=0; i<max; i++){
        arr[i]=i
    }
    
    for(let len = arr.length, j=0 ; j<10; j++, len--){
        x = Math.floor(Math.random()*len);
        supnum.push(arr[x])
        supply.push(randomizer[arr[x]]);
        arr[x] = arr[len-1];
        
    }
}

function basic_supply(){  
    supply.length = 0
    randomizer.length = 0
    randomizer.push(...basic);
    max = randomizer.length
    supply_select();
    document.getElementById("card_basic").innerHTML = supply;
}

function east_supply(){
    supply.length = 0
    randomizer.length = 0
    randomizer.push(...basic);
    randomizer.push(...east);
    max = randomizer.length
    supply_select();
    document.getElementById("card_east").innerHTML = supply;
}

function north_supply(){
    supply.length = 0
    randomizer.length = 0
    randomizer.push(...basic);
    randomizer.push(...east);
    randomizer.push(...north);
    max = randomizer.length
    supply_select();
    document.getElementById("card_north").innerHTML = supply;
}
