/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

var cmb=0;
var i=0;
var i=0;
$(document).ready(function(){
    adiwe5(0);
});

const sizs={
    wd:window.innerWidth*0.9,
    ht:window.innerHeight*0.9
};
window.addEventListener("resize",()=>{
    sizs.wd=window.innerWidth*0.9;
    sizs.ht=window.innerHeight*0.9;
    window.location.reload();
    

});

function adiwe5(a){
    if(a==0){
        $("#adisim").hide();
        $('#inst').show();
        cmb=0;
        i=0;
        $("#estr").removeClass('active');
    }
    else if(a==1) {
        cmb=1;
    }
    else if(a==2) {
        cmb=2;
    }
    else if(a==3) {
        cmb=3;
    }
    else if(a==4) {
        if(cmb==1) {
            cmb=0;
            $("#adisim").show();
            $('#inst').hide();
            $("#estr").removeClass('active');
            $("#aditig").html("<div> <video id=\"adivid\" preload=\"auto\" autoplay>  <source src=\"./images/DCSP.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adivid").width('100%');
        $("#adivid").playbackRate= 1.5;
        $("#adivid").on("ended",function(){
        $("#aditig").html("");
        $('#DSP').removeClass('active');
        $('#DRP').removeClass('active');
        $('#AC').removeClass('active');
        });
        }
        else if(cmb==2) {
            cmb=0;
            $("#adisim").show();
            $('#inst').hide();
            $("#estr").removeClass('active');
            $("#aditig").html("<div> <video id=\"adivid\" preload=\"auto\" autoplay>  <source src=\"./images/DCRP.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adivid").width('100%');
        $("#adivid").playbackRate= 1.5;
        $("#adivid").on("ended",function(){
        $("#aditig").html("");
        $('#DSP').removeClass('active');
        $('#DRP').removeClass('active');
        $('#AC').removeClass('active');
        });
        }
        else if(cmb==3) {
            cmb=0;
            $("#adisim").show();
            $('#inst').hide();
            $("#estr").removeClass('active');
            $("#aditig").html("<div> <video id=\"adivid\" preload=\"auto\" autoplay>  <source src=\"./images/ACP.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adivid").width('100%');
        $("#adivid").playbackRate= 1.5;
        $("#adivid").on("ended",function(){
        $("#aditig").html("");
        $('#DSP').removeClass('active');
        $('#DRP').removeClass('active');
        $('#AC').removeClass('active');
        });
        }
    }
    else if(a==5) {
        cmb=0;
        $('#DSP').removeClass('active');
        $('#DRP').removeClass('active');
        $('#AC').removeClass('active');
    }
    else if(a==6) {
        cmb=0; 
        $('#DSP').removeClass('active');
        $('#DRP').removeClass('active');
        $('#AC').removeClass('active');
    }
    
}