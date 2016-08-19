<div id="notification">
	<div class="information">
		Вы используете тестовую версию сайта. Часть функций и контента может быть недоступна. Открыть старую версию сайта? 
	</div>
	<div class="information-choice">
		<a href="http://dimini.tk">Да</a> 
		<a href="javascript:void(0)" onclick="localStorage.setItem('notify_close', 'yes');hideNotification('notification'); return false;">Нет</a>
	</div>
</div>
<div id="language-notification">
	<div class="information">
		Do you want to change site language?
	</div>
	<div class="information-choice">
		<a href="javascript:void(0)" onclick="showLanguageChoice('language-choice'); return false;">Yes</a> 
		<a href="javascript:void(0)" onclick="replaceLocale();hideNotification('language-notification'); return false;">No</a>
	</div>
</div>