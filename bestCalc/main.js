function insert (num) {
	document.getElementById('res').value += num;
	//document.former.res.value += num;
}
function clean() {
	document.getElementById('res').value = "";
}
function result() {
	var exp = document.getElementById('res').value
	document.getElementById('res').value = eval(exp); 
}