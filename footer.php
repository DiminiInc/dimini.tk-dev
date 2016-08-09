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
		height:12px;
	}

	#language-link{
		padding-right:0px;
		padding-left:0px;
	}

	#language-choice{
		display:none;
		position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index:1000;
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
		vertical-align:middle;
	}
	#language-choice a{
		text-decoration: none;

	}
	#centered-list{
		width:50%;
		left:25%;
		top:25%;
		background-color: #ccc;
		position:relative;
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
<div id="centered-list">
<a href="/en">
<p>
	<img src="/site_files/flag_english.png"/> English
	</p>
	</a>
	<a href="/ru">
<p>
	<img src="/site_files/flag_russian.png"/> Russian
	</p>
	</a>
	<a href="#" onclick="hideNotification('language-choice'); return false;">
<p>
	Close
	</p>
	</a>
	</div>
</div>