 //localStorage.removeItem('yccname')
      $(document).ready(function() {
        $("input[type=search]").focus();
        $("sdf").slideUp();
        $("sd").css({
          'position': 'absolute',
          'left': '20%',
          'top': '20%',
          'width':'300px',
          'border-radius':'10px 10px 10px 10px',
          'border':'1px solid #DBDBE2', 
          'padding':'8px',
          'width':'190px',
          "color":"#BABABD"
        }
                   )
        $("input[type=search]").css({
          "width":"140px",
          'border':'0px',
          "background":"#F4F5FF",
          "outline":"none",
          "color":"#818184"
        }
                                   )
        $("f").click(function(){
          $("input[type=search]").val(this.outerText);
          $("sdf").slideUp();
        }
                      );
      
          
         
       
        $("input[type=search]").click(function(){
          $("sdf").slideDown();
          shw()
        }
                                     );
        $("#bnt").css({
          "border":"0px",
          "width":"40px"
        }
                     )
    
      $('#bnt').click(function(){
       
        if( $("input[type=search]").val() ==""){
          return flase;
        }
        if(localStorage.getItem("yccname")==null){
          localStorage.setItem("yccname",$("input[type=search]").val()+',')
        }
        else{
          localStorage.setItem("yccname",$("input[type=search]").val()+','+localStorage.getItem("yccname"))
        }
        $("sdf").slideUp();
      }
                     )
  }
                       );
      //alert(localStorage.getItem("yccname"))
      var ycc;
      function shw(){
        ycc="";
        ycc=localStorage.getItem("yccname");
        if(ycc!=null && ycc.indexOf(',')!=-1){
          // alert(ycc)
          ycc= ycc.split(',');
          for(i=0;i<5;i++){
            if(ycc[i]!=undefined && ycc[i]!=""){
              $('sdf').find('f').eq(i).html(ycc[i])
              $('sdf').find('f').eq(i).append('<br>')
              
            }
  
          }
        }
      }
      shw()
