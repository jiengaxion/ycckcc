function syou(a,b,c){

         $.ajax({url:"https://script.google.com/macros/s/"+b+"/exec?item="+a,success:function(result){
           // alert(result)
  


        
            var x=[result];
    var obj = jQuery.parseJSON(x);

    var Q=Object.values(obj)+Q;



                 


          $("#div12").html(Q);
            }



});
  


}
