$(document).ready(function() {
    otpTimer();
    $(".thankyou-drawer_2 .close");
    if ($(window).width() <= 786) {
        $(".thankyou-drawer_2 .close").removeClass('d-none').attr('src', 'images/group-17.svg');
    }
    $('.buyPlan.btn').click(function() {
        $("#overlay").addClass("show");
        $('.thankyou-drawer_2-right').addClass('thankyou-drawer_2-open');
        $("#otp").focus();
    });
    $(".bubble, .close").on("click", function() {
        $('.thankyou-drawer_2-right').removeClass('thankyou-drawer_2-open');
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
        if (tempVal.length == 4) {
            $(".verifyBtn").prop("disabled", false);
        } else if (tempVal.length > 0 && tempVal.length < 4 && (event.keyCode == 8 || event.keyCode == 46)) {
            $(".verifyBtn").prop("disabled", true);
        } else if ((tempVal.length > 0) && (tempVal.length < 4) && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
            $(".verifyBtn").prop("disabled", true);
        }
        if (tempVal.length == 0) {
            $(".verifyBtn").prop("disabled", true);
        }
    });

    $(".verifyBtn").on("click", function() {
        $(".otpSection").addClass("d-none");
        $(".cheersSection").removeClass("d-none");
    });

    $(".resendotp").on("click", function() {

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
    } else // If another browser, return 0
    {
        $(".form-control").on("keyup input", function(event) {
            $(this).siblings(".bootLabel").show();
            var tempVal = $(this).val();
            if (tempVal.length <= 0) {
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


        if (Math.sign(timeleft) == -1) {
            clearInterval(x);
        } else {
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

$(document).ready(function() {
    $(".tysubmitbtn_one").click(function() {
        $('.section1').addClass("d-none");
        $('.section2').removeClass("d-none");
    });
});

// important for emoji change//

var imageUrl = new Array();
imageUrl[1] = 'range1.png';
imageUrl[2] = 'range1.png';
imageUrl[3] = 'range1.png';
imageUrl[4] = 'range234.png';
imageUrl[5] = 'range5.png';

$(document).on('input change', '#rangesli', function() {
    var v = $(this).val(); //getting slider val
    $("#img_scenario_two").prop("src", imageUrl[v]);
});


// important for emoji change//
$(document).ready(function() {

    $(".points").click(function() {

        var pointer = $(this).attr('value');
        if (pointer == 1 || pointer == 2 || pointer == 3 || pointer == 4 || pointer == 5) {
            document.getElementById('rangesli').value = pointer;

            var imageUrl = new Array();
            imageUrl[1] = 'range1.png';
            imageUrl[2] = 'range1.png';
            imageUrl[3] = 'range1.png';
            imageUrl[4] = 'range234.png';
            imageUrl[5] = 'range5.png';
            $("#img_scenario_two").prop("src", imageUrl[pointer]);
            var pointer = $(this).attr('value');
            var value = (pointer - 1) / (5 - 1) * 100;
            $('#rangesli').css({ background: 'linear-gradient(to right, #ffe899 0%, #ffe899 ' + value + '%, #fbf1e3 ' + value + '%, #fbf1e3 100%)' });

        }

    });
});
document.getElementById("rangesli").oninput = function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #ffe899 0%, #ffe899 ' + value + '%, #fbf1e3 ' + value + '%, #fbf1e3 100%)'
};

$(document).ready(function() {
    $(".thankyou-drawer_2 .close");
    if ($(window).width() <= 786) {
        $(".thankyou-drawer_2 .close").removeClass('d-none').attr('src', 'images/group-17.svg');
    }

    $("#mobile").on("input", function() {
        var reg = /^[0]+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $("#mobile").on("keyup input", function(event) {

        var tempVal = $(this).val();
        this.value = this.value.replace(/[^0-9]/g, '');
        if (tempVal.length == 10) {
            $(this).siblings(".invalid-feedback").hide();
            $(this).parent().addClass("validBorder");
            $(this).parent().removeClass("invalidBorder");
            $(this).siblings(".clearAll").show();
        } else if (tempVal.length > 0 && tempVal.length < 10 && (event.keyCode == 8 || event.keyCode == 46)) {
            $(this).siblings(".invalid-feedback").show();
            $(this).parent().addClass("invalidBorder");
            $(this).parent().removeClass("validBorder");
            $(this).siblings(".clearAll").show();
        } else if ((tempVal.length > 0) && (tempVal.length < 10) && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
            $(this).parent().addClass("validBorder");
            $(this).parent().removeClass("invalidBorder");
            $(this).siblings(".invalid-feedback").hide();
            $(this).siblings(".clearAll").show();
        }
        if (tempVal.length == 0) {
            $(this).siblings(".invalid-feedback").hide();
            $(this).parent().removeClass("invalidBorder validBorder");
            $(this).siblings(".clearAll").hide();
        }

        if (tempVal.length >= 1 && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
            $("#mobile").siblings(".clearAll").show();
        }

        if (event.keyCode == 86 && event.keyCode == 17) {
            $("#mobile").siblings(".clearAll").show();
        }

    });
    $("#mobile").on("input", function() {
        var reg = /^0+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
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
    } else {
        $(".form-control").on("keyup input", function(event) {
            $(this).siblings(".bootLabel").show();
            var tempVal = $(this).val();
            if (tempVal.length <= 0) {
                $(this).siblings(".bootLabel").hide();
            }

        });
    }

    return false;
}





$(document).ready(function() {


    $(".cart-drawer .close");
    if ($(window).width() <= 786) {
        $(".cart-drawer .close").removeClass('d-none').attr('src', 'images/group-17.svg');
    }
});




$("#radioirlself").prop("checked", true);
$('.radioboxwrap').click(function() {
    $(this).find('.iruncheckradio').hide();
    $(this).find('.ircheckradio').show();
    $(this).siblings('.radioboxwrap').find('.ircheckradio').hide();
    $(this).siblings('.radioboxwrap').find('.iruncheckradio').show();
    $('.optionjumper').addClass('active');
    $(this).siblings('.radioboxwrap').find('.optionjumper').removeClass('active');

});



function updateRange(val) {
    document.getElementById('rangesli').value = val;
}

function updateTextInput(val) {
    document.getElementById('esim').value = val;
}




var elem = $('.thankyou-drawer_2')[0];
var over = $('#overlay')[0];
$(document).on('keydown', function(e) {
    if (e.keyCode === 27) {
        $(elem).removeClass('thankyou-drawer_2-open');
        $(over).removeClass('show');

    }
});

$(document).ready(function() {
    var match = ("");


    if (match == "") {
        $('.formquestionwrap').removeClass('');
        $('.thankyou-drawer_2').removeClass('newsize');

    }
});
$(document).ready(function() {
    $('.points').click(function() {
        var rangesli = $(this).attr('value');
        if (rangesli == 4) {

            $('.formquestionwrap').removeClass("d-none");
            $(".emoji_scenario_two img").attr("src", "range234.png");
        }
        if (rangesli == 5) {
            $(".emoji_scenario_two img").attr("src", "range5.png");
        }
    });
});