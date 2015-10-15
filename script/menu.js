
$(document).ready(function() {
	$('span.button-icon').bind('click', function (){
		var toolId = this.id;
		openSubMenu(toolId);
	});

	$('div#aside-extend ul li i').bind('click', function(){
		expandSubMenu(this);
	})
	function openSubMenu(toolname) {
		$('div#aside-extend ul').css('visibility', 'hidden');
		switch(toolname){
			case 'effects':
				console.log('effects');
				$('#ul-effects').css('visibility', 'visible');
				break;
			case 'stickers':console.log('stickers');
				$('#ul-tickers').css('visibility', 'visible');
				break;
			case 'text':console.log('text');
				$('#ul-text').css('visibility', 'visible');
				break;
			case 'frames':console.log('frames');
				$('#ul-frames').css('visibility', 'visible');
				break;
			default:console.log('edit');
				$('#ul-edit').css('visibility', 'visible');
				break;
		}
	};

	function expandSubMenu(object){
		console.log(object.parentNode);
		var parent = object.parentNode;
	}
});