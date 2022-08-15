const item = document.querySelector("#item");
const list = document.querySelector("#to-do-list");

item.addEventListener("keyup",function(event){
   if(event.key == "Enter"){
    listitem(this.value);
    this.value = "";
   }
   
});

const listitem = function(item){
    const list1 = document.createElement("li");
  
    list1.innerHTML = `
    ${item}
    <i class="fa-solid fa-xmark"></i>
    `;
    localStorage.setItem("task",`${item}`)
   list1.addEventListener("click",function(){
  list1.remove();
  localStorage.removeItem("task")
    });


 list1.style.color = "white";
 list1.style.marginBottom = "10px";
 
    list.appendChild(list1);
}

const text = document.createElement("li");
text.setAttribute = ("id","store");
text.style.color = "white";
text.innerHTML = localStorage.getItem("task");

if(text != null){
    window.onload = list.append(text);
}
