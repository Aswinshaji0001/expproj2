async function getDonors() {
    const res=await fetch("http://localhost:3015/api/getemployees");
    const employees=await res.json();
    console.log(employees);
    str=``;
    employees.map((employ)=>{
        // str+=`
        // <div class="c1">
        //     <div class="c2">
        //         <img src="${employ.profile}" alt="${employ.empname}">
        //     </div>
        //     <div class="c3">
        //         <table>
        //             <tr>
        //                 <th>Name</th>
        //                 <td>${employ.name}</td>
        //             </tr>
        //             <tr>
        //                 <th>Designation</th>
        //                 <td>${employ.designation}</td>
        //             </tr>
        //         </table>
        //         <a href="./pages/more.html?id=${employ._id}"><button class="button-3">See more</button></a>
        // </div>
        // </div>
        // `
        str+=`
            <div class="card">
        <img src="${employ.profile}" alt="${employ.name}" class="card-image">
        <div class="card-content">
        <h2 class="card-name" value="${employ.name}">${employ.name}</h2>
        <p class="card-designation" value="${employ.designation}">${employ.designation}</p>
         <a href="./pages/more.html?id=${employ._id}"><button class="see-more">See More</button></a>
         </div>
        </div>
        `
    });
    document.getElementById("contents").innerHTML=str;
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
document.getElementById("filter").addEventListener('keyup',async(e)=>{
    try {
        const res=await fetch("http://localhost:3000/api/getemployees");
        const employees=await res.json();
        console.log(employees);
        str=``;
        employees.filter((i)=>i.name.toLowerCase().includes(e.target.value.toLowerCase())).map((employ)=>{
            str+=`
            <div class="content">
            <div class="img">
                <img src="${employ.profile}" alt="${employ.name}">
            </div>
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
                        <th>Experience</th>
                    </tr>
                    <tr>
                        <td >${employ.salary}</td>
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
                        <a href="./pages/edit.html?id=${employ._id}"><button>Edit</button></a>
                        </td>
                        <td class="actions" >
                            <button onclick="deleteEmploy('${employ._id}')">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
            `
        });
        document.getElementById("contents").innerHTML=str;

        } catch (error) {
            console.log(error);
        }
})