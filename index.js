let axios = require('axios');

const delay = ms => new Promise(res => setTimeout(res, ms));

let main = async function(){ 
	// let resp = await axios.get('http://localhost:1633/info/f73128e84f44477ff6c8d6c1768195c08dd80fb14c89a0f1a84f16b3f1d4392b');
	let chunks = [{"address":"a734e6c14d8b5ef9ea537b67b5b637cb9c3c3d634fc0c5bd419a6f1d3ae073d6"},{"address":"8504f2a107ca940beafc4ce2f6c9a9f0968c62a5b5893ff0e4e1e2983048d276"},{"address":"10a5fea4ff78407a9f6b7e5e9b13433b1de88fb7af3760a9783e91c03dfee422"},{"address":"aa125a27572b5d1c5b598b47a4e725d183c928a642257782e3bb4a199d7bfea7"},{"address":"3298cef29b29a94a35ce165abb3ead3422cd2a488662789bec24943cb6986efb"},{"address":"82a88ed6148d61f4d3c1ae9949efdeda3f3be327259b6ac083c101550ed3f06b"},{"address":"d221e5155027da0c43768dcb5f694fe2bb794c06d05f6a2591b99a7f1502578a"},{"address":"2f36e2f0b11d584325d8ad6450f8450740b9227c78eae45fbcffd0708e7e92d5"},{"address":"31d1806cd758db48be80e3d89967a58a9c09b6673f938f9b0f10252de0e489fb"},{"address":"a489f6b8c5b8107925b781605471dc5ed80a4f36dfdc49cf32f8bacc9be799e4"},{"address":"51a8f090ebe50a202779951b7a646492d3a2dbb1f8d72e65a7b4ad0a87f3f97b"},{"address":"f944b67f1d2a5550937b1c75c5b4fe08abf2288fea97f27c41ab94091d81a651"},{"address":"b95ca9d64d984713581714d672b21996d2d36a30ac240725dcee1389c33072f8"},{"address":"a7d23cc4d0cb7d8446db304656b1cc7a0bfd89358065f1f99249f96132c5e167"},{"address":"2a79d789447bdf031f2c24b7a71d720ee97edc8a7953a0bc166e33b2b18e54a3"},{"address":"576730bd6a0c986837936f7970b051e8959724294fcc045b18d28021f6e9abd2"},{"address":"505a985d2296a2399240d3da159a5f510b48ae857068fef4c10dd5afc02e25a5"},{"address":"a887188bf9268a06dd265a21d676e00fba4443f961c33c65aca937b6f057759b"},{"address":"651b0ccbfd33a8654364810fbaa785a6ce4ad21547ba34abb10952f6700d5ba9"},{"address":"4cd72663a9a7588f15ed655e2a68f51e4c93c019035f92573b7e43bbf56abcfd"},{"address":"bd15dabe697a0c2cbc7f22f044d6c75e276df76e26e3a4f93492be605e23468a"},{"address":"a4cfaf87be9ee7844f9e121b1edc6b0c4955bd07a23c5cfa55fe9253280aa779"},{"address":"951c26e2a9ba0943004a630fc09582d84e679e7676ad99ad2e67ff0a143a8ff5"},{"address":"aa8bcda35bc2e584688f4a192e66df254f8d3f14d27002f60498205d5faf5829"},{"address":"534fe5539f27c9fa3b54aeced8b9e92564754475c4611efe0e3254a723341a46"},{"address":"e2b2350cf43d9ff7e84826d99be42ec004523f4859f94755298771ced6dd301c"},{"address":"f9aa939b23a1a7d4fccd4d9b2a7bf61ee666c5fbed6053ea79a57f6a5e017b8b"},{"address":"3fbce5a08b8a187d65263298fb249304185ba4f9caabbed2f74121c152b63c09"},{"address":"a36b15dbc953ccd857819a9ba6de5c8c6e5b5f8200f52ba57dfd2e355caea2dc"},{"address":"d6dd7f78a7b5ccf65fcdaf9657380baeacf2c22e6491ebb04d5e6fcc179070d3"},{"address":"72234b088675a684ee7a15028979a98a00df18a29eb8bab7dd78fe47d8e18a02"},{"address":"e4fb6f060b878820c5031bbaee8a95de853a39e9a158327a523e16c25a9b52c1"},{"address":"fcf4ce6406beb27b92293c39c80b31084bbd93afbca32731e939a7045388eda7"},{"address":"074a111d995c2c4c9f971f51aa85cf1967d55a490724949b8d15146321a27790"},{"address":"4c54514dead4329c7bbfa06d9cec30692f97fa9489a9ec641d5d3ec9599b4a4e"},{"address":"5217f5158314b102c7d41e8885b8aa1740a3a6580029110f8a45d255503e515d"},{"address":"64ac21a5035cf57d91752b07d0cd23aae51dbd74c7c80932f8f29e8c47911ad3"},{"address":"6f16f56c1c58216ab430df7d3d6abcc7b03bc47fa3f2ad2f96277d141b4c4923"},{"address":"7e734a39d176bddff4b5eafe9a56761c37103c0ae750db47d08bbc971bf960a1"},{"address":"e9f1d0a0d40c31b7aae686137a5967b8479812270868d055105de88b702f4da1"}];
	let i = 0;
	chunks.forEach(async (chunk, i)=>{
		await delay(300*i)
		try {
			let url = `http://localhost:1633/chunks/${chunk.address}`;
			// console.log(url)
			let r = await axios.get(url);
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

