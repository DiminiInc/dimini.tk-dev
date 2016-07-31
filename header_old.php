<style>
	#header{
		text-align:center;
		background-color:#ddd;
		padding:1px;
		padding-top:8px;
	}

	#header a{
		text-decoration:none;
		color:#000;
	}
	#mainmenu img{
		vertical-align:middle;
		display:inline;
		height:50px;
		width:50px;
	}

	#mainmenu{
	  	display:inline;
		width:100%;
		list-style:none;
		margin-bottom:10px;
		padding-left: 0px;
	}

	#mainmenu li{
		margin-right:10px;
		position:relative;
		display:inline;
		z-index:10;
	}

	#mainmenu li a{
		display:inline;
		color:#000;
		background:#ddd;
		font-family: Futura, Tahoma, Sans-Serif;
		font-size:200%;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 30px;
		padding-left: 30px;
		position:center;
		margin-left:-5px;
	}

	#mainmenu li a:hover{
		background:#eee;
	}

	#mainmenu ul{
		list-style:none;
		position:absolute;
		left:-9999px; 
	}

	#mainmenu ul li{
		float:none;
	}

	#mainmenu ul a{
		white-space:nowrap; 
		display:block;
		margin:-10px;
		font-size:150%;
	}

	#mainmenu li:hover ul{ 
		left:-35px;
		top:23px;
		text-align: center;
	}

	#mainmenu li:hover ul li a:hover{ 
		background:#eee;
	}
</style>

<div id="header">
	<div id="main_menu">
		<ul id="mainmenu">
			<li><a href="./"><img src="./site_files/dimini_icon.png"/></a></li>
			<li>
				<a href="./news">Новости</a>
			</li>
			<li>
				<a href="./software">Программы</a>
				<ul>
					<li><a href="./software/snake">Змейка</a></li>
					<li><a href="./software/disearch">Dimini Search</a></li>		
				</ul>
			</li>
			<li>
				<a href="./testdrive">Тестирование</a>
				<ul class="submenu">
					<li><a href="./testdrive/browsers">Сравнение браузеров</a></li>
					<!-- <li><a href="main.html">Сравнение смартфонов</a></li>
					<li><a href="main.html">Сравнение поисковых систем</a></li>
					<li><a href="main.html">Сравнение социальных сетей</a></li>	 -->
				</ul>
			</li>
			<li>
				<a href="./about_us">О Нас</a>
			</li>
		</ul>
	</div>
</div>