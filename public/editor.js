function setThumbnail(event) {
    for (var image of event.target.files) { 
       var reader = new FileReader();
       reader.onload = function(event) {
          var img = document.createElement("img");
          var emo = document.getElementById("emoticon");
          var img_src = event.target.result;
          img.setAttribute("src", event.target.result);
     
          img.width = "200";
          img.height = "200";
          img.onclick = function(event) {
              clearImg();
             emo.innerHTML = "<img id = \"img\" src=\"" + img_src +"\" style = \"width : 300px; height : 300px; z-index : 2;\" >";
          };
          document.querySelector("div#div2").appendChild(img);
          imgcnt = $("#div2 > img").length;
           generate(); 
       };
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
     var textT = document.getElementById("textT");
     text.style.top ="50%";
     text.style.left = "50%";
     text.style.marginLeft = "-150px";
     text.style.marginTop = "-202px";
     textT.style.top ="50%";
     textT.style.left = "50%";
     textT.style.marginLeft = "160px";  
     textT.style.marginTop = "-100px";
     location_check10 = "없음";
     location_check30 = "없음";
     $("#b").css("display", "none");
     $("#a").css("display", "");
     //초기화 
 }
 function editText(event) {
    //	var imgcnt = $("#div2 > img").length;
        //console.log(imgcnt); 
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
        
        var array = ["폰트", "위치", "색상", "미리보기"];
        var font_array = ["선택","나눔바른고딕", "궁서", "a타이틀고딕2", "a타이틀고딕5"];
        var lo_array = ["선택","상", "하", "좌", "우"];
        
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
            if(j==1){			//위치 지정 체크 박스
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
                li.appendChild(input);		//색상 지정
            }
            if(j == 3) {     //미리 보기
                li.onclick = function () {
                    $('#a').css("display", "none");
                    $('#b').css("display", "block");
                    $('#showimg > img').detach();
                    previewEmoji();
                };
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
     font_check = val;
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
     text_color = color2;
 }
 function changeLocation(){	
     console.log("들어옴"); 
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
             location_check10 = "상";
          }
          else{
             mt = "160px";
             location_check10 = "하";	//추후 json 에 저장하기 위해 기록
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
             location_check10 = "우";
          }
          else{
             ml = "-202px";
             location_check10 = "좌";
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
             location_check30 = "상";    //추후 json 위치 저장
          }
          else{
             mt = "160px";
             location_check30 = "하";
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
             location_check30 = "좌";
          }
          else{
             ml = "160px";
             location_check30 = "우";
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
 function addText10() {  //10자 박스 추가 
        var text_form = document.getElementById("text_form");
        if(text_form !== null) {
           text_form.innerHTML = "";
        }
        var str;
        str = text_form.innerHTML;
        str += "<textarea id='textarea10' rows='1' cols='10' wrap = 'hard' placeholder='Sample Text' maxlength='10' style =  \"z-index : 3; resize : none\">"; 
        text_form.innerHTML = str;
        s.push("text");
 
 }
 function addText30() {  	//30자 박스 추가 
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
        if(data == "text"){
           var child = document.getElementById("textarea10");
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
 function saveFunction(event){
     var a2 = document.getElementById("a2");
     var array = ["이모티콘 저장", "프로젝트 저장"];
     
     var ul = document.getElementById("newul");
     var div = document.getElementById("listD");
     var ul2 = document.getElementById("newulT");
     var div2 = document.getElementById("listTO");
     
     if(ul !== null) {
         ul.parentNode.removeChild(ul);
         div.parentNode.removeChild(div);
     }
     if(ul2 !== null){
         ul2.parentNode.removeChild(ul2);
         div2.parentNode.removeChild(div2);
     } //직전 판넬 삭제
     
     var div = document.createElement("div");
     var ul=document.createElement('ul');
     var input = document.createElement('input');
     var input_pj = document.createElement('input');
     var btn_emoji = document.createElement('label');
     var btn_pj = document.createElement('label');
     div.setAttribute("id", "listD");
     ul.setAttribute("id", "newul");
     input.id = "emoji_name";
     input.type = "text"; 
     input_pj.id = "pj_name";
     input_pj.type = "text";
     btn_emoji.id = "btn_emoji"; 
     btn_emoji.setAttribute("onclick", "saveEmoji()"); //이모지 저장 연결
     btn_pj.id = "btn_pj";
     btn_pj.setAttribute("onclick", "saveJson()"); //전체 저장 연결
     div.innerHTML = "Save Option";
     a2.appendChild(div);
     a2.appendChild(ul);
     
     input.style.display = "none";
     btn_emoji.style.display = "none";
     btn_pj.style.display = "none";
     input_pj.style.display = "none";
     
     btn_emoji.innerHTML = btn_emoji.innerHTML + "저장";  
      btn_pj.innerHTML = btn_pj.innerHTML + "<a href='#' id='link' download='emoticon.json'>저장</a>";
     
     input.placeholder = "이모티콘명 입력";
     input_pj.placeholder = "프로젝트명 입력";
     
 
     
     for (var i=0; i<array.length; i++){
         var li=document.createElement('li');
         li.setAttribute("id", i);
         ul.appendChild(li);
         li.innerHTML=li.innerHTML + array[i];
         if(i == 0) {
             var li2 = document.getElementById('1');
             ul.insertBefore(input, li2);
             ul.insertBefore(btn_emoji, li2);
             $("#0").click(function() { 
                 if($("#emoji_name").is(":visible")){
                     $("#emoji_name").hide();
                        $("#btn_emoji").hide();
                    }
                    else{	
                        $("#emoji_name").show();
                        $("#btn_emoji").show();
                    }});
 
         }
         if(i == 1) {
             ul.appendChild(input_pj);
             ul.appendChild(btn_pj);
             $("#1").click(function() {  
                    if($("#pj_name").is(":visible")){
                          $("#pj_name").hide();
                          $("#btn_pj").hide();
                    }
                    else{	
                        $("#pj_name").show();
                        $("#btn_pj").show();
                    }});
             
         }
     }
 }
 function saveEmoji(event){	//Emoji name 매개변수로 받아와야함
     //이모티콘 마다 객체에 index로 접근해야함  
     
     var emo_name = document.getElementById('emoji_name').value;
     saveInfo[index].name = emo_name; 	
     if(document.getElementById('textarea10')){  //10자 사용 할 때
         saveInfo[index].ten.exist = 1;
         saveInfo[index].ten.location = location_check10;
         text_color = document.getElementById('textarea10').style.color; 
     }
     else{
         saveInfo[index].ten.location = "없음";  //10자 사용 안할 때
     }
     if(document.getElementById('textarea')){	//30자 사용 할 때
         saveInfo[index].thirty.exist = 1;
         saveInfo[index].thirty.location = location_check30;
         text_color = document.getElementById('textarea').style.color;
     }
     else{
         saveInfo[index].thirty.location = "없음";	//30자 사용 안할 때
     }
 /*	if(document.getElementById('name')){
         saveInfo[index].addname = 1;
     }
     if(document.getElementById('date')){
         saveInfo[index].adddate = 1;
     }*/
     saveInfo[index].font = font_check;
     console.log(saveInfo[index].font);
     saveInfo[index].color = text_color;
     index+=1;	//다음 이모티콘 저장 시 index + 1 되도록
     location_check10 = "없음"; 	//초기화
     location_check30 = "없음"; 	//초기화
     font_check = "a타이틀고딕1"; //초기화
     alert("저장 완료되었습니다.");
 }
 function saveJson(event){ 
     var obj_s = JSON.stringify(saveInfo, null, "\t");
     var a = document.getElementById("link");
     var str = document.getElementById("pj_name").value;
     a.download = str+".json";
     var dataUri = "data:application/json;charset=utf-8,"+ encodeURIComponent(obj_s);
     var link = $("#link").attr("href", dataUri);
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
 
 var saveInfo = {}; 	 //객체 배열
 var imgcnt; //img 개수 카운트
 function generate(){
     console.log(imgcnt);
     for(var i = 0; i<imgcnt; i++){			
         saveInfo[i] = 	{        
                 name : "",		//이모지 개별 name ex) 대학일기1     
                 ten : {
                     exist : 0,
                     location : "상"
                 },
                 thirty : {
                     exist : 0,
                     location : "우"
                 },
                 font : "a타이틀고딕1",
                 color : "rgb(0, 0, 0)",
             }; 
         }
     
 }
 var s = new Stack();
 var count = 0;
 var index = 0;
 var font_check = "a타이틀고딕1";
 var location_check10 = "없음";
 var location_check30 = "없음";
 var text_color  = "black";		        //기본으로 추가하고 안 움직였을 때 위치

    //미리보기
function previewEmoji(){
    var emojiSrc = $('#emoticon > img').attr('src');
    var tagStr = '<img id = "prvemo" src ="' + emojiSrc + '"width = "100px" height="100px">';
    console.log(location_check10);
    console.log(location_check30);
    var showimg = document.getElementById("showimg");
    showimg.innerHTML += tagStr;
    sample10Preview();
    sample30Preview();
}

function sample10Preview(){
    $('#sample10').css("display", "");
    var str = "샘플텍스트10" ;
    $('#sample10').css('font-family', font_check);
    console.log(location_check10);
    $('#sample10').css('color', text_color);

    if(location_check10 == "없음") {  //위치 지정 없을 때 안내
        if($('#textarea10').length) {
            $('#sample10').html("위치지정 필요함.");
            $('#sample10').css('top', "0px");
            $('#sample10').css('bottom', "none");
            $('#sample10').css('left', "55%");
        }  
        else {
            $('#sample10').css('display', 'none');
        }
    }
    else{
        
    if(location_check10 == "좌" || location_check10 =="우"){
     var str2 = str.replace(/(.{1})/g,"$1<br/>");
     $('#sample10').html(str2);
    }
    else{
      $('#sample10').html(str);
    }
    
    if(location_check10 == "상"){
      $('#sample10').css('top', "0px");
      $('#sample10').css('bottom', "none");
      $('#sample10').css('left', "55%");
    }
    else if(location_check10 == "하"){  
      $('#sample10').css('top', "");
      $('#sample10').css('bottom', "40%");
      $('#sample10').css('left', "55%");
    }
    else if(location_check10 == "좌"){
      $('#sample10').css('left', "40%");
      $('#sample10').css('top', "10%");
    }
    else if(location_check10 == "우"){
      $('#sample10').css('left', "85%");
      $('#sample10').css('top', "10%");
    }
}
}

function sample30Preview(){
    $('#sample30').css("display", "");
    var str2 = "샘플텍스트30" ;
    $('#sample30').css('font-family', font_check);
    console.log(text_color);
    $('#sample30').css('color', text_color);

    if(location_check30 == "없음") {
        if($('#textarea').length) {
            $('#sample30').html("위치를 지정해 주세요.");
            $('#sample30').css('top', "0px");
            $('#sample30').css('bottom', "none");
            $('#sample30').css('left', "55%");
        }
        else {
            $('#sample30').css('display', 'none');
        }
    }

    else {
    if(location_check30 == "좌" || location_check30 =="우"){
        var str = str2.replace(/(.{5})/g,"$1<br/>");
        console.log("들어옴");
     $('#sample30').html(str);
    }
    else{
        var str = str2.replace(/(.{10})/g,"$1<br/>");
      $('#sample30').html(str);
    }
    
    if(location_check30 == "상"){
        $('#sample30').css('right', "");
        $('#sample30').css('top', "0px");
        $('#sample30').css('bottom', "none");
        $('#sample30').css('left', "55%");
    }
    else if(location_check30 == "하"){  
        $('#sample30').css('right', "");
        $('#sample30').css('top', "");
        $('#sample30').css('bottom', "40%");
        $('#sample30').css('left', "55%");
    }
    else if(location_check30 == "좌"){
      $('#sample30').css('left', "30%");
      $('#sample30').css('top', "20%");
      $('#sample30').css('right', "");
    }
    else if(location_check30 == "우"){
      $('#sample30').css('right', "2px");
      $('#sample30').css('top', "20%");
      $('#sample30').css('left', "");
    }
}
}


//미리보기 닫기
function cancelBox(){
	$('#b').css("display","none");
    $('#a').css("display", "block");
    $('#showimg > img').detach();
    $('#showimg > img').detach();
}