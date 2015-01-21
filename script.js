function minimize(profileId, fieldsetId, tableId, buttonId) {
	var userProfile = document.getElementById(profileId);
	var userField = document.getElementById(fieldsetId);
	var userData= document.getElementById(tableId);
	
	changeButton(buttonId);
	
	if (userData && userData.style.display == 'block') {
		userData.style.display = 'none';
		userProfile.className = "minProfile";
		userField.className = "minFieldset";
	} else {
		userField.className = "maxFieldset";
		userProfile.className = "maxProfile";
 		userData.style.display = 'block';
	}
}
	
function changeButton(id) {
	var button = document.getElementById(id);
	
	if (button.innerHTML == '+')
		button.innerHTML = "-";
	else
		button.innerHTML = "+";
}

