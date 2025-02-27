$(function(){
    $("#hide").click(function(){
        $(".Box").hide(1000)
    })
})
// ================

$(function(){
    $("#show").click(function(){
        $(".Box").show(1000)
    })
})
// ===============

$(function(){
    $("#Showhide").click(function(){
        $(".Box").toggle(1000)
    })
})
// ==============

$(function(){
    $("#FadeOut").click(function(){
        $(".Box").fadeOut(1000)
    })

    $("#FadeIn").click(function(){
        $(".Box").fadeIn(1000)
    })
    $("#FlidInOut").click(function(){
        $(".Box").fadeToggle(1000)
    })
})
// ===============
$(function(){
    $("#SlideDown").click(function(){
        $(".Box").slideDown(1000)
    })
    $("#SlideUp").click(function(){
        $(".Box").slideUp(1000)
    })
    $("#SlideUpDown").click(function(){
        $(".Box").slideToggle(1000)
    })
})

