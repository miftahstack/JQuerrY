// Buttonss Toggle 
$(function(){
    $("#show").click(function(){
        $(".box").show(1000)
    })
    $("#hide").click(function(){
        $(".box").hide(1000)
    })
    $("#showhide").click(function(){
        $(".box").toggle(1000)
    })
})
// ButtonssToggle


// Buttonss Fade In
$(function(){
    $("#fadeIn").click(function(){
        $(".box").fadeIn(1000)
    })
    $("#fadeOut").click(function(){
        $(".box").fadeOut(1000)
    })
    $("#InOut").click(function(){
        $(".box").fadeToggle(1000)
    })
})
// Buttonss Fade Out