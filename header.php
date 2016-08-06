<style>
#header body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td{
	margin:0;
	padding:0;
}
#header table{
	border-collapse:collapse;
	border-spacing:0;
}
#header fieldset,img{
	border:0;
}
#header address,caption,cite,code,dfn,th,var{
	font-style:normal;
	font-weight:normal;
}
#header caption,th{
	text-align:left;
}
#header h1,h2,h3,h4,h5,h6{
	font-size:100%;
	font-weight:normal;
}
#header q:before,q:after{
	content:'';
}
#header abbr,acronym{
	border:0;
}
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

	}

	#mainmenu li{

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

		font-size:150%;
	}

	#mainmenu li:hover ul{ 
		left:0;
		
		text-align: center;
	}

	#mainmenu li:hover ul li a:hover{ 
		background:#eee;
	}

	@media (max-width: 850px) {
	#mainmenu{
		display: none;
	}

	.menuelements li:not(:first-child) {
		display: none;
	}
}
	@media (min-width:851px){
		#mainmenumobile{
			display:none;
		}
	}
	.menuelements.show li {
		display: block;
	}
	.menuelements img{
		width:50px;
		height:50px;
		vertical-align:middle;
	}
	.menuelements a{
		font-size:200%;
		font-family: Futura, Tahoma, Sans-Serif;
		
	}
	.menuelements ul a{
		font-size:150%;
	}


</style>

<script>
function myFunction() {
    var x = document.getElementById("mainmenumobile");
    if (x.className === "menuelements") {
        x.className += " show";
    } else {
        x.className = "menuelements";
    }
}
</script>

<meta name="viewport" content="initial-scale=1">
<div id="header">
	<div id="main_menu">
		<ul id="mainmenu">
			<li><a href="/"><img src="/site_files/dimini_icon.png"/></a></li>
			<li>
				<a href="/news">News</a>
			</li>
			<li>
				<a href="/software">Software</a>
				<ul>
					<li><a href="/software/snake">Snake</a></li>
					<li><a href="/software/disearch">Dimini Search</a></li>		
				</ul>
			</li>
			<li>
				<a href="/testdrive">Testdrive</a>
				<ul class="submenu">
					<li><a href="/testdrive/browsers">Browsers comparison</a></li>
					<li><a href="main.html">Smartphones comparison</a></li>
					<li><a href="main.html">Search engines comparison</a></li>
					<li><a href="main.html">Social networks comparison</a></li>	
				</ul>
			</li>
			<li>
				<a href="/about_us">About us</a>
			</li>
		</ul>
		<ul id="mainmenumobile" class="menuelements">
			<li><a href="javascript:void(0);" onclick="myFunction()"><img src="/site_files/dimini_icon.png"/>Menu</a></li>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/news">News</a>
			</li>
			<li>
				<a href="/software">Software</a>
				<ul>
					<li><a href="/software/snake">Snake</a></li>
					<li><a href="/software/disearch">Dimini Search</a></li>		
				</ul>
			</li>
			<li>
				<a href="/testdrive">Testdrive</a>
				<ul class="submenu">
					<li><a href="/testdrive/browsers">Browsers comparison</a></li>
					<li><a href="main.html">Smartphones comparison</a></li>
					<li><a href="main.html">Search engines comparison</a></li>
					<li><a href="main.html">Social networks comparison</a></li>	
				</ul>
			</li>
			<li>
				<a href="/about_us">About us</a>
			</li>
		</ul>
	</div>
</div>