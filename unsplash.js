$(document).ready(function(){
  $("button").click(function(){
    $.ajax({url: "https://api.unsplash.com/search/photos?query=ufo&client_id=N57ByMLZkjM4fgCN-5gjXkdP6q2SZLIk6J7jQfC5CuA&page=3&per_page=10", success: function(result){
   
    var string=""
    for(i=0;i<result.results.length;i++){
    
    string=string+"<img src='"+result.results[i].urls.thumb+"'>";
    }
    
      $("#div1").html(string);
    }});
  });
});
