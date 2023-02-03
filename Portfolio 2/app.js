const btn = document.getElementsById("btn") ;

btn.addEventListener("click", function(e) {

    const naira = document.getElementsById("naira").value ;
    const dollars = document.getElementsById("dollars") ;

    dollars.value = Math.round(naira / 700)
})