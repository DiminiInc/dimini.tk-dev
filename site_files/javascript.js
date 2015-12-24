function hideNotification(id) {
    document.getElementById(id).style.display = 'none';
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
	 document.getElementById(id).style.height= "600px";
	 	 document.getElementById(id).style.width= "600px";
	 	 document.getElementById(id).scrollIntoView(true);
	 	 document.getElementById(id).title="Нажмите для уменьшения";
	 	}
}