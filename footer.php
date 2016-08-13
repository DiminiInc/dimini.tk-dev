<style>
	#footer{
		text-align:center;
		background-color:#ddd;
		font-size:120%;
	}

	#footer li{
		display:inline;
	}

	#footer a{
		text-decoration:none;
		color:#000;
		padding-right: 10px;
		padding-left: 10px;
	}

	#footer a:hover{
		text-decoration:underline;
	}

	#footer img{
		height:16px;
	}

	#footer a.nopadding-link{
		padding-right:0px;
		padding-left:0px;
	}

	#language-choice{
		display:none;
		position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index:20;
    height:100%;
    background-color:rgba(100,100,100,0.8);
    text-align: center;
	}

	#language-choice p{
		position:relative;
		top:50%;
		font-size:200%;
		color:#000;
	}

	#language-choice p img{
		height:50px;
		width:75px;
		vertical-align:middle;
	}
	#language-choice a{
		text-decoration: none;

	}
	#centered-list{
		width:50%;
		left:25%;
		top:20%;
		background-color: #ccc;
		position:relative;
		padding-top:25px;
		padding-bottom: 25px;
	}
</style>


<div id="footer">
	<ul>
		<li>&#169; Dimini Inc., 2016</li> 
		<li><a href="mailto:dimini_inc@inbox.ru">Contact us</a></li>
		<li><a href="/jobs">Jobs</a></li>
		<li><a href="/about_site">About site</a></li>
		<li style="white-space: nowrap;">Choose language: <a href="#" onclick="showLanguageChoice('language-choice'); return false;" class="nopadding-link"><img src="/site_files/flag_russian.png"/> Russian</a></li>
		<li style="white-space: nowrap;">  <a href="#" class="nopadding-link"><img src="/site_files/facebook_logo.png"/></a> <a href="#" class="nopadding-link"><img src="/site_files/twitter_logo.png"/></a> <a href="#" class="nopadding-link"><img src="/site_files/vk_logo.png"/></a> <a href="#" class="nopadding-link"><img src="/site_files/googleplus_logo.png"/></a> <a href="#" class="nopadding-link"><img src="/site_files/instagram_logo.png"/></a> <a href="#" class="nopadding-link"><img src="/site_files/ok_logo.png"/></a></li>
		<!-- <li><a href="#" class="nopadding-link"><img src="/site_files/twitter_logo.png"/></a></li>
		<li><a href="#" class="nopadding-link"><img src="/site_files/vk_logo.png"/></a></li>
		<li><a href="#" class="nopadding-link"><img src="/site_files/googleplus_logo.png"/></a></li>
		<li><a href="#" class="nopadding-link"><img src="/site_files/instagram_logo.png"/></a></li>
		<li><a href="#" class="nopadding-link"><img src="/site_files/ok_logo.png"/></a></li>-->
	</ul>
</div>
<div id="language-choice" onclick="hideNotification('language-choice'); return false;">
<div id="centered-list" removeListener>
<a href="/en" onclick="localStorage.setItem('lang', 'en');">
<p>
	<img src="/site_files/flag_english.png"/> English
	</p>
	</a>
	<a href="/ru" onclick="localStorage.setItem('lang', 'ru');">
<p>
	<img src="/site_files/flag_russian.png"/> Russian
	</p>
	</a>
	<a href="#" onclick="hideNotification('language-choice'); return false;">
<p>
	[X] Close
	</p>
	</a>
	</div>
</div>