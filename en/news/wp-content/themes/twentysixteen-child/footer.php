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
		<li style="white-space: nowrap;">&#169; Dimini Inc., <?php echo date('Y') ?></li> 
		<li style="white-space: nowrap;">
			<a href="mailto:info@dimini.tk">Contact us</a>
		</li>
		<li style="white-space: nowrap;">
			<a href="/en/jobs">Jobs</a>
		</li>
		<li style="white-space: nowrap;">
			<a href="/en/about-site">About site</a>
		</li>
		<li style="white-space: nowrap;">
			Choose language: 
			<a href="javascript:void(0)" onclick="showLanguageChoice('language-choice'); return false;" class="nopadding-link" title="Choose language"><img src="/global/site-files/flag-english.png"/ alt="EN">English</a>
		</li>
		<li style="white-space: nowrap; padding-left: 40px; padding-right: 40px;">  
			<a href="https://www.facebook.com/diminiinc" class="nopadding-link" title="Visit our group on Facebook"><img src="/global/site-files/facebook-logo.png" alt="Facebook" /></a> 
			<a href="https://twitter.com/diminiinc" class="nopadding-link" title="Visit our page on Twitter"><img src="/global/site-files/twitter-logo.png"/ alt="Twitter"></a> 
			<a href="https://vk.com/diminiinc" class="nopadding-link" title="Visit our group on VK"><img src="/global/site-files/vk-logo.png"/ alt="VK"></a> 
			<a href="https://plus.google.com/+DiminiTk" class="nopadding-link" title="Visit our group on Google+"><img src="/global/site-files/google-plus-logo.png" alt="Google+" /></a> 
			<a href="https://www.instagram.com/diminiinc/" class="nopadding-link" title="Visit our page on Instagram"><img src="/global/site-files/instagram-logo.png" alt="Instagram" /></a> 
			<a href="https://ok.ru/group/53283832201387" class="nopadding-link" title="Visit our group on Odnoklassniki"><img src="/global/site-files/ok-logo.png"/ alt="Odnoklassniki"></a>
		</li>
	</ul>
</div>
<div id="language-choice" onclick="hideNotification('language-choice'); return false;">
	<div id="centered-list" removeListener>
		<a href="javascript:void(0)" onclick="localStorage.setItem('lang', 'en');changeLocale('en');" title="Choose English language">
			<p>
				<img src="/global/site-files/flag-english.png"/ alt="EN"> English
			</p>
		</a>
		<a href="javascript:void(0)" onclick="localStorage.setItem('lang', 'ru');changeLocale('ru');" title="Choose Russian language">
			<p>
				<img src="/global/site-files/flag-russian.png"/ alt="RU"> Russian
			</p>
		</a>
		<a href="javascript:void(0)" onclick="hideNotification('language-choice'); return false;" title="Close window">
			<p>
				[X] Close
			</p>
		</a>
	</div>
</div>
</div><!-- .site -->


</body>
</html>