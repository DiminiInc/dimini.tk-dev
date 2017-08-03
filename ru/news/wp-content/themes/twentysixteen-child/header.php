<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<link type="text/css" rel="stylesheet" href="/global/site-files/stylesheet.css">
	<script type="text/javascript" src="/global/site-files/javascript.js" async></script>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-82875223-1', 'auto');
	  ga('require', 'linkid');
	  ga('send', 'pageview');

	</script>
	<link rel ="shortcut icon" href="/global/site-files/favicon.ico">

	
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	
<!--<div id="notification">
	<div class="information">
		Вы используете тестовую версию сайта. Часть функций и контента может быть недоступна. Открыть старую версию сайта? 
	</div>
	<div class="information-choice">
		<a href="http://dimini.tk">Да</a> 
		<a href="javascript:void(0)" onclick="localStorage.setItem('notify_close', 'yes');hideNotification('notification'); return false;">Нет</a>
	</div>
</div>-->
<div id="language-notification">
	<div class="information">
		Do you want to change site language?
	</div>
	<div class="information-choice">
		<a href="javascript:void(0)" onclick="showLanguageChoice('language-choice'); return false;">Yes</a> 
		<a href="javascript:void(0)" onclick="replaceLocale();hideNotification('language-notification'); return false;">No</a>
	</div>
</div>

<meta name="viewport" content="initial-scale=1">
<div id="header">
	<div id="main_menu">
		<ul id="mainmenu">
			<li>
				<a href="/ru/" title="На Главную"><img src="/global/site-files/dimini-icon.svg" alt="Логотип Dimini"/></a>
			</li>
			<li>
				<a href="/ru/news">Новости</a>
			</li>
			<li>
				<a href="/ru/software">Программы</a>
				<ul>
					<li>
						<a href="/ru/software/snake">Змейка</a>
					</li>
					<li>
						<a href="/ru/software/battleship">Морской бой</a>
					</li>
					<li>
						<a href="/ru/software/game-of-life">Игра "Жизнь"</a>
					</li>
					<li>
						<a href="/ru/software/disearch">Dimini Search</a>
					</li>		
				</ul>
			</li>
			<li>
				<a href="/ru/testdrive">Тестирование</a>
				<ul>
					<li>
						<a href="/ru/testdrive/browsers">Сравнение браузеров</a>
					</li>
					<!--<li>
						<a href="/ru/testdrive/smartphones">Сравнение смартфонов</a>
					</li>
					<li>
						<a href="/ru/testdrive/search-engines">Сравнение поисковых систем</a>
					</li>
					<li>
						<a href="/ru/testdrive/social-networks">Сравнение соцсетей</a>
					</li>-->	
				</ul>
			</li>
			<li>
				<a href="/ru/about-us">О нас</a>
			</li>
		</ul>
		<ul id="mainmenumobile" class="menuelements">
			<li>
				<a href="javascript:void(0);" onclick="showMenu()" title="Открыть меню"><img src="/global/site-files/dimini-icon.svg" alt="Логотип Dimini" />Меню</a>
			</li>
			<li>
				<a href="/ru/">Главная</a>
			</li>
			<li>
				<a href="/ru/news">Новости</a>
			</li>
			<li>
				<a href="/ru/software">Программы</a>
				<ul>
					<li>
						<a href="/ru/software/snake">Змейка</a>
					</li>
					<li>
						<a href="/ru/software/battleship">Морской бой</a>
					</li>
					<li>
						<a href="/ru/software/game-of-life">Игра "Жизнь"</a>
					</li>	
					<li>
						<a href="/ru/software/disearch">Dimini Search</a>
					</li>		
				</ul>
			</li>
			<li>
				<a href="/ru/testdrive">Тестирование</a>
				<ul>
					<li>
						<a href="/ru/testdrive/browsers">Сравнение браузеров</a>
					</li>
					<!--<li>
						<a href="/ru/testdrive/smartphones">Сравнение смартфонов</a>
					</li>
					<li>
						<a href="/ru/testdrive/search-engines">Сравнение поисковых систем</a>
					</li>
					<li>
						<a href="/ru/testdrive/social-networks">Сравнение соцсетей</a>
					</li>-->
				</ul>
			</li>
			<li>
				<a href="/ru/about-us">О нас</a>
			</li>
		</ul>
	</div>
</div>

		<div id="content" class="site-content">					