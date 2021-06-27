let axios = require('axios');

const delay = ms => new Promise(res => setTimeout(res, ms));

let main = async function(){ 
	let resp = await axios.get('http://localhost:1635/peers');
	// let resp = require('./homepage-chunks.js');
	let peers = resp.data.peers;
	let i = 0;
	peers.forEach(async (peer, i)=>{
		await delay(30*i)
		try {
			let url = `http://localhost:1635/peers/${peer.address}`;
			console.log(url)
			let r = await axios.delete(url);
			console.log(i, peer.address, r.status);
		} catch(e) {
			if(e.response){
				console.error(i, peer.address, e.response.status)
			}else{
				console.error(i, peer.address, e.code)
			}
		}
	})
}

main()