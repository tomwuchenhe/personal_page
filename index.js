var ft = 0
var flag = false
if ($(window).width() <= 600){
        $(".ch").addClass("text-center")
        $("#invi").fadeOut()
        $(".animate").fadeIn(1000)
        $(".row.row-cols-1.row-cols-lg-3.align-items-stretch.g-4.py-5.pb-1").fadeIn(1000)
        $("#animate-resume").fadeIn(1000)
} else {
    $("#invi").text("Click on image arrow and hover to titles!!")
    $(".carousel-control-next, .carousel-control-prev").on("click", function(){
        console.log("clicked")
        $("#invi").fadeOut(function() {
            console.log("#invi faded out");
            $("#toberem").removeClass("px-0")
            $(".animate").fadeIn(100, function() {
                console.log(".animate faded in");
       })
   })
})
    $(".pb-2.border-top.border-white.pt-4.ch.display-1").on("mouseover", function(){
        $(".row.row-cols-1.row-cols-lg-3.align-items-stretch.g-4.py-5.pb-1").fadeIn(1000)

    })

    $("#animate-r").on("mouseover", function(){
        $("#animate-resume").fadeIn(1000)
    })
}