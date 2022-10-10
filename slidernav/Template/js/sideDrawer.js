$(document).ready(function() {
	otpTimer();
	$(".cart-drawer .close").addClass('d-none');
	if ($(window).width() <= 786) {
		$(".cart-drawer .close").removeClass('d-none').attr('src', 'images/group-17.svg');
	}
    $('.buyPlan.btn').click(function() {
        $("#overlay").addClass("show");
        $('.cart-drawer-right').addClass('cart-drawer-open');
        $("#otp").focus();
    });        
    $("#overlay, .bubble, .close").on("click", function(){
        $('.cart-drawer-right').removeClass('cart-drawer-open');
        $("#overlay").removeClass("show");       
        $("#otp").val("").siblings(".bootLabel").hide();
        $(".verifyBtn").prop("disabled", true);     
    });
    
    $("#otp").on("input", function() {
        var reg = /^[]+/gi;
        if (this.value.match(reg)) {
                this.value = this.value.replace(reg, '');
        }
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $("#otp").on("keyup input", function(event) {
        var tempVal = $(this).val();
        if (tempVal.length == 4){
                $(".verifyBtn").prop("disabled", false);
        }
        else if (tempVal.length > 0 && tempVal.length < 4 && (event.keyCode == 8 || event.keyCode == 46)) {
            $(".verifyBtn").prop("disabled", true);
        } else if ((tempVal.length > 0) && (tempVal.length < 4) && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
            $(".verifyBtn").prop("disabled", true);
        }
        if (tempVal.length == 0) {
            $(".verifyBtn").prop("disabled", true);
        }
    });

    $(".verifyBtn").on("click", function(){
        $(".otpSection").addClass("d-none");
        $(".cheersSection").removeClass("d-none");
    });

    $(".resendotp").on("click", function(){
        
    });
    placeholderLabel();
});

function placeholderLabel() {
        $(".bootLabel").hide();
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {
            $(".form-control").focus(function(event) {
                $(this).siblings(".bootLabel").show();
            });
            $(".form-control").on("blur", function(event) {
                if (this.value.length == 0) {
                    $(this).siblings(".bootLabel").hide();
                }
            });
        } 
        else  // If another browser, return 0
        {
            $(".form-control").on("keyup input", function(event) {
                $(this).siblings(".bootLabel").show();
                var tempVal = $(this).val();
                if (tempVal.length <= 0){
                    $(this).siblings(".bootLabel").hide();
                }

            });
        }

        return false;
    }
	
	
	var x;
function otpTimer() {
	clearInterval(x);
    var countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds() + 61);
    countDownDate = countDownDate.getTime();
    x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var timeleft = (minutes * 60) + seconds;
       

        if(Math.sign(timeleft)==-1){
            clearInterval(x);
            }
        else{
                $("#exTime").text(timeleft);
            }
        
        if (distance < 0) {
            clearInterval(x);
            //$('#exTime').addClass("d-none");
            $("#enterOTP").attr("disabled", true);
            $(".otpconfirm").prop("disabled", true);
           
        }
    }, 100);
}