
var emoji_id;
var emoji_info = new Object(); 
var pick_emoji = new Object();
var lo_ten;
var lo_thirty;
var font;
var color;
var exist10; 
var exist30; 

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

  // popup div의 size를 가져와서 위치 선정에 활용
  var popupdiv_width = $('#emoji_popup').width();
  var popupdiv_height = $('#emoji_popup').height(); //200px

  // popup div의 위치를 설정
  var position = $('#input_box').position();
  console.log(position.top); //670
  console.log(position.left);
  var boxsize = $('.send').height();
  $('#emoji_popup').css("left",position.left);
  $('#emoji_popup').css("top",position.top-popupdiv_height);
  $("#emoji_popup").css("background-color","#FFFFFF")
  $('#emoji_popup').css("display","block");

}).on("click", "#emoji_popup", function(){
   $("#emoji_popup").css({"display":"none"});
});

//emoji_pick
$(document).on("click",".emoji_list", function(e) {
   var customemo_width = $("#custom_emoji").width();
   var customemo_height = $('#custom_emoji').height();
   $('.button2').hide();
   var position = $('#input_box').position();
   var boxsize = $('#input_box').height();
   $('#custom_emoji').css("left",position.left);
     $('#custom_emoji').css("top",position.top-customemo_height);
     $("#custom_emoji").css("background-color","#FFFFFF")
     $('#custom_emoji').css("display","block");
   
   var emoji_id = $(this).attr('id');
     var imgtag = '<img id = "emo" style="width:120px; height:120px;" src="img//' + emoji_id + '.png">';
     $('#emoji_div').append(imgtag);
     $('#custom_emoji').focus();

     var emoji_num = emoji_id.replace(/[^0-9]/g,'');  //emoji_id에서 숫자(인덱스)만 추출
     console.log(emoji_num);
     pick_emoji = emoji_info[emoji_num-1];  //해당 이모티콘 객체 저장
     console.log(pick_emoji);
   /*  if(pick_emoji["ten"]["exist"] == 1){
        $('#text10').show();
     }
     if(pick_emoji["thirty"]["exist"] == 1){
       $('#text30').show();
    }*/
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
  var imgtag = '<img style="width:120px; height:120px" src="img/' + emoji_id + '.png">';
  $('#input_box').append(imgtag+'<br/>');
  $('#input_box').focus();
});

$(document).on("click","#add", function(e) {
   var str = $('#input_box').val();
   exist10 = pick_emoji["ten"]["exist"];
   exist30 = pick_emoji["thirty"]["exist"];
   font = pick_emoji["font"];
   color = pick_emoji["color"];
   if(str.length <=10){
    if(exist10 == 1){
      //10자 이내는 바로 10자에 넣음
      add10(str);
    }
    else if(exist10 == 0 && exist30 == 1){
      //30자 칸에다 넣어야 함
    }
   }
   else{
    if(exist30 == 1){
      //30자 칸에 바로 넣기
    }
    else if(exit30 == 0 && exist10 == 1){
      //10자로 잘라서 10자 칸에 넣기  
    }
   }
});

function add10(str){
  //10자 텍스트 추가
  lo_ten = pick_emoji["ten"]["location"];
  $('#user_text').text(str);
  $('#user_text').css('font-family', font);
  $('#user_text').css('color', color);
  
  if(lo_ten == "상"){
    $('#user_text').css('width', "250px");
    $('#user_text').css('top', "38px");
  }
  else if(lo_ten == "하"){  
    $('#user_text').css('width', "250px");
    $('#user_text').css('bottom', "38px");
  }
  else if(lo_ten == "좌"){
    $('#user_text').css('writing-mode', "tb-rl");
    $('#user_text').css('height', "250px");
    $('#user_text').css('left', "38px");
  }
  else if(lo_ten == "우"){
    $('#user_text').css('writing-mode', "tb-rl");
    $('#user_text').css('height', "250px");
    $('#user_text').css('right', "38px");
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

$(function(){          
  $("#save").click(function() { 
       html2canvas($("#emoji_div"), {
           onrendered: function(canvas) {
               canvas.toBlob(function(blob) {
                var url = URL.createObjectURL(blob);
                const img = document.createElement('img');
                img.src = url;
                img.onload = function() {
                  //cleanup.
                  URL.revokeObjectURL(this.src);
                }
                $('#msg').append(img);
                 //  saveAs(blob, 'image.png');
               });
           }
       });
   });
});
