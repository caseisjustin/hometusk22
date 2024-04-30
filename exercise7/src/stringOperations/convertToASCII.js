export const convtoASCII = (str) => {
    let res = []
    for(let i = 0; i < str.length; i++){
        res.push(str[i].charCodeAt())
    }
    return res
}