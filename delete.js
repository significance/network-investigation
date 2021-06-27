let axios = require('axios');

const delay = ms => new Promise(res => setTimeout(res, ms));

let main = async function(){ 
	// let resp = await axios.get('http://localhost:1633/info/chunk/e60493ef2ba9527d93386b9a9b1351526f1bc91a00117d5eee055ab8ad59ce49');
	let resp = require('./chunks/brocolli-chunks.js');
	let chunks = resp.chunks;
	let i = 0;
	chunks.forEach(async (chunk, i)=>{
		await delay(30*i)
		try {
			let url = `http://localhost:1635/chunks/${chunk.address}`;
			// console.log(url)
			let r = await axios.delete(url);
			console.log(i, chunk.address, r.status);
		} catch(e) {
			if(e.response){
				console.error(i, chunk.address, e.response.status)
			}else{
				console.error(i, chunk.address, e.code)
			}
		}
	})
}

main()


