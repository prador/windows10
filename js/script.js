$(document).ready(function () {
    function dateTime(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var date = month + '/' + ((''+day).length<2 ? '0' : '') + day + '/' + d.getFullYear();

        if (hour > 12) {
            hour = hour - 12;
            time = hour + ':' + minutes + " " + "PM";
        } else {
            time = hour + ':' + minutes + " " + "AM";
        }
        $(".time").text(time);
        $(".date").text(date);

        setTimeout(dateTime, 1000);
    }
    dateTime();
    $(function () {
        var options = {
            cellHeight: 80,
            verticalMargin: 10,
            disableResize: true
        };
        $('.grid-stack').gridstack(options);
    });
    $(".show-desktop").click(function () {
        $(".grid-stack-item").toggleClass("hidden");
    })
    
    $(".personalize-task").click(function (){
        var display = $("#personalize-modal").css("display");
        if (display == "none") {
            $("#personalize-modal").show();
            $(".personalize-task").css("background-color","#1a1a1a");
        } else if (display == "block") {
            $("#personalize-modal").hide();
            $(".personalize-task").css("background-color","#000408");
        }
    });
    $(".personalize").dblclick(function (){
        $(".personalize-task").show();
        if ($(".personalize-task").length) {
            $("#personalize-modal").show();
            $(".personalize-task").css("background-color","#1a1a1a");
        } else {
            $("#personalize-modal").show();
            $(".personalize-task").css("background-color","#1a1a1a");
        }
        $(".modal-content").draggable();
    })
    $(".close").click(function (){
        $("#personalize-modal").hide();
        $(".personalize-task").hide();
    }); 
    $(".minimize").click(function (){
        $("#personalize-modal").hide();
        $(".personalize-task").css("background-color","#000408");
    });
    $(".maximize").click(function (){
        $("#personalize-modal").toggleClass("max"); 
        $(".maximize").toggleClass("restore");
    });
    $("#personalize-modal").dblclick(function(){
        $(".maximize").click();
    })
    $("#select-background").hide();
    $("#select-fit").hide();
    
    $(".dropdown-list li").click(function(){
        var back = $(this).parent().prev().hasClass("background-dropdown");
        var option = $(this).text();
        console.log(option);
        if (back) {
            $(".background-dropdown").text(option);
            $("#select-background").hide();
        } else {
            $(".fit-dropdown").text(option);
            $("#select-fit").hide();
        }
    })
    $(".drop-selector").click(function () {
        if ($(this).hasClass("background-dropdown")) {
            $("#select-background").show();
            
        } else {
            $("#select-fit").show();
        }
    })
    

});