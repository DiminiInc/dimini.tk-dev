// version 1.0.0.1 build 201512271952
function changeLocale(language){
var siteurl=window.location.toString();
if (language==="en")
{
newsiteurl=siteurl.replace("/ru/","/en/");
}
else
{
newsiteurl=siteurl.replace("/en/","/ru/")
}
window.open(newsiteurl,"_self");
}


function hideNotification(id) {

    document.getElementById(id).style.display = 'none';
id.stopPropagation();
}


function magnifyObject(id){
	if(document.getElementById(id).style.height==="600px")
	{
		document.getElementById(id).style.height= 'auto';
	 	 document.getElementById(id).style.width= "30%";
	 	 document.getElementById(id).title="Нажмите для увеличения";
	}
	else
	{
	 document.getElementById(id).style.height= "auto";
	 	 document.getElementById(id).style.width= "auto";
	 	 document.getElementById(id).scrollIntoView(true);
	 	 document.getElementById(id).title="Нажмите для уменьшения";
	 }
}

function showLanguageChoice(id){
	document.getElementById(id).style.display = 'block';
}