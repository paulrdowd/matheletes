var LT = LT || {};


//use to populate selection options at some point in the future
var countyarray = 	initialisecountyarray();
var provincearray = initialiseprovincearray();

var leaguetable = $('[name="mainLeagueTable"]');
var selectyear = $('[name="selectYear"]');
var selectprovince = $('[name="selectProvince"]');
var selectcounty = $('[name="selectCounty"]');
var buttonselectfilters = $('[name="buttonSelectFilters"]');
var leaguetabledata = getleaguedata();



function initialiseprovincearray(){
			var newprovincearray={};
			newprovincearray['100']="Leinster";
			newprovincearray['200']="Munster";
			newprovincearray['300']="Ulster";
			newprovincearray['400']="Connacht";
			return newprovincearray;

}

function initialisecountyarray(){
			var newcountyarray={};
		    newcountyarray['101']="Carlow";
			newcountyarray['102']="Dublin";
			newcountyarray['103']="Kildare";
			newcountyarray['104']="Kilkenny";
			newcountyarray['105']="Laois";
			newcountyarray['106']="Longford";
			newcountyarray['107']="Louth";
			newcountyarray['108']="Meath";
			newcountyarray['109']="Offaly";
			newcountyarray['110']="Westmeath";
			newcountyarray['111']="Wexford";
			newcountyarray['113']="Wicklow";
			newcountyarray['201']="Clare";
			newcountyarray['202']="Cork";
			newcountyarray['203']="Kerry";
			newcountyarray['204']="Limerick";
			newcountyarray['205']="Tipperary";
			newcountyarray['206']="Waterford";
			newcountyarray['301']="Antrim";
			newcountyarray['302']="Armagh";
			newcountyarray['303']="Cavan";
			newcountyarray['304']="Donegal";
			newcountyarray['305']="Down";
			newcountyarray['306']="Fermanagh";
			newcountyarray['307']="Londonderry";
			newcountyarray['308']="Monaghan";
			newcountyarray['309']="Tyrone";
			newcountyarray['401']="Galway";
			newcountyarray['402']="Leitrim";
			newcountyarray['403']="Mayo";
			newcountyarray['404']="Roscommon";
			newcountyarray['405']="Sligo";
			return newcountyarray;
}

function maketd(columnvalue){
	return "<td>"+columnvalue+"</td>";
};


function updateleaguetable(){
	leaguetable.empty()
	var leaguehtml = ["<thead><tr><th></th><th>class</th><th>name</th><th>school</th><th>town</th><th>county</th><th>province</th><th>masterypoints</th><th>energypoints</th></tr></thead>"];
	var province_selected = provincearray[selectprovince.val()];
	var county_selected = countyarray[selectcounty.val()];
	console.log('selecting county '+county_selected)
	var alt = true;
	for (i in leaguetabledata.results)
		{
		  var image = '<img src=".\\images\\'+leaguetabledata.results[i].county+'.jpg" alt="HTML5 Icon" style="width:25px;height:12px">'
		  var row_alt = "<tr>";

		  
		  var result = maketd(image)+
		  						  maketd(leaguetabledata.results[i].class)+
			  					  maketd(leaguetabledata.results[i].name)+
			  					  maketd(leaguetabledata.results[i].school)+
			  					  maketd(leaguetabledata.results[i].town)+
			  					  maketd(leaguetabledata.results[i].county)+
			  					  maketd(leaguetabledata.results[i].province)+
			  					  maketd(leaguetabledata.results[i].masterypoints)+
			  					  maketd(leaguetabledata.results[i].energypoints)+
			  					  "</tr>";
			  					  
		  if(leaguetabledata.results[i].class=="class"+selectyear.val()){
		  
		  	if(selectprovince.val()==0 && selectcounty.val()==0){
				   if(alt){
		  				row_alt = '<tr class="alt">'
		  				
		  				}
		  				alt=!alt;
			  	leaguehtml.push(row_alt+result);
			  }else if(selectcounty.val()==0 && leaguetabledata.results[i].province==province_selected){
				   if(alt){
		  				row_alt = '<tr class="alt">'
		  				
		  				}
		  			alt=!alt;
			  	leaguehtml.push(row_alt+result);
			  }else if(leaguetabledata.results[i].county==county_selected){
			       if(alt){
		  				row_alt = '<tr class="alt">'
		  				
		  				}
		  			alt=!alt;
			  	leaguehtml.push(row_alt+result);
			  }else{
			  	  
			  }
		  					  };
		}
	leaguetable.append('<tbody>'+leaguehtml.join()+'</tbody>');
};


LT.init = function()
{

	
	var leaguehtml = [""];

	updateleaguetable();
	selectyear.on("change",updateleaguetable);
	selectprovince.on("change",updateselectcounties);
	buttonselectfilters.on("click",updateleaguetable);	
};


function updateselectcounties(){
	var limit = parseInt(selectprovince.val());
	Object.keys(countyarray).forEach(function (key) {

		if((parseInt(key)<limit || parseInt(key)>(limit+100)) && limit!=0 ){
			
			$('[name="selectCounty"]').children('option[value="'+String(key)+'"]').hide();
		}else{
			
			$('[name="selectCounty"]').children('option[value="'+String(key)+'"]').show();
		}	
	})
}

function randomintfrominterval(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}



function getleaguedata()
{

	
	var leaguerows = "";
	
	var rowcount = 1000;
	while(rowcount>0){
	  var provincerandom = randomintfrominterval(1,4)*100;
	  var countrandom = randomintfrominterval(1,5)+provincerandom;
	  
	  leaguerows = leaguerows+ '{ "class":"class'+String(randomintfrominterval(6,13))+
	  							'" , "name":"Doe" , "school":"Random School" , "town":"randomtown" , '+
	  							'"county":"'+countyarray[countrandom]+'" , "province":"'+provincearray[provincerandom]+'", "masterypoints":60 ,'+
	  							'"energypoints":'+randomintfrominterval(1,100)+' , "provinceid":'+randomintfrominterval(1,100)+'  },'
	  rowcount = rowcount-1
	}
	
	var leaguetablettext  = '{ "results" : [' +leaguerows+'{}]}';
 	var leaguetabledata = JSON.parse(leaguetablettext);
 	
 	return leaguetabledata;
}