function pic(e){
    $.ajax({url: "https://api.unsplash.com/search/photos?query=ufo&client_id=N57ByMLZkjM4fgCN-5gjXkdP6q2SZLIk6J7jQfC5CuA&page="+e+"&per_page=10&lang=zh-TW", success: function(result){
   
    var string=""
    var option=""
    for(i=0;i<result.results.length;i++){
    
    string=string+"<a href='"+result.results[i].urls.full+"' target='_black'><img src='"+result.results[i].urls.thumb+"'></a>";
    if(i==e){
    option=option+"<option value='"+i+"' selected>"+(i+1)+"</option>";
    }else{
    option=option+"<option value='"+i+"' >"+(i+1)+"</option>";
    }
    
    }
    string="<select onchange=pic(this.value);>"+option+"</select><br><br><br>"+string;
      $("#div1").html(string);
    }});
}pic(0)
