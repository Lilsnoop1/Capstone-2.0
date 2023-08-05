$("#second").on("click",function(){
    if($(".j").hasClass("unhide")){
        $(".j").css("opacity","0");
        $(".j").css("display","none");
        $(".j").removeClass("unhide");
    }else{
        $(".j" ).css("opacity","1");
        $(".j").addClass("unhide");
    }
});
$("#first").on("click",function(){
    if($(".i").hasClass("unhide")){
        $(".i").css("opacity","0");
        $(".i").removeClass("unhide");
    }else{
        $(".i" ).css("opacity","1");
        $(".i").addClass("unhide");
    }
});
$("#third").on("click",function(){
    if($(".k").hasClass("unhide")){
        $(".k").css("opacity","0");
        $(".k").removeClass("unhide");
    }else{
        $(".k" ).css("opacity","1");
        $(".k").addClass("unhide");
    }
});



$(".pehla").on("click",function(event){
    var selected = event.currentTarget.firstChild.data;
    $("#one").val(selected);
    var month = selected;
    $(".j").css("opacity","0");
})
$(".doosra").on("click",function(event){
    var selectedAgain = event.currentTarget.firstChild.data;
    var year = selectedAgain;
    $("#two").val(selectedAgain);
    $(".k").css("opacity","0");
})
$(".teesra").on("click",function(event){
    var selected = event.currentTarget.firstChild.data;
    $("#zero").val(selected);
    $(".i").css("opacity","0");
})


// }else if(month===2 && (year%4==0) && (year%100!=0)){
//     $(".tinghidden-1").css('display',"block");
// }else if(month===2 && year%400==0){
//     $(".tinghidden-1").css('display',"block");
// }else if (month===2 && (year%400!=0) && (year%4!=0) && (year%100==0)){
//     $(".tinghidden-1").css('display',"block");
//     $(".tinghidden-2").css('display',"block");
// }else{
//     $(".tinghidden-1").css('display',"block");
//     $(".tinghidden-2").css('display',"block");
//     $(".tinghidden-3").css('display',"block");
// }