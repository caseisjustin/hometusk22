console.log(process.argv)
let a = process.argv[2]
let sign = process.argv[3]
let b = process.argv[4]

if(sign == '+'){
	console.log(+a + +b)
}
else if(sign == '-'){
	console.log(+a - +b)
}
else if(sign == '/'){
	console.log(+a / +b)
}
else if(sign == '*'){
	console.log(+a * +b)
}