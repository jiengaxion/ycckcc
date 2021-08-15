
var string="";
$.ajax({
url: "https://api.pexels.com/v1/search?query=ufo",
data: {'query':'ufo'},
type: "GET",
beforeSend: function(xhr){xhr.setRequestHeader('Authorization', '563492ad6f917000010000016f1f87d288b74b3cb8617df2bffc9409');},
success: function(data) {
for(i=0;i<data.photos.length;i++){
string=string+"<img src='"+data.photos[i].src.tiny+"'>";

}
$("body").html(string);
}
});

