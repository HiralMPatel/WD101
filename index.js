let userform=document.getElementById('user-form');

const retriveEntries=()=>{
    let entries=localStorage.getItem("user-entries");
    if(entries){
        entries=JSON.parse(entries);
    }
    else{
        entries=[];
    }
    return entries;
}
let userEntries=retriveEntries();

const displayEntries=()=>{

    const entries=retriveEntries();

    const tableEntries=entries.map((entry)=>{
        const nameCell=`<td style="background-color:rgb(170, 218, 218);text-align:center">${entry.name}</td>`;
        const emailCell=`<td style="background-color:rgb(170, 218, 218);text-align:center">${entry.email}</td>`;
        const passwordCell=`<td style="background-color:rgb(170, 218, 218);text-align:center">${entry.password}</td>`;
        const dobCell=`<td style="background-color:rgb(170, 218, 218);text-align:center">${entry.dob}</td>`;
        const acceptTermCell=`<td style="background-color:rgb(170, 218, 218);text-align:center">${entry.acceptedTermsAndCondition}</td>`;

        const row=`<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermCell}</tr>`;
        return row;

    }).join("\n");

    const table=`<table border="2">
    <tr style="background-color:rgb(247, 231, 231)">
    <th style="background-color:rgb(247, 231, 231);text-align:center">Name</th>
    <th style="background-color:rgb(247, 231, 231);text-align:center">Email</th>
    <th style="background-color:rgb(247, 231, 231);text-align:center">Password</th>
    <th style="background-color:rgb(247, 231, 231);text-align:center">Dob</th>
    <th style="background-color:rgb(247, 231, 231);text-align:center">Accepted terms?</th>
    </tr>
    ${tableEntries}</table>`;

    let details=document.getElementById("user-entries");
    details.innerHTML=table;
}

const saveUserForm=(event)=>{
     event.preventDefault();
     const name=document.getElementById("name").value;
     const email=document.getElementById("email").value;
     const password=document.getElementById("password").value;
     const dob=document.getElementById("dob").value;

     const acceptedTermsAndCondition=document.getElementById("acceptTerms").checked;

     const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndCondition
     };
     userEntries.push(entry);
     localStorage.setItem("user-entries",JSON.stringify(userEntries));
     displayEntries();
}

userform.addEventListener("submit",saveUserForm);
displayEntries();





