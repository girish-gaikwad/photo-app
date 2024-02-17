
function ai(){
	
	let searchResults = "";
	//  const token = "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"
	const inputTxt = document.getElementById("searchInput").value;
	
	console.log(inputTxt);
	
	
	if (inputTxt == "")
	{  
		searchResults = "<p class='text-center fw-bold'>Not a vaild prompt.</p>";
		console.log("why is not working")
	}
	else{
		
	async function query(data) {
			const response = await fetch(
					"https://api-inference.huggingface.co/models/cloudqi/cqi_text_to_image_pt_v0",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.blob();
		return result;
	}
	
	
	
	async function query1(data) {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.blob();
		return result;
		}

	async function query2(data) {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/shrikant11/pokemon_text_to_image_2",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.blob();
		return result;
		}
	
	
	
	

	
	// for (let i = 0; i < 3; i++) {
	searchResults += `
	<div class="col-md-6 col-lg-4">
	<div class="card searchImg">
	<div id="cardImg">
	<img
	src=""
	class="card-img-top"
	id="aip"
	alt="${inputTxt}"
	/></div>
	<div class="card-body">
	<a
	href="www.google.com"
	class="card-text"
	target="_blank"
	rel="noopener"
	>${inputTxt}</a
	>
	</div>
	</div>
	</div>`;
	
	
	searchResults += `
	<div class="col-md-6 col-lg-4">
	<div class="card searchImg">
	<div id="cardImg">
	<img
	src=""
	class="card-img-top"
	id="aip1"
	alt="${inputTxt}"
	/></div>
	<div class="card-body">
	<a
	href="www.google.com"
	class="card-text"
	target="_blank"
	rel="noopener"
	>${inputTxt}</a
	>
	</div>
	</div>
	</div>`;
	
	searchResults += `
	<div class="col-md-6 col-lg-4">
	<div class="card searchImg">
	<div id="cardImg">
	<img
	src=""
	class="card-img-top"
	id="aip2"
	alt="${inputTxt}"
	/></div>
	<div class="card-body">
	<a
	href="www.google.com"
	class="card-text"
	target="_blank"
	rel="noopener"
	>${inputTxt}</a
	>
	</div>
	</div>
	</div>`;
	// }
	
	
	
	query({"inputs": `${inputTxt}`}).then((response) => {
		// Use image
		const ObjectURL = URL.createObjectURL(response)
		document.querySelector('#aip').src = ObjectURL;
		console.log(ObjectURL)
		// image.src = ObjectURL
	});
	
	query1({"inputs": `${inputTxt}`}).then((response) => {
		// Use image
	    const ObjectURL = URL.createObjectURL(response)
		document.querySelector('#aip1').src = ObjectURL;
		console.log(ObjectURL)
		// image.src = ObjectURL
	});
	
	query2({"inputs": `${inputTxt}`}).then((response) => {
		// Use image
	    const ObjectURL = URL.createObjectURL(response)
		document.querySelector('#aip2').src = ObjectURL;
	        console.log(ObjectURL)
	        // image.src = ObjectURL
	});
	
	
			

	}



	 console.log("else pat is here")

   
   
   $("#inputResults").html(searchResults);
   
	   if (inputTxt.length > 0) {
		 $("#showMoreBtn").removeClass("d-none");
	   } else {
		 $("#showMoreBtn").addClass("d-none");
	   }


}























// api 

// async function query() {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/SaiRaj03/Text_To_Image",
// 		{
// 			headers: { Authorization: `Bearer ${token}` },
// 			method: "POST",
// 			body: JSON.stringify({"inputs": inputTxt.value}),
// 		}
// 	);
// 	const result = await response.blob();
// 	return result;
// }



// query({"inputs": "eagle"}).then((response) => {
// 	// Use image
//     const ObjectURL = URL.createObjectURL(response)
//     document.querySelector('.mainimg1').src = ObjectURL;
//         console.log(ObjectURL)
//         image.src = ObjectURL
// });









// good api 
	// async function query() {
	// 	const response = await fetch(
	// 		"https://api-inference.huggingface.co/models/cloudqi/cqi_text_to_image_pt_v0",
	// 		{
	// 			headers: { Authorization: `Bearer ${token}` },
	// 			method: "POST",
	// 			body: JSON.stringify({"inputs": inputTxt.value}),
	// 		}
	// 	);
	// 	const result = await response.blob();
	// 	return result;
	// }

	// query({"inputs": "parrot"}).then((response) => {
	// 	// Use image
	//     const ObjectURL = URL.createObjectURL(response)
	//     document.querySelector('.mainimg').src = ObjectURL;
	//         console.log(ObjectURL)
	//         image.src = ObjectURL
	// });