/* Searching Artist*/

const artistBoxes = document.querySelectorAll('.artistBox');
const searchBar = document.querySelector('.searchBar');
const searchBtn = document.querySelector('.searchIcon');

searchBtn.addEventListener('click', e => {
    artistBoxes.forEach(box => {
        if(searchBar.value.includes(box.lastElementChild.textContent.toLowerCase())){
            box.style.display = "flex";
        }else if(searchBar.value == ""){
            box.style.display = "flex";
        }else{
            box.style.display = "none";
        }
    })
})


/* Choosing Artists*/

const artistImgs = document.querySelectorAll('.artistBox > .artistImg');

artistImgs.forEach(box => {
    box.addEventListener('click', e => {
        switch(e.target.nextElementSibling.textContent){
            case "Justin Bieber": location.href = "jb.html";
        break;
            case "Shawn Mendes": location.href = "shawnmendes.html";
        break;
            case "Eminem": location.href = "eminem.html";
        break;
            case "Lil Nas X": location.href = "lilnasx.html";
        break;
            case "BLACKPINK": location.href = "blackpink.html";
        break;
            case "Bobby": location.href = "bobby.html";
        break;
        default: ;
        }
    })  
})



