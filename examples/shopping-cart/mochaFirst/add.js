function add(x,y) {
	return x+y;
}
function getters (filter) {
	return [1,2,3].filter(value => {return value == filter})
}
module.exports = {add,getters};