var os = require("os");
console.log(process.argv)
process.argv[2] = "check-memory"
if(process.argv[2] == "check-memory"){
	console.log("FREE MEMORY", os.freemem(), "Bytes")
	console.log("FREE MEMORY", os.freemem()/1000000, "MB")
	console.log("FREE MEMORY", os.freemem()/1000000/1024, "GB")

}
else{
	console.log("No command provided")
}