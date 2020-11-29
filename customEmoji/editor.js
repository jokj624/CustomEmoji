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
				emo.innerHTML = "<img id = \"img\" src=\"" + img_src +"\" style = \"width : 400px; height : 400px; z-index : 2;\" >";
			};
			document.querySelector("div#div2").appendChild(img);
		};
		console.log(image);
		reader.readAsDataURL(image);
	}

}

function setLayer(event) {
	var emo = document.getElementById("div1");
	var img_src = "./img/background.png";
	var str;
	str = emo.innerHTML;
	str += "<img id = \"img\" src=\"" + img_src +"\" style = \" z-index : 1; \">"; 
	emo.innerHTML = str;
}

function clearImg(event) {
	
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var emoticon = document.getElementById("emoticon");
	
	div1.innerHTML = '';
	div2.innerHTML = '';
	emoticon.innerHTML = '';
	
}