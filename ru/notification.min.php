<div id="language-notification">
<div class="information">
Do you want to change site language?
</div>
<div class="information-choice">
<a href="javascript:void(0)" onclick='return showLanguageChoice("language-choice"),!1'>Yes</a>
<a href="javascript:void(0)" onclick='return replaceLocale(),hideNotification("language-notification"),!1'>No</a>
</div>
</div>
<div id="sticky-footer">
<div class="information">
Используя данный сайт вы соглашаетесь с <a href="/ru/terms-and-privacy" class="information-link-not-button">Пользовательским соглашением и политикой приватности</a>.
</div>
<div class="information-choice">
<a href="javascript:void(0)" onclick='localStorage.setItem("cookie_close","yes");var siteHeight=document.getElementById("site");return siteHeight.style.height=siteHeight.offsetHeight-55+"px",hideNotification("sticky-footer"),!1'>Хорошо</a>
</div>
</div>