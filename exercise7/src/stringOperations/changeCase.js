export function changecase(str, act){
    act = act.toUpperCase()
    if(act === "UPPERCASE"){
        return str.toUpperCase()
    }
    else if(act === "LOWERCASE"){
        return str.toLowerCase()
    }
    else{
        return "NO action has been choosen"
    }
}
