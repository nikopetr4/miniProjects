$(document).ready(function() {
var result;

//By clicking a number then the user appends it on the screen

$(".one").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("1");
    } else {
        $("#screen").append("1");
    }
})

$(".two").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("2");
    } else {
        $("#screen").append("2");
    }
})

$(".three").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("3");
    } else {
        $("#screen").append("3");
    }
})

$(".four").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("4");
    } else {
        $("#screen").append("4");
    }
})

$(".five").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("5");
    } else {
        $("#screen").append("5");
    }
})

$(".six").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("6");
    } else {
        $("#screen").append("6");
    }
})

$(".seven").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("7");
    } else {
        $("#screen").append("7");
    }
})

$(".eight").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("8");
    } else {
        $("#screen").append("8");
    }
})

$(".nine").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("9");
    } else {
        $("#screen").append("9");
    }

})

$(".zero").click(function() {
    if($("#screen").text() === "NaN"){
        $("#screen").text("0");
    } else {
        $("#screen").append("0");
    }
})

$(".sum").click(function() {
    $("#screen").append("+");
})

$(".sub").click(function() {
    $("#screen").append("-");
   
})

$("#ac").click(function() {
    $("#screen").text("");
})

$(".mul").click(function() {
    $("#screen").append("*");
    
})

$(".divide").click(function() {
    $("#screen").append("/");
})

$(".equals").click(function() {
    if($("#screen").text() !== ""){
        result = eval($("#screen").text());
        $("#screen").text(result);
    } else {
        $("#screen").text("NaN");
    }
})
$(".dot").click(function() {
    $("#screen").append(".");
})

});