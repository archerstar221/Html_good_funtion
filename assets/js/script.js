
$(document).ready(function(){
    $('ul.tabs').tabs();
    $('select').formSelect();
    $('.collapsible').collapsible({inDuration: 600});

    $("aside .sub-dropdown li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    $(".navbar-toggler").click(function(){
        $(this).toggleClass("active");
        if(!$(this).hasClass("active")){
            $(this).html('<i class="material-icons">radio_button_unchecked</i>');
            $("aside").addClass("expand");
            $(".dash-section1").removeClass("active");
            $("aside").mouseout(function(){
                if(!$(".navbar-toggler").hasClass("active")){
                    if($(".dropdown-list").hasClass("active")){
                        $("aside .collapsible-body").css("display","none")
                    }
                }
            })
        }
        else{
            $("aside").removeClass("expand");
            $(this).html('<i class="material-icons my-auto">radio_button_checked</i>'); 
            $(".dash-section1").addClass("active");

        }
    })

    $("aside").mouseover(function(){
        if($(".dropdown-list").hasClass("active")){
            $("aside .collapsible-body").css("display","block")
        }
    })

    $(".sidenav-trigger").click(function(){
        $("aside").toggleClass("active")
        $(".sidenav-overlay").toggleClass("active")
    })

    $(".sidenav-overlay").click(function(){
        $("aside").removeClass("active")
        $(".sidenav-overlay").removeClass("active")
    })
});

