function sqqs(a){
 $("#ten").html('<i class="w3-jumbo w3-spin  w3-text-red fa fa-refresh"></i>');
 
          $.ajax({url: "https://script.google.com/macros/s/AKfycbx-izL5guK0W7SGraEP22mk0jCr2IudIvG0KWoCLSGT8AGGUco/exec?kk="+a, success: function(result){
            //alert(result)
  


        
            var x=[result];
                var obj =jQuery.parseJSON(x);

               var Q=Object.values(obj)+Q;

Q=Q.replace("undefined","")

                 


          $("#ten").html(Q);
            }



});
  


}
