//hardcoding the center
var LATITUDE = 28; 
var LONGITUDE = 0;

//global variables
var map = null;
var geocoder;
var global_index = 0;
var COUNTER = new Array();
var LATI = new Array();
var LNGI = new Array();
var error = 0;
var time = 0;
//load the map
function load()
{
       var latlng = new google.maps.LatLng(LATITUDE, LONGITUDE);
       geocoder = new google.maps.Geocoder();
       map = new google.maps.Map(document.getElementById("map"), {
         center: latlng,
         mapTypeId:google.maps.MapTypeId.SATELLITE,
         navigationControl: true,
         scrollwheel:false,
         zoom: 2
       });
  
  countall();
}

//intiate all global arrays
function countall()
{
   for(var j=0; j<my_arr.length; j++)
     {
       COUNTER[my_arr[j].location] = 0 ;
       if(my_arr[j].location == "null")
          {my_arr[j].location = "--";}
      }
}

function code()
{
  friend = my_arr[global_index];

  if(friend.location=="--" || friend.location=="null")
  { 
       if(global_index<friends.length)
       { friendLoaded++;
         loadLocation(friendLoaded);         
       }
  }

  //set the marker for the present element
  else
  {
	var marker = new google.maps.Marker();
	marker.setMap(map);
	marker.setTitle(friend.name + " is at " + friend.location);
	if(friend.sex == "male")
	{marker.setIcon("pink.png");}
	else
	{marker.setIcon("fsingle.png");}

       /*geocode the locations, and add them to the LATI LNGI arrays*/
       if(!LATI[friend.location])
 	  {
	    geocoder.geocode({'address':friend.location},function(results, status){
              time++;
	      if(status == google.maps.GeocoderStatus.OK)
	        { 
	          marker.setPosition(results[0].geometry.location);
	          LATI[friend.location] = results[0].geometry.location.lat();
	          LNGI[friend.location] = results[0].geometry.location.lng();
	          COUNTER[friend.location] = COUNTER[friend.location]+1;
		  
	        }
	      else
	        {
	          
	       	  error++;
        	}  

	      if(global_index<friends.length) 
        	{      
	          friendLoaded++;
	          loadLocation(friendLoaded);
		}
	    });
        }

       /*get lati, lngi for locations that are geocoded*/
       else     
        {
             var count = COUNTER[friend.location]; 
             lati = LATI[friend.location] + 0.01*Math.random();
             lngi = LNGI[friend.location] + 0.01*Math.random();
             var position = new google.maps.LatLng(lati, lngi);
             marker.setPosition(position);
             COUNTER[friend.location]= count + 1;
    
             if(global_index<friends.length) 
              {     
                friendLoaded++;
                 loadLocation(friendLoaded);
              }
         }
  }
}



