
function valid(){
	var fName = document.getElementById('fname').value
	var lName = document.getElementById('lname').value
	
	if(fName.length == 0){
		alert('please fill ur firstname.')
	}else if(lName.length == 0){
		alert('please fill your lastname')
	}else{
		alert('your first name is ' + fName + " and your last name is " + lName)
	}
}
document.getElementById('button').addEventListener('click', valid, false)