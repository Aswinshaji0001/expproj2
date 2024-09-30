document.getElementById("signup").addEventListener("submit",async(e)=>{
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const cpassword=document.getElementById("cpassword").value;
    console.log(username,email,password,cpassword);
    fetch("http://localhost:3000/api/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,email,password,cpassword})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");            
            window.location.href="../index.html"
        }else if(res.status==400){
            alert("empid already exists")
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})