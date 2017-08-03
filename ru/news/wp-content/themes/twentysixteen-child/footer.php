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
			<a href="mailto:info@dimini.tk">Связаться с нами</a>
		</li>
		<li style="white-space: nowrap;">
			<a href="/ru/jobs">Работа</a>
		</li>
		<li style="white-space: nowrap;">
			<a href="/ru/about-site">О сайте</a>
		</li>
		<li style="white-space: nowrap;">
			Сменить язык: 
			<a href="javascript:void(0)" onclick="showLanguageChoice('language-choice'); return false;" class="nopadding-link" title="Выбрать язык"><img src="/global/site-files/flag-russian.png" alt="РУС" />Русский</a>
		</li>
		<li style="white-space: nowrap; padding-left: 40px; padding-right: 40px;">  
			<a href="https://vk.com/diminiinc" class="nopadding-link" title="Посетить нашу группу ВКонтакте"><img src="/global/site-files/vk-logo.png"/ alt="ВКонтакте"></a> 
			<a href="https://www.facebook.com/diminiinc" class="nopadding-link" title="Посетить нашу группу в Facebook"><img src="/global/site-files/facebook-logo.png" alt="Facebook" /></a> 
			<a href="https://ok.ru/group/53283832201387" class="nopadding-link" title="Посетить нашу группу в Одноклассниках"><img src="/global/site-files/ok-logo.png" alt="Одноклассники" /></a>
			<a href="https://twitter.com/diminiinc" class="nopadding-link" title="Посетить нашу страницу в Twitter"><img src="/global/site-files/twitter-logo.png" alt="Twitter"/></a> 
			<a href="https://www.instagram.com/diminiinc/" class="nopadding-link" title="Посетить нашу страницу в Instagram"><img src="/global/site-files/instagram-logo.png" alt="Instagram" /></a> 
			<a href="https://plus.google.com/+DiminiTk" class="nopadding-link" title="Посетить нашу группу в Google+"><img src="/global/site-files/google-plus-logo.png" alt="Google+" /></a> 
		</li>
	</ul>
</div>
<div id="language-choice" onclick="hideNotification('language-choice'); return false;">
	<div id="centered-list" removeListener>
		<a href="javascript:void(0)" onclick="localStorage.setItem('lang', 'en');changeLocale('en');" title="Выбрать английский язык">
			<p>
				<img src="/global/site-files/flag-english.png" alt="АНГЛ" /> Английский
			</p>
		</a>
		<a href="javascript:void(0)" onclick="localStorage.setItem('lang', 'ru');changeLocale('ru');" title="Выбрать русский язык">
			<p>
				<img src="/global/site-files/flag-russian.png" alt="РУС" /> Русский
			</p>
		</a>
		<a href="javascript:void(0)" onclick="hideNotification('language-choice'); return false;" title="Закрыть окно">
			<p>
				[X] Закрыть
			</p>
		</a>
	</div>
</div>
</div><!-- .site -->


</body>
</html>