function write(...text){
 console.log(text.reduce((res, val) => 
	res += val, ""))
}

function p(text, target){
	const p = document.createElement("p")
	p.innerText = text
	target.appendChild(p)
}

function loop(cycles, code){
///////
	if(Number.isInteger(cycles)){
for (let i = 0; i < cycles; i++){
 if(code(i) === false){
  break
 }
}
	}else if(typeof cycles === "string"){
for (let i = 0; i < cycles.length; i++){
 if(code(i, cycles[i]) === false){
  break
 }
}
	}else if(Array.isArray(cycles)){
for (let i = 0; i < cycles.length; i++){
 if(code(i, cycles[i]) === false){
  break
 }
}
	}else{
		write("undefined")
	}
///////
}

function save(...items){
	for(let i = 0; i < items.length; i+=2){
let key = items[i]
let val = items[i+1]
localStorage.setItem(key, JSON.stringify(val))
	}
}

function load(item){
	return JSON.parse(localStorage.getItem(item))
}

function rev(text){
	let res = ""
	for (let i = text.length-1; i >= 0; i--){
		res += text[i]
	}
	return res
}

function date(text){
	const date = new Date()
	const Calendar = date.toLocaleDateString().split("/")
	const Time = date.toLocaleTimeString().split(":")
	
	let res = text.replace(/YY/g, Calendar[2])
	res = res.replace(/MN/g, Calendar[1])
	res = res.replace(/DD/g, Calendar[0])
	res = res.replace(/HH/g, Time[0])
	res = res.replace(/MM/g, Time[1])
	res = res.replace(/SS/g, Time[2])
	return res
}
