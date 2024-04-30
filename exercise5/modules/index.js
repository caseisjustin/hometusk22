import {frmem} from './memory.js'
import {process} from "./process.js"
import {tim} from "./uptime.js"
function all() {
	console.log(frmem()/1024/1024, "MB mem left")
	console.log(tim(), "seconds took to exec this code")
	console.log(process._events)
}
export {
	all
}