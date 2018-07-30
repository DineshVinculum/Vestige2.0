$('.language').click(function(){
    $(this).toggleClass('language-open');
});


$('.add_promotion').click(function () {
    $('body').addClass('addpromo');
});
$('.goback').click(function () {
    $('body').removeClass('addpromo');
});

$("#busterp_all").click(function () {
    $('#busterfilter').css('display', 'none');
});
$("#busterspecific").click(function () {
    $('#busterfilter').css('display', 'block');
});

$("#ad_buyall").click(function () {
    $('#adv_buyfilter').css('display', 'none');
});
$("#ad_buyspecific").click(function () {
    $('#adv_buyfilter').css('display', 'block');
});

$("#offer_all").click(function () {
    $('#offer_filter').css('display', 'none');
});
$("#offer_specific").click(function () {
    $('#offer_filter').css('display', 'block');
});


$("#ad_getall").click(function () {
    $('#ad_getfilter').css('display', 'none');
});
$("#ad_getspecific").click(function () {
    $('#ad_getfilter').css('display', 'block');
});


$("#app_all1").click(function () {
    $('#applicableto').css('display', 'none');
});
$("#app_specific1").click(function () {
    $('#applicableto').css('display', 'block');
});


$("#switch_left").click(function () {
    $('#d_value').val("10%");
});
$("#switch_right").click(function () {
    $('#d_value').val("Rs. 20");
});

$("#condition2").click(function () {
    $('#tovalue').css("display",'block');
});
$("#condition1").click(function () {
    $('#tovalue').css("display",'none');
});
$("#condition4").click(function () {
    $('#tovalue1').css("display",'block');
});
$("#condition3").click(function () {
    $('#tovalue1').css("display",'none');
});




jQuery(document).ready(function () {
    jQuery(".data-panel").on("click", function (e) {
        var data = jQuery(this).attr('data');
        jQuery(this).siblings().removeClass('active');
        jQuery(this).addClass('active');
        jQuery("#" + data).siblings('.promotion-content').removeClass('active');
        jQuery("#" + data).addClass('active');
    });
    jQuery(".promotion-item").on("click", function (e) {
        var data = jQuery(this).attr('data');
        jQuery(this).siblings().removeClass('active');
        jQuery(this).addClass('active');
        jQuery("#" + data).siblings('.promotion-list').removeClass('active');
        jQuery("#" + data).addClass('active');
    });
    $('.open-details').click(function(){
        $(this).parent('tr').toggleClass('opened')
    });
    $('.addmore').click(function(){
        $('#newfilter').css('display','block');
    });

    $('.newone').click(function(){
        $('#newadd').css('display','flex');
    });
   
    
});
$('#promotype').on('change', function () {
    if (this.value == 1) {
        $('#label__name').text('Amount');
        $('#label_value').val('Rs.');
    }
    if (this.value == 2) {
        $('#label__name').text('Items');
        $('#label_value').val('');
    }
});
$('#billbusterselect').on('change', function () {
    if (this.value == 3) {
        $('#condition-box').css('display','flex');
        $('.get-box').css('display','none');
    }
    if (this.value == 1){
        $('#condition-box').css('display','none');
        $('.get-box').css('display','flex');
    }
});

