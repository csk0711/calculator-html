window.alert("My first beginner project");
//function that display value
         function dis(val)
         {
             console.log("function1");
             document.getElementById("result").value+=val;
         }

         //function that evaluates the digit and return result
         function solve()
         {
              console.log("function2");
             let x = document.getElementById("result").value;
             let y = eval(x);
             document.getElementById("result").value = y;
         }

         //function that clear the display
         function clr()
         {
            console.log("function3");
             document.getElementById("result").value = ""
         }
