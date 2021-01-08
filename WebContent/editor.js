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
	var text_div = document.getElementById("text_form");
	var textT_div = document.getElementById("textT_form");
	
	emoticon.innerHTML = "";
	a2.innerHTML = "";
	date_div.innerHTML = "";
	name_div.innerHTML = "";
	text_div.innerHTML = "";
	textT_div.innerHTML = "";
	var text = document.getElementById("text");
	text.style.top ="27%";
	text.style.left = "39%";
	text.style.marginLeft = "-150px";
	text.style.marginTop = "20px";	//초기화
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
	
	var array = ["폰트", "위치", "색상"];
	var font_array = ["선택","나눔바른고딕", "궁서", "a타이틀고딕2", "a타이틀고딕5"];
	var lo_array = ["상", "하", "좌", "우"];
	
	var div1 = document.createElement("div");
	var ul=document.createElement("ul");
	var form = document.createElement('form');
	var select = document.createElement('select');
	var lo_select = document.createElement('select');
	var input = document.createElement("input");
	var radio = document.createElement("input");
	var radio2 = document.createElement("input");

	div1.setAttribute("id", "listTO");
	ul.setAttribute("id", "newulT");
	form.setAttribute("id", "select_form");
	select.setAttribute("id", "select");
	select.setAttribute("onchange", "changeFont()");
	input.setAttribute("id", "color_input");
	input.setAttribute("onchange", "changeColor()");
	input.setAttribute("type", "color");
	lo_select.setAttribute("id", "lo_select");
	lo_select.setAttribute("onchange", "changeLocation()");
	radio.setAttribute("type", "checkbox");
	radio.setAttribute("id", "lo_radio");
	radio.setAttribute("name", "choose1");
	radio2.setAttribute("type", "checkbox");
	radio2.setAttribute("id", "lo_radio2");
	radio2.setAttribute("name", "choose2");
	
	div1.innerHTML = "Text Option";
	a2.appendChild(div1);
	a2.appendChild(ul);
	select.style.display = "none";
	lo_select.style.display = "none";
	
	for(var j=0; j<font_array.length; j++){
		var option = document.createElement('option');
		select.appendChild(option);
		option.innerHTML = option.innerHTML + font_array[j];
	}
	for(var j=0; j<lo_array.length; j++){
		var option = document.createElement('option');
		lo_select.appendChild(option);
		option.innerHTML = option.innerHTML + lo_array[j];
	}
	
	
	for (var j = 0; j<array.length; j++){
	    var li=document.createElement('li');

	    if(j==0)	li.setAttribute("id", "font_li");; 
	    if(j==1)	li.setAttribute("id", "lo_li");
	    if(j==2)	li.setAttribute("id", "color_li");
	    
	    ul.appendChild(li);
	    li.innerHTML=li.innerHTML + array[j];
	    
		if(j == 0) {
			var lo = document.getElementById("#lo_li");
			ul.insertBefore(select, lo);
	    	$("#font_li").click(function() {  
	   			if($("#select").is(":visible")){
	   				  $("#select").slideUp();
	   			}
	   			else{	
	   				$("#select").slideDown();
	   			}});
	    	
	    	
		}
	    if(j==1){
	    	var color = document.getElementById("#color_li");
	    	var lo_radio2 = document.getElementById("#lo_radio2");
	    	ul.insertBefore(radio, color);
	    	var label = document.createElement("label");

	    	var label2 = document.createElement("label");
	    	ul.insertBefore(label, lo_radio2);

			ul.insertBefore(radio2, color);
			ul.insertBefore(label2, color);
			
	    	label.innerHTML = label.innerHTML + "10자";
	    	label2.innerHTML = label2.innerHTML + "30자<br>";
	          ul.insertBefore(lo_select, color);
	    	$("#lo_li").click(function() {  
	   			if($("#lo_select").is(":visible")){
	   				  $("#lo_select").slideUp();
	   			}
	   			else{	
	   				$("#lo_select").slideDown();
	   			}});

	    }
	    if(j == 2) {
	    	li.appendChild(input);
	    }
		
	}
}

function changeFont() {
	var val = $("#select option:selected").val();
	var text = document.getElementById("textarea10");
	var textT = document.getElementById("textarea");
//	console.log(val);
	if(text !== null){
		text.style.fontFamily = val;
	}
	if(textT !== null){
		textT.style.fontFamily = val;

	}
}
function changeColor(){
	var color2 = document.getElementById('color_input').value;
	var text = document.getElementById("textarea10");
	var textT = document.getElementById("textarea");
	if(text !== null){
		text.style.color = color2;
	}
	if(textT !== null){
		textT.style.color = color2;
	}	
}
function changeLocation(){
   var val = $("#lo_select option:selected").val();
   console.log(val);
   var w,h,t,l,ml;
   
   if($("input[name='choose1']").is(':checked')==true){
      var text = document.getElementById("text");
      var textarea = document.getElementById("textarea10");
      if(val == "상" || val == "하"){ //상하
         w = "300px";
         h = "40px";
         l = "50%";
         ml = "-150px";
		 mt = "-200px";
         if(val == "상"){
            mt = "-202px";
         }
         else{
            mt = "160px";
         }
      }
      else if (val == "좌" || val =="우"){//좌우
         w = "40px";
         h = "300px";
         t = "50%";
		 l = "50%";
		 ml = "-20px";
		 mt = "-150px";
         if(val == "우"){
            ml = "160px"; 
         }
         else{
            ml = "-202px";
         }
      }
   }
   else if($("input[name='choose2']").is(':checked')==true){
      var text = document.getElementById("textT");
      var textarea = document.getElementById("textarea");
   
      if(val == "상" || val == "하"){ //상하
         w = "250px";
         h = "80px";
         l = "50%";
         ml = "-125px";
		 mt = "-40px";
         if(val == "상"){
            mt = "-242px";
         }
         else{
            mt = "160px";
         }
      }
      else if (val == "좌" || val =="우"){//좌우
         w = "130px";
         h = "200px";
         t = "50%";
		 ml = "-65px";
		 mt = "-100px";
         if(val == "좌"){
            ml = "-292px";
         }
         else{
            ml = "160px";
         }
      }
   }
   
   textarea.style.width = w;
   textarea.style.height = h;
   text.style.width = w;
   text.style.height = h;
   text.style.top = t;
   text.style.left = l;
   text.style.marginLeft = ml;
   text.style.marginTop = mt;
   
}
function addText10() {
	var text_form = document.getElementById("text_form");
	if(text_form !== null) {
		text_form.innerHTML = "";
	}
	var str;
	str = text_form.innerHTML;
	str += "<textarea id='textarea10' rows='1' cols='10' wrap = 'hard' placeholder='Sample Text' maxlength='10' style =  \"z-index : 3; resize : none\">"; 
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
	str += "<textarea id='textarea' rows ='6' cols='5' wrap = 'hard' placeholder='Sample Text' maxlength='30' style =  \"z-index : 4; resize : none\"></textarea>"; 
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