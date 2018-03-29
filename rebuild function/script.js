
function rebuildPage(from, to, place = true, reverse = false) {
	// from = элемент, содержимое которого берем
	// to = элемент, куда переносим содержимое элемента from
	// place = в какое место элемента to вставляем содержимое (если true, то в начало, false - в конец)
	// reverse = опция для замены элементов from и to друг на друга



	var $from = $(from);
	var $to = $(to);
	console.log($from.html());
	// append('Some text')	


	if(place == true) {
		$from.html().prependTo($to);
	} else {
		$from.html().appendTo($to);
	}
}

$(document).ready(function() {
	// console.log('window inner width '+ window.innerWidth);
	// console.log('screen width '+ window.screen.width);
	// console.log('screen avail width '+ window.screen.availWidth);
	// console.log('body width '+ $('body').width());
	screenWidth = window.screen.availWidth;
	if (screenWidth < 768) {
		rebuildPage('#item2', '#item1', false);
	}
	window.onresize = function () {
    	screenWidth = window.screen.availWidth;
    	if (screenWidth < 768) {
			rebuildPage('#item2', '#item1', false);
		} else {
			rebuildPage('#item2', '#item1', false, true);
		}
	}
	
	
});