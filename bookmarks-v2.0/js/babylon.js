function clearform(which){
if (which.value=="search by word")
which.value='';
}

function searchValid() {
	if (document.mainForm.search.value == "" || 
document.mainForm.search.value == "search by word") {
		alert ("Please enter a word in the search box");
		return false;
		}
	else {
		document.mainForm.sort.value = "";
		return true;
		}
		
}

// the online information functions
function online_info() {
var str_url = 
"http://online.babylon.com/combo/index.html?word="+document.onlineForm.word.value+"&lang="+document.onlineForm.lang[document.onlineForm.lang.selectedIndex].value;
window.open (str_url, "online", 
"scrollbars=no,status=no,width=380,height=200,top=215,left=33");
return false;
}
function doNothing() {}
