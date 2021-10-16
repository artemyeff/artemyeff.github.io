window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#burgerMenu').classList.add('is-active')
    })
})


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burgerClose').addEventListener('click', function () {
        document.querySelector('#burgerMenu').classList.remove('is-active')
    })
})

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#searchBtn').addEventListener('click', function () {
        document.querySelector('#searchForm').classList.add('is-active')    
    })
})


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#searchClose').addEventListener('click', function () {
        document.querySelector('#searchForm').classList.remove('is-active')    
    })
})



document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header")) {
      document.querySelectorAll(".header__form-search-mobile").forEach(el => {
          el.classList.remove("is-active");
      })
    }
  })

