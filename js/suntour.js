
$(document).ready(function(){

    //Toggle sidebar
    $('.icon-menu').click(function(){
        $('#side-nav').addClass('open');
        $('.wrap-overlay').show();
        $('html').addClass('fixed-body');
    });

    $('.side-nav .closed i').click(function(){
        $('#side-nav').removeClass('open');
        $('.wrap-overlay').hide();
        $('html').removeClass('fixed-body');
    });

    $(document).click(function(e){
        console.log(e.target);
        if(!$(e.target).closest('.side-nav, .icon-menu').length){
            $('#side-nav').removeClass('open');
            $('.wrap-overlay').hide();
            $('html').removeClass('fixed-body');
        }
    });

    //Fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.navigation').addClass('fixed-header');
        } else{
            $('.navigation').removeClass('fixed-header');
        }
    });

 	/*=== Begin: Slider Banner Top=== */
	$(".list-banner").slick({
		autoplay: true,
        arrows: false,
		dots: true,
        speed: 600,
		customPaging : function(slider, i) {
	        var thumb = $(slider.$slides[i]).data();
		    return '<a class="num">'+(i + 1)+'</a>';
		},
		responsive: [{ 
		    breakpoint: 500,
		    settings: {
		        dots: true,
		        arrows: false,
		        infinite: true,
		        slidesToShow: 1,
		        slidesToScroll: 1
		    } 
		}]
	});

    /*=== Begin: Slider Banner Top=== */
    $('.list-tour-latest').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 4,
        speed: 600,
        slidesToScroll: 4,
        rows: '0',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
        }]
    });

    //Latest tour slide on Ipad
    if($(window).width() > 750 && $(window).width() < 1024){
        $('.tour-latest .list-tour-latest').slick('unslick');
        $('.tour-latest  .list-tour-latest').slick({
            dots: true,
            autoplay: false,
            slidesToShow: 3,
            speed: 600,
            slidesToScroll: 2,
            rows: '0',
            arrows: false
        });
    }

    //Slide services on PC
    if(!isSmartPhone()){
        $('.box-services .list-tour-latest').slick('unslick');
        $('.box-services .list-tour-latest').slick({
            dots: true,
            autoplay: false,
            slidesToShow: 2,
            speed: 600,
            slidesToScroll: 2,
            rows: '0',
            arrows: true
        });
    }


    /*=== Begin: Slider About=== */
   $('.list-slider-about').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: '0',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
              }
            }]
        });

    /*=== Begin: Tabs Tour=== */
    $('.tabs-tour li:not(.line)').click(function(e){
        e.preventDefault();
        var tab_id = $(this).attr('data-tab');
        $('.tabs-tour li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });


});
