$(function() {
	// 메뉴
	
	$(".sub").hide();	// .sub_cover
	// $(".sub_cover").show();
	
	$(".main>li").mouseover(function() {
		$(".chat",this).addClass("add");
		$(".sub, .sub_cover").stop().slideDown();
	});
	
	$(".main>li").mouseout(function() {
		$(".chat",this).removeClass("add");
		$(".sub, .sub_cover").stop().slideUp();
	});
	
	// slide 
	
	$(".sub_cover>p").not(":eq(0)").css("left","1400px")
	
	var now = 0;
	var slideImg = 2;
	
	function slide() {
		$(".sub_cover>p").not(":eq("+now+")").css("left","1400px")
		now = now == slideImg ? 0 : now +=1;
		$(".sub_cover>p").eq(now-1).animate({left:"-1400px"},1000)
		$(".sub_cover>p").eq(now).animate({left:"0px"},1000,function() {
			$(".sub_cover>p").not(":eq("+now+")").css("left","1400px")
		})
		$(".bullet>li").removeClass("bullet_hover");
		$(".bullet>li").eq(now).addClass("bullet_hover")
	}
	// 0-2-1-0-2-1
	
	function slide_left() {
		var slideImg = 0;
		$(".sub_cover>p").not(":eq("+now+")").css("left","-1400px")
		now = now == slideImg ? 2 : now-= 1;
		if(now == 2) {
			$(".sub_cover>p").eq(0).animate({left:"1400px"},1000);
		}
		else {
			$(".sub_cover>p").eq(now+1).animate({left:"1400px"},1000);
		}
		$(".sub_cover>p").eq(now).animate({left:"0px"},1000,function() {
		$(".sub_cover>p").not(":eq("+now+")").css("left","-1400px")
		})
		$(".bullet>li").removeClass("bullet_hover");
		$(".bullet>li").eq(now).addClass("bullet_hover")
	
	}
	
	var clear = setInterval(slide, 3000);
	
	// 블릿기호
	
	$(".slide>ul>li").click(function() {
		clearInterval(clear);
	});
	
	$(".slide>.bullet>li").click(function() {
		var bulletNumber = $(this).index();
		if ( now == bulletNumber ) return;
		else {
			$(".sub_cover>p").not(":eq("+now+")").css("left","1400px");
			$(".sub_cover>p").eq(now).animate({left : "-1400px"},1000);
			$(".sub_cover>p").eq(bulletNumber).animate({left:"0px"}, 1000,
			function() {
				$(".sub_cover>p").not(":eq("+bulletNumber+")").css(
				"left","1200px");
			});
			$(".bullet>li").removeClass("bullet_hover")
			$(".bullet>li").eq(bulletNumber).addClass("bullet_hover")
			now = bulletNumber
		}
	});
	
	$(".right").click(function() {
		slide()
	});
	
	$(".left").click(function() {
		slide_left()
	});

});
		
		//헤드고정
		// if($(this).scrollTop() > 250) {
			// $("header>nav").css("position","fixed").css(
			// "top","0px");
		// }
		// else {
			// $("header>nav").css("position","relative").css
			// ("top","0px");
		// }
	// });


/* ①슬라이드 시 이상하게 넘어가지는게 가장 고민되는부분.
블릿기호 클릭시 원하는 페이지로 넘어가지지않는 불편함. (해결)

②화살표를 4~5번째 클릭 시 이미지가 사라지는 오류 (해결)

③프로필, 게시글 클릭시 따로따로 나왔으면 좋겠는데
계속 합해져서 나와가지고 이부분도 수정을 하고싶음.
1차피드백때 이부분을 혼자 해봤으나 원하는 의도대로 나오지않아서
다시 여쭤보게됨. 

④저번에 180주면된다했었는데... 그래서 너무 공간이 부족해서 200정도 줬어요!
이게맞는건지도 여쭤보겠습니다...

일단 이렇게 3갈래의 문제점이있는데 이 부분에대해 피드백 듣고싶습니다

⑤그리고.. 선생님 혹시 comment 이부분에 있는거 밑에있는 이미지랑
높이? 약간 깔끔하게 맞추고싶은데 어떻게 줘야할지모르겠어요 8ㅅ8

<Question>

Q. 선생님 개인적으로 질문있습니다. 
<p>요소를 쓸때는 transform , transition 할때 hover 뭐 이렇게넣어서
가능한데 <li>요소일떄는 불가능한건가요?...
글쓰러가기 옆에 있는 이미지를 transition 으로 보일때 hover해서 키우고
그래보고싶었는데... <li>요소라 안되는건지 이점이 매우 궁금합니다. 
제가 실수한부분이있는지도.... 

Q. 영상공간을 너무많이차지한다고 해서 링크를 갖고와서 하는게 좋다고 말씀하셨잖아용
그래서 영상링크를 넣으려고하는데 어떻게해야 지금같은 형태를 유지하면서 맞출 수 있을지..
이부분도 여쭤보고싶습니다.. 되게 질문이많네요 혼자하면서 안풀리는부분이 꽤있던거같으면서도 작업했어요ㅎㅎ

// <iframe width="560" height="315" src="https://www.youtube.com/embed/bw-NI2YLHjw" title="YouTube video 
// player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
// gyroscope; picture-in-picture" allowfullscreen></iframe>

나머지는 제가 다시 작업하다가 헤매는 부분있으면 문의드릴게용!
집에서 그래도 혼자 하면서 메인부분은 완벽까진아니여도 나름 괜찮게 작업한거같아요!

*/