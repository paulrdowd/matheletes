var LT = LT || {};

var leaguetable = $('[name="mainLeagueTable"]');
var selectyear = $('[name="selectYear"]');
var leaguetabledata = getleaguedata();

function maketd(columnvalue){
	return "<td>"+columnvalue+"</td>";
};


function updateleaguetable(){
	leaguetable.empty()
	var leaguehtml = ["<tr><th>class</th><th>name</th><th>school</th><th>town</th><th>county</th><th>province</th><th>masterypoints</th><th>energypoints</th></tr>"];
	for (i in leaguetabledata.results)
		{
		  if(leaguetabledata.results[i].class=="class"+selectyear.val()){
			  leaguehtml.push("<tr>"+maketd(leaguetabledata.results[i].class)+
			  					  maketd(leaguetabledata.results[i].name)+
			  					  maketd(leaguetabledata.results[i].school)+
			  					  maketd(leaguetabledata.results[i].town)+
			  					  maketd(leaguetabledata.results[i].county)+
			  					  maketd(leaguetabledata.results[i].province)+
			  					  maketd(leaguetabledata.results[i].masterypoints)+
			  					  maketd(leaguetabledata.results[i].energypoints)+
			  					  "</tr>")
		  					  };
		}
	leaguetable.append(leaguehtml.join());
};


LT.init = function()
{

	var leaguehtml = [""];

	updateleaguetable();
	selectyear.on("change",updateleaguetable);
	
};



function getleaguedata()
{
	var leaguetablettext = '{ "results" : [' +
 	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
  	'{ "class":"class1" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class2" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class3" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "class":"class6" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
	'{ "class":"class6" , "name":"Doe" , "school":"fingal community college" , "town":"jenkinstown" ,  "county":"dublin" , "province":"leinster", "masterypoints":60 , "energypoints":70 },' +
 	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
 	
 	var leaguetabledata = JSON.parse(leaguetablettext);
 	
 	return leaguetabledata;
}