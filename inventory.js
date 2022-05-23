function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let container=document.getElementById("container");
    data.forEach(function (el,index){
console.log(el);
   
    let div=document.createElement("div");
    let=img.document.createElement("img");
    img.src=el.image;
    let p=document.createElement("p");
    p.innerText=el.type;
    let btn=document.createElement('button');
    btn.innerText="Remove"
    btn.addEventListener("click",function(){
        remove(index);
    });
    div.append(img,p,btn);
    container.append(div);
});
}
append();
function remove(index){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let newData=data.filter(function(el,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el);
            localStorage.setItem('trash',JSON.stringify(trash));
        }else{
            return i !=index;
        }
    });
    console.log(NewData);
    localStorage.setItem("products",JSON.stringify(newData));
    append();

}