let axios = require('axios');

const delay = ms => new Promise(res => setTimeout(res, ms));

let main = async function(){ 
	// let resp = await axios.get('http://localhost:1633/info/chunk/f73128e84f44477ff6c8d6c1768195c08dd80fb14c89a0f1a84f16b3f1d4392b');
	// let chunks = resp.data.chunks;
	let resp = require('./chunks/aloe-chunks.js');
	let chunks = resp.chunks;
	let i = 0;
	chunks.forEach(async (chunk, i)=>{
		await delay(300*i)
		try {
			let url = `http://15.237.115.132:1633/chunks/${chunk.address}`;
			// console.log(url)
			let r = await axios.get(url);
			// console.log(i, chunk.address, r.status);
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

