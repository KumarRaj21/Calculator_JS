let string="";
button=document.querySelectorAll("button");
for (item of button){
    item.addEventListener("click", (event)=>{
        if(event.target.innerHTML=="AC")
        {
            string="";
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="=")
        {
            try {
                string=eval(string);
            document.querySelector("input").value=string;
            }
            catch(err){
                err= Error("Syntax Error")
                string=err;
                document.querySelector("input").value=string;
            }
        }
        else if(event.target.innerHTML=="sin"){
            string=Math.sin(string);
            document.querySelector("input").value=string;
        }
        else if (event.target.innerHTML=="tan"){
            string=Math.tan(string);
            document.querySelector("input").value = string;
        }
        else if (event.target.innerHTML=="cos"){
            string=Math.cos(string);
            document.querySelector("input").value = string;
        }
        else if (event.target.innerHTML=="square"){
            string=Math.pow(string,2);
            document.querySelector("input").value = string;
        }
        else if(event.target.innerHTML=="Del"){
         string=string.slice(0,string.length-1);
         document.querySelector("input").value =string;
        }
        else if(event.target.innerHTML=="log 10"){
            string=Math.log10(string);
            document.querySelector("input").value=string;

        }
        else if (event.target.innerHTML=="√"){
            string = Math.pow(string,0.5);
            document.querySelector("input").value=string;
        }
        else
        {
            string=string+event.target.innerHTML;
            document.querySelector("input").value=string;
        }
    })
}
