$(".rond").click(function(){
        $(this).toggleClass("plein");
});

$("#plein").click(function(){
    $("div").addClass("plein");
});

$("#vide").click(function(){
    $("div").removeClass("plein");
});

$(".carre").click(function(){
    $(this).toggleClass("plein");
});

$(".losange").click(function(){
    $(this).toggleClass("plein");
});

$(".carre.l1").click(function(){
    $(".l1:not(.carre)").toggleClass("plein");
});

$(".carre.l2").click(function(){
    $(".l2:not(.carre)").toggleClass("plein");
});

$(".carre.l4").click(function(){
    $(".l4:not(.carre)").toggleClass("plein");
});

$(".carre.l5").click(function(){
    $(".l5:not(.carre)").toggleClass("plein");
});

$(".losange.lo").click(function(){
    $(".lo:not(.losange)").toggleClass("plein");
});