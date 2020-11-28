function setThumbnail(event) {
	for (var image of event.target.files) { 
		var reader = new FileReader();
		reader.onload = function(event) {
			var img = document.createElement("img");
			var emo = document.getElementById("emoticon");
			var img_src = event.target.result;

			img.setAttribute("src", event.target.result);
			
			
			img.width = "250";
			img.height = "250";
			img.onclick = function(event) {
				emo.innerHTML = "<img src=\"" + img_src +"\" style = \"width : 400px; height : 400px; \" >"; 

			};
			document.querySelector("div#div2").appendChild(img);
		};
		console.log(image);
		reader.readAsDataURL(image);
	}

}