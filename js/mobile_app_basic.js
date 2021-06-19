mobile_navbar = document.querySelector('.mobile_navbar');

reset_scroll_functions()

function reset_scroll_functions(){
    window.onscroll = function () { scrollFuncion() };
}

function scrollFuncion() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {  
        mobile_navbar.classList.add('scrolling');
    }
    else {
        mobile_navbar.classList.remove('scrolling');
    }
}

var mobile_notification_section = document.querySelector('.mobile_notification_section');

function opennotificationbox(){
    mobile_notification_section.style.display = "block";
    // disable scroll start
    document.body.style.overflow = 'hidden';

    var scroll_top_position = window.pageXOffset || document.documentElement.scrollTop;
    var scroll_left_position = window.pageYOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scroll_left_position, scroll_top_position);
    };
    // disable scroll end
}

function opennotificationboxexit(){
    mobile_notification_section.style.display = "none";
    // enable scroll start
    document.body.style.overflow = '';
    window.onscroll = function() {};
    reset_scroll_functions()
    // enable scroll end
}



var mobile_cart_section = document.querySelector('.mobile_cart_section');

function opencartbox(){
    mobile_cart_section.style.display = "block";
    // disable scroll start
    document.body.style.overflow = 'hidden';

    var scroll_top_position = window.pageXOffset || document.documentElement.scrollTop;
    var scroll_left_position = window.pageYOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scroll_left_position, scroll_top_position);
    };
    // disable scroll end
}

function opencartboxexit(){
    mobile_cart_section.style.display = "none";
    // enable scroll start
    document.body.style.overflow = '';
    window.onscroll = function() {};
    reset_scroll_functions()
    // enable scroll end
}