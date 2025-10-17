const display = document.getElementById("inputbox")
        function input(num){
            display.value += num;
        }
        function cleardisplay(){
            display.value ="";
        }
        function calculate(){
           try{ display.value = eval(display.value)}
           catch(error){
             display.value ="Error";
           }
        }
        function dbtn(){
          display.value=display.value.slice(0,-1)
        }