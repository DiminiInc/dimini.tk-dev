<div id="notification">
	<div id="information">
		You are using beta version of the site. Some functions and content may be unavailable. Open old version of the site? 
	</div>
	<div id="information-choice">
		<a href="http://dimini.tk">Yes</a> 
		<a href="javascript:void(0)" onclick="localStorage.setItem('notify_close', 'yes');hideNotification('notification'); return false;">No</a>
	</div>
</div>
<div id="language-notification">
	<div id="information">
		Хотите сменить язык сайта?
	</div>
	<div id="information-choice">
		<a href="javascript:void(0)" onclick="showLanguageChoice('language-choice'); return false;">Да</a> 
		<a href="javascript:void(0)" onclick="replaceLocale();">Нет</a>
	</div>
</div>