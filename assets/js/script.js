$(document).ready(function(){
	var lgport='1';
	var smport='1';
	$('.nav-work').hover(function(){
		$('#dimension-menu').stop().fadeIn();
	});
	$('.about-close').click(function(){
		$('#dimension-menu').stop().fadeOut();
	});
	$('.svg-outer').hover(function(){
		$(this).children('.mid_logo').css('opacity','0');
		$(this).children('svg').css('opacity','1');
	},function(){
		$(this).children('.mid_logo').css('opacity','1');
		$(this).children('svg').css('opacity','0');
	});
	$('.connect-left>li').click(function(){
		$('.connect-left>li').removeClass('selected');
		$(this).addClass('selected');
		var newval = $(this).children().html();
		if(!$(this).is(':last-child')){
			$('.formselect').html(newval);
		}else{
			$('.subscribe').focus();
		}
		$('.mailto').val(newval);
	});
	$('.connect-drop>li').click(function(){
		var newval = $(this).children().html().toUpperCase();
		$('.formselect').html(newval);
		$('.mailto').val(newval);
	});
	bodyheight = $('body').height() - 60;
	$('.about.panel-group').css('height',bodyheight+20);
	$('.about.panel-info>.panel-heading').css('height',bodyheight/3);
	$('.about.panelimg').css('height',(bodyheight/3)-33);
	headheight = $('.about.panel-info>.panel-heading').height() - 15;
	$('.paneltext').css({'height':headheight,'line-height':headheight+'px'});
	$('.panelsclose').css({'top':(bodyheight/2)+41});
	$('.panelsclose').click(function(){
		$('.panel-collapse.in').collapse('hide');
		$('.panelsclose').animate({'right':'-55px'});
	});
	$('.plugopen').click(function(){
        
		var thumbno = $(this).attr('data-thumbno');
		$('.projectportfolio').fadeIn().attr('data-portno',thumbno);
		$('.projectportfolio #portfolio-detail .folioimg').attr('src','assets/portfolios/'+thumbno+'/sm/cd_mob_big'+thumbno+'.jpg');
	});
    
    $('.plugopen1').click(function(){
        
		var thumbno = $(this).attr('data-thumbno');
		$('.projectportfolio1').fadeIn().attr('data-portno',thumbno);
		$('.projectportfolio1 #portfolio-detail .folioimg').attr('src','assets/portfolios/'+thumbno+'/sm/cd_mob_big'+thumbno+'.jpg');
	});
    
	$('.projectportfolio .folioleft').click(function(){
		var thumbno = $('.projectportfolio').attr('data-portno');
		var newthumb = parseInt(thumbno)-1;
		if(thumbno != 1){
			$('.projectportfolio #portfolio-detail .folioimg').attr('src','assets/portfolios/'+thumbno+'/sm/cd_mob_big'+thumbno+'.jpg');
			$('.projectportfolio').attr('data-portno',newthumb);
		}else{
			$('.projectportfolio #portfolio-detail .folioimg').attr('src','assets/portfolios/1/sm/cd_mob_big1.jpg');
			$('.projectportfolio').attr('data-portno',1);
		}
        
	});
    
    
	$('.projectportfolio .folioright').click(function(){
		var thumbno = $('.projectportfolio').attr('data-portno');
		var newthumb = parseInt(thumbno)+1;
		if(thumbno != 5){
			$('.projectportfolio #portfolio-detail .folioimg').attr('src','assets/portfolios/'+thumbno+'/sm/cd_mob_big'+thumbno+'.jpg');
			$('.projectportfolio').attr('data-portno',newthumb);
		}else{
			$('.projectportfolio #portfolio-detail .folioimg').attr('src','assets/portfolios/5/sm/cd_mob_big5.jpg');
			$('.projectportfolio').attr('data-portno',5);
		}
	});
    
    $('.projectportfolio1 .folioleft').click(function(){
		var thumbno = $('.projectportfolio1').attr('data-portno');
		var newthumb = parseInt(thumbno)-1;
		if(thumbno != 6){
			$('.projectportfolio1 #portfolio-detail .folioimg').attr('src','assets/portfolios/'+thumbno+'/sm/cd_mob_big'+thumbno+'.jpg');
			$('.projectportfolio1').attr('data-portno',newthumb);
		}else{
			$('.projectportfolio1 #portfolio-detail .folioimg').attr('src','assets/portfolios/6/sm/cd_mob_big6.jpg');
			$('.projectportfolio1').attr('data-portno',6);
		}
        
	});
    $('.projectportfolio1 .folioright').click(function(){
		var thumbno = $('.projectportfolio1').attr('data-portno');
		var newthumb = parseInt(thumbno)+1;
		if(thumbno != 10){
			$('.projectportfolio1 #portfolio-detail .folioimg').attr('src','assets/portfolios/'+thumbno+'/sm/cd_mob_big'+thumbno+'.jpg');
			$('.projectportfolio1').attr('data-portno',newthumb);
		}else{
			$('.projectportfolio1 #portfolio-detail .folioimg').attr('src','assets/portfolios/10/sm/cd_mob_big10.jpg');
			$('.projectportfolio1').attr('data-portno',10);
		}
	});
    
	$('.projectportfolio').on('click','.portfolio-close',function(){
		$('.projectportfolio').fadeOut();
		event.preventDefault();
	});
    $('.projectportfolio1').on('click','.portfolio-close',function(){
		$('.projectportfolio1').fadeOut();
		event.preventDefault();
	});
	var projarr = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42'];
	$('.dplugopen').click(function(e){
		var thumbno = $(this).attr('data-thumbno');
		if($('#portfolio-detail').attr('data-portno') != thumbno){
			lgport=thumbno;
			$('#portfolio-detail').load('portfolios/port'+thumbno+'.html').attr('data-portno',thumbno);
			// $('.info-space').hide();
			// $('.info-space.cl'+thumbno).show();
			$('#portfolio-detail').fadeIn();
			event.preventDefault();
		}
	});
	$('.dport').on('click','.thumbimg>img',function(){
		var thumbno = $(this).attr('class');
		var foliodata = $('.folioimg').attr('data-foliothumb');
		if(thumbno != foliodata){
			$('.folioimg').attr('data-foliothumb',thumbno).attr('src','assets/portfolios/'+lgport+'/lg/'+lgport+' ('+(thumbno)+').jpg');
			// $('.info-space').hide();
			// $('.info-space.cl'+thumbno).show();
		}
	});

	$('.dport').on('click','.folioleft',function(){
		var thumbno = $('#portfolio-detail').attr('data-portno');
		var prev = ($.inArray(thumbno,projarr))-1;
		lgport = projarr[prev];
		if(thumbno != 1){
			$('#portfolio-detail').load('portfolios/port'+projarr[prev]+'.html').attr('data-portno',projarr[prev]);
		}else{
			$('#portfolio-detail').load('portfolios/port42.html').attr('data-portno','42');
		}
	});
	$('.dport').on('click','.folioright',function(){
		var thumbno = $('#portfolio-detail').attr('data-portno');
		var next = ($.inArray(thumbno,projarr))+1;
		lgport=projarr[next];
		if(thumbno != 42){
			$('#portfolio-detail').load('portfolios/port'+projarr[next]+'.html').attr('data-portno',projarr[next]);
		}else{
			$('#portfolio-detail').load('portfolios/port1.html').attr('data-portno','1');
		}
	});

	$('.dport').on('click','.portfolio-close',function(){
		$('#portfolio-detail').fadeOut();
		$('#portfolio-detail').attr('data-portno','0');
		event.preventDefault();
	});
	$('.panel-heading').click(function(){
		if($(this).next().next().attr('class') == 'panel-collapse collapse in'){
			$('.panelsclose').animate({'right':'-55px'});
		}
		if($('.collapse.in').length == 0){
			$('.panelsclose').animate({'right':'0px'});
		}
	});
	$('.miti-logo').hover(function(){
		$('.miti-logo>.top-logo').stop().fadeOut(200);
	},function(){
		$('.miti-logo>.top-logo').stop().fadeIn(200);
	});
	$('.dl-trigger').click(function(){
		if($('.dl-active').length == 1){
			$('.mob-menu-overlay').fadeIn(300);
		}else{
			$('.mob-menu-overlay').fadeOut(300);
		}
	});
	$('.mob-menu-overlay').click(function(){
		$(this).stop().fadeOut();
	});
	$('.thumbnail').on('click', function (event) {
		// $('#portfolio-detail').fadeIn();
		event.preventDefault();
	});
});
