// const moreBtn = document.querySelector('.read-more')
// const moreContent = document.querySelector('.more')

// moreBtn.addEventListener("click", () => {
//     moreContent.classList.toggle("show-content")
// })

const questions = document.querySelectorAll(".question-answer");

questions.forEach(function(question){
    const btn = question.querySelector(".control");
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })

})

const navitems = document.querySelectorAll('.nav-item')

const unActive = () => {
    navitems.forEach(item => {
        const link = item.querySelector('a')
        link.classList.remove('activee')
    })
}


navitems.forEach(item => {
    const link = item.querySelector('a')
    link.addEventListener('click', () => {
        unActive()
        link.classList.add('activee')
    })

})

window.addEventListener('scroll', show);

function show(){
    let shows = document.querySelectorAll('.showw');

    for(let i = 0; i < shows.length; i++){

        let windowheight = window.innerHeight;
        let showtop = shows[i].getBoundingClientRect().top;
        let showpoint = 150;

        if(showtop < windowheight - showpoint){
            shows[i].classList.add('active');
        }else{
            shows[i].classList.remove('active');
        }
    }
}

// Typing animation 

var typed = new Typed(".typing", {
    strings: ["FullStack", "FrontEnd", "BackEnd"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})