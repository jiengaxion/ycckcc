 var y;       

      function xvv(){


      


       
               $.ajax({url: "https://script.google.com/macros/s/AKfycbxuo3p6Gb0adseuv9CuXy0youwawPHqvVWxNoaSO84hus1fc0Do/exec?item="+$("#xcc").val(), success: function(result){
      var Q =" ";            //alert(result)
            var x=[result];
                var obj =jQuery.parseJSON(x);

               var Q=Object.values(obj)+Q;
 //y1=Q.split('|~|');


                $("#shopss").html(Q);

                  }});

              }

function ho8(e){
 $("#shopss").html(y1[e]);
}

  

 // $("v").remove();
