$ (function(){
    let gnbFlag = false;
    let gnbIndex;
    
    $(".gnb_anchor a").on({
        "mouseenter" : function() {
            
            if (gnbIndex != undefined) {
                $('.lnb').eq(gnbIndex).css('display', 'none');
            }
            
            gnbIndex = $(this).index();
            gnbFlag = true;
            
            $("#lnb_box").removeClass("disappear")
            $("#lnb_box").addClass("appear")
            $("#lnb_box").show();
            
            $(".lnb").eq(gnbIndex).css("display","block");
            // 액티브 바 보여주기
            $("#active_bar").show();
            
            let anchorLeft = $(this).offset().left;
            let anchorWidth = $(this).width();
            
            $("#active_bar").width(anchorWidth + 40);
            $("#active_bar").offset({left: anchorLeft - 20});
        }
    });
    
    $("#lnb_box a").on({
        "mouseleave" : function() {
            if(gnbFlag) {
                $("#lnb_box").removeClass("appear")
                $("#lnb_box").addClass("disappear")
                $("#lnb_box").hide();
                $("#active_bar").hide();
            } else {
                return;
            }
        }
    });
});


// $(function(){
//     $(window).resize(function(){
//         let windowW = $(window).width();
//         if (windowW <= 1023) {
//             $(function() {
//                 $("#icon_box a:nth-child(4)").on({
//                     "click" : function() {
//                         $("#lnb_box").show();
//                         $("#gnb_menu").show();
//                         $(".lnb li").hide();
            
//                         let gnbMoveBox = $("#gnb_menu");
//                         $("#lnb_innerBox").prepend(gnbMoveBox);
//                     }
//                 });
//             });
//         } else if (windowW > 1023) {
//             stop;
//         }
//     });
// });