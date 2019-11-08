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



//画像切り替え
$(function() {
  // 置換の対象とするclass属性。
  var $elem = $('.image-switch');
  // 置換の対象とするsrc属性の末尾の文字列。
  var sp = '_sp.';
  var pc = '_pc.';
  // 画像を切り替えるウィンドウサイズ。
  var replaceWidth = 641;

  function imageSwitch() {
    // ウィンドウサイズを取得する。
    var windowWidth = parseInt($(window).width());

    // ページ内にあるすべての`.image-switch`に適応される。
    $elem.each(function() {
      var $this = $(this);
      // ウィンドウサイズが641px以上であれば_spを_pcに置換する。
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));

      // ウィンドウサイズが641px未満であれば_pcを_spに置換する。
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
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

});

$(document).ready(function(){
 
    $(".pagetop").hide();
 
    $(window).on("scroll", function() {
 
        if ($(this).scrollTop() > 100) {
            $('.pagetop').fadeIn("fast");
        } else {
            $('.pagetop').fadeOut("fast");
        }
         
    // フッター固定する
// 
//        scrollHeight = $(document).height(); 
//        // ドキュメントの高さ
//        scrollPosition = $(window).height() + $(window).scrollTop(); 
//        //　ウィンドウの高さ+スクロールした高さ→　現在のトップからの位置
//        footHeight = $("footer").innerHeight();
//        // フッターの高さ
//                 
//        if ( scrollHeight - scrollPosition  <= footHeight ) {
//        // 現在の下から位置が、フッターの高さの位置にはいったら
//        //  ".gotop"のpositionをabsoluteに変更し、フッターの高さの位置にする        
//            $(".gotop").css({
//                "position":"absolute",
//                "bottom": footHeight
//            });
//        } else {
//        // それ以外の場合は元のcssスタイルを指定
//            $(".gotop").css({
//                "position":"fixed",
//                "bottom": "0px"
//            });
//        }
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
    $('#menubtn').click(function() {
        $('.gnav').slideDown('fast');
    });
    $('#menubtn-close').click(function() {
        $('.gnav').slideUp('fast');
    });
});

//$(function(){
//    $('.gnav .gnav-parent').mouseover(function() {
//        $(this).children('ul').slideDown('fast');
//    });
//    $('.gnav .gnav-parent').hover(function() {
//        $(this).children('ul').slideDown('fast');
//    });
//});


var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
    $(function() {
        $('.gnav .gnav-parent').click(function() {
            $(this).children('ul:not(:animated)').slideToggle('fast');
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


/* ------------------------------------------------------------------------
   トップページ・タイトルリストカスタム
------------------------------------------------------------------------ */

//NEWマーク・UPマークのカスタマイズ用要素の追加
jQuery(function() {
    jQuery('.NewsLogList_title img[src*=new]').wrap('<span class="new_mark"></span>');
    jQuery('.NewsLogList_title img[src*=up]').wrap('<span class="up_mark"></span>');
});
//要素の移動
jQuery(function() {
    jQuery('.NewsLogList_article').each(function() {
        jQuery(this).find('.NewsLogList_info').insertBefore(jQuery(this).find('.NewsLogList_thumbnail'));
        jQuery(this).find('.NewsLogList_body').insertAfter(jQuery(this).find('.NewsLogList_thumbnail'));
        jQuery(this).find('.NewsLogList_date').insertBefore(jQuery(this).find('.NewsLogList_category'));
    });
});

//spanタグで囲む
$(function(){
    $('#newsdata .NewsLogList_date').wrapInner('<span></span>');
    $('#newsdata .NewsLogList_title a').wrapInner('<span></span>');
    $('#newsdata .NewsLogList_category').wrapInner('<span></span>');
    $('#bnrdata .NewsLogList_title a').wrapInner('<span></span>');
    $('#mvdata .NewsLogList_title a').wrapInner('<span></span>');
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

