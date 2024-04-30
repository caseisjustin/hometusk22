function strtobool(str){
    if(str === "true"){
        return true
    }
    else if(str === "false"){
        return false
    }
    else if(str == "0" || str == "undefined"){
        return false
    }
    else{
        return true
    }
}
export {strtobool}