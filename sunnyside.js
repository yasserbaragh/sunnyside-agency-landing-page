let mylist = document.querySelector(".ul"),
    myButton = document.querySelector("i");

myButton.addEventListener("click", function() {
    if(mylist.classList.contains("ul")) {
        mylist.classList.remove("ul");
        mylist.classList.add("ul-mobile");
    } else{
        mylist.classList.remove("ul-mobile")
        mylist.classList.add("ul")
    }
})