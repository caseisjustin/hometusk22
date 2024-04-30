import { objtoarr, arrtoobj, strtobool } from "./converters/index.js";
import process from "process"
if(process.argv[2] == "Object"){
    console.log(objtoarr(process.argv[3]))
    // EXAMPLE to cmd --- (node hometusk22/exercise6/main.js '{ "ok": 1, "no": 2}' )
}

else if(process.argv[2] == "Array"){
    console.log(arrtoobj(process.argv[3]))
    // EXAMPLE to cmd --- ( node hometusk22/exercise6/main.js '[[1, 2], [2, 3]]' )
}

else if(process.argv[2] == "String" || process.argv[2] == "Boolean"){
    console.log(strtobool(process.argv[3]))
    // EXAMPLE to cmd --- ( node hometusk22/exercise6/main.js (String || Boolean) (0, 1, undefined, false, true, etc...) )
}