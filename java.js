$(document).ready(function () {

    $(".nav_cv").click(function () {
        $("#forside").hide();
        $("#webdesign").hide();
        $("#video").hide();
        $("#animation").hide();
        $("#ux").hide();
        $("#cv").show();
    });

    $(".nav_webdesign").click(function () {
        $("#forside").hide();
        $("#cv").hide();
        $("#video").hide();
        $("#animation").hide();
        $("#ux").hide();
        $("#webdesign").show();
    });

    $(".nav_video").click(function () {
        $("#forside").hide();
        $("#cv").hide();
        $("#webdesign").hide();
        $("#animation").hide();
        $("#ux").hide();
        $("#video").show();
    });

    $(".nav_animation").click(function () {
        $("#forside").hide();
        $("#cv").hide();
        $("#webdesign").hide();
        $("#video").hide();
        $("#ux").hide();
        $("#animation").show();
    });

    $(".nav_ux").click(function () {
        $("#forside").hide();
        $("#cv").hide();
        $("#webdesign").hide();
        $("#video").hide();
        $("#animation").hide();
        $("#ux").show();
    });

    $(".nav_forside").click(function () {
        $("#cv").hide();
        $("#webdesign").hide();
        $("#video").hide();
        $("#animation").hide();
        $("#ux").hide();
        $("#forside").show();
    });

});
