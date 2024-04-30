function filtarr(arr){
    let res = []
    res = new Set(arr)
    return res
}

// console.log(filtarr([1, 1, 2, 3, 3, 3, 4, 4, 5, 6]))
export {filtarr}