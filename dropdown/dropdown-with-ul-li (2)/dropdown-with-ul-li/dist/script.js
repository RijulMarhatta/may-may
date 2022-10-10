$(document).ready(function (){
    $("div.selected").on("click", function () {
        var hasActiveClass = $("div.select-box").hasClass("active");

        if (hasActiveClass === false) {
            var windowHeight = $(window).outerHeight();
            var dropdownPosition = $(this).offset().top;
            var dropdownHeight = 95; // dropdown height

            if (dropdownPosition + dropdownHeight + 50 > windowHeight) {
                $("div.select-box").addClass("drop-up");
            }
            else {
                $("div.select-box").removeClass("drop-up");
            }

            var currentUniversity = $(this).find('text').text().trim();

            $.each($("ul.select-list li"), function () {
                var university = $(this).text().trim();
                if (university === currentUniversity)
                    $(this).addClass("active");
                else
                    $(this).removeClass("active");
            });
        }

        $("div.select-box").toggleClass("active");
    });

    $("ul.select-list li").on("click", function () {
        var university = $(this).html();
        $("span.text").html(university);
        $("div.select-box").removeClass("active");
    });

    $("ul.select-list li").hover(function () {
        $("ul.select-list li").removeClass("active");
    });

    $(document).click(function (event) {
       if ($(event.target).closest("div.custom-select").length < 1) {
            $("div.select-box").removeClass("active");
        }
    });

});