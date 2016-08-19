<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

		</div><!-- .site-content -->

<div id="footer">
	<ul>
		<li>&#169; Dimini Inc., 2016</li> 
		<li>
			<a href="mailto:dimini_inc@inbox.ru">Contact us</a>
		</li>
		<li>
			<a href="/en/jobs">Jobs</a>
		</li>
		<li>
			<a href="/en/about_site">About site</a>
		</li>
		<li style="white-space: nowrap;">
			Choose language: 
			<a href="javascript:void(0)" onclick="showLanguageChoice('language-choice'); return false;" class="nopadding-link"><img src="/global/site_files/flag_russian.png"/>Russian</a>
		</li>
		<li style="white-space: nowrap;">  
			<a href="#" class="nopadding-link"><img src="/global/site_files/facebook_logo.png"/></a> 
			<a href="#" class="nopadding-link"><img src="/global/site_files/twitter_logo.png"/></a> 
			<a href="#" class="nopadding-link"><img src="/global/site_files/vk_logo.png"/></a> 
			<a href="#" class="nopadding-link"><img src="/global/site_files/googleplus_logo.png"/></a> 
			<a href="#" class="nopadding-link"><img src="/global/site_files/instagram_logo.png"/></a> 
			<a href="#" class="nopadding-link"><img src="/global/site_files/ok_logo.png"/></a>
		</li>
	</ul>
</div>
<div id="language-choice" onclick="hideNotification('language-choice'); return false;">
	<div id="centered-list" removeListener>
		<a href="javascript:void(0)" onclick="localStorage.setItem('lang', 'en');changeLocale('en');">
			<p>
				<img src="/global/site_files/flag_english.png"/> English
			</p>
		</a>
		<a href="javascript:void(0)" onclick="localStorage.setItem('lang', 'ru');changeLocale('ru');">
			<p>
				<img src="/global/site_files/flag_english.png"/> English
			</p>
		</a>
		<a href="javascript:void(0)" onclick="hideNotification('language-choice'); return false;">
			<p>
				[X] Close
			</p>
		</a>
	</div>
</div>
</div><!-- .site -->


</body>
</html>