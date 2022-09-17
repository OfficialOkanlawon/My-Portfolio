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