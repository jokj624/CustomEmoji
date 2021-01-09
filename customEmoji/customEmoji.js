$(function(){

// 입력창에 아무 입력도 없을 경우 'Add comment'를 기본으로 세팅
 var input_area_default = $('#input_box').html();

 if(input_area_default == ''){
   var default_text = 'Add Text'
   $('#input_box').html(default_text)
 }

});
//esc 누르면 popup div가 사라짐
$(document).on("keyup",function() {
  if (event.keyCode === 27 || event.keyCode === 13) {
    $("#emoji_popup").css({"display":"none"});
 	  }
});

//입력을 시작하면 기본 세팅인 'Add comment'를 제거
$(document).on("focus","#input_box",function() {

  var input_area_default = $('#input_box').html()

  if(input_area_default == 'Add Text'){
    $('#input_box').html('')
  }

});

//이모지 버튼에 마우스 올리면 표정 바뀜
$(document).on("mouseenter",".emoji_pickup",function() {

    $('#emoji_pickup_before').css("display","none");
    $('#emoji_pickup_after').css("display","block");
  }).on("mouseleave",".emoji_pickup",function() {
    $('#emoji_pickup_after').css("display","none");
    $('#emoji_pickup_before').css("display","block");
  });

//이모지 버튼 클릭시 이모지 목록 popup
$(document).on("click",".emoji_pickup",function(){

  // popup div의 size를 가져와서 위치 선정에 활용
  var popupdiv_width = $('#emoji_popup').width();
  var popupdiv_height = $('#emoji_popup').height();

  // popup div의 위치를 설정
  var position = $('.input').position();
  var boxsize = $('.input').height();
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
	
	var position = $('.input').position();
	var boxsize = $('.input').height();
	$('#custom_emoji').css("left",position.left);
  	$('#custom_emoji').css("top",position.top-customemo_height);
  	$("#custom_emoji").css("background-color","#FFFFFF")
  	$('#custom_emoji').css("display","block");
	
	var emoji_id = $(this).attr('id');
  	var imgtag = '<img id = "emo" style="width:120px; height:120px; margin-top:5%;" src="img//' + emoji_id + '.png">';
  	$('#custom_emoji').append(imgtag);
  	$('#custom_emoji').focus();

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



// Enter 키를 입력할 경우 전송처리
$(document).on("keyup","#input_box",function() {

  var inputarea = $('#input_box');
  inputarea.scrollTop(inputarea[0].scrollHeight);
  if (event.keyCode === 13) {
    var input_area_default = $('#input_box').html();
    $('#input_box').html('');
    $('#msg').append(input_area_default);
    var textarea = $('#msg');
    textarea.scrollTop(textarea[0].scrollHeight);
  }
});
