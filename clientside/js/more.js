const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
console.log(id);

async function getDonors() {
    const res=await fetch(`http://localhost:3015/api/getemploy/${id}`)
    const employ=await res.json();
   document.getElementById("cos").innerHTML=`
        <div class="cos1">
            <div class="cos2">
                <img src="${employ.profile}" alt="">
            </div>
            <div class="cos3">
                <div class="details">
                    <table>
                        <tr>
                            <th>Emp-ID</th>
                            <td>${employ.empid}</td>
                        </tr>
                        <tr>
                            <th>Emp-Name</th>
                            <td>${employ.name}</td>
                        </tr>
                        <tr>
                            <th>Salary</th>
                            <td >${employ.salary}</td>

                        </tr>
                        <tr>
                            <th>Experience</th>
                            <td >${employ.experience}</td>
                        </tr>
                        <tr>
                            <th>Designation</th>
                            <td>${employ.designation}</td>
                        </tr>
                        <tr>
                            <th rowspan="2">Contact</th>
                            <td>${employ.phone}</td>
                        </tr>
                        <tr>
                            <td>${employ.email}</td>
                        </tr>
                        <tr>
                            <td class="actions" align="right">
                            <a href="../pages/edit.html?id=${employ._id}"><button class="button-3">Edit</button></a>
                            </td>
                            <td class="actions" >
                                <button  class="button-3" onclick="deleteEmploy('${employ._id}')">Delete</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div> `
}
getDonors();

async function deleteEmploy(id) {
  fetch(`http://localhost:3015/api/deleteemploy/${id}`,{
    method:"DELETE",
        headers:{"Content-Type":"application/json"}
  }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("Deleted")
            window.location.href="../index.html";
        }else{
            alert("error");
            window.location.href="../index.html";
        }
    }). catch ((error)=>{
        console.log(error);
        
    })
}
