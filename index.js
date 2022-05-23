//store the products array in localstorage as "products"
function student(n,c,u,i){
    this.type=n;
    this.desc=c;
    this.price=u;
    this.image=i;

}
function storeData(e){
    e.preventDefault();
    let form=document.getElementById("students_data");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    let s1=new student(type,desc,price,image)
    let data=JSON.parse(localStorage.getItem("products"))||[];
    data.push(s1);
    localStorage.setItem("products",JSON.stringify(data))
    console.log(s1)
}
