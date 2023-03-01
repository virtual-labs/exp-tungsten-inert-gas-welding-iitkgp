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
        $("#tnve").stop(true, true).fadeOut();
        $("#tpve").stop(true, true).fadeOut();
        i=0;
        $("#estr").removeClass('active');
    }
    else if(a==1) {
        cmb=1;
        $("#tnve").stop(true, true ).fadeOut();
        $("#tpve").stop(true, true ).fadeOut();
        $("#adisim").show();
        $('#inst').hide();
        $("#ti").attr("src","./images/DCEN_tp.png");
        $("#met").attr("src","./images/steel_d2.png");
        $("#estr").removeClass('active');
    }
    else if(a==2) {
        cmb=2;
        $("#tnve").stop(true, true ).fadeOut();
        $("#tpve").stop(true, true ).fadeOut();
        $("#adisim").show();
        $('#inst').hide();
        $("#ti").attr("src","./images/DCEP_tp.png");
        $("#met").attr("src","./images/steel_slw.png");
        $("#estr").removeClass('active');
    }
    else if(a==3) {
        cmb=3;
        $("#tnve").stop(true, true ).fadeOut();
        $("#tpve").stop(true, true ).fadeOut();
        $("#adisim").show();
        $('#inst').hide();
        $("#ti").attr("src","./images/AC_btp.png");
        $("#met").attr("src","./images/alum_med.png");
       $("#estr").removeClass('active');
    }
    else if(a==4){
        $("#tpve").stop(true, true ).fadeIn();
        $("#tnve").stop(true, true ).fadeIn();
        if(cmb==1){
            i=0;
                $("#tnve").css(
                {
                    "position": "relative",
                    "scale": "0.1",
                    "bottom": "18%",
                    "right": '14.2%'
                }
                 );
            $("#tpve").css(
                {
                    "position": "relative",
                    "scale": "0.1",
                    "bottom": "-25.5%",
                    "right": '-12%'
                }
                 );
                $("#tnve").animate({
                  bottom: '-25.5%',
                },2000);
                $("#tpve").animate({
                    bottom: '18%',
                  },2000,function() {
                    adiwe5(4);
                });
                
        }else if(cmb==2){
            i=0;
                $("#tpve").css(
                    {
                        "position": "relative",
                        "scale": "0.1",
                        "bottom": "18%",
                        "right": '-12%'
                    }
                     );
                $("#tnve").css(
                    {
                        "position": "relative",
                        "scale": "0.1",
                        "bottom": "-25.5%",
                        "right": '14.2%'
                    }
                      );
                $("#tpve").animate({
                      bottom: '-25.5%',
                      scale: '1',
                    },2000);
                    $("#tnve").animate({
                        bottom: '18%',
                        scale: '1',
                      },2000,function() {
                        adiwe5(4);
                    });
            
        }else if(cmb==3){
            if(i%2==0){
                $("#tpve").css(
                    {
                        "position": "relative",
                        "scale": "0.1",
                        "bottom": "18%",
                        "right": '-12%'
                    }
                    );
                $("#tnve").css(
                    {
                        "position": "relative",
                        "scale": "0.1",
                        "bottom": "-25.5%",
                        "right": '14.2%'
                    }
                     );
                       $("#tpve").animate({
                      bottom: '-25.5%',
                      scale: '1',
                    },2000);
                    $("#tnve").animate({
                        bottom: '18%',
                        scale: '1',
                      },2000,function() {
                        i=i+1;
                        adiwe5(4);
                    });
                }else{

                $("#tnve").css(
                    {
                        "position": "relative",
                        "scale": "0.1",
                        "bottom": "18%",
                        "right": '14.2%'
                    }
                );
                $("#tpve").css(
                    {
                        "position": "relative",
                        "scale": "0.1",
                        "bottom": "-25.5%",
                        "right": '-12%'
                    }
                );
                       $("#tnve").animate({
                      bottom: '-25.5%',
                      scale: '1',
                    },2000);
                    $("#tpve").animate({
                        bottom: '18%',
                        scale: '1',
                      },2000,function() {
                        i=i+1;
                        adiwe5(4);
                    });
            }
        }
    }
}