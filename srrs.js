function srrs(a,b,c){

          $.ajax({url: "https://script.google.com/macros/s/AKfycbz8hIzsB4-mBxG4cjugsLgnRUl0eCU8piMVqYdWfljVubDmpc44/exec?item="+a+"&item2="+c, success: function(result){
            //alert(result)
  


        
            var x=[result];
                var obj =jQuery.parseJSON(x);

               var Q=Object.values(obj)+Q;



                 


          $("#div12").html(Q);
            }



});
  


}
