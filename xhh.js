var y;       

      function xhh(a,b){


      


       
               $.ajax({url: "https://script.google.com/macros/s/AKfycbzl56qHFnWwzWwPcrvZi9Sxxi9gCPv9V7hUQkCVsUBRrf_C5wA/exec?item="+$("#xc").val()+"&item2="+a+"&item3="+b, success: function(result){
      var Q =" ";            //alert(result)
            var x=[result];
                var obj =jQuery.parseJSON(x);

               var Q=Object.values(obj)+Q;
 //y1=Q.split('|~|');
                    //$("html,body").animate({scrollTop:$(".food").offset().top-200 }, 100);
$( "#shopsss" ).slideUp( "slow", function() {
     
      $("#shopsss").slideDown();
     
$("#shopsss").html(Q);
  });

           

                  }

});

              }

function ho8(e){
 $("#shopss").html(y1[e]);
}

