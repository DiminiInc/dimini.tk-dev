<style>
	#footer{
		text-align:center;
		background-color:#ddd;
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
		height:15px;
	}

	#language-link{
		padding:0px;
	}

	#language-choice{
		display:none;
		position:absolute;
    left: 0;
    top: 50%;
    width: 100%;
    z-index:1000;
	}
</style>


<div id="footer">
	<ul>
		<li>&#169; Dimini Inc., 2016</li> 
		<li><a href="mailto:dimini_inc@inbox.ru">Contact us</a></li>
		<li><a href="/jobs">Jobs</a></li>
		<li><a href="/about_site">About site</a></li>
		<li>Choose language: <a href="#" onclick="showLanguageChoice('language-choice'); return false;" id="language-link"><img src="/site_files/flag_russian.png"/> Russian</a></li>
	</ul>
</div>
<div id="language-choice">
	Hey,partymaker
</div>