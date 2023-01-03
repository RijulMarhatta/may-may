var flagFName ="false"; 
var flagLName ="false";
var flagEmail ="false";
var flagLName = "false";
var flagSelected="false";
var flagRadio="false";
$(document).ready(function() {

    $('#fname').blur(function() {
        if (this.value == 0) {
            $(this).siblings('.alerto').removeClass("d-none");
        }
       
    });

    $("#fname").on("keyup input", function() {
        let reg = /[^a-zA-Z]/g;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        if (this.value == 0) {
            $(this).siblings().removeClass("d-none");
            flagFName = "false";
        } else {
            $(this).siblings().addClass("d-none");
            flagFName = "true";
        }
                //console.log($("#fname").val());//
                validate();
    });
    $('#lname').blur(function() {
        if (this.value == 0) {
            $(this).siblings('.alerto').removeClass("d-none");
        }
        
    });

    $("#lname").on("keyup input", function() {
        let reg = /[^a-zA-Z]/g;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        if (this.value == 0) {
            $(this).siblings().removeClass("d-none");
            flagLName = "false";
        } else {
            $(this).siblings().addClass("d-none");
            flagLName = "true";
        }
                //console.log($("#fname").val());//
                validate();
    });


    $("#mobile").on("keyup input", function() {
        var reg = /^[01234]+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        if (this.value.length == 0) {
            $(this).siblings().addClass("d-none");

        }
        if (this.value.length == 10) {
            $(this).siblings().addClass("d-none");

        }

        this.value = this.value.replace(/[^0-9]/g, '');
        validate();

    });
    $("#mobile").blur(function() {
        var abc = $(this).val();
        this.value = this.value.replace(/[^0-9]/g, '');
        if (abc.length == 10) {
            $(this).siblings().addClass("d-none");

        } else if (abc.length > 0 && abc.length < 10) {
            $(this).siblings().removeClass("d-none").html("enter 10 digits")
        }
        if (abc.length == 0) {
            $(this).siblings().removeClass("d-none").html("Mobile number is required*");

        }

    });

    $("#email").blur(function() {
        var email = $(this).val();
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
        if (re.test(email)) {
            $(this).siblings().addClass("d-none");
            flagEmail ="true";
        } else {
            $(this).siblings().removeClass("d-none");
            flagEmail ="false";
        }
         validate();
    });
    $("#email").on("keyup input", function() {
        var email = $(this).val();
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
        if (re.test(email)) {
            $(this).siblings().addClass("d-none");
            flagEmail ="true";
        } else {
            $(this).siblings().removeClass("d-none");
            flagEmail ="false";
        }
         validate();
    });

    var dropdownSelect = "false";

    $("#optionselecter").change(function() {
        dropdownSelect = "true";
        if (dropdownSelect == "true") {
            //alert("selected");
            flagSelected="true";
        }
        validate();
    });

   

    $('.radiowrap').click(function() {
        if ($('.radioyes input').is(':checked')) {
            flagRadio="true";
        }
        validate();
    });


  
});






function validate(){
    
    if (flagFName =="true" && flagLName =="true" && flagEmail =="true" && flagSelected =="true" && flagRadio =="true" && ($("#mobile").val().length==10)){
        $("#submit").prop("disabled", false);
    }else{
        $("#submit").prop("disabled", true);
    }

   
}