class CaesarCipher {
	constructor(shift){
		this.shift = shift
	}

	encode(str){
		let temp = ""
		str = str.toUpperCase()
		for(let i = 0; i < str.length; i++){
			if((str[i] >= 'A' && str[i] <= 'Z')){
				if(String.fromCharCode(str[i].charCodeAt() + this.shift) > 'Z'){
					temp += String.fromCharCode(str[i].charCodeAt()+this.shift-90+64)
				}
				else
					temp += String.fromCharCode(str[i].charCodeAt() + this.shift)
			}
			else{
				temp += str[i]
			}
		}
		return temp
	}

	decode(str){
		let temp = ""
		str = str.toUpperCase()
		for(let i = 0; i < str.length; i++){
			if((str[i] >= 'A' && str[i] <= 'Z')){
				if(String.fromCharCode(str[i].charCodeAt() - this.shift) < 'A'){
					temp += String.fromCharCode(90-(64-(str[i].charCodeAt()-this.shift)))
				}
				else
					temp += String.fromCharCode(str[i].charCodeAt() - this.shift)
			}
			else{
				temp += str[i]
			}
		}
		return temp
	}

}

let caesar = new CaesarCipher(5)
console.log(caesar.encode("Codewars"))
console.log(caesar.decode("BFKKQJX"))