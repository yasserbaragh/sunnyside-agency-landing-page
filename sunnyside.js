let mylist = document.querySelector(".ul"),
    icon = document.querySelector(".phone-menu i"),
    myButton = document.querySelector("i");

myButton.addEventListener("click", function() {
    if(mylist.classList.contains("ul")) {
        mylist.classList.remove("ul");
        mylist.classList.add("ul-mobile");
    } else{
        mylist.classList.remove("ul-mobile")
        mylist.classList.add("ul")
    }
    icon.classList.toggle("fa-times")
})

