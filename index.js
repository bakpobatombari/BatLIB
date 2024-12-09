$(".sidenav").css({
    "width":"0",
    "overflowX":"hidden !important",
})
$(".openNav").on("click",()=>{
    $(".sidenav").openNav("40%");
})
$(".closeNav").on("click",()=>{
    $(".sidenav").closeNav();
})
