let url="https://universities.hipolbs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let college = await getCollege(country);
    console.log(college);

    let = colArr= await getCollege(country);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);
        
        let li= document.querySelector("li");
        li.innerText= col.name;
        list.appendChild(li);

    }
}

async function getCollege(country){
    try{
        let res=await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("error:", e)
        return [];
    }
}