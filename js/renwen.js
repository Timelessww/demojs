 function Showbigimg() {
            var rom = parseInt(73 * Math.random());

            var imgurl = $(".zppic:eq(" + rom + ")").find("img").attr("src");
            $(".bigimg").attr({ "src": imgurl });

            var bwidth = $(".bigimg").width();
            var bheight = $(".bigimg").height();
            var o = { left: "50%", width: "800px", height: "600px", top: "100px", "margin-left": "-400px" };

            var pic = $(".zppic:eq(" + rom + ")");
            $(".bigpic").css({ "left": pic.position().left, "top": pic.position().top });
            $(".bigpic").show();

            $(".bigpic").animate(o, 2000, function () {
                setTimeout(function () {
                    $(".bigpic").animate({ width: "100px", left: pic.position().left, top: pic.position().top, "margin-left": "0", "margin-top": "0" }, 1000, function () {
                        $(".bigpic").hide();
                        setTimeout(Showbigimg, 1000);
                    });
                }, 3000)
            });
        }

        $(function () {
            Showbigimg();         

        })