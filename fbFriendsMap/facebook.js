	var loggedIn = false;
	var friendLoaded = 0;
	var friends = null;
	var totalToBeLoaded = 0;
        var my_arr = new Array();
        
	function loginFacebook() {
		//initializes the facebook API
		FB.init({appId : "175679282469826", status : true,cookie : true,xbfml : true});

		document.getElementById("status").innerHTML = "Waiting for Facebook permission";
	
		//opens the Facebook login window for user
		FB.login(function(response) {
			if (response.session) {	
				document.getElementById("status").innerHTML = "Logged In.";
				loggedIn = true;
			} else {
				document.getElementById("status").innerHTML = "You have not given required permissions";
				loggedIn = false;
			}
		},{perms:'user_location,friends_location,friends_relationships'});
		
		//disables the login button after the user has loggedIn
		if(loggedIn) {
			document.getElementById("loginBtn").disabled = "disabled";
		}
	}

        function getFriends() {
		//if the person has not pressed login button
		if(!loggedIn) {
			loginFacebook();
		}
	
		document.getElementById("status").innerHTML = "Now loading your friends' location...";

		//if the person is loggedIn
		if(loggedIn) {
			document.getElementById("friendBtn").disabled = "disabled";
			FB.api("/me/friends",function(response){
					friends = response["data"];
					totalToBeLoaded = friends.length;					
					loadLocation(0);
					
			});
		}
	}

        function loadLocation(friendNumber) {
		FB.api("/"+friends[friendNumber].id,function(response){
			var out="";
			if(response.location!=null) {
				out += response.location["name"];
			} else {
					out = "--";
			}
		        my_arr.push({"name":response.name,"location":out,"sex":response.gender,"status":response.relationship_status});
                                      
                        global_index=friendLoaded;
                        code();
                        balance =friends.length - friendLoaded;
      if(friendLoaded>friends.length-2)
 {document.getElementById("status").innerHTML = "All are located! Place the cursor on marker to see who it is."+"</br>";}
       else
{document.getElementById("status").innerHTML = "We are locating "+response.name+".</br>"+balance+" more to go."+"Zoom in and explore!"; }                    
		});

		
	}
