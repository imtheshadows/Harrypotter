let movieBtn=document.querySelector(".movie-search");
movieBtn.addEventListener("click" , async ()=>{

    let movieUrl="https://api.potterdb.com//v1/movies";
    let moviedata= await findAny(movieUrl);
    let ul=document.querySelector("ul");
    ul.innerText="";
    let coreData=moviedata["data"];
    console.log(coreData.data.length)

    for (let i=0;i<coreData.data.length;i++){
        let li=document.createElement("li");
        ul.append(li);
        li.innerText=coreData["data"][i].attributes.slug;
        console.log(coreData["data"][i].attributes.slug)
    }


})

let bookBtn=document.querySelector(".book-search");

bookBtn.addEventListener("click" , async ()=>{
    let movieUrl="https://api.potterdb.com//v1/books";
    let moviedata= await findAny(movieUrl);
    console.log(moviedata.data.data)

    let ul=document.querySelector("ul")
        ul.innerText="";
    let coreData=moviedata["data"];
    console.log(coreData.data.length)

    for (let i=0;i<coreData.data.length;i++){
        let li=document.createElement("li");
        ul.append(li);
        li.innerText=coreData["data"][i].attributes.slug;
        console.log(coreData["data"][i].attributes.slug)
    }
})


let charBtn=document.querySelector(".character-search");

charBtn.addEventListener("click" , async ()=>{
    let movieUrl="https://api.potterdb.com//v1/characters";
    let moviedata= await findAny(movieUrl);
    console.log(moviedata.data.data)

    let ul=document.querySelector("ul")
        ul.innerText="";
    let coreData=moviedata["data"];
    console.log(coreData.data.length)

    for (let i=0;i<coreData.data.length;i++){
        let li=document.createElement("li");
        ul.append(li);
        li.innerText=coreData["data"][i].attributes.slug;
        console.log(coreData["data"][i].attributes.slug)
    }
})

let potionBtn=document.querySelector(".potion-search");

potionBtn.addEventListener("click" , async ()=>{
    let movieUrl="https://api.potterdb.com//v1/potions";
    let moviedata= await findAny(movieUrl);
    console.log(moviedata.data.data)

    let ul=document.querySelector("ul")
        ul.innerText="";
    let coreData=moviedata["data"];
    console.log(coreData.data.length)

    for (let i=0;i<coreData.data.length;i++){
        let li=document.createElement("li");
        ul.append(li);
        li.innerText=coreData["data"][i].attributes.slug;
        console.log(coreData["data"][i].attributes.slug)
    }
})

let spellBtn=document.querySelector(".spell-search");

spellBtn.addEventListener("click" , async ()=>{
    let movieUrl="https://api.potterdb.com//v1/spells";
    let moviedata= await findAny(movieUrl);
    console.log(moviedata.data.data)

    let ul=document.querySelector("ul")
        ul.innerText="";
    let coreData=moviedata["data"];
    console.log(coreData.data.length)

    for (let i=0;i<coreData.data.length;i++){
        let li=document.createElement("li");
        ul.append(li);
        li.innerText=coreData["data"][i].attributes.slug;
        console.log(coreData["data"][i].attributes.slug)
    }
})

let url="https://api.potterdb.com//v1/spells";
async function findAny(url){
    try{
            let data=await axios.get(url);
           
            return data;
    }
    catch(e){
        console.log("Error is", e)
    }


}

