$ (function(){
    var gnbFlag = false;
    var gnbIndex;
    
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
            
            var anchorLeft = $(this).offset().left;
            var anchorWidth = $(this).width();
            
            $("#active_bar").width(anchorWidth + 40);
            $("#active_bar").offset({left: anchorLeft - 20});
        }
    });
    
    $("#lnb_box").on({
        "mouseleave" : function() {
            if(gnbFlag) {
                $("#lnb_box").removeClass("appear")
                $("#lnb_box").addClass("disappear")
                $("#lnb_box").hide();
                $("#active_bar")
            } else {
                return;
            }
        }
    });
});
    
// let anchorUnderLine = document.getElementById("active_bar");
// let   =  document.querySelectorAll(".gnb_anchor a")
// console.log(anchorMenu);

// anchorMenu.foEach (menu=>menu.addEventListener("mouseenter", (e) => anchorIndicator(e)))

// function anchorIndicator (e) {
//     anchorUnderLine.style.left = e.currentTarget.offsetLeft + "px";
//     anchorUnderLine.style.Width = e.currentTarget.offsetWidth + "px";
//     anchorUnderLine.style.top = 
//     e.currentTarget.offsettop + e.currentTarget.offsetheight + "px";
    
// }