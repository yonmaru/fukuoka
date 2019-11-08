// JavaScript Document

/* ------------------------------------------------------------------------
   コンフィグ
------------------------------------------------------------------------ */
//クライアントID
var clientID = 'rengofukuoka';

/* ------------------------------------------------------------------------
   meta系読み込み
------------------------------------------------------------------------ */
jQuery(function metaViewportAct() {
    var metaViewport = jQuery('<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1">');
    var linkImport = jQuery('<link href="/-/' + clientID + '/file/html/open/css/reset.css" rel="stylesheet" type="text/css" /><link href="/-/' + clientID + '/file/html/open/css/style.css" rel="stylesheet" type="text/css" /><link href="/-/' + clientID + '/file/html/open/css/pc.css" rel="stylesheet" type="text/css" media="screen and (min-width: 641px)" /><link href="/-/' + clientID + '/file/html/open/css/sp.css" rel="stylesheet" type="text/css" media="screen and (max-width: 640px)" /><link href="/-/' + clientID + '/file/html/open/js/slick/slick.css" rel="stylesheet" type="text/css" /><link href="/-/' + clientID + '/file/html/open/js/slick/slick-theme.css" rel="stylesheet" type="text/css" />');
    jQuery('head').prepend(metaViewport).append(linkImport);
    //jQuery('head').append(linkImport);
});


/* ------------------------------------------------------------------------
   ページ振り分け
------------------------------------------------------------------------ */

jQuery(document).ready(function() {
    //検索ページの時
    if (document.URL.match('search.php')) {
        jQuery(function() {
            jQuery('body').addClass('search');
        });
    }
    //問い合わせページの時
    if (document.URL.match('enquete.php')) {
        jQuery(function() {
            jQuery('body').addClass('enquete');
        });
    }
    //一覧ページの時
    if (document.URL.match('CID=')) {
        jQuery(function() {
            jQuery('body').addClass('archive');
        });
    }
    //一覧ページの時2
    if (document.URL.match('&start=')) {
        jQuery(function() {
            jQuery('body').addClass('archive');
        });
    }
    //構成組織・地域協議会ページの時
    if (document.URL.match('AID=171839')) {
        jQuery(function() {
            jQuery('body').addClass('kouseisoshiki');
        });
    }
    //記事一覧トップの時
//    if (document.URL.match('ID=2084')) {
//        jQuery(function() {
//            jQuery('body').addClass('archive');
//        });
//    }
    var url = location.href;
    if(url == 'https://j-union.com/-/rengofukuoka/nlog/viewer/view.php?ID=2084'){
        jQuery('body').addClass('archive');
    }
//    var url = location.href;
//    if(url == 'https://j-union.com/-/rengofukuoka/nlog/viewer/view.php?ID=2154'){
//    jQuery('body').addClass('kikanshi');
//    }

});


$(document).ready(function(){
 
    $(".pagetop").hide();
 
    $(window).on("scroll", function() {
 
        if ($(this).scrollTop() > 100) {
            $('.pagetop').fadeIn("fast");
        } else {
            $('.pagetop').fadeOut("fast");
        }
         
    });
 
});

$(function(){
    $('a[href^=#]').click(function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

$(function(){
    function headerload() {
    
        $('#menubtn').click(function() {
            $('.gnav').slideDown('fast');
        });
        $('#menubtn-close').click(function() {
            $('.gnav').slideUp('fast');
        });
        
        var windowWidth = $(window).width();
        var windowSm = 640;
        if (windowWidth <= windowSm) {
            $(function() {
                $('.gnav .gnav-parent').click(function() {
                    $(this).toggleClass('open').children('ul:not(:animated)').slideToggle('fast');
                });
            });
        } else {
            $(function() {
                $('.gnav .gnav-parent').hover(function() {
                    $(this).children('ul:not(:animated)').slideDown('fast');
                },function() {
                    $(this).children('ul').slideUp('fast');
                });
            });
        }
        
        var $elem = $('.image-switch');
        var sp = '_sp.';
        var pc = '_pc.';
        var replaceWidth = 641;

        function imageSwitch() {
            var windowWidth = parseInt($(window).width());

            $elem.each(function() {
                var $this = $(this);
                if(windowWidth >= replaceWidth) {
                    $this.attr('src', $this.attr('src').replace(sp, pc));
                } else {
                    $this.attr('src', $this.attr('src').replace(pc, sp));
                }
            });
        }
        imageSwitch();

        var resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                imageSwitch();
            }, 100);
        });

        setTimeout(function () {
            document.getElementsByTagName("html")[0].classList.add("loading-delay");
        }, 3000);

    }
    headerload();
    $("#header_include").load("/-/rengofukuoka/html/page.php?cd=84964 #header_load", function() { headerload(); });
    $("#footer_include").load("/-/rengofukuoka/html/page.php?cd=84965 #footer_load");
});


/* ------------------------------------------------------------------------
   トップページ・タイトルリストカスタム
------------------------------------------------------------------------ */

//NEWマーク・UPマークのカスタマイズ用要素の追加
jQuery(function() {
    jQuery('.NewsLogList_title img[src*=new]').wrap('<span class="new_mark"></span>');
    jQuery('.NewsLogList_title img[src*=up]').wrap('<span class="up_mark"></span>');
    jQuery('.list .date img[src*=new]').addClass('new_mark');
    jQuery('.list .date img[src*=up]').addClass('up_mark');
    jQuery('.list .date').each(function() {
        var newicon0 = $(this).find('img').hasClass('new_mark');
        if( newicon0 ) {
            $(this).addClass('new');
        }
        var upicon0 = $(this).find('img').hasClass('up_mark');
        if( upicon0 ) {
            $(this).addClass('up');
        }
    });
});
//要素の移動
jQuery(function() {
    jQuery('.NewsLogList_article').each(function() {
        jQuery(this).find('.NewsLogList_info').insertBefore(jQuery(this).find('.NewsLogList_thumbnail'));
        jQuery(this).find('.NewsLogList_body').insertAfter(jQuery(this).find('.NewsLogList_thumbnail'));
        jQuery(this).find('.NewsLogList_date').insertBefore(jQuery(this).find('.NewsLogList_category'));
    });
});


//メンバー一覧ページカスタム
$(function(){
    $('.member-wrapper .NewsLogList_article').each(function() {
        $(this).find('.NewsLogList_name').appendTo($(this).find('.NewsLogList_category'));
        $(this).find('.NewsLogList_info').append('<div class="member-more arrowbtn06"><a href="#">もっと見る</a></div>');
        var memberurl = $($(this).find('.NewsLogList_title a')).attr('href');
        $(this).find('.member-more a').attr('href',memberurl);
    });
});



//spanタグで囲む
$(function(){
    $('#newsdata .NewsLogList_date').wrapInner('<span></span>');
    $('#newsdata .NewsLogList_title a').wrapInner('<span></span>');
    $('#newsdata .NewsLogList_category').wrapInner('<span></span>');
    $('#bnrdata .NewsLogList_title a').wrapInner('<span></span>');
    $('#mvdata .NewsLogList_title a').wrapInner('<span></span>');
    $('#ckdata .NewsLogList_date').wrapInner('<span></span>');
    $('#ckdata .NewsLogList_title a').wrapInner('<span></span>');
    $('#ckdata .NewsLogList_category').wrapInner('<span></span>');
    $('#kijiBlock .autherBlock').wrapInner('<span></span>');
    $('#kijiBlock .dateBlock').wrapInner('<span></span>');
});


//連番つける
$(function(){
    $('#newsdata .NewsLogList_article').each(function(i){
        $(this).attr('class','newsdata' + (i+1));
    });
    $('#bnrdata .NewsLogList_article').each(function(i){
        $(this).attr('class','bnrdata' + (i+1));
    });
    $('#rcmdata .NewsLogList_article').each(function(i){
        $(this).attr('class','rcmdata' + (i+1));
    });
    $('#mvdata .NewsLogList_article').each(function(i){
        $(this).attr('class','mvdata' + (i+1));
    });
    $('#ckdata .NewsLogList_article').each(function(i){
        $(this).attr('class','ckdata' + (i+1));
    });
});

//差し替え
$(function(){

    $('#newsdata .newsdata1 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox1 .date');
    $('#newsdata .newsdata1 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox1 dt');
    $('#newsdata .newsdata1 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox1 dd a');
    var newicon1 = $('#newsdata .newsdata1 .new_mark').hasClass('new_mark');
    if( newicon1 ) {
        $('#newsboxes .newsbox1').addClass('new');
    }
    var upicon1 = $('#newsdata .newsdata1 .up_mark').hasClass('up_mark');
    if( upicon1 ) {
        $('#newsboxes .newsbox1').addClass('up');
    }
    var url1 = $('#newsdata .newsdata1 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox1 a').attr('href',url1);

    $('#newsdata .newsdata2 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox2 .date');
    $('#newsdata .newsdata2 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox2 dt');
    $('#newsdata .newsdata2 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox2 dd a');
    var newicon2 = $('#newsdata .newsdata2 .new_mark').hasClass('new_mark');
    if( newicon2 ) {
        $('#newsboxes .newsbox2').addClass('new');
    }
    var upicon2 = $('#newsdata .newsdata2 .up_mark').hasClass('up_mark');
    if( upicon2 ) {
        $('#newsboxes .newsbox2').addClass('up');
    }
    var url2 = $('#newsdata .newsdata2 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox2 a').attr('href',url2);

    $('#newsdata .newsdata3 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox3 .date');
    $('#newsdata .newsdata3 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox3 dt');
    $('#newsdata .newsdata3 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox3 dd a');
    var newicon3 = $('#newsdata .newsdata3 .new_mark').hasClass('new_mark');
    if( newicon3 ) {
        $('#newsboxes .newsbox3').addClass('new');
    }
    var upicon3 = $('#newsdata .newsdata3 .up_mark').hasClass('up_mark');
    if( upicon3 ) {
        $('#newsboxes .newsbox3').addClass('up');
    }
    var url3 = $('#newsdata .newsdata3 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox3 a').attr('href',url3);

    $('#newsdata .newsdata4 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox4 .date');
    $('#newsdata .newsdata4 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox4 dt');
    $('#newsdata .newsdata4 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox4 dd a');
    var newicon4 = $('#newsdata .newsdata4 .new_mark').hasClass('new_mark');
    if( newicon4 ) {
        $('#newsboxes .newsbox4').addClass('new');
    }
    var upicon4 = $('#newsdata .newsdata4 .up_mark').hasClass('up_mark');
    if( upicon4 ) {
        $('#newsboxes .newsbox4').addClass('up');
    }
    var url4 = $('#newsdata .newsdata4 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox4 a').attr('href',url4);

    $('#newsdata .newsdata5 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox5 .date');
    $('#newsdata .newsdata5 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox5 dt');
    $('#newsdata .newsdata5 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox5 dd a');
    var newicon5 = $('#newsdata .newsdata5 .new_mark').hasClass('new_mark');
    if( newicon5 ) {
        $('#newsboxes .newsbox5').addClass('new');
    }
    var upicon5 = $('#newsdata .newsdata5 .up_mark').hasClass('up_mark');
    if( upicon5 ) {
        $('#newsboxes .newsbox5').addClass('up');
    }
    var url5 = $('#newsdata .newsdata5 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox5 a').attr('href',url5);

    $('#newsdata .newsdata6 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox6 .date');
    $('#newsdata .newsdata6 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox6 dt');
    $('#newsdata .newsdata6 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox6 dd a');
    var newicon6 = $('#newsdata .newsdata6 .new_mark').hasClass('new_mark');
    if( newicon6 ) {
        $('#newsboxes .newsbox6').addClass('new');
    }
    var upicon6 = $('#newsdata .newsdata6 .up_mark').hasClass('up_mark');
    if( upicon6 ) {
        $('#newsboxes .newsbox6').addClass('up');
    }
    var url6 = $('#newsdata .newsdata6 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox6 a').attr('href',url6);

    $('#newsdata .newsdata7 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox7 .date');
    $('#newsdata .newsdata7 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox7 dt');
    $('#newsdata .newsdata7 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox7 dd a');
    var newicon7 = $('#newsdata .newsdata7 .new_mark').hasClass('new_mark');
    if( newicon7 ) {
        $('#newsboxes .newsbox7').addClass('new');
    }
    var upicon7 = $('#newsdata .newsdata7 .up_mark').hasClass('up_mark');
    if( upicon7 ) {
        $('#newsboxes .newsbox7').addClass('up');
    }
    var url7 = $('#newsdata .newsdata7 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox7 a').attr('href',url7);

    $('#newsdata .newsdata8 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox8 .date');
    $('#newsdata .newsdata8 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox8 dt');
    $('#newsdata .newsdata8 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox8 dd a');
    var newicon8 = $('#newsdata .newsdata8 .new_mark').hasClass('new_mark');
    if( newicon8 ) {
        $('#newsboxes .newsbox8').addClass('new');
    }
    var upicon8 = $('#newsdata .newsdata8 .up_mark').hasClass('up_mark');
    if( upicon8 ) {
        $('#newsboxes .newsbox8').addClass('up');
    }
    var url8 = $('#newsdata .newsdata8 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox8 a').attr('href',url8);

    $('#newsdata .newsdata9 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox9 .date');
    $('#newsdata .newsdata9 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox9 dt');
    $('#newsdata .newsdata9 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox9 dd a');
    var newicon9 = $('#newsdata .newsdata9 .new_mark').hasClass('new_mark');
    if( newicon9 ) {
        $('#newsboxes .newsbox9').addClass('new');
    }
    var upicon9 = $('#newsdata .newsdata9 .up_mark').hasClass('up_mark');
    if( upicon9 ) {
        $('#newsboxes .newsbox9').addClass('up');
    }
    var url9 = $('#newsdata .newsdata9 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox9 a').attr('href',url9);

    $('#newsdata .newsdata10 .NewsLogList_date span').clone(true).appendTo('#newsboxes .newsbox10 .date');
    $('#newsdata .newsdata10 .NewsLogList_category span').clone(true).appendTo('#newsboxes .newsbox10 dt');
    $('#newsdata .newsdata10 .NewsLogList_title a span').clone(true).prependTo('#newsboxes .newsbox10 dd a');
    var newicon10 = $('#newsdata .newsdata10 .new_mark').hasClass('new_mark');
    if( newicon10 ) {
        $('#newsboxes .newsbox10').addClass('new');
    }
    var upicon10 = $('#newsdata .newsdata10 .up_mark').hasClass('up_mark');
    if( upicon10 ) {
        $('#newsboxes .newsbox10').addClass('up');
    }
    var url10 = $('#newsdata .newsdata10 .NewsLogList_title a').attr('href');
    $('#newsboxes .newsbox10 a').attr('href',url10);

});

//注目リンク
$(function() {

    var bnrsrc1 = $('#bnrdata .bnrdata1 .NewsLogList_thumbnail img').attr('src');
    $('#bnrboxes .bnrbox1 img').attr('src',bnrsrc1);
    var bnrtitle1 = $('#bnrdata .bnrdata1 .NewsLogList_title a span').text();
    $('#bnrboxes .bnrbox1 span').text(bnrtitle1);
    var bnrurl1 = $('#bnrdata .bnrdata1 .NewsLogList_body_content').text();
    $('#bnrboxes .bnrbox1 a').attr('href',bnrurl1);

    var bnrsrc2 = $('#bnrdata .bnrdata2 .NewsLogList_thumbnail img').attr('src');
    $('#bnrboxes .bnrbox2 img').attr('src',bnrsrc2);
    var bnrtitle2 = $('#bnrdata .bnrdata2 .NewsLogList_title a span').text();
    $('#bnrboxes .bnrbox2 span').text(bnrtitle2);
    var bnrurl2 = $('#bnrdata .bnrdata2 .NewsLogList_body_content').text();
    $('#bnrboxes .bnrbox2 a').attr('href',bnrurl2);

    var bnrsrc3 = $('#bnrdata .bnrdata3 .NewsLogList_thumbnail img').attr('src');
    $('#bnrboxes .bnrbox3 img').attr('src',bnrsrc3);
    var bnrtitle3 = $('#bnrdata .bnrdata3 .NewsLogList_title a span').text();
    $('#bnrboxes .bnrbox3 span').text(bnrtitle3);
    var bnrurl3 = $('#bnrdata .bnrdata3 .NewsLogList_body_content').text();
    $('#bnrboxes .bnrbox3 a').attr('href',bnrurl3);

    var bnrsrc4 = $('#bnrdata .bnrdata4 .NewsLogList_thumbnail img').attr('src');
    $('#bnrboxes .bnrbox4 img').attr('src',bnrsrc4);
    var bnrtitle4 = $('#bnrdata .bnrdata4 .NewsLogList_title a span').text();
    $('#bnrboxes .bnrbox4 span').text(bnrtitle4);
    var bnrurl4 = $('#bnrdata .bnrdata4 .NewsLogList_body_content').text();
    $('#bnrboxes .bnrbox4 a').attr('href',bnrurl4);

    var bnrsrc5 = $('#bnrdata .bnrdata5 .NewsLogList_thumbnail img').attr('src');
    $('#bnrboxes .bnrbox5 img').attr('src',bnrsrc5);
    var bnrtitle5 = $('#bnrdata .bnrdata5 .NewsLogList_title a span').text();
    $('#bnrboxes .bnrbox5 span').text(bnrtitle5);
    var bnrurl5 = $('#bnrdata .bnrdata5 .NewsLogList_body_content').text();
    $('#bnrboxes .bnrbox5 a').attr('href',bnrurl5);

    var bnrsrc6 = $('#bnrdata .bnrdata6 .NewsLogList_thumbnail img').attr('src');
    $('#bnrboxes .bnrbox6 img').attr('src',bnrsrc6);
    var bnrtitle6 = $('#bnrdata .bnrdata6 .NewsLogList_title a span').text();
    $('#bnrboxes .bnrbox6 span').text(bnrtitle6);
    var bnrurl6 = $('#bnrdata .bnrdata6 .NewsLogList_body_content').text();
    $('#bnrboxes .bnrbox6 a').attr('href',bnrurl6);
    
});

//おすすめコンテンツ
$(function() {

    var rcmsrc1 = $('#rcmdata .rcmdata1 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox1 img').attr('src',rcmsrc1);
    var rcmtitle1 = $('#rcmdata .rcmdata1 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox1 span').text(rcmtitle1);
    if( rcmtitle1 ) {
        $('.rcmbox1').removeClass('hide');
    }
    var rcmurl1 = $('#rcmdata .rcmdata1 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox1 a').attr('href',rcmurl1);

    var rcmsrc2 = $('#rcmdata .rcmdata2 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox2 img').attr('src',rcmsrc2);
    var rcmtitle2 = $('#rcmdata .rcmdata2 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox2 span').text(rcmtitle2);
    if( rcmtitle2 ) {
        $('.rcmbox2').removeClass('hide');
    }
    var rcmurl2 = $('#rcmdata .rcmdata2 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox2 a').attr('href',rcmurl2);

    var rcmsrc3 = $('#rcmdata .rcmdata3 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox3 img').attr('src',rcmsrc3);
    var rcmtitle3 = $('#rcmdata .rcmdata3 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox3 span').text(rcmtitle3);
    if( rcmtitle3 ) {
        $('.rcmbox3').removeClass('hide');
    }
    var rcmurl3 = $('#rcmdata .rcmdata3 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox3 a').attr('href',rcmurl3);

    var rcmsrc4 = $('#rcmdata .rcmdata4 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox4 img').attr('src',rcmsrc4);
    var rcmtitle4 = $('#rcmdata .rcmdata4 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox4 span').text(rcmtitle4);
    if( rcmtitle4 ) {
        $('.rcmbox4').removeClass('hide');
    }
    var rcmurl4 = $('#rcmdata .rcmdata4 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox4 a').attr('href',rcmurl4);

    var rcmsrc5 = $('#rcmdata .rcmdata5 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox5 img').attr('src',rcmsrc5);
    var rcmtitle5 = $('#rcmdata .rcmdata5 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox5 span').text(rcmtitle5);
    if( rcmtitle5 ) {
        $('.rcmbox5').removeClass('hide');
    }
    var rcmurl5 = $('#rcmdata .rcmdata5 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox5 a').attr('href',rcmurl5);

    var rcmsrc6 = $('#rcmdata .rcmdata6 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox6 img').attr('src',rcmsrc6);
    var rcmtitle6 = $('#rcmdata .rcmdata6 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox6 span').text(rcmtitle6);
    if( rcmtitle6 ) {
        $('.rcmbox6').removeClass('hide');
    }
    var rcmurl6 = $('#rcmdata .rcmdata6 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox6 a').attr('href',rcmurl6);

    var rcmsrc7 = $('#rcmdata .rcmdata7 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox7 img').attr('src',rcmsrc7);
    var rcmtitle7 = $('#rcmdata .rcmdata7 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox7 span').text(rcmtitle7);
    if( rcmtitle7 ) {
        $('.rcmbox7').removeClass('hide');
    }
    var rcmurl7 = $('#rcmdata .rcmdata7 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox7 a').attr('href',rcmurl7);

    var rcmsrc8 = $('#rcmdata .rcmdata8 .NewsLogList_thumbnail img').attr('src');
    $('#rcmboxes .rcmbox8 img').attr('src',rcmsrc8);
    var rcmtitle8 = $('#rcmdata .rcmdata8 .NewsLogList_title a').text();
    $('#rcmboxes .rcmbox8 span').text(rcmtitle8);
    if( rcmtitle8 ) {
        $('.rcmbox8').removeClass('hide');
    }
    var rcmurl8 = $('#rcmdata .rcmdata8 .NewsLogList_body_content').text();
    $('#rcmboxes .rcmbox8 a').attr('href',rcmurl8);
    
});

//メインビジュアル
$(window).load(function(){

    var mvsrc1 = $('#mvdata .mvdata1 .NewsLogList_thumbnail img').attr('src');
    $('#mvboxes .mvbox1 img.mv').attr('src',mvsrc1);
    var mvtitle1 = $('#mvdata .mvdata1 .NewsLogList_title span').text();
    $('#mvboxes .mvbox1 span.belt span').text(mvtitle1);
    if( !mvtitle1 ) {
        $('.mvbox1').remove();    
    }
    var mvurl1 = $('#mvdata .mvdata1 .NewsLogList_body_content').text();
    $('#mvboxes .mvbox1').attr('href',mvurl1);
    
    var mvsrc2 = $('#mvdata .mvdata2 .NewsLogList_thumbnail img').attr('src');
    $('#mvboxes .mvbox2 img.mv').attr('src',mvsrc2);
    var mvtitle2 = $('#mvdata .mvdata2 .NewsLogList_title span').text();
    $('#mvboxes .mvbox2 span.belt span').text(mvtitle2);
    if( !mvtitle2 ) {
        $('.mvbox2').remove();    
    }
    var mvurl2 = $('#mvdata .mvdata2 .NewsLogList_body_content').text();
    $('#mvboxes .mvbox2').attr('href',mvurl2);
    
    var mvsrc3 = $('#mvdata .mvdata3 .NewsLogList_thumbnail img').attr('src');
    $('#mvboxes .mvbox3 img.mv').attr('src',mvsrc3);
    var mvtitle3 = $('#mvdata .mvdata3 .NewsLogList_title span').text();
    $('#mvboxes .mvbox3 span.belt span').text(mvtitle3);
    if( !mvtitle3 ) {
        $('.mvbox3').remove();    
    }
    var mvurl3 = $('#mvdata .mvdata3 .NewsLogList_body_content').text();
    $('#mvboxes .mvbox3').attr('href',mvurl3);
    
    var mvsrc4 = $('#mvdata .mvdata4 .NewsLogList_thumbnail img').attr('src');
    $('#mvboxes .mvbox4 img.mv').attr('src',mvsrc4);
    var mvtitle4 = $('#mvdata .mvdata4 .NewsLogList_title span').text();
    $('#mvboxes .mvbox4 span.belt span').text(mvtitle4);
    if( !mvtitle4 ) {
        $('.mvbox4').remove();    
    }
    var mvurl4 = $('#mvdata .mvdata4 .NewsLogList_body_content').text();
    $('#mvboxes .mvbox4').attr('href',mvurl4);
    
    var mvsrc5 = $('#mvdata .mvdata5 .NewsLogList_thumbnail img').attr('src');
    $('#mvboxes .mvbox5 img.mv').attr('src',mvsrc5);
    var mvtitle5 = $('#mvdata .mvdata5 .NewsLogList_title span').text();
    $('#mvboxes .mvbox5 span.belt span').text(mvtitle5);
    if( !mvtitle5 ) {
        $('.mvbox5').remove();    
    }
    var mvurl5 = $('#mvdata .mvdata5 .NewsLogList_body_content').text();
    $('#mvboxes .mvbox5').attr('href',mvurl5);
    
    var mvsrc6 = $('#mvdata .mvdata6 .NewsLogList_thumbnail img').attr('src');
    $('#mvboxes .mvbox6 img.mv').attr('src',mvsrc6);
    var mvtitle6 = $('#mvdata .mvdata6 .NewsLogList_title span').text();
    $('#mvboxes .mvbox6 span.belt span').text(mvtitle6);
    if( !mvtitle6 ) {
        $('.mvbox6').remove();    
    }
    var mvurl6 = $('#mvdata .mvdata6 .NewsLogList_body_content').text();
    $('#mvboxes .mvbox6').attr('href',mvurl6);
    
});

//地域活動報告
$(function(){

    $('#ckdata .ckdata1 .NewsLogList_date span').clone(true).appendTo('#ckboxes .postinfo-box1 .date');
    //$('#ckdata .ckdata1 .NewsLogList_category span').clone(true).appendTo('#ckboxes .postinfo-box1 dt .category a');
    var cktxt1 = $('#ckdata .ckdata1 .NewsLogList_category span').text();
    $('#ckboxes .postinfo-box1 dt .category a').text(cktxt1);
    $('#ckdata .ckdata1 .NewsLogList_title a span').clone(true).prependTo('#ckboxes .postinfo-box1 dd a');
    var ckurl1 = $('#ckdata .ckdata1 .NewsLogList_title a').attr('href');
    $('#ckboxes .postinfo-box1 dd a').attr('href',ckurl1);
    var cksrc1 = $('#ckdata .ckdata1 .NewsLogList_thumbnail img').attr('src');
    $('#ckboxes .postinfo-box1 .imgtrm img').attr('src',cksrc1);

    $('#ckdata .ckdata2 .NewsLogList_date span').clone(true).appendTo('#ckboxes .postinfo-box2 .date');
    //$('#ckdata .ckdata2 .NewsLogList_category span').clone(true).appendTo('#ckboxes .postinfo-box2 dt .category a');
    var cktxt2 = $('#ckdata .ckdata2 .NewsLogList_category span').text();
    $('#ckboxes .postinfo-box2 dt .category a').text(cktxt2);
    $('#ckdata .ckdata2 .NewsLogList_title a span').clone(true).prependTo('#ckboxes .postinfo-box2 dd a');
    var ckurl2 = $('#ckdata .ckdata2 .NewsLogList_title a').attr('href');
    $('#ckboxes .postinfo-box2 dd a').attr('href',ckurl2);
    var cksrc2 = $('#ckdata .ckdata2 .NewsLogList_thumbnail img').attr('src');
    $('#ckboxes .postinfo-box2 .imgtrm img').attr('src',cksrc2);

    $('#ckdata .ckdata3 .NewsLogList_date span').clone(true).appendTo('#ckboxes .postinfo-box3 .date');
    //$('#ckdata .ckdata3 .NewsLogList_category span').clone(true).appendTo('#ckboxes .postinfo-box3 dt .category a');
    var cktxt3 = $('#ckdata .ckdata3 .NewsLogList_category span').text();
    $('#ckboxes .postinfo-box3 dt .category a').text(cktxt3);
    $('#ckdata .ckdata3 .NewsLogList_title a span').clone(true).prependTo('#ckboxes .postinfo-box3 dd a');
    var ckurl3 = $('#ckdata .ckdata3 .NewsLogList_title a').attr('href');
    $('#ckboxes .postinfo-box3 dd a').attr('href',ckurl3);
    var cksrc3 = $('#ckdata .ckdata3 .NewsLogList_thumbnail img').attr('src');
    $('#ckboxes .postinfo-box3 .imgtrm img').attr('src',cksrc3);

    $('#ckdata .ckdata4 .NewsLogList_date span').clone(true).appendTo('#ckboxes .postinfo-box4 .date');
    //$('#ckdata .ckdata4 .NewsLogList_category span').clone(true).appendTo('#ckboxes .postinfo-box4 dt .category a');
    var cktxt4 = $('#ckdata .ckdata4 .NewsLogList_category span').text();
    $('#ckboxes .postinfo-box4 dt .category a').text(cktxt4);
    $('#ckdata .ckdata4 .NewsLogList_title a span').clone(true).prependTo('#ckboxes .postinfo-box4 dd a');
    var ckurl4 = $('#ckdata .ckdata4 .NewsLogList_title a').attr('href');
    $('#ckboxes .postinfo-box4 dd a').attr('href',ckurl4);
    var cksrc4 = $('#ckdata .ckdata4 .NewsLogList_thumbnail img').attr('src');
    $('#ckboxes .postinfo-box4 .imgtrm img').attr('src',cksrc4);

    $('#ckdata .ckdata5 .NewsLogList_date span').clone(true).appendTo('#ckboxes .postinfo-box5 .date');
    //$('#ckdata .ckdata5 .NewsLogList_category span').clone(true).appendTo('#ckboxes .postinfo-box5 dt .category a');
    var cktxt5 = $('#ckdata .ckdata5 .NewsLogList_category span').text();
    $('#ckboxes .postinfo-box5 dt .category a').text(cktxt5);
    $('#ckdata .ckdata5 .NewsLogList_title a span').clone(true).prependTo('#ckboxes .postinfo-box5 dd a');
    var ckurl5 = $('#ckdata .ckdata5 .NewsLogList_title a').attr('href');
    $('#ckboxes .postinfo-box5 dd a').attr('href',ckurl5);
    var cksrc5 = $('#ckdata .ckdata5 .NewsLogList_thumbnail img').attr('src');
    $('#ckboxes .postinfo-box5 .imgtrm img').attr('src',cksrc5);

    $('#ckdata .ckdata6 .NewsLogList_date span').clone(true).appendTo('#ckboxes .postinfo-box6 .date');
    //$('#ckdata .ckdata6 .NewsLogList_category span').clone(true).appendTo('#ckboxes .postinfo-box6 dt .category a');
    var cktxt6 = $('#ckdata .ckdata6 .NewsLogList_category span').text();
    $('#ckboxes .postinfo-box6 dt .category a').text(cktxt6);
    $('#ckdata .ckdata6 .NewsLogList_title a span').clone(true).prependTo('#ckboxes .postinfo-box6 dd a');
    var ckurl6 = $('#ckdata .ckdata6 .NewsLogList_title a').attr('href');
    $('#ckboxes .postinfo-box6 dd a').attr('href',ckurl6);
    var cksrc6 = $('#ckdata .ckdata6 .NewsLogList_thumbnail img').attr('src');
    $('#ckboxes .postinfo-box6 .imgtrm img').attr('src',cksrc6);

});

$(function(){
    $('#ckdata').each(function(){
    
        var cid1 = $('#ckdata .ckdata1 .NewsLogList_title a').attr('href').match(/CID=(.*?)(&|$)/);
        $('#ckboxes .postinfo-box1 dt .category a').attr('href', '/-/rengofukuoka/nlog/viewer/view.php?ID=2084&CID=' + cid1[1] + '');

        var cid2 = $('#ckdata .ckdata2 .NewsLogList_title a').attr('href').match(/CID=(.*?)(&|$)/);
        $('#ckboxes .postinfo-box2 dt .category a').attr('href', '/-/rengofukuoka/nlog/viewer/view.php?ID=2084&CID=' + cid2[1] + '');

        var cid3 = $('#ckdata .ckdata3 .NewsLogList_title a').attr('href').match(/CID=(.*?)(&|$)/);
        $('#ckboxes .postinfo-box3 dt .category a').attr('href', '/-/rengofukuoka/nlog/viewer/view.php?ID=2084&CID=' + cid3[1] + '');

        var cid4 = $('#ckdata .ckdata4 .NewsLogList_title a').attr('href').match(/CID=(.*?)(&|$)/);
        $('#ckboxes .postinfo-box4 dt .category a').attr('href', '/-/rengofukuoka/nlog/viewer/view.php?ID=2084&CID=' + cid4[1] + '');

        var cid5 = $('#ckdata .ckdata5 .NewsLogList_title a').attr('href').match(/CID=(.*?)(&|$)/);
        $('#ckboxes .postinfo-box5 dt .category a').attr('href', '/-/rengofukuoka/nlog/viewer/view.php?ID=2084&CID=' + cid5[1] + '');

        var cid6 = $('#ckdata .ckdata6 .NewsLogList_title a').attr('href').match(/CID=(.*?)(&|$)/);
        $('#ckboxes .postinfo-box6 dt .category a').attr('href', '/-/rengofukuoka/nlog/viewer/view.php?ID=2084&CID=' + cid6[1] + '');

    });
});


/* ------------------------------------------------------------------------
   オリジナルの画像に差し替え
------------------------------------------------------------------------ */
$(function() {
    $('.original a.attached').each(function(){
        var path = $(this).attr('href');
        $(this).children('img.attached').attr('src', path);
        $('img.attached').unwrap()
    });
});

//アコーディオン
$(function() {
    $('.acd .acd-inner').hide();
    $('.acd h4').click(function(){
        $('+div',this).slideToggle(100);
        $(this).toggleClass('open');
        return false;
    })
});

//ページ遷移リンクの要素抜き出し
//$(function() {
//    var hasnavi =  $('.blogcontents .navi .control a').hasClass('page');
//    if( hasnavi ) {
//        $('.blogcontents .navi .control .page').clone(true).appendTo('.blogcontents .inner').wrapAll('<div class="pagectl"></div>');
//    }
//});

//ページ遷移リンクの前後区別
$(function(){
    $('.inner .control a').each(function(){
        if($(this).text().indexOf('前') != -1){
            $(this).addClass('prev');
        }
        if($(this).text().indexOf('次') != -1){
            $(this).addClass('next');
        }
        if($(this).text().indexOf('戻る') != -1){
            $(this).addClass('back');
        }
        if($(this).text().indexOf('このカテゴリのトップへ') != -1){
            $(this).addClass('top');
        }
        if($(this).text().indexOf('全ての一覧へ') != -1){
            $(this).css('display','none');
        }
    });
    $('.inner .operation a').each(function(){
        if($(this).text().indexOf('編集') != -1){
            $(this).addClass('edit').text('編集する');
        }
        if($(this).text().indexOf('このニュースログ内を検索') != -1){
            $(this).addClass('search').text('検索');
        }
    });
});

$(".inner .control:contains('前へ')").html(function(_, html) {
   return html.replace(/(前へ)/g, '<span class="prev">$1</span>');
});
$(".inner .control:contains('次へ')").html(function(_, html) {
   return html.replace(/(次へ)/g, '<span class="next">$1</span>');
});
$(".inner .control:contains('前の10件')").html(function(_, html) {
   return html.replace(/(前の10件)/g, '<span class="prev">$1</span>');
});
$(".inner .control:contains('次の10件')").html(function(_, html) {
   return html.replace(/(次の10件)/g, '<span class="next">$1</span>');
});


//記事が属するカテゴリーIDを抽出してリンク設定
$(function(){
    $('.si-categorybox .NewsLogList_title').each(function(){
        var id = $(this).children('a').attr('href').match(/ID=(.*?)(&|$)/);
        var cid = $(this).children('a').attr('href').match(/CID=(.*?)(&|$)/);
        $(this).prevAll('.NewsLogList_category').wrapInner('<a></a>').children('a').attr('href', '/-/scunion/nlog/viewer/view.php?ID=' + id[1] + '&CID=' + cid[1] + '');
    });
});

//カテゴリーの移動
$(function(){
    $('.si-categorybox .NewsLogList_category').each(function(){
        $(this).nextAll('.NewsLogList_title').prepend(this);
    });
});

//ページの日付移動
$(function(){
    $('.shokubaiin .NewsLogList_date').each(function(){
        $(this).nextAll('.NewsLogList_title').prepend(this);
    });
});

/* ------------------------------------------------------------------------
   オリジナルの画像に差し替え
------------------------------------------------------------------------ */
$(function() {
  $('.kumiairoom a.attached').each(function(){
    var path = $(this).attr('href');
    $(this).nextAll('a').children('img').attr('src', path);
    $(this).css('display','none');
  });
});

//テキスト変更
$(function(){
    $('h3').each(function(){
        if($(this).text().indexOf('ニュースログ　検索条件入力') != -1){
            $(this).text('検索条件入力');
        }
        if($(this).text().indexOf('ニュースログ　検索結果') != -1){
            $(this).text('検索結果');
        }
    });
});

//要素の移動
$(function() {
    $('.p_head').each(function() {
        $(this).find('.date').insertBefore($(this).find('.title'));
        $(this).find('.category').insertAfter($(this).find('.title'));
    });
    $('tr.header').each(function() {
        $(this).find('.date').insertBefore($(this).find('.title'));
        $(this).find('.category').insertAfter($(this).find('.title'));
    });
});


$(function() {
    $('.list > div').each(function() {
        $(this).addClass('kiji').find('.date').insertBefore($(this).find('.title'));
    });
});



//記事タイトル・カテゴリ反映
$(window).load(function(){

//    //個別ページの時
//    if (document.URL.match('AID=')) {
//        jQuery(function() {
//            jQuery('body').removeClass('archive').addClass('single');
//        });
//        //機関紙ページ（シングル）の時
//        if (document.URL.match('start=')) {
//            jQuery(function() {
//                jQuery('body').addClass('single');
//            });
//        }
//    }
//
//    $('.single .block').children('div').addClass('kijiblock')
//
//    $('.single #kijiBlock .autherBlock').wrapInner('<div class="autherBlock-inc"></div>');
//    $('.single #kijiBlock .dateBlock').wrapInner('<div class="dateBlock-inc"></div>');
//    
//    $('.single .text').prepend('<div class="kijiinfo"></div>');
//    $('.single .autherBlock-inc').prependTo('.kijiinfo');
//    $('.single .dateBlock-inc').prependTo('.kijiinfo');
//
//    $('.single #kijiBlock .titleBlock').wrapInner('<h2 class="head_l2"></h1>');
//    $('.single h2.head_l2').prependTo('.text');
//
//    $('.single #kijiBlock').prev('h3').wrapInner('<h1 class="head_l1"></h1>');
//    $('.single h1.head_l1').prependTo('.text');
//
//    $('.single .kijiinfo').after('<div class="eyecatch-images"></div>');
//
//    //オリジナルの画像に差し替え（記事ページ）
//    $('.single img.attached').each(function(){
//        var imgpath = $(this).parent().attr('href');
//        $(this).attr('src', imgpath);
//        //$(this).parent().insertAfter('.kijiinfo');
//        //$('.single img.attached').unwrap().wrap('<div class="eyecatch"></div>');
//    });
//    
//    $('.single img.attached').unwrap().wrap('<div class="eyecatch"></div>');
//    
//    $('.single .text').prevAll($(this).find('.eyecatch')).each(function(){
//        $(this).prependTo('.eyecatch-images')
//    });
//
//    $('.single .eyecatch-images div.attached .eyecatch').unwrap('.attached');
//
//    //$('.single .text').prevAll('.eyecatch').prependTo('.eyecatch-images')
//    $('.single .text').next('.attached').find('.eyecatch').appendTo('.text');
//    
//    $('.single a.attached img').each(function(){
//        $(this).attr('src','/-/rengofukuoka/file/html/open/img/attached2.gif');
//    });

    //機関紙ページの時
    if (document.URL.match('ID=2088')) {
        jQuery(function() {
            jQuery('body').addClass('kikanshi');
        });
        //機関紙ページ（シングル）の時
        if (document.URL.match('AID=')) {
            jQuery(function() {
                jQuery('body').addClass('kikanshi-single');
            });
        }
    }
    
    //バックナンバーリンクの移動（ページ下部へ）
    $('.kikanshi .categoryList').insertBefore('.navi2');

    //担当者名・日付の順番入れ替えしてdiv.kijiinfoで囲む
    $('.kikanshi .block .text').before('<div class="kikanshi-image"></div>');
    $('.kikanshi .block').children('div').each(function(){
        $(this).find('.autherBlock').addClass('autherBlock-inc').wrapAll('<div class="kijiinfo"></div>'); 
        $(this).find('.dateBlock').addClass('dateBlock-inc').prependTo($(this).find('.kijiinfo'));
        //オリジナルの画像に差し替え（機関紙ページ）
        var imgpath2 = $(this).find('img.attached').parent().attr('href');
        $(this).find('img.attached').attr('src', imgpath2).unwrap().appendTo($(this).find('.kikanshi-image'));
        //$(this).find('img.attached').attr('src', imgpath2).unwrap().wrap('<div class="kikanshi-image"></div>')
        //$(this).find('.kikanshi-image').insertBefore($(this).find('.text'));
        $(this).find('a.attached').appendTo($(this).find('.text'));
        $(this).find('.text').prepend('<h6>今回のテーマ</h6>');
        $(this).find('a.attached img').attr('src','/-/rengofukuoka/file/html/open/img/attached2.gif');
    });
    $('.kikanshi-single .text h6').insertAfter('.text .kijiinfo');

    //記事積み上げの時
    if (document.URL.match('ID=2154')) {
        jQuery(function() {
            jQuery('body').addClass('archive2');
        });
        //シングルページ
        if (document.URL.match('AID=')) {
            jQuery(function() {
                jQuery('body').removeClass('archive2').addClass('single');
            });
            //さらに分岐
            if (document.URL.match('start=')) {
                jQuery(function() {
                    jQuery('body').removeClass('single').addClass('archive').addClass('archive2');
                });
            }
        }
    }
    //記事積み上げの時
    if (document.URL.match('ID=2084')) {
        jQuery(function() {
            jQuery('body').addClass('archive2');
        });
        //シングルページ
        if (document.URL.match('AID=')) {
            jQuery(function() {
                jQuery('body').removeClass('archive2').addClass('single');
            });
            //さらに分岐
            if (document.URL.match('start=')) {
                jQuery(function() {
                    jQuery('body').removeClass('single').addClass('archive').addClass('archive2');
                });
            }
        }
    }
    //バックナンバーリンクの移動（ページ下部へ）
    //$('.archive2 .categoryList').insertBefore('.navi2');

    //担当者名・日付の順番入れ替えしてdiv.kijiinfoで囲む
    //$('.archive2 .block .text').before('<div class="archive2-image"></div>');
    //$('.archive2 .block').children('div').each(function(){
    //    $(this).find('.autherBlock').addClass('autherBlock-inc').wrapAll('<div class="kijiinfo"></div>'); 
    //    $(this).find('.dateBlock').addClass('dateBlock-inc').prependTo($(this).find('.kijiinfo'));
        //オリジナルの画像に差し替え
    //    var imgpath3 = $(this).find('img.attached').parent().attr('href');
    //    $(this).find('img.attached').attr('src', imgpath3).appendTo($(this).find('.archive2-image'));
    //    $(this).find('a.attached').appendTo($(this).find('.text'));
    //    $(this).find('a.attached img').attr('src','/-/rengofukuoka/file/html/open/img/attached2.gif');
    //});
    //$('.archive2-single .text h6').insertAfter('.text .kijiinfo');
    //$('.archive2 .archive2-image img').unwrap('a')

    //$('.archive2 .dispcription').closest('.header').css('display','none');

//    //カテゴリーリンクの移動（ページ下部へ）
    $('.archive2 .categoryList').insertBefore('.navi2');
//
//    //担当者名・日付の順番入れ替えしてdiv.kijiinfoで囲む
//    $('.archive2 .block .text').before('<div class="archive2-image"></div>');
    $('.archive2 .block').children('div').addClass('kijiblock').each(function(){
        $(this).find('.autherBlock').addClass('autherBlock-inc').wrapAll('<div class="kijiinfo"></div>'); 
        $(this).find('.dateBlock').addClass('dateBlock-inc').prependTo($(this).find('.kijiinfo'));
//        //オリジナルの画像に差し替え
        $('.archive2 .block').find('img.attached').each(function(){
            var imgpath3 = $(this).parent().attr('href');
            $(this).attr('src', imgpath3);
        });
//        $(this).find('a.attached').appendTo($(this).find('.text'));
//        $(this).find('a.attached img').attr('src','/-/rengofukuoka/file/html/open/img/attached2.gif');
    });
//    $('.archive2-single .text h6').insertAfter('.text .kijiinfo');
//    //$('.archive2 .archive2-image img').unwrap('a')
//
    $('.archive2 img.attached').unwrap().wrap('<div class="eyecatch"></div>');
    $('.archive2 .dispcription').closest('.header').css('display','none');
    $('.archive2 .clear').next('.attached').addClass('upper-attached');
    $('.archive2 .text').next('.attached').addClass('bottom-attached');
    $('.archive2 a.attached img').attr('src','/-/rengofukuoka/file/html/open/img/attached2.gif');
    
    
    

    $('.single #kijiBlock .autherBlock').wrapInner('<div class="autherBlock-inc"></div>');
    $('.single #kijiBlock .dateBlock').wrapInner('<div class="dateBlock-inc"></div>');
    
    $('.single .text').prepend('<div class="kijiinfo"></div>');
    $('.single .autherBlock-inc').prependTo('.kijiinfo');
    $('.single .dateBlock-inc').prependTo('.kijiinfo');

    $('.single #kijiBlock .titleBlock').wrapInner('<h2 class="head_l2"></h1>');
    $('.single h2.head_l2').prependTo('.text');

    $('.single #kijiBlock').prev('h3').wrapInner('<h1 class="head_l1"></h1>');
    $('.single h1.head_l1').prependTo('.text');

    $('.single .kijiinfo').after('<div class="eyecatch-images"></div>');

    //オリジナルの画像に差し替え（記事ページ）
    $('.single img.attached').each(function(){
        var imgpath = $(this).parent().attr('href');
        $(this).attr('src', imgpath);
        //$(this).parent().insertAfter('.kijiinfo');
        //$('.single img.attached').unwrap().wrap('<div class="eyecatch"></div>');
    });
    
    $('.single img.attached').unwrap().wrap('<div class="eyecatch"></div>');
    
    $('.single .text').prevAll($(this).find('.eyecatch')).each(function(){
        $(this).prependTo('.eyecatch-images')
    });

    $('.single .eyecatch-images div.attached .eyecatch').unwrap('.attached');

    //$('.single .text').prevAll('.eyecatch').prependTo('.eyecatch-images')
    $('.single .text').next('.attached').find('.eyecatch').appendTo('.text');
    
    $('.single a.attached img').each(function(){
        $(this).attr('src','/-/rengofukuoka/file/html/open/img/attached2.gif');
    });

    var elem = $('.archive2 .block h3');
    if(elem.size( ) == 0){
        $(elem).css('display','none');
    }



});

//$(function(){
//    $('#kijiBlock .dateBlock span').clone(true).appendTo('.dateBlock-inc');
//    $('#kijiBlock .autherBlock span').clone(true).appendTo('.autherBlock-inc');
//});







//iframeの高さを自動設定
(function(window, $){
	$(window).on('load',function(){
		$('iframe.autoHeight').each(function(){
			var D = $(this).get(0).contentWindow.document;
			var innerHeight = Math.max(
				D.body.scrollHeight, D.documentElement.scrollHeight,
				D.body.offsetHeight, D.documentElement.offsetHeight,
				D.body.clientHeight, D.documentElement.clientHeight
				);
			$(this).removeAttr('height').css('height', innerHeight + 'px');
		});
	});
})(window, jQuery);




 