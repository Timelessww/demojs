 function feef() {
 	var a = Math.floor(Math.random() * 4)
 	var b = Math.floor(Math.random() * 13)
 	var deds = "♠♥♣♦"
 	var str = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
 	return "<span class='pai' pai='" + (b + 1) + "' style='" + (a % 2 == 1 ? "color:#f00" : "") + "' onclick=\"pais(" + (b + 1) + ",this)\">" + str[b] + "<br>" + deds.substr(a, 1) + "</span>"
 }
 var lengthsrr = $(".dessd td").length
 for(i = 0; i < lengthsrr; i++) {
 	$(".dessd td").eq(i).html(feef())
 }
 var score = 0
 var paisa = "-"
 var paisb = "-"
 $.fn.toggleAttr = function(a, b) {
 	if($(this).attr(a) == undefined) {
 		$(this).attr(a, b)
 	} else {
 		$(this).removeAttr(a)
 	}
 }

 function pais(k, l) {
 	$(l).toggleAttr("dui", "")
 	if(paisa == "-") {
 		paisa = k
 	} else if(paisb == "-") {
 		paisb = k
 		if(paisa == paisb) {
 			if($(l).attr("dui") != undefined) {
 				score++;
 			}
 			$(".score").html(score);
 			$("[dui]").fadeOut(500, function() {
 				$(this).remove();
 				abeer()
 			});
 		} else {
 			$("[dui]").removeAttr("dui")
 		}
 		paisa = "-", paisb = "-"
 	}
 }

 function abeer() {
 	var dr = Math.max($("[pai='1']").length, a2 = $("[pai='2']").length, a3 = $("[pai='3']").length, a4 = $("[pai='4']").length, a5 = $("[pai='5']").length, a6 = $("[pai='6']").length, a7 = $("[pai='7']").length, a8 = $("[pai='8']").length, a9 = $("[pai='9']").length, a10 = $("[pai='10']").length, a11 = $("[pai='11']").length, a12 = $("[pai='12']").length, a13 = $("[pai='13']").length)
 	if(dr == 0 || dr == 1) {
 		$(".txdd").html("牌数不够，自动刷新");
 		setTimeout(function() {
 			for(i = 0; i < lengthsrr; i++) {
 				$(".dessd td").eq(i).html(feef())
 			};
 			$(".txdd").html("");
 		}, 1000) //牌数过低自动刷新
 	}
 }