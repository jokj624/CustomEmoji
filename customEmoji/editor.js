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
				emo.innerHTML = "<img id = \"img\" src=\"" + img_src +"\" style = \"width : 300px; height : 300px; z-index : 2;\" >";
			};
			document.querySelector("div#div2").appendChild(img);
		};
		console.log(image);
		reader.readAsDataURL(image);
	}

}


function clearImg(event) {
	var emoticon = document.getElementById("emoticon");
	var a2 = document.getElementById("a2");
	var date_div = document.getElementById("date_div");
	var name_div = document.getElementById("name_div");
	var a_div = document.getElementById("a");
	
	
	emoticon.innerHTML = "";
	a2.innerHTML = "";
	date_div.innerHTML = "";
	name_div.innerHTML = "";
	a_div.innerHTML = "";
}

function editText(event) {
	var a2 = document.getElementById("a2");
	var array = ["최대 10자", "최대 30자"];
	
	var ul = document.getElementById("newul");
	var div = document.getElementById("listD");
	
	if(ul !== null) {
		ul.parentNode.removeChild(ul);
		div.parentNode.removeChild(div);
	}
	
	var div = document.createElement("div");
	var ul=document.createElement('ul');
	
	div.setAttribute("id", "listD");
	ul.setAttribute("id", "newul");
	div.innerHTML = "글자 수 선택";
	a2.appendChild(div);
	a2.appendChild(ul);
	
	var i = 0;
	for (i; i<array.length; i++){
	    var li=document.createElement('li');
	    li.setAttribute("id", i);
	    ul.appendChild(li);
	    
	    li.innerHTML=li.innerHTML + array[i];
	    if(i == 0) {
	    	li.onclick = function () {
	    		addText10();};
	    }
	    if(i == 1) {
	    	li.onclick = function () {
	    		addText30();};
	    }
	}
	var ul = document.getElementById("newulT");
	var div = document.getElementById("listTO");
	if(ul !== null) {
		ul.parentNode.removeChild(ul);
		div.parentNode.removeChild(div);
	}
	
	var array = ["폰트", "색상"];
	var font_array = ["선택","나눔바른고딕", "a타이틀고딕1", "a타이틀고딕2", "a타이틀고딕5"];
	var div1 = document.createElement("div");
	var ul=document.createElement("ul");
	var form = document.createElement('form');
	var select = document.createElement('select');
	var input = document.createElement("input");

	div1.setAttribute("id", "listTO");
	ul.setAttribute("id", "newulT");
	form.setAttribute("id", "select_form");
	select.setAttribute("id", "select");
	input.setAttribute("id", "color_input");
	input.setAttribute("type", "color");

	
	div1.innerHTML = "Text Option";
	a2.appendChild(div1);
	a2.appendChild(ul);
	select.style.display = "none";
	for(var j=0; j<font_array.length; j++){
		var option = document.createElement('option');
		select.appendChild(option);
		option.innerHTML = option.innerHTML + font_array[j];
	}
	
	for (var j = 0; j<array.length; j++){
	    var li=document.createElement('li');

	    if(j==0)	li.setAttribute("id", "font_li");; 
	    if(j==1)	li.setAttribute("id", "color_li");
	    
	    ul.appendChild(li);
	    li.innerHTML=li.innerHTML + array[j];

		if(j == 0) {
			var color = document.getElementById("#color_li");
			ul.insertBefore(select, color);
	    	$("#font_li").click(function() {  
	   			if($("#select").is(":visible")){
	   				  $("#select").slideUp();
	   			}
	   			else{	
	   				$("#select").slideDown();
	   			}});
		}
	    if(j == 1) {
	    	color_li.appendChild(input);
	    }
		i++;
		
	}
}

function fontColor() {
	//var font = document.getElementById("");
	

}

function addText10() {
	var text_form = document.getElementById("text_form");
	if(text_form !== null) {
		text_form.innerHTML = "";
	}
	var str;
	str = text_form.innerHTML;
	str += "<input type = 'text' placeholder='Sample Text' maxlength='10' id = '" + count + "'\"style =  \"z-index : 3; \">"; 
	text_form.innerHTML = str;
	s.push("count");
	count++;
}

function addText30() {
	var div1 = document.getElementById("textT_form");
	if(div1 !== null) {
		div1.innerHTML = "";
	}
	var str;
	str = div1.innerHTML;
	str += "<textarea id='textarea' rows ='6' cols='5' wrap = 'hard' placeholder='Sample Text' maxlength='30' \"style =  \"z-index : 4; \"></textarea>"; 
	div1.innerHTML = str;
	s.push("textT");
}



function dateandname(event) {
	var a2 = document.getElementById("a2");
	a2.innerHTML ="";
	var array = ["사용자 이름", "날짜"];
	
	var ul = document.getElementById("newul");
	var div = document.getElementById("listD");
	
	if(ul !== null) {
		ul.parentNode.removeChild(ul);
		div.parentNode.removeChild(div);
	}
	
	var div = document.createElement("div");
	var ul=document.createElement('ul');
	
	div.setAttribute("id", "listD");
	ul.setAttribute("id", "newul");
	div.innerHTML = "Select Option";
	a2.appendChild(div);
	a2.appendChild(ul);
	
	for (var i=0; i<array.length; i++){
	    var li=document.createElement('li');
	    li.setAttribute("id", i);
	    ul.appendChild(li);
	    
	    li.innerHTML=li.innerHTML + array[i];
	    if(i == 0) {
	    	li.onclick = function () {
	    		addname();};
		}
	    if(i == 1) {
	    	li.onclick = function () {
	    		adddate();};
	    }
	}
}

function addname(event) {
	var dateandname = document.getElementById("name_div");
	var img_src = "./img/name.png";
	var str;
	str = dateandname.innerHTML;
	str += "<img id = \"name\" src=\"" + img_src + "\" style =  \"z-index : 4; \">"; 
	dateandname.innerHTML = str;
	s.push("name");
}

function adddate(event) {
	var dateandname = document.getElementById("date_div");
	var img_src = "./img/date.png";
	var str;
	str = dateandname.innerHTML;
	str += "<img id = \"date\" src=\"" + img_src + "\" style =  \"z-index : 4; \">";
	dateandname.innerHTML = str;
	s.push("date");
}

function undo(event){
	   var data = s.pop();
	   if(s.top > -1){
	      if(data == "count"){
	         var child = document.getElementById(count-1);
	         count--;
	      }
	      else if(data == "textT"){
	         var child = document.getElementById("textarea");
	      }
	      else if(data == "name"){
	         var child = document.getElementById("name");
	      }
	      else if(data == "date"){
	         var child = document.getElementById("date");
	      }
	      child.remove();
	   }
}

function Stack(){
	this.dataStore = [];
	this.top=0;
	this.push= push;
	this.pop = pop;   
}
function push(element){
	this.dataStore[this.top++] = element;
}
function pop(){
	return this.dataStore[--this.top];
}

var s = new Stack();
var count = 0;