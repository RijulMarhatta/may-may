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
               // console.log($("#fname").val());//
                validate();
                updateprogress();
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
                //console.log($("#lname").val());//
                validate();
                updateprogress();

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
        updateprogress();
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
        updateprogress();

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
         updateprogress();

// $(".radioyes input[type='radio']:checked").val();

    });

   

    $('.radiowrap').click(function() {
        if ($('.radioyes input').is(':checked')) {
            flagRadio="true";
        }
        validate();
        updateprogress();
    });

    $("#submit").click(function()
    {
        addData();
   
    });
    fetch('https://www.balldontlie.io/api/v1/teams')
    .then(res => res.json())
    .then((out) => {
        var abc = (JSON.stringify(out));
       // console.log('Output: ', abc);
       $(".mypanel").append("<div>"+abc+"</div>");
})
.catch(err => console.error(err));

});

function validate(){
    
    if (flagFName =="true" && flagLName =="true" && flagEmail =="true" && flagSelected =="true" && flagRadio =="true" && ($("#mobile").val().length==10)){
        $("#submit").prop("disabled", false);
    }else{
        $("#submit").prop("disabled", true);
    }

   

}

function addData(){

    console.log($("#fname").val());
    console.log($("#lname").val()); 
    console.log($("#mobile").val()); 
    console.log($("#email").val());
    console.log($("#optionselecter").val()); 
    console.log($(".radioyes input[type='radio']:checked").val())

var fnamedata = $("#fname").val();
var lnamedata = $("#lname").val();
var emaildata = $("#email").val();
var mobiledata = $("#mobile").val();
var countrydata = $("#optionselecter").val();
var radiodata = $(".radioyes input[type='radio']:checked").val();

$(".table").removeClass("d-none");
    $(".appendhere").append("<tr class = tablerow ><td class = tablecontent1>"+fnamedata+"</td><td class = tablecontent2>"+lnamedata+"</td><td class = tablecontent3>"+emaildata+"</td><td class = tablecontent4>"+mobiledata+"</td><td class = tablecontent5>"+countrydata+"</td><td class = tablecontent6>"+radiodata+"</td></tr><br>"); 
   

    $("#fname , #lname , #email , #mobile, #optionselecter").val("");
    $( ".radioyes input" ).prop( "checked", false);

    $("#submit").prop("disabled", true);
    updateprogress();

 flagFName ="false"; 
 flagLName ="false";
 flagEmail ="false";
 flagLName = "false";
 flagSelected="false";
 flagRadio="false";

}
function updateprogress(){
   var count = $(".progressparent").length 
   var length = $("#fname, #lname, #mobile, #email, #optionselecter, .radioyes input[type='radio']:checked").filter(function() {
        return this.value;
      }).length; 

      var done = Math.floor(length * (100 / count));
      $('.perc').text(done);
      $('.meter').width(done);

   
}
