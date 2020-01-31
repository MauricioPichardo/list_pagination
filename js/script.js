


//initial list of global variables

const list=document.querySelectorAll(".student-list > li");
const limit=10;






// function to define what list elements should be shown

function showPage(list,page){

      var start_index = (page * limit) - limit;
      var end_index = page * limit-1;
      for(let i=0; i<list.length;i++){
        if (i>=start_index && i<=end_index){
          //ensures elements on shown when right pagination link clicked
          list[i].style.display="block";
        } else {
          //hides li elements not in index limits
          list[i].style.display="none";

  }

}
};






const appendPageLinks=()=>{
  // Calculates number of pagination links
  const page_num =(Math.ceil((list.length/limit)));
  // creates inital list and add class
  const main=document.querySelector(".page")
  let newDiv = document.createElement("div");
  var ul_page = document.createElement("ul");
  newDiv.classList.add("pagination");
  main.appendChild(newDiv);
  newDiv.appendChild(ul_page);
  var sublist = document.querySelector(".pagination > ul");
  // Loop to create Li, A, and eventlisters for page breaks
    for (i=0;i<page_num;i++){
        let li_link = document.createElement('li');
        ul_page.appendChild(li_link);
        let li_links=document.querySelectorAll(".pagination > ul > li");
        li_links[i].innerHTML= '<a>'+[i+1]+'</a>';
        let li_links_aref=document.getElementsByTagName("a");
// page input passed to showPage function
        let page=i+1;
        li_links_aref[i].addEventListener("click", function() {
            showPage(list,page)});
};};

//invoke appendPageLinks
appendPageLinks();
//start page on pagination link 1
showPage(list,1);
