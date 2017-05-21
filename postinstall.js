var fs = require( "fs" ),
	unzip = require( "unzip" ),
	os = require("os");

if(os.platform() !== 'linux'){
    fs.createReadStream( "./precompiled_modules.zip" ).pipe( unzip.Extract( { path: "." } ) );
}else{
	console.log("You're on linux, probably no need for precompiled modules.\nOtherwise just unzip precompiled_modules.zip into the dxsync directory.\n");
}
