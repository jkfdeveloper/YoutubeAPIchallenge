
var myApp = function(){
	//console.log("js called");
	var youTubeURL = 'https://www.googleapis.com/youtube/v3/search'
	var startSearch = function(searchTerm, callback){
		 var query = {
		 	part: 'snippet',
		 	key:'AIzaSyCNxyjmJqujh2-Ej0k2tfP5l0WYRGV0T5I',
		 	q: searchTerm
		 }
		//getJSON

		$.getJSON(youTubeURL, query, callback);

	}
	var displayResults = function(data){
		
		var newData = data.items;
		
		var newHtml = "";
		
		var template = ('<img src="" class="image-class">');

		var linkTemplate = ('<a href=""></a>');

		$.each(newData, function(index, item){
			var $template = $(template);
			var newURL = item.snippet.thumbnails.medium.url;
			console.log(newData);
			var addImageHtml = $template.attr('src' , (""+newURL+""));
			
			var linkVid = "https://www.youtube.com/watch?v="+ item.id.videoId;
			var linkVideo = $(linkTemplate).attr('href',(""+linkVid+""));
			linkVideo.html(addImageHtml);
			//addImageHtml = addImageHtml.attr('href' , (""+linkVideo+""));
			console.log(addImageHtml);
			//addImageHtml.attr('href', ""+"https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+item.id.videoId+"&key=AIzaSyCNxyjmJqujh2-Ej0k2tfP5l0WYRGV0T5I"+"");
			$('.image-thumbnails').append(linkVideo);
			//var linkVideo = item.id.videoId;
			//$('.image-thumbnails').append('<a href="https://www.youtube.com/watch?v='+linkVideo+'">Watch video</a>');

			//<a href="samesite.htm"><img src="image.gif"></a> sample
			//console.log(item.snippet.thumbnails.medium.url);
			//newHtml = newHtml + addImageHtml;
			//console.log(newHtml);
		})
		


	}

	$('form').on('submit', function(event){
		//console.log("click");
		event.preventDefault();
		var query = $(this).find('#search-entry').val();
		
		console.log(query);
		startSearch(query, displayResults);
	})
}
myApp();