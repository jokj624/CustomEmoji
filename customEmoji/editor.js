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
   if(emo !== null) {
      emo.innerHTML = "";
   }
   var img_src = "./img/background.png";
   var str;
   str = emo.innerHTML;
   str += "<img id = \"img\" src=\"" + img_src +"\" style = \" z-index : 1; \">"; 
   emo.innerHTML = str;
}

function clearImg(event) {
   var div1 = document.getElementById("div1");
   var emoticon = document.getElementById("emoticon");
   var text = document.getElementById("text");
   var textT = document.getElementById("textT");
   var a2 = document.getElementById("a2");
   var date = document.getElementById("date_div");
   var name = document.getElementById("name_div");
   
   div1.innerHTML = '';
   emoticon.innerHTML = '';
   text.innerHTML = "";
   textT.innerHTML = "";
   a2.innerHTML = "";
   date.innerHTML = "";
   name.innerHTML = "";
   
}

function editText(event) {
   var a2 = document.getElementById("a2");
   var array = ["최대 1자", "최대 5자", "최대 30자"];
   
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
   
   for (var i=0; i<array.length; i++){
       var li=document.createElement('li');
       li.setAttribute("id", i);
       ul.appendChild(li);
       
       li.innerHTML=li.innerHTML + array[i];
       if(i == 0) {
          li.onclick = function () {
             addText1();};
      }
       if(i == 1) {
          li.onclick = function () {
             addText5();};
       }
       if(i == 2) {
          li.onclick = function () {
             addText30();};
       }
   }
   
}

function addText1() {
   var div1 = document.getElementById("text");
   var img_src = "./img/text1.png";
   var str;
   str = div1.innerHTML;
   str += "<img class = 'text' id = '" + count + "' src=\"" + img_src + "\" style =  \"z-index : 3; \">"; 
   div1.innerHTML = str;
   s.push("count");
   count++;
}

function addText5() {
   var div1 = document.getElementById("text");
   var img_src = "./img/text5.png";
   var str;
   str = div1.innerHTML;
   str += "<img class = 'text' id = '" + count + "' src=\"" + img_src + "\" style =  \"z-index : 3; \">"; 
   div1.innerHTML = str;
   s.push("count");
   count++;
}

function addText30() {
   var a2 = document.getElementById("a2");
   var array = ["./img/rsquare_icon.png", "./img/circle_icon.png", "./img/cloud_icon.png"];
   
   var ul = document.getElementById("talkul");
   var div = document.getElementById("listT");
   
   if(ul !== null) {
      ul.parentNode.removeChild(ul);
      div.parentNode.removeChild(div);
   }
   
   var div = document.createElement("div");
   var ul=document.createElement('ul');
   
   div.setAttribute("id", "listT");
   ul.setAttribute("id", "talkul");
   div.innerHTML = "Text Option";
   a2.appendChild(div);
   a2.appendChild(ul);
   
   for (var i=0; i<array.length; i++){
       var li=document.createElement('li');
       li.setAttribute("id", i);
       ul.appendChild(li);
       
       li.innerHTML=li.innerHTML + "<img  id = 'talk' src = '" + array[i] + "'>";
       if(i == 0) {
          li.onclick = function () {
             rsquare();};
      }
       if(i == 1) {
          li.onclick = function () {
             circle();};
       }
       if(i == 2) {
          li.onclick = function () {
             cloud();};
       }
   }
}

function rsquare() {
   var div1 = document.getElementById("textT");
   if(div1 !== null) {
      div1.innerHTML = "";
   }
   var img_src = "./img/rsquare.png";
   var str;
   str = div1.innerHTML;
   str += "<img id = \"textTalk\" src=\"" + img_src + "\" style =  \"z-index : 4; \">"; 
   div1.innerHTML = str;
   s.push("textT");
}
function circle() {
   var div1 = document.getElementById("textT");
   if(div1 !== null) {
      div1.innerHTML = "";
   }
   var img_src = "./img/circle.png";
   var str;
   str = div1.innerHTML;
   str += "<img id = \"textTalk\" src=\"" + img_src + "\" style =  \"z-index : 4; \">"; 
   div1.innerHTML = str;
   s.push("textT");
}
function cloud() {
   var div1 = document.getElementById("textT");
   if(div1 !== null) {
      div1.innerHTML = "";
   }
   var img_src = "./img/cloud.png";
   var str;
   str = div1.innerHTML;
   str += "<img id = \"textTalk\" src=\"" + img_src + "\" style =  \"z-index : 4; \">"; 
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
            var child = document.getElementById("textTalk");
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