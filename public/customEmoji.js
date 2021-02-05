var emoji_id;
var emoji_info = new Object(); 
var pick_emoji = new Object();
var lo_ten;
var lo_thirty;
var font;
var color;
var exist10; 
var exist30; 
var tenchk;
var thirtychk;
var popupCheck = false;
$.getJSON("./22.json", function(data){
  emoji_info = data;
});
//esc 누르면 popup div가 사라짐
$(document).on("keyup",function() {
  if (event.keyCode === 27 || event.keyCode === 13) {
    $("#emoji_popup").css({"display":"none"});
      }
});

//이모지 버튼에 마우스 올리면 표정 바뀜
$(document).on("mouseenter",".emoji_pickup",function() {

    $('#emoji_pickup_before').css("display","none");
    $('#emoji_pickup_after').css("display","inline-block");
  }).on("mouseleave",".emoji_pickup",function() {
    $('#emoji_pickup_after').css("display","none");
    $('#emoji_pickup_before').css("display","inline-block");
  });

//이모지 버튼 클릭시 이모지 목록 popup
$(document).on("click",".emoji_pickup",function(){
  if(popupCheck==false){
    // popup div의 size를 가져와서 위치 선정에 활용
    var popupdiv_width = $('#emoji_popup').width();
    var popupdiv_height = $('#emoji_popup').height(); //200px

    // popup div의 위치를 설정
    var position = $('#input_box').position();
    var boxsize = $('.send').height();
    $('#emoji_popup').css("left",position.left);
    $('#emoji_popup').css("top",position.top-popupdiv_height);
    $("#emoji_popup").css("background-color","#FFFFFF")
    $('#emoji_popup').css("display","block");
    popupCheck = true;
  }
  else{
    $("#emoji_popup").css("display","none");
    $("#emoji_div > img").detach(); //전에 쓰던 이모티콘 초기화
    $("#custom_emoji").css("display", "none");
    popupCheck = false;
  }
}).on("click", "#emoji_popup", function(){
   $("#emoji_popup").css({"display":"none"});
});
function closeEmoji(){   //이모티콘 편집 창 닫기
  $("#emoji_popup").css("display","none");
  $("#emoji_div > img").detach();
  $("#custom_emoji").css("display", "none");
}
//emoji_pick
$(document).on("click",".emoji_list", function(e) {
   var customemo_width = $("#custom_emoji").width();
   var customemo_height = $('#custom_emoji').height();
   $('.button2').hide();
   var position = $('#input_box').position();
   var boxsize = $('#input_box').height();
   $('#custom_emoji').css("left",position.left);
     $('#custom_emoji').css("top",position.top-customemo_height);
     $("#custom_emoji").css("background-color","rgba(255,255,255,0.5)")
     $('#custom_emoji').css("display","block");
   
   var emoji_id = $(this).attr('id');
     var imgtag = '<img id = "emo" style="width:110px; height:110px;" src="img//' + emoji_id + '.png">';
     $('#emoji_div').append(imgtag);
     $('#custom_emoji').focus();

     var emoji_num = emoji_id.replace(/[^0-9]/g,'');  //emoji_id에서 숫자(인덱스)만 추출
     console.log(emoji_num);
     pick_emoji = emoji_info[emoji_num-1];  //해당 이모티콘 객체 저장
     console.log(pick_emoji);
}).on("keyup", "#input_box", function(){
   if(event.keyCode === 13){
      $("#custom_emoji").css({"display":"none"});
      $("#emo").detach();
   }
});

$(document).on("click",".emoji_list", function(e) {

  var input_area_default = $('#input_box').html()
  if(input_area_default == 'Add Text'){
    $('#input_box').html('')
  }
  var emoji_id = $(this).attr('id');
  var imgtag = '<img style="width:110px; height:110px" src="img/' + emoji_id + '.png">';
  $('#input_box').append(imgtag+'<br/>');
  $('#input_box').focus();
});

$(document).on("click","#add", function(e) {
   var str = $('#input_box').val();
   exist10 = pick_emoji["ten"]["exist"];
   exist30 = pick_emoji["thirty"]["exist"];
   font = pick_emoji["font"];
   color = pick_emoji["color"];
   lo_ten = pick_emoji["ten"]["location"];
   lo_thirty = pick_emoji["thirty"]["location"];
   if(str.length <=10){
    if(exist10 == 1){
      //10자 이내는 바로 10자에 넣음
      add10(str, lo_ten);
      tenchk = 1;
      thirtychk = 0;
    }
    else if(exist10 == 0 && exist30 == 1){
      //30자 칸에다 넣어야 함
      if(str.length>10){    //얘는 10자보다 많으니 그냥 30자 기준으로 넣어도됨
        add30(str,lo_thirty);
        tenchk = 0;
        thirtychk = 1;
      }
      else{       //10자는 없는데 30자를 썻는데 사실 글자수가 10자라 ten기준으로 작성
        lo_ten = lo_thirty;
        add10(str, lo_ten);
        tenchk =1;
        thirtychk = 0;
      }
      
    }
   }
   else{
    if(exist30 == 1){
      //30자 칸에 바로 넣기
      add30(str,lo_thirty);
      tenchk = 0;
      thirtychk = 1;
    }
    else if(exist30 == 0 && exist10 == 1){
      //10자로 잘라서 10자 칸에 넣기
      var str2 = str.substring(0,10);
      add10(str2,lo_ten); 
      tenchk = 1;
      thirtychk = 0; 
    }
   }
});

function add10(str, lo_ten){
  //10자 텍스트 추가
  $('#user_text').css('width', "auto");
  $('#user_text').css('height', "auto");
  $('#user_text').css('top', "");
  $('#user_text').css('left', "");
  $('#user_text').css('bottom', "");
  $('#user_text').css('right', ""); //위치 초기화
  
  var str2;
  if(lo_ten == "좌" || lo_ten =="우"){
    str2 = str.replace(/(.{1})/g,"$1<br/>");
  }
  else{
    str2 = str;
  }
  $('#spantxt').html(str2);
  $('#user_text').css('font-family', font);
  $('#user_text').css('color', color);
  
  if(lo_ten == "상"){
    $('#user_text').css('width', "250px");
    $('#user_text').css('top', "38px");
    $('#user_text').css('display', "flex");
    $('#user_text').css('justify-content', "center");
  }
  else if(lo_ten == "하"){  
    $('#user_text').css('width', "250px");
    $('#user_text').css('bottom', "38px");
    $('#user_text').css('display', "flex");
    $('#user_text').css('justify-content', "center");
  }
  else if(lo_ten == "좌"){
    $('#user_text').css('height', "250px");
    $('#user_text').css('left', "38px");
    $('#user_text').css('display', "flex");
    $('#user_text').css('align-items', "center");
  }
  else if(lo_ten == "우"){
    $('#user_text').css('height', "250px");
    $('#user_text').css('right', "38px");
    $('#user_text').css('display', "flex");
    $('#user_text').css('align-items', "center");
  }
}
function add30(str,lo_thirty){
  $('#user_text').css('width', "auto");
  $('#user_text').css('height', "auto");
  $('#user_text').css('top', "");
  $('#user_text').css('left', "");
  $('#user_text').css('bottom', "");
  $('#user_text').css('right', ""); //위치 초기화

  $('#user_text').css('writing-mode', "");

  var string2, str2;
  if(str.length > 30){
    string2 = str.substring(0, 30);
  }
  else{
    string2 = str;
  }
  if(lo_thirty == "상" || lo_thirty == "하"){
    str2 = string2.replace(/(.{10})/g,"$1<br/>");   //가로쓰기 한줄 10자 제한
  }
  if(lo_thirty == "좌" || lo_thirty == "우"){
    str2 = string2.replace(/(.{5})/g,"$1<br/>");   //세로쓰기 한줄 6자 제한
  }
   
  $('#user_text').css('font-family', font);
  $('#user_text').css('color', color);
  $('#spantxt').html(str2);
  if(lo_thirty == "상"){
      $('#user_text').css('width', "250px");
      $('#user_text').css('top', "13px");
      $('#user_text').css('display', "flex");
      $('#user_text').css('justify-content', "center");
  }
  else if(lo_thirty == "하"){
    $('#user_text').css('width', "250px");
    $('#user_text').css('bottom', "23px");
    $('#user_text').css('display', "flex");
    $('#user_text').css('justify-content', "center");
  }
  else if(lo_thirty == "좌"){
    $('#user_text').css('height', "250px");
    $('#user_text').css('display', "flex");
    $('#user_text').css('align-items', "center");
  }
  else if(lo_thirty == "우"){
    $('#user_text').css('height', "250px");
    $('#user_text').css('right', "0");
    $('#user_text').css('display', "flex");
    $('#user_text').css('align-items', "center");
  }
}
var chatView = document.getElementById('msg');
var chatForm = document.getElementById('chatform');

chatForm.addEventListener('submit', function() {
  var msgText = $('#input_box');
  
  if (msgText.val() == '') {
      return;
  } else {
    socket.emit('SEND', msgText.val());
      var msgLine = $('<div class="msgLine">');
      var msgBox = $('<div class="me">');
 
      msgBox.append(msgText.val());
      msgBox.css('display', 'inline-block');
      msgLine.css('text-align', 'right');
      msgLine.append(msgBox);
 
      $('#msg').append(msgLine);
      msgText.val('');
      chatView.scrollTop = chatView.scrollHeight;
    }
  });
  socket.on('SEND', function(msg) {
    var msgLine = $('<div class="msgLine">');
    var msgBox = $('<div class="msgBox">');

    msgBox.append(msg);
    msgBox.css('display', 'inline-block');

    msgLine.append(msgBox);
    $('#msg').append(msgLine);

    chatView.scrollTop = chatView.scrollHeight;
});

function sendEmoji(img){
  //var msgText = $('#input_box');
  if (img == null) {
      return;
  } else {
      var msgLine = $('<div class="msgLine">');
      var msgBox = $('<div class="me">');
 
      msgBox.append(img);
      msgBox.css('display', 'inline-block');
      msgBox.css('background-color','rgba(0,0,0,0)');
      msgBox.css('border','none');
      msgLine.css('text-align', 'right');
      msgLine.append(msgBox);
      $('#msg').append(msgLine);
      chatView.scrollTop = chatView.scrollHeight;
    }
}
//이모티콘 수신
socket.on('image', function(data) {
  var msgLine = $('<div class="msgLine">');
  var msgBox = $('<div class="msgBox">');

  var img2 = document.createElement('img');
  img2.src = data;
  msgBox.append(img2);
  msgBox.css('display', 'inline-block');
  msgBox.css('background-color','rgba(0,0,0,0)');
  msgBox.css('border','none');
  msgLine.append(msgBox);
  $('#msg').append(msgLine);
  chatView.scrollTop = chatView.scrollHeight;
});

var imgwidth;
var imgheight;
//이미지 보내는 함수
$(function(){          
  $("#save").click(function() {
      var spnwidth = $("#spantxt").width();
      var spnheight = $("#spantxt").height();
      if(tenchk == 1) {
        if(lo_ten == '상' || lo_ten == '하') {
          imgheight = 120 + spnheight + 30;
          imgwidth = Math.max(120, spnwidth)+5;
        }
        else if(lo_ten == '좌' || lo_ten == '우'){
          imgheight = Math.max(120, spnheight)+5;
          imgwidth = 120 + spnwidth  + 30;
        }
      }

      else if(thirtychk == 1) {
        if(lo_thirty == '상' || lo_thirty == '하') {
          imgheight = 120 + spnheight + 30;
          imgwidth = Math.max(120, spnwidth)+5;
        }
        else if(lo_thirty == '좌' || lo_thirty == '우') {
          imgheight = Math.max(120, spnheight)+5;
          imgwidth = 120 + spnwidth  + 30;
        }
      }
      else {
        imgheight = 120;
        imgwidth = 120;
      }
      
      console.log(imgwidth);
      console.log(imgheight);
      const img = document.createElement('img');
      var check = 0;

       html2canvas($("#emoji_div"), {
           onrendered: function(canvas) {
               canvas.toBlob((blob) => {
                var url = URL.createObjectURL(blob);
                img.src = url;
                img.onload = function() {
                  if(check == 0) {
                    cropImage(
                      this, {
                      x : (250 - imgwidth)/2,     // crosp keeping the center 
                      y : (250 - imgheight)/2,
                      width : imgwidth,
                      height : imgheight,
                      }, spnwidth, spnheight);
                      check = 1;
                   }
                };
                
                sendEmoji(img);
                check = 0;
             });    
                
           }
       });
       $("#custom_emoji").css({"display":"none"});
       $("#emo").detach();
       $("#spantxt").html("");
       $("#input_box").val("");
   });
});
const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], fileName, {type:mime});
}



function cropImage(image, croppingCoords, sw,sh) {
  var cc = croppingCoords;
  var workCan = document.createElement("canvas"); // create a canvas
  workCan.width = Math.floor(cc.width);  // set the canvas resolution to the cropped image size
  workCan.height = Math.floor(cc.height);
  var ctx = workCan.getContext("2d");    // get a 2D rendering interface
  var cutx=0, cuty=0;
  if(tenchk == 1) {
    if(lo_ten == '상') cuty = sh;
    else if(lo_ten == '하') cuty = -sh;
    else if(lo_ten == '우') cutx = -sw;
    else if(lo_ten == '좌') cutx = sw;
  }
  else if(thirtychk == 1) {
    if(lo_thirty == '상') cuty = sh;
    else if(lo_thirty == '하') cuty = -sh;
    else if(lo_thirty == '우') cutx = -sw;
    else if(lo_thirty == '좌') cutx = sw;
  
    if(lo_thirty == '좌' || lo_thirty == '우'){
      cutx /= 2;
    }
    else if(lo_thirty == '상' || lo_thirty == '하'){
      cuty /= 2;
    }
  }
  ctx.drawImage(image,-Math.floor(cc.x)+cutx, -Math.floor(cc.y)+cuty); // draw the image offset to place it correctly on the cropped region
  image.src = workCan.toDataURL();       // set the image source to the canvas as a data URL
  tenchk = 0;
  thirtychk = 0;

  var file = dataURLtoFile(image.src, '1.jpg');
  var formData = new FormData();
  formData.append("image", file);
  
  $.ajax({
    url : 'http://127.0.0.1:4000/image',
    type : 'POST',
    method : "POST",
    timeout : 0,
    processData : false,
    mimeType : "multipart/form-data",
    contentType: false,
    data: formData,
    success: function(data){
      socket.emit('image', data);
    },
    error: function(e){
      console.log("ERROR: ", e);
    }
  });
  return image;
}
//error
//완료-10자가 없는데 30자가 있을때 10자이내로 쓸경우 잘못 잘린다.
//완료-이모티콘 배경 투명하게 보내기
//10자 우 잘림 (영어라서 ㅋㅋ 나중에)