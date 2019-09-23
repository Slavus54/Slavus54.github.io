
function insert (num) {
	document.former.res.value += num;
}
function clean() {
	document.former.res.value = "";
}
function result() {
	var exp = document.former.res.value;
	document.former.res.value = eval(exp); 
}