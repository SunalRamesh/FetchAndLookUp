let x = [];
let details=document.getElementById("details")
details.style.display="none"

let fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json()}).then(res=>{
            x=res;
        console.log(x);
        let select = document.getElementById("selection").value;
        console.log(select);
        if(x.length!==0&&select!=="selectShip")
        {
            details.style.display="block"
            let index=x.filter(val=>{
                let y=val.title
               if( y.includes(select))
               {
                   return val
               }
            })
            console.log(index);
      details.innerHTML=`<p>${index[0].title}</p><p>${index[0].id}</p>`
        }
        else 
        {
            alert("please pick the drop down")
        }
    })
    .catch((err) => {
      console.log(err);
    }); 
};