function changeLocale(language)
{
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

function replaceLocale()
{
		if(localStorage.getItem("lang")=="en")
			localStorage.setItem("lang", "ru");
		else
		{
			if(localStorage.getItem("lang")=="ru")
				localStorage.setItem("lang", "en");
		}
}

function showLanguageChoice(id)
{
	document.getElementById(id).style.display = 'block';
}

function hideNotification(id) 
{
    document.getElementById(id).style.display = 'none';
	//id.stopPropagation();
}

function showMenu() 
{
    var x = document.getElementById("mainmenumobile");
    if (x.className === "menuelements") 
    {
        x.className += " show";
    } 
    else 
    {
        x.className = "menuelements";
    }
}

function showSubMenu(parentId,id)
{
	if (document.getElementById(id).style.display === 'block')
		document.getElementById(id).style.display = 'none';
	else
		document.getElementById(id).style.display = 'block';
	if (document.getElementById(parentId).innerHTML.indexOf('\u25BC') > -1)
	{
		document.getElementById(parentId).innerHTML=document.getElementById(parentId).innerHTML.replace("\u25BC","\u25B2");
		document.getElementById(parentId).innerHTML=document.getElementById(parentId).innerHTML.replace("\u25BC","\u25B2");
	}
	else
	{
		document.getElementById(parentId).innerHTML=document.getElementById(parentId).innerHTML.replace("\u25B2","\u25BC");
		document.getElementById(parentId).innerHTML=document.getElementById(parentId).innerHTML.replace("\u25B2","\u25BC");
	}
}

window.onload = function() 
{
	
	if (document.getElementById("download-button"))
	{
		softwareDownload();
	}  
	if (document.getElementById("browsersTopWindowsBasic201308"))
    {
        var ctx = document.getElementById("browsersTopWindowsBasic201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Mozilla Firefox", "Opera", "Opera Classic", "Internet Explorer", "Safari"],
                datasets: [{  
                    data: [77.05, 88.93, 77.52, 73.85, 72.07, 55.65],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
        	       xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                    	barPercentage:1.0,
                    	categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
	}
    if (document.getElementById("browsersTopWindowsFeatures201308"))
    {
        var ctx = document.getElementById("browsersTopWindowsFeatures201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Mozilla Firefox", "Opera", "Opera Classic", "Internet Explorer", "Safari"],
                datasets: [{  
                    data: [75.34, 87.90, 66.52, 89.22, 61.65, 73.14],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopWindowsPerformance201308"))
    {
        var ctx = document.getElementById("browsersTopWindowsPerformance201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Mozilla Firefox", "Opera", "Opera Classic", "Internet Explorer", "Safari"],
                datasets: [{  
                    data: [71.41, 56.97, 71.90, 57.57, 59.57, 47.22],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopWindowsFinal201308"))
    {
        var ctx = document.getElementById("browsersTopWindowsFinal201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Mozilla Firefox", "Opera", "Opera Classic", "Internet Explorer", "Safari"],
                datasets: [{  
                    data: [74.08, 73.95, 72.53, 69.69, 64.03, 55.57],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(192, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(166, 166, 166, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopMacBasic201307"))
    {
        var ctx = document.getElementById("browsersTopMacBasic201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Opera", "Mozilla Firefox", "Safari", "Opera Classic"],
                datasets: [{  
                    data: [73.92, 70.48, 81.67, 72.31, 64.14],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopMacFeatures201307"))
    {
        var ctx = document.getElementById("browsersTopMacFeatures201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Opera", "Mozilla Firefox", "Safari", "Opera Classic"],
                datasets: [{  
                    data: [73.29, 80.08, 85.73, 78.22, 88.91],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopMacPerformance201307"))
    {
        var ctx = document.getElementById("browsersTopMacPerformance201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Opera", "Mozilla Firefox", "Safari", "Opera Classic"],
                datasets: [{  
                    data: [74.61, 64.58, 54.05, 58.18, 47.41],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopMacFinal201307"))
    {
        var ctx = document.getElementById("browsersTopMacFinal201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Google Chrome", "Opera", "Mozilla Firefox", "Safari", "Opera Classic"],
                datasets: [{  
                    data: [74.10, 69.85, 69.81, 67.08, 61.81],
                    backgroundColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(166, 166, 166, 1)',
                        'rgba(192, 0, 0, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopLinuxBasic201307"))
    {
        var ctx = document.getElementById("browsersTopLinuxBasic201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Mozilla Firefox", "Google Chrome", "Opera Classic"],
                datasets: [{  
                    data: [79.07, 60.62, 73.85],
                    backgroundColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopLinuxFeatures201307"))
    {
        var ctx = document.getElementById("browsersTopLinuxFeatures201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Mozilla Firefox", "Google Chrome", "Opera Classic"],
                datasets: [{  
                    data: [84.55, 67.41, 88.89],
                    backgroundColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopLinuxPerformance201307"))
    {
        var ctx = document.getElementById("browsersTopLinuxPerformance201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Mozilla Firefox", "Google Chrome", "Opera Classic"],
                datasets: [{  
                    data: [53.77, 71.52, 52.40],
                    backgroundColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopLinuxFinal201307"))
    {
        var ctx = document.getElementById("browsersTopLinuxFinal201307");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Mozilla Firefox", "Google Chrome", "Opera Classic"],
                datasets: [{  
                    data: [68.14, 67.34, 66.86],
                    backgroundColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderColor: [
                        'rgba(228, 108, 10, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(192, 0, 0, 1)'   
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSBasic201308"))
    {
        var ctx = document.getElementById("browsersTopiOSBasic201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Puffin Pro", "Atomic", "Dolphin", "iCab", "Mercury Pro", "Google Chrome", "360 Browser", "Skyfire", "Opera Mini"],
                datasets: [{  
                    data: [73.19, 58.01, 56.47, 68.90, 58.71, 58.79, 71.99, 54.32, 51.95, 68.22],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSFeatures201308"))
    {
        var ctx = document.getElementById("browsersTopiOSFeatures201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Puffin Pro", "Atomic", "Dolphin", "iCab", "Mercury Pro", "Google Chrome", "360 Browser", "Skyfire", "Opera Mini"],
                datasets: [{  
                    data: [49.74, 54.09, 80.12, 68.52, 94.44, 67.21, 51.75, 55.56, 33.07, 74.46],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSPerformance201308"))
    {
        var ctx = document.getElementById("browsersTopiOSPerformance201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Puffin Pro", "Atomic", "Dolphin", "iCab", "Mercury Pro", "Google Chrome", "360 Browser", "Skyfire", "Opera Mini"],
                datasets: [{  
                    data: [77.14, 75.83, 48.97, 45.31, 38.78, 48.81, 44.20, 50.30, 49.12, 19.01],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSFinal201308"))
    {
        var ctx = document.getElementById("browsersTopiOSFinal201308");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Puffin Pro", "Atomic", "Dolphin", "iCab", "Mercury Pro", "Google Chrome", "360 Browser", "Skyfire", "Opera Mini"],
                datasets: [{  
                    data: [70.63, 65.98, 57.33, 57.28, 55.80, 55.52, 54.51, 52.59, 46.95, 45.33],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(228, 108, 10, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSBasic201208"))
    {
        var ctx = document.getElementById("browsersTopiOSBasic201208");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Google Chrome", "iCab", "Mercury Pro", "360 Browser", "Atomic", "Dolphin", "Opera Mini", "Puffin Pro", "Skyfire"],
                datasets: [{  
                    data: [61.61, 54.06, 52.99, 44.31, 43.55, 53.12, 48.36, 57.46, 35.66, 37.77],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSFeatures201208"))
    {
        var ctx = document.getElementById("browsersTopiOSFeatures201208");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Google Chrome", "iCab", "Mercury Pro", "360 Browser", "Atomic", "Dolphin", "Opera Mini", "Puffin Pro", "Skyfire"],
                datasets: [{  
                    data: [45.24, 68.60, 74.80, 53.88, 46.34, 47.97, 39.43, 68.25, 40.15, 28.38],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSPerformance201208"))
    {
        var ctx = document.getElementById("browsersTopiOSPerformance201208");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Google Chrome", "iCab", "Mercury Pro", "360 Browser", "Atomic", "Dolphin", "Opera Mini", "Puffin Pro", "Skyfire"],
                datasets: [{  
                    data: [65.17, 44.41, 40.63, 44.13, 48.90, 41.57, 46.18, 5.99, 34.30, 37.25],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if (document.getElementById("browsersTopiOSFinal201208"))
    {
        var ctx = document.getElementById("browsersTopiOSFinal201208");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                label: 'Basic results, %',
                labels: ["Safari", "Google Chrome", "iCab", "Mercury Pro", "360 Browser", "Atomic", "Dolphin", "Opera Mini", "Puffin Pro", "Skyfire"],
                datasets: [{  
                    data: [58.69, 53.80, 53.46, 46.87, 46.72, 46.52, 44.92, 37.37, 36.29, 34.95],
                    backgroundColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderColor: [
                        'rgba(166, 166, 166, 1)',
                        'rgba(0, 176, 80, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 176, 240, 1)',
                        'rgba(155, 187, 89, 1)',
                        'rgba(128, 100, 162, 1)',
                        'rgba(146, 208, 80, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 112, 192, 1)',
                        'rgba(228, 108, 10, 1)' 
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                   xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:0,
                            max:100,    
                            fontSize: 15,
                            fontColor: '#161616',
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }],
                    yAxes: [{
                        barPercentage:1.0,
                        categoryPercentage: 1.0,
                        ticks: {
                            beginAtZero:true,
                            fontSize: 15,
                            fontColor: 'black'
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }
	if (document.getElementById("not-partners-gallery"))
	{
		var notPartnersLogo = document.querySelectorAll('.not-partners-logo');
		var notPartnersLink = document.querySelectorAll('.not-partners-link');
		var logoArray = [["/global/site-files/not-partners/abstergo-industries-logo.png","Abstergo Logo","Abstergo Industries(Assasin's Creed)","javascript:void(0)"], 
		["/global/site-files/not-partners/aperture-laboratories-logo.png","Aperture Logo","Aperture Science(Portal)","javascript:void(0)"], 
		["/global/site-files/not-partners/black-mesa-logo.png","Black Mesa Logo","Black Mesa(Half-Life)","javascript:void(0)"], 
		["/global/site-files/not-partners/cyberdyne-systems-logo.png","Cyberdyne Systems Logo","Cyberdyne Systems(Terminator)","javascript:void(0)"], 
		["/global/site-files/not-partners/dharma-initiative-logo.png","Dharma Initiative Logo","Dharma Initiative(Lost)","javascript:void(0)"], 
		["/global/site-files/not-partners/galactic-empire-logo.png","Galactic Empire Logo","Galactic Empire(Star Wars)","javascript:void(0)"], 
		["/global/site-files/not-partners/ingen-logo.png","InGen Logo","InGen(Jurassic Park)","javascript:void(0)"], 
		["/global/site-files/not-partners/lexcorp-logo.png","LexCorp Logo","Lexcorp(DC Comics)","javascript:void(0)"], 
		["/global/site-files/not-partners/omni-consumer-products-logo.png","OMP Logo","Omni Consumer Products(Robocop)","javascript:void(0)"], 
		["/global/site-files/not-partners/resources-development-administration-logo.png","RDA Logo","Resources Development Administration(Avatar)","javascript:void(0)"], 
		["/global/site-files/not-partners/scp-foundation-logo.png","SCP Foundation Logo","SCP Foundation","http://www.scp-wiki.net/"], 
		["/global/site-files/not-partners/stark-industries-logo.png","Stark Industries Logo","Stark Industries(Marvel)","javascript:void(0)"], 
		["/global/site-files/not-partners/soylent-corporation-logo.png","Soylent Corporation Logo","Soylent Corporation(Soylent Green)","javascript:void(0)"], 
		["/global/site-files/not-partners/umbrella-corporation-logo.png","Umbrella Corporation Logo","Umbrella Corporation(Resident Evil)","javascript:void(0)"], 
		["/global/site-files/not-partners/wayne-enterprises-logo.png","Wayne Enterprises Logo","Wayne Enterprises(DC Comics)","javascript:void(0)"]];
		logoArray.sort(function(a, b){return 0.5 - Math.random()});
		for (var i = 0; i < notPartnersLogo.length; ++i) 
        {
          notPartnersLogo[i].src = logoArray[i][0];
          notPartnersLogo[i].alt = logoArray[i][1];
          notPartnersLogo[i].title = logoArray[i][2];
          notPartnersLink[i].href=logoArray[i][3];
        }
	}
	if (document.getElementById("contestantsTable"))
	{
		$('#contestantsTable').DataTable({
        	"paging":   true,
        	"columns": [
                {"orderable": false},
                {"orderable": true},
                {"orderable": true},
                {"orderable": false},
                {"orderable": true}
            ],
            "info":     false,
            "pageLength": 5,
            "aLengthMenu": [[ 5, 10, 50, 100 ,-1],[5,10,50,100,10000]],
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
	}
	if (document.getElementById("formatted-result-table"))
    {
        if (document.getElementById("browsers_os_other")||!document.getElementById("browsers_os_overall"))
		    colorTable("formattedTable",1,2);
        else
            colorTable("formattedTable",1,1);
		$('#formattedTable').DataTable({
        	"paging":   false,
            "order": [[ 2, "desc" ]],
            "info":     false,
            "autoWidth": false,
            "columns": [
                null,
                null,
                { "width": "15%" },
                { "width": "15%" },
                { "width": "15%" },
                { "width": "15%" }
            ],
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
	}
	if (document.getElementById("fullResultsTable"))
    {
		$('#fullResultsTable').DataTable({
        	"paging":   false,
        	"autoWidth": false,
        	"columns": [
                {"orderable": false},
                {"orderable": true},
                {"orderable": true,"width": "15%"},
                {"orderable": true,"width": "15%"},
                {"orderable": true,"width": "15%"},
                {"orderable": true,"width": "15%"},
            ],
            "info":     false,
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
	}
	if (document.getElementById("contestantInfo"))
    {
		$('#contestantInfo').DataTable({
        	"paging":   false,
        	"bSort": false,
        	"searching": false,
            "info":     false,
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
	}
	if (document.getElementById("contestantResults"))
    {
		colorTable("contestantResults",1,1);
		$('#contestantResults').DataTable({
        	"paging":   false,
        	"bSort": false,
        	"searching": false,
            "info":     false,
            "autoWidth": false,
            "columns": [
                { "width": "20%" },
                { "width": "20%" },
                { "width": "20%" },
                { "width": "20%" },
                { "width": "20%" }
            ],
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
	}
	if (document.getElementById("contestantPositions"))
    {
		$('#contestantPositions').DataTable({
        	"paging":   false,
        	"bSort": false,
        	"searching": false,
            "info":     false,
            "autoWidth": false,
            "columns": [
                { "width": "20%" },
                { "width": "20%" },
                { "width": "20%" },
                { "width": "20%" },
                { "width": "20%" }
            ],
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
	}	
    if (document.getElementById("crafting-guide-table"))
    {
        craftingTableColors("craftingGuideTable");
        $('#craftingGuideTable').DataTable({
            "paging":   true,
            "order": [[ 2, "desc" ]],
            "info":     false,
            "columns": [
                null,
                { "width": "10%", render: $.fn.dataTable.render.number('', '.', 0, '', '') },
                { "width": "20%", render: $.fn.dataTable.render.number('', '.', 2, '', '') },
                { "width": "20%", render: $.fn.dataTable.render.number('', '.', 2, '', '') },
                { "width": "20%", render: $.fn.dataTable.render.number('', '.', 2, '', '') },
                { "visible": false },
                { "visible": false },
                { "visible": false }
            ],
            "pageLength": 50,
            "aLengthMenu": [[ 10, 50, 100 ,-1],[10,50,100,10000]],
            // "autoWidth": false,
            // "columns": [
            //     null,
            //     { "width": "10%" },
            //     { "width": "20%" },
            //     { "width": "20%" },
            //     { "width": "20%" },
            //     null,
            //     null
            // ],
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
    }
    if (document.getElementById("arena-tierlist-table"))
    {
        arenaTierlistColors("arenaTierlistTable");
        $('#arenaTierlistTable').DataTable({
            "paging":   true,
            "order": [[ 2, "desc" ]],
            "info":     false,
            "columns": [
                null,
                { "width": "20%", render: $.fn.dataTable.render.number('', '.', 2, '', '') },
                { "width": "40%", render: $.fn.dataTable.render.number('', '.', 2, '', '') },
                { "visible": false },
                { "visible": false },
                { "visible": false }
            ],
            "pageLength": 50,
            "aLengthMenu": [[ 10, 50, 100 ,-1],[10,50,100,10000]],
            // "autoWidth": false,
            // "columns": [
            //     null,
            //     { "width": "10%" },
            //     { "width": "20%" },
            //     { "width": "20%" },
            //     { "width": "20%" },
            //     null,
            //     null
            // ],
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
    }
    if (document.getElementById("mobile-phones-results"))
    {
        colorTable("formattedTable",1,2);
        $('#formattedTable').DataTable({
            "paging":   false,
            "order": [[ 2, "desc" ]],
            "info":     false,
            "columns": [
                null,
                { "visible": false },
                { "width": "10%" },
                { "width": "10%" },
                { "width": "10%" },                
                { "width": "10%" },
                { "width": "10%" },
                { "width": "10%" }
            ],
            "pageLength": 50,
            "autoWidth": false,
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
    }
    if (document.getElementById("mobile-phones-results-old"))
    {
        colorTable("formattedTable",1,2);
        $('#formattedTable').DataTable({
            "paging":   false,
            "order": [[ 2, "desc" ]],
            "info":     false,
            "columns": [
                null,
                { "visible": false },
                { "width": "15%" },
                { "width": "15%" },
                { "width": "15%" },
                { "width": "15%" }
            ],
            "pageLength": 50,
            "autoWidth": false,
            "language": (localStorage.getItem("lang")=="en") ? ({
                "decimal":        "",
                "emptyTable":     "No data available in table",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Show _MENU_ entries",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }) : ({
                "decimal":        "",
                "emptyTable":     "В таблице нет данных",
                "info":           "Элменты с _START_ по _END_ из _TOTAL_",
                "infoEmpty":      "Элементы с 0 по 0 из 0",
                "infoFiltered":   "(выбрано из набора из _MAX_ элементов)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Показывать _MENU_ элементов",
                "loadingRecords": "Загрузка...",
                "processing":     "Обработка...",
                "search":         "Поиск:",
                "zeroRecords":    "Совпадений не найдено",
                "paginate": {
                    "first":      "В начало",
                    "last":       "В конец",
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
                "aria": {
                    "sortAscending":  ": нажмите чтобы отсортировать по возрастанию",
                    "sortDescending": ": нажмите чтобы отсортировать по убыванию"
                }
            })
        });
    }
	// if (localStorage.getItem("notify_close")!=="yes")
	// {
	// 	document.getElementById("notification").style.display = 'block';
	// }
	if (localStorage.getItem("cookie_close")!=="yes")
	{
		document.getElementById("sticky-footer").style.display = 'block';
		var siteHeight = document.getElementById("site");
		var stickyFooterHeight = document.getElementById("sticky-footer");
		siteHeight.style.height = siteHeight.offsetHeight+stickyFooterHeight.offsetHeight+'px';
	}
	var siteurl=window.location.toString();
	var lang = window.navigator.languages ? window.navigator.languages[0] : null;
	lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
	if (lang.indexOf('-') !== -1)
		lang = lang.split('-')[0];
	if (lang.indexOf('_') !== -1)
		lang = lang.split('_')[0];
	if (localStorage.getItem("lang")!==null)
	{
		if ((localStorage.getItem("lang")=="en")&&(siteurl.indexOf("/"+localStorage.getItem("lang")+"/")==-1))
		{
			document.getElementById("language-notification").style.display = 'block';
		}
		if ((localStorage.getItem("lang")=="ru")&&(siteurl.indexOf("/"+localStorage.getItem("lang")+"/")==-1))
		{
			document.getElementById("language-notification").style.display = 'block';
		}
	}
	else
	{
		if (((lang=="ru")||(lang=="uk")||(lang=="be"))&&(siteurl.indexOf("/ru/")==-1))
		{
			document.getElementById("language-notification").style.display = 'block';
		}
		if (((lang!=="ru")&&(lang!=="uk")&&(lang!=="be"))&&(siteurl.indexOf("/en/")==-1))
		{
			document.getElementById("language-notification").style.display = 'block';
		}
	}	
};

document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-bg');
    var elClass = e.target.className;
    if(bg){
        if (elClass === "lazyload extended-gradient")
            e.target.style.background = 'linear-gradient(-90deg, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgba(150,150,150,1), rgba(86,85,85,1), rgba(42,42,42,1), rgba(29,29,29,1)), url(' + bg + ') right -5px center';
        else
            e.target.style.background = 'linear-gradient(-90deg, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgba(86,85,85,1), rgba(42,42,42,1), rgba(29,29,29,1)), url(' + bg + ') right -5px center';
    }
});

function sharePage(socialNetwork)
{
	var siteurl=window.location.toString();
	if (socialNetwork==="facebook")
		window.open("http://www.facebook.com/share.php?u="+siteurl, "Popup", "location=1,status=1,scrollbars=1, resizable=1, directories=1, toolbar=1, titlebar=1, width=600, height=300");
	if (socialNetwork==="twitter")
		window.open("https://twitter.com/home?status="+siteurl, "Popup", "location=1,status=1,scrollbars=1, resizable=1, directories=1, toolbar=1, titlebar=1, width=600, height=300");
	if (socialNetwork==="vk")
		window.open("http://vk.com/share.php?url="+siteurl, "Popup", "location=1,status=1,scrollbars=1, resizable=1, directories=1, toolbar=1, titlebar=1, width=600, height=300");
	if (socialNetwork==="ok")
		window.open("https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl="+siteurl, "Popup", "location=1,status=1,scrollbars=1, resizable=1, directories=1, toolbar=1, titlebar=1, width=600, height=300");
    if (socialNetwork==="email"){
        var shareWindow = window.open("mailto:?subject=Look at this&body=Hi,I found this website and thought you might like it "+siteurl, "Popup", "location=1,status=1,scrollbars=1, resizable=1, directories=1, toolbar=1, titlebar=1, width=600, height=300");
        setTimeout(function () { shareWindow.close();}, 1000);
    }
}

function changelogShowMore()
{
	for (var i = 1; i < (document.getElementById("software-changelog").childElementCount); i++)
    {
	   document.getElementById("software-changelog").children[i].style.display = 'list-item';
	};
	document.getElementById("software-changelog-more").style.display = 'none';
	document.getElementById("software-changelog-less").style.display = 'block';
}

function changelogShowLess() 
{
    for (var i = 1; i < (document.getElementById("software-changelog").childElementCount); i++)
    {
	   document.getElementById("software-changelog").children[i].style.display = 'none';
	};
	document.getElementById("software-changelog-more").style.display = 'block';
	document.getElementById("software-changelog-less").style.display = 'none';
}

$(document).ready(function () {
    $('.show-more').on('click', function() {
        $(this).siblings('.show-more-details').toggle();
        if(localStorage.getItem("lang")=="en")
            $(this).html( $(this).html() == '(show&nbsp;more)' ? '(show\xa0less)' :'(show\xa0more)' );
        else
        {
            if(localStorage.getItem("lang")=="ru")
                $(this).html( $(this).html() == '(развернуть)' ? '(свернуть)' :'(развернуть)' );
        }
    });
});

function nextImage(arr,N)
{
	var arrInText = "[";
	for (var i = 0; i <arr.length-1; i++) 
	{
		arrInText=arrInText+"'"+arr[i]+"',";
	}
	arrInText=arrInText+"'"+arr[arr.length-1]+"']";
	if ((N-1)<0)
	{
		document.getElementById("screenshot-previous-link").setAttribute( "onClick", "javascript: nextImage("+arrInText+","+(arr.length-1)+");" );
	}
	else
	{
		document.getElementById("screenshot-previous-link").setAttribute( "onClick", "javascript: nextImage("+arrInText+","+(N-1)+");" );
	}
	if ((N+1)>=arr.length)
	{
		document.getElementById("screenshot-next-link").setAttribute( "onClick", "javascript: nextImage("+arrInText+","+(0)+");" );
	}
	else
	{
		document.getElementById("screenshot-next-link").setAttribute( "onClick", "javascript: nextImage("+arrInText+","+(N+1)+");" );	
	}
	document.getElementById("software-screenshot-image").src = arr[N];
}

function openModal() 
{
  document.getElementById('myModal').style.display = "block";
  document.getElementById("full-size-image").src=document.getElementById("software-screenshot-image").src;
}

function closeModal() 
{
  document.getElementById('myModal').style.display = "none";
}

function nextReview(arr,N)
{
	var arrInText = "[";
	for (var i = 0; i <arr.length-1; i++) 
	{
		arrInText=arrInText+"'"+arr[i]+"',";
	}
	arrInText=arrInText+"'"+arr[arr.length-1]+"']";
	if ((N-1)<0)
	{
		document.getElementById("review-previous-link").setAttribute( "onClick", "javascript: nextReview("+arrInText+","+(arr.length-1)+");" );
	}
	else
	{
		document.getElementById("review-previous-link").setAttribute( "onClick", "javascript: nextReview("+arrInText+","+(N-1)+");" );
	}
	if ((N+1)>=arr.length)
	{
		document.getElementById("review-next-link").setAttribute( "onClick", "javascript: nextReview("+arrInText+","+(0)+");" );
	}
	else
	{
		document.getElementById("review-next-link").setAttribute( "onClick", "javascript: nextReview("+arrInText+","+(N+1)+");" );
	}
	document.getElementById("software-review").innerHTML = arr[N];
}

/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
function softwareDownload() {
    {
        var unknown = '-';
        var nAgt = navigator.userAgent;
        var osBit = '-';
        var siteurl=window.location.toString();
        var appName = document.getElementById("download-button").getAttribute("title")
        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Yandex.Browser
        else if ((verOffset = nAgt.indexOf('YaBrowser')) != -1) {
            browser = 'Yandex.Browser';
            version = nAgt.substring(verOffset + 10);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'OpenBSD', r:/OpenBSD/},
            {s:'SunOS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'MacOSX', r:/Mac OS X/},
            {s:'MacOS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1 )
        { 
			osBit='64';
		} else { 
			osBit='32';
		}

		switch (appName){
			case 'Snake':
				switch (os) {
		            case 'Windows':
		                document.getElementById("download-button").setAttribute( "href", "/global/site-files/Snake/"+os+"/"+osBit+"/"+appName+".zip");
		                document.getElementById("download-button").removeAttribute("title");
		                break;
		            default:
		            	document.getElementById("download-button").style.color = '#ccc';
		   				document.getElementById("download-button").style.border = '3px solid #ccc';
		   				if (siteurl.indexOf("/en/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Application is not compatible with your operating system.');" );
		                if (siteurl.indexOf("/ru/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Приложение не совместимо с вашей операционной системой.');" );
		        }
				break;
			case 'Disearch':
				switch (os) {
		            case 'Windows':
		                document.getElementById("download-button").setAttribute( "href", "/global/site-files/Disearch/"+os+"/"+osBit+"/"+appName+".zip");
		                document.getElementById("download-button").removeAttribute("title");
		                break;
		            default:
		            	document.getElementById("download-button").style.color = '#ccc';
		   				document.getElementById("download-button").style.border = '3px solid #ccc';
		   				if (siteurl.indexOf("/en/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Application is not compatible with your operating system.');" );
		                if (siteurl.indexOf("/ru/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Приложение не совместимо с вашей операционной системой.');" );
		        }
				break;
			case 'Battleship':
				switch (os) {
		            case 'Windows':
		                document.getElementById("download-button").setAttribute( "href", "/global/site-files/Battleship/"+os+"/"+osBit+"/"+appName+".zip");
		                document.getElementById("download-button").removeAttribute("title");
		                break;
		            default:
		            	document.getElementById("download-button").style.color = '#ccc';
		   				document.getElementById("download-button").style.border = '3px solid #ccc';
		   				if (siteurl.indexOf("/en/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Application is not compatible with your operating system.');" );
		                if (siteurl.indexOf("/ru/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Приложение не совместимо с вашей операционной системой.');" );
		        }
				break;
			case 'GameOfLife':
				switch (os) {
		            case 'Windows':
		                document.getElementById("download-button").setAttribute( "href", "/global/site-files/GameOfLife/"+os+"/"+osBit+"/"+appName+".jar");
		                document.getElementById("download-button").removeAttribute("title");
		                break;
		            case 'Linux':
		                document.getElementById("download-button").setAttribute( "href", "/global/site-files/GameOfLife/"+os+"/"+appName+".jar");
		                document.getElementById("download-button").removeAttribute("title");
		                break;
		            case 'MacOSX':
		                document.getElementById("download-button").setAttribute( "href", "/global/site-files/GameOfLife/"+os+"/"+appName+".jar");
		                document.getElementById("download-button").removeAttribute("title");
		                break;
		            case 'SunOS':
		                document.getElementById("download-button").setAttribute( "href", "/global/site-files/GameOfLife/"+os+"/"+appName+".jar");
		                document.getElementById("download-button").removeAttribute("title");
		                break;
		            default:
		            	document.getElementById("download-button").style.color = '#ccc';
		   				document.getElementById("download-button").style.border = '3px solid #ccc';
		   				if (siteurl.indexOf("/en/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Application is not compatible with your operating system.');" );
		                if (siteurl.indexOf("/ru/")!=-1)
		                	document.getElementById("download-button").setAttribute( "href", "javascript: alert('Приложение не совместимо с вашей операционной системой.');" );
		        }
				break;
            case 'Balls':
                switch (os) {
                    case 'Windows':
                        document.getElementById("download-button").setAttribute( "href", "/global/site-files/Balls/"+os+"/"+osBit+"/"+appName+".zip");
                        document.getElementById("download-button").removeAttribute("title");
                        break;
                    default:
                        document.getElementById("download-button").style.color = '#ccc';
                        document.getElementById("download-button").style.border = '3px solid #ccc';
                        if (siteurl.indexOf("/en/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "javascript: alert('Application is not compatible with your operating system.');" );
                        if (siteurl.indexOf("/ru/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "javascript: alert('Приложение не совместимо с вашей операционной системой.');" );
                }
                break;
            case 'Unchained':
                if (mobile){
                    browser+=" Mobile"
                }
                switch (browser) {
                    case 'Firefox':
                        if (siteurl.indexOf("/en/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "https://addons.mozilla.org/en-US/firefox/addon/unchained/");
                        if (siteurl.indexOf("/ru/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "https://addons.mozilla.org/ru/firefox/addon/unchained/");
                        document.getElementById("download-button").removeAttribute("title");
                        break;
                    case 'Chrome':
                        document.getElementById("download-button").setAttribute( "href", "https://chrome.google.com/webstore/detail/gjlglcehpoenfhmdllofpifholjjogok");
                        document.getElementById("download-button").removeAttribute("title");
                        break;
                    case 'Microsoft Edge':
                        document.getElementById("download-button").setAttribute( "href", "https://microsoftedge.microsoft.com/addons/detail/kmoaannfmmeigenmkmgpmeefefcoidgm");
                        document.getElementById("download-button").removeAttribute("title");
                        break;
                    case 'Opera':
                    case 'Yandex.Browser':
                    if (siteurl.indexOf("/en/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "https://addons.opera.com/en/extensions/details/unchained/");
                        if (siteurl.indexOf("/ru/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "https://addons.opera.com/ru/extensions/details/unchained/");
                        document.getElementById("download-button").removeAttribute("title");
                    default:
                        document.getElementById("download-button").style.color = '#ccc';
                        document.getElementById("download-button").style.border = '3px solid #ccc';
                        if (siteurl.indexOf("/en/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "javascript: alert('Application is not compatible with your browser. If you are using uncommon Chrome-based or Firefox-based browser you can try download links for other browsers');" );
                        if (siteurl.indexOf("/ru/")!=-1)
                            document.getElementById("download-button").setAttribute( "href", "javascript: alert('Приложение не совместимо с вашим браузером. Если вы используете нераспространённый браузер на основе Chrome или Firefox вы можете попробовать ссылки на загрузку для других браузеров');" );
                }
                break;
		}
    }
};

function colorTable(id, rs, cs) {
        var table = document.getElementById(id);
        for (var r = rs, n = table.rows.length; r < n; r++) 
        {
            for (var c = cs, m = table.rows[r].cells.length; c < m; c++) 
            {
                if (typeof parseInt(table.rows[r].cells[c].innerHTML) === 'number' && table.rows[r].cells[c].innerHTML !== '')
            		if (parseInt(table.rows[r].cells[c].innerHTML)>=50)
                		table.rows[r].cells[c].style.backgroundColor = "rgb("+Math.round(254-155*(table.rows[r].cells[c].innerHTML-50)/50)+","+Math.round(235-45*(table.rows[r].cells[c].innerHTML-50)/50)+","+Math.round(132-9*(table.rows[r].cells[c].innerHTML-50)/50)+")";
            		else
            			table.rows[r].cells[c].style.backgroundColor = "rgb("+Math.round(248+6*table.rows[r].cells[c].innerHTML/50)+","+Math.round(105+130*table.rows[r].cells[c].innerHTML/50)+","+Math.round(107+25*table.rows[r].cells[c].innerHTML/50)+")";
            }
        }
};

function craftingTableColors(id){
    var table = document.getElementById(id);
    var max = 0.0;
    var min = 100.0;
    for (var r = 1, n = table.rows.length; r < n; r++) 
    {
        for (var c = 2, m = table.rows[r].cells.length-1; c < m; c++) 
        {
            if (typeof parseInt(table.rows[r].cells[c].innerHTML) === 'number' && table.rows[r].cells[c].innerHTML !== '')
            {
                   if (parseInt(table.rows[r].cells[c].innerHTML) > max) max = parseInt(table.rows[r].cells[c].innerHTML);
                   if (parseInt(table.rows[r].cells[c].innerHTML) < min) min = parseInt(table.rows[r].cells[c].innerHTML);
            }
        }
    }
    for (var r = 1, n = table.rows.length; r < n; r++) 
    {
        for (var c = 2, m = table.rows[r].cells.length-1; c < m; c++) 
        {
            if (typeof parseInt(table.rows[r].cells[c].innerHTML) === 'number' && table.rows[r].cells[c].innerHTML !== '')
                if (parseInt(table.rows[r].cells[c].innerHTML)>=1)
                    table.rows[r].cells[c].style.backgroundColor = "rgb("+Math.round(238-139*(table.rows[r].cells[c].innerHTML-1)/(max-1))+","+Math.round(238-48*(table.rows[r].cells[c].innerHTML-1)/(max-1))+","+Math.round(238-115*(table.rows[r].cells[c].innerHTML-1)/(max-1))+")";
                else
                    table.rows[r].cells[c].style.backgroundColor = "rgb("+Math.round(238+10*(1-table.rows[r].cells[c].innerHTML)/(1-min))+","+Math.round(238-133*(1-table.rows[r].cells[c].innerHTML)/(1-min))+","+Math.round(238-131*(1-table.rows[r].cells[c].innerHTML)/(1-min))+")";
        }
    }
}

function arenaTierlistColors(id){
    var table = document.getElementById(id);
    var max = 0.0;
    var min = 100.0;
    for (var r = 1, n = table.rows.length; r < n; r++) 
    {
        for (var c = 2, m = table.rows[r].cells.length-1; c < m; c++) 
        {
            if (typeof parseInt(table.rows[r].cells[c].innerHTML) === 'number' && table.rows[r].cells[c].innerHTML !== '')
            {
                   if (parseInt(table.rows[r].cells[c].innerHTML) > max) max = parseInt(table.rows[r].cells[c].innerHTML);
                   if (parseInt(table.rows[r].cells[c].innerHTML) < min) min = parseInt(table.rows[r].cells[c].innerHTML);
            }
        }
    }
    for (var r = 1, n = table.rows.length; r < n; r++) 
    {
        for (var c = 2, m = table.rows[r].cells.length-1; c < m; c++) 
        {
            if (typeof parseInt(table.rows[r].cells[c].innerHTML) === 'number' && table.rows[r].cells[c].innerHTML !== '')
                if (parseInt(table.rows[r].cells[c].innerHTML)>=1)
                    table.rows[r].cells[c].style.backgroundColor = "rgb("+Math.round(238-139*(table.rows[r].cells[c].innerHTML-1)/(max-1))+","+Math.round(238-48*(table.rows[r].cells[c].innerHTML-1)/(max-1))+","+Math.round(238-115*(table.rows[r].cells[c].innerHTML-1)/(max-1))+")";
                else
                    table.rows[r].cells[c].style.backgroundColor = "rgb("+Math.round(238+10*(1-table.rows[r].cells[c].innerHTML)/(1-min))+","+Math.round(238-133*(1-table.rows[r].cells[c].innerHTML)/(1-min))+","+Math.round(238-131*(1-table.rows[r].cells[c].innerHTML)/(1-min))+")";
        }
    }
}

function team5CheckboxHandler(checkboxName) {
    var checkBox = document.getElementById(checkboxName);
    if (checkboxName === 'team5Check'){
        if (checkBox.checked == true){
            var all = document.getElementsByClassName('blizzard-not-team5-member');
            for (var i = 0; i < all.length; i++) {
                all[i].style.display = "none";
            }
        } else {
            var all = document.getElementsByClassName('blizzard-not-team5-member');
            for (var i = 0; i < all.length; i++) {
                if (!all[i].classList.contains('blizzard-not-current-member') || !document.getElementById('currentCheck').checked){
                    all[i].style.display = "inline-block";
                }
            }
        }
    } else {
        if (checkBox.checked == true){
            var all = document.getElementsByClassName('blizzard-not-current-member');
            for (var i = 0; i < all.length; i++) {
                all[i].style.display = "none";
            }
        } else {
            var all = document.getElementsByClassName('blizzard-not-current-member');
            for (var i = 0; i < all.length; i++) {
                if (!all[i].classList.contains('blizzard-not-team5-member') || !document.getElementById('team5Check').checked){
                    all[i].style.display = "inline-block";
                }
            }
        }
    }
}