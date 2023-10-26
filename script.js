var temp,opt;

                function num(btn)
                {
                    var a1=document.getElementById("t1").value;
                        a1=a1+btn.innerHTML;
                        document.getElementById("t1").value=a1;                        
                  }
                  function operator(btn)
                {
                    temp=document.getElementById("t1").value;
                        opt=btn.innerHTML;
                        document.getElementById("t1").value="";                        
                  }
                  function equal()
                {
                    if(opt=="+")
                    {
                        document.getElementById("t1").value=parseFloat(temp)+parseFloat(document.getElementById("t1").value);
                    }
                    else if(opt=="-")
                    {
                        document.getElementById("t1").value=parseFloat(temp)-parseFloat(document.getElementById("t1").value);
                    }
                    else if(opt=='*')
                    {
                        document.getElementById("t1").value=parseFloat(temp)*parseFloat(document.getElementById("t1").value);
                    }
                    else if(opt=='/')
                    {
                        document.getElementById("t1").value=parseFloat(temp)/parseFloat(document.getElementById("t1").value);
                    }
                 } 
                 function clr()
                 {
                    //  console.log("clear");
                    // alert("clear")
                    document.getElementById("t1").value="";
                    opt="";
                    temp=0;
                 }