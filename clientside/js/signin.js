document.getElementById("signin").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    fetch("http://localhost:3015/api/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
    }).then((res)=>{
        console.log(res);
        if(res.status==200){
            alert("success")
            console.log(res);        
            window.location.href="../index.html"
        }
        else if(res.status==404){
            alert("error")
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})