let body = document.body
let contener = document.createElement('div')
contener.className='contener'
body.prepend(contener)
let monkey = document.createElement('div')
monkey.className='cont'
contener.append(monkey)
let close = document.createElement('img')
close.src='close_FILL0_wght400_GRAD0_opsz48.png'
close.className='close'
monkey.append(close)
let monkeynft = document.createElement('img')
monkeynft.src='nft.monkey.jpg'
monkeynft.className='monkey'
monkey.append(monkeynft)
let monkeyspan = document.createElement('span')
monkeyspan.className='write'
monkeyspan.innerText='NFT MONKEY'
monkey.append(monkeyspan)
let yelow = document.createElement('span')
yelow.className='ylow'
yelow.innerText='yellow monkey'
monkey.append(yelow)
//0000000000000000000000000000000000000000000000000000000000000000
let pingin = document.createElement('div')
pingin.className='cont'
contener.append(pingin)
let x = document.createElement('img')
x.src='close_FILL0_wght400_GRAD0_opsz48.png'
x.className='close'
pingin.append(x)
let pinginnft = document.createElement('img')
pinginnft.src='nft.animals.png'
pinginnft.className='monkey'
pingin.append(pinginnft)
let pinginspan = document.createElement('span')
pinginspan.className='write'
pinginspan.innerText='NFT Beautiful PINGUIN'
pingin.append(pinginspan)
let black = document.createElement('span')
black.className='ylow'
black.id='blue'
black.innerText='In costume'
pingin.append(black)

//000000000000000000000000000000000000000000000000000000000000000000000
let people = document.createElement('div')
people.className='cont'
contener.append(people)
let no = document.createElement('img')
no.src='close_FILL0_wght400_GRAD0_opsz48.png'
no.className='close'
people.append(no)
let peoplenft = document.createElement('img')
peoplenft.src='NFT digital art.jpg'
peoplenft.className='monkey'
people.append(peoplenft)
let peoplespan = document.createElement('span')
peoplespan.className='write'
peoplespan.innerText='NFT Sculpture of Man'
people.append(peoplespan)
let color = document.createElement('span')
color.className='ylow'
color.id='black'
color.innerText='Multicolored Man'
people.append(color)
// 0000000000000000000000000000000000000000000000000000000000
let main = document.createElement('div')
main.className='main'
monkey.prepend(main)
let minus = document.createElement('button')
minus.className='minus'
minus.innerHTML='-'
main.append(minus)
let num = document.createElement('span')
num.className='num'
num.innerHTML='0' 
main.append(num)
let plus = document.createElement('button')
plus.className='plus'
plus.innerHTML='+'
main.append(plus)
let one = document.createElement('span')
one.className='one'
one.innerText='1955$'
plus.append(one)
// 000000000000000000000000000000000000000000000000000000000000000000000
let center = document.createElement('div')
center.className='main'
pingin.prepend(center)
let min = document.createElement('button')
min.className='minus'
min.innerHTML='-'
center.append(min)
let number = document.createElement('span')
number.className='num'
number.innerHTML='0'
center.append(number)
let pl = document.createElement('button')
pl.className='plus'
pl.innerHTML='+'
center.append(pl)
let two = document.createElement('span')
two.className='one'
two.id='two'
two.innerText='2500$'
pl.append(two)
// 000000000000000000000000000000000000000000000000000000000000000
let men = document.createElement('div')
men.className='main'
people.prepend(men)
let m = document.createElement('button')
m.className='minus'
m.innerHTML='-'
men.append(m)
let n = document.createElement('span')
n.className='num'
n.innerHTML='0'
men.append(n)
let p = document.createElement('button')
p.className='plus'
p.innerHTML='+'
men.append(p)
let three = document.createElement('span')
three.className='one'
three.id='three'
three.innerText='5670$'
p.append(three)
// 000000000000000000000000000000000000000000000000000000
let a = 0;
plus.addEventListener('click', ()=>{
    a++;
    num.innerHTML=a;
})
minus.addEventListener('click', ()=>{
    if(a>0){
        a--;
        num.innerHTML=a;
    }
})
let o = 1955;
plus.addEventListener('click',()=>{
    o = o + 1955;
    one.innerHTML = ` ${o}$`;
})
minus.addEventListener('click',()=>{
    if(o>0){
        o = o - 1955;
        one.innerHTML=`${o}$`
    }
})
// 000000000000000000000000000000000000000000000000000000
let d = 0;
pl.addEventListener('click', ()=>{
    d++;
    number.innerHTML=d;
})
min.addEventListener('click', ()=>{
    if(d>0){
        d--;
        number.innerHTML=d;
    }
})
let twor = 2500;
pl.addEventListener('click', ()=>{
    twor= twor + 2500;
    two.innerHTML=`${twor}$`;
})
min.addEventListener('click', ()=>{
    if(twor>0){
    twor= twor - 2500;
    two.innerHTML=`${twor}$`;
    }
})
// 0000000000000000000000000000000000000000000000000000000000000
let s = 0;
p.addEventListener('click', ()=>{
    s++;
    n.innerHTML=s;
})
m.addEventListener('click', ()=>{
    if(s>0){
        s--;
        n.innerHTML=s;
    }
})
let wor = 5670;
p.addEventListener('click', ()=>{
    wor= wor + 5670;
    three.innerHTML=`${wor}$`;
})
m.addEventListener('click', ()=>{
    if(wor>0){
    wor= wor - 5670;
    three.innerHTML=`${wor}$`;
    }
})
// 000000000000000000000000000000000000000000000000000000000000
close.addEventListener('click', (e)=>{
 e.target.parentNode.remove(e.parentNode)
})
x.addEventListener('click', (e)=>{
 e.target.parentNode.remove(e.parentNode)
})
no.addEventListener('click', (e)=>{
 e.target.parentNode.remove(e.parentNode)
})


