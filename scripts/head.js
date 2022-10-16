import Swiper from './swiper.js'


function initFiterslider(){

    const playlistSwiper = document.querySelector('.playlist__swiper')
    const filterZhanrList = document.querySelector('.filter__zhanr-list')
    const  filterItem = document.querySelectorAll('.filter__zhanr-item')
    let switcher = false

    function checkCallback(){
        if(window.screen.width<700){
            if(!switcher){
                playlistSwiper.classList.add('filter-swiper')
                filterZhanrList.classList.add('swiper-wrapper')
                filterItem.forEach((el)=>{
                    el.classList.add('swiper-slide')
                })
                switcher = true
            } else {
                return
            }
        } else {
            if(switcher){
                try{
                        playlistSwiper.classList.remove('filter-swiper')
                    filterZhanrList.classList.remove('swiper-wrapper')
                    filterItem.forEach((el)=>{
                        el.classList.remove('swiper-slide')
                        el.style = ''
                    })
                    switcher = false
                    swiper.destroy()
                } catch (err){
                    if (err.name = 'ReferenceError'){
                        return
                    } else {
                        throw new Error(`${err}`)
                    }
                }
            } else {
                return
            }
        }

    const swiper = new Swiper ('.filter-swiper', {
        loop: false,
        spaceBetween: 15,
        slidesPerView:'auto'
    })

    }

    window.addEventListener('resize', checkCallback )
    checkCallback()

    
}

function makeSwiper(){
    const swiper = new Swiper ('.swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 18,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        breakpoints: {
            700:{
                slidesPerView: 2,
                spaceBetween: 40,
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }
    })
    
    const aboutPrev = document.querySelector('.about__prev')
    const aboutNext = document.querySelector('.about__next')
    const aboutNextTrue = document.querySelector('.swiper-button-next')
    const aboutPrevTrue = document.querySelector('.swiper-button-prev')
    
    aboutNext.addEventListener('click', (event)=>{
        event.preventDefault();
        aboutNextTrue.click()
    })
    
    aboutPrev.addEventListener('click', (event)=>{
        event.preventDefault();
        aboutPrevTrue.click()
    })

    aboutNext.addEventListener('keyup', (event)=>{
        event.preventDefault();
        if( event.code === 'Enter' ){
            aboutNextTrue.click()
        }
    })
    
    aboutPrev.addEventListener('keyup', (event)=>{
        event.preventDefault();
        if( event.code === 'Enter' ){
            aboutPrevTrue.click()
        }
    })
}

function initBurger(){
    const navList2 = document.querySelector('.nav__list-2-wrapper')
    const navList = document.querySelector('.nav__list-wrapper')
    const burger = document.querySelector('.burger')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('burger--active')
        document.body.classList.toggle('stop-scroll')
        navList.classList.toggle('nav__list-wrapper--open')
        if(window.innerWidth<699){
            navList2.classList.toggle('nav__list-2-wrapper--open')
        }
    })
}

function makeAcardion(){

    function openAccardion(event, el){
        if (event.isModal){
            return
        }
        el.classList.toggle('guests__item--active')
        el.querySelectorAll('.guests__item-current').forEach(itemList=>{
            if (itemList.hasAttribute('tabindex')){
                itemList.removeAttribute('tabindex')
            } else {
                itemList.setAttribute('tabindex', '1')
            }
        })

    }

    const guestsRowCurrent = document.querySelectorAll('.guests__row-current')

    guestsRowCurrent.forEach(el=>{
        el.addEventListener('click', (event)=>{
            event.isModal = true
        })
    })

    const listAccardeon = document.querySelectorAll('.guests__item')
    listAccardeon.forEach((el)=>{
        el.addEventListener('click', (event)=>{
            openAccardion(event, el)
        })

        el.addEventListener('keyup', (event)=>{
            if (event.isItemList){
                return
            }
            if( event.code === 'Enter' ){
                openAccardion(event, el)
            }
        })
    })
}

function makeHeadModal(){
    const navEntry = document.querySelector('.nav__entry')
    const modalClose = document.querySelector('.modal__close')
    const modalWindowWrapper = document.querySelector('.modal-wrapper')


    modalClose.addEventListener('click', ()=>{
        modalWindowWrapper.classList.toggle('modal-wrapper--open')
        document.body.classList.remove('stop-scroll-modal')
    })
    
    navEntry.addEventListener('click', (e)=>{
        e.preventDefault()
        modalWindowWrapper.classList.toggle('modal-wrapper--open')
        document.body.classList.add('stop-scroll-modal')
    })

    modalClose.addEventListener('keyup',(e)=>{
        if(e.code === 'Enter'){
        modalWindowWrapper.classList.toggle('modal-wrapper--open')
        document.body.classList.remove('stop-scroll-modal')
        }
    })

    document.body.addEventListener('click', (event)=>{
        event.isBody = true
    })
}

function makePlayPauseBtn(){
    const btnPlay = document.querySelectorAll('.podcasts__btn-wrapper')
    const btnPlayEfir = document.querySelectorAll('.efir__button')



    const efirPlay = `<g class="efir-play" clip-path="url(#clip0_24531_3479)">
                        <path
                            d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" />
                    </g>
                    <defs class="efir-play">
                        <clipPath id="clip0_24531_3479">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>`
    const efirPause = `<g class="efir-pause" clip-path="url(#clip0_24531_3491)">
                            <path
                                d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2Z"
                                fill="#A1A6B4" />
                            <rect x="9" y="8" width="2" height="8" rx="1" fill="white" />
                            <rect x="13" y="8" width="2" height="8" rx="1" fill="white" />
                        </g>
                        <defs class="efir-pause">
                            <clipPath id="clip0_24531_3491">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>`

    let LastButton = {
        elem:null,
        play:true,
        playStatus:null,
        pauseStatus:null
    }

    btnPlayEfir.forEach((el)=>{
        el.querySelector('svg').innerHTML = efirPlay
        el.setAttribute('data-play','true')
        el.addEventListener('click',()=>{
            if(LastButton.elem !== el && LastButton.elem !== null && !LastButton.play){
                LastButton.elem.querySelector('svg').innerHTML = LastButton.playStatus
                LastButton.elem.setAttribute('data-play', 'true')
            }

            if (el.hasAttribute('data-play')){
                el.querySelector('svg').innerHTML = efirPause 
                el.removeAttribute('data-play')
            } else {
                el.querySelector('svg').innerHTML = efirPlay
                el.setAttribute('data-play', 'true')
            }

            LastButton.elem = el
            LastButton.play =  el.hasAttribute('data-play')
            LastButton.pauseStatus = efirPause 
            LastButton.playStatus = efirPlay

        })
    })

    const playPodcasts = `<circle class="play" cx="24" cy="24" r="20" stroke-width="2" />
                        <path class="play"  d="M21.6924 31.7965L31.5716 24.7996C32.1428 24.3998 32.1428 23.6002 31.5716 23.2004L21.6924 16.2035C20.9943 15.7037 20 16.1835 20 17.0031V30.9969C20 31.8165 20.9943 32.2963 21.6924 31.7965Z" />`
    const pausePodcasts = `<circle class="pause" cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2" />
                            <rect class="pause" x="19" y="15" width="2" height="18" rx="1"  />
                            <rect class="pause" x="27" y="15" width="2" height="18" rx="1" />`

    btnPlay.forEach((el)=>{
        el.querySelector('svg').innerHTML = playPodcasts
        el.setAttribute('data-play','true')
        el.addEventListener('click',()=>{
            if(LastButton.elem !== el && LastButton.elem !== null && !LastButton.play){
                LastButton.elem.querySelector('svg').innerHTML = LastButton.playStatus
                LastButton.elem.setAttribute('data-play', 'true')
            }

            if (el.hasAttribute('data-play')){
                el.querySelector('svg').innerHTML = pausePodcasts 
                el.removeAttribute('data-play')
            } else {
                el.querySelector('svg').innerHTML = playPodcasts
                el.setAttribute('data-play', 'true')
            }

            LastButton.elem = el
            LastButton.play =  el.hasAttribute('data-play')
            LastButton.pauseStatus = pausePodcasts 
            LastButton.playStatus = playPodcasts
        })
    })

}

function initSearch(){
    const navSearch = document.querySelector('.nav__btn-search-wrapper')
    const navSearchInput = document.querySelector('.nav__search-input')
    
    navSearch.addEventListener('click', ()=>{
        navSearchInput.classList.toggle('nav__search-input--active')
    })
}

function makeAcardionEfir(){
    const accardion = document.querySelector('.nav__efir-accardion')

    const navEfir = document.querySelector('.nav__efir')

    accardion.addEventListener('click', ()=>{
        accardion.classList.toggle('nav__efir-accardion--active')
        navEfir.classList.toggle('nav__efir--open')
    })
}

function initMorePodcasts(){
    const podcasts = document.querySelectorAll('.podcasts__col')
    const btnMore = document.querySelector('.podcasts__btn-more')
    btnMore.addEventListener('click', ()=>{
        podcasts.forEach(el=>{
            el.classList.add('visible-podcasts')
        })
    })
}

function cusmomizeCheckboxFilter(){
    const filterLabels = document.querySelectorAll('.filter__label')

    filterLabels.forEach(el=>{
        el.addEventListener('keyup', (event)=>{
            if( event.code === 'Enter' ){
                let checkbox = el.querySelector('.filter__hidden-checkbox')
                checkbox.checked = true
            }
        })
    })
}

function initModalTrap(){
    const all = document.getElementsByTagName("*")
    const listTab = []
    for (let i of all){
        if ((i.hasAttribute('tabindex')) && (!i.hasAttribute('data-modal'))){
            listTab.push(i)
        }
    }
    

    const navEntry = document.querySelector('.nav__entry')
    const modalClose = document.querySelector('.modal__close')

    navEntry.addEventListener('click',()=>{
        listTab.forEach(el=>{
            el.setAttribute('tabindex', '-1')
        })
    })

    modalClose .addEventListener('click',()=>{
        listTab.forEach(el=>{
            el.setAttribute('tabindex', '1')
        })
    })

    modalClose .addEventListener('keyup',(e)=>{
        if(e.code === 'Enter'){
            listTab.forEach(el=>{
                el.setAttribute('tabindex', '1')
            })
        }
    })

}

function validateInput(){
    const inputName = document.querySelector('.std-input[data-validate-text]')
    const inputMail = document.querySelector('.std-input[data-validate-email]')
    const inputLetter = document.querySelector('.about__letter')
    const letters = 'abcdefghijklmnopqrstuvwxyz абвгдежзийклмнопрстуфхцчшщъыьэю'
    const emailMark = 'abcdefghijklmnopqrstuvwxyz1234567890_-.@'
    const submitForm = document.querySelector('.about__form')
    const hiddenCheckbox = document.querySelector('.about__checkbox-hidden')

    hiddenCheckbox.addEventListener('change', ()=>{
        document.querySelector('.about__checkbox-text').classList.remove('about__checkbox-text-red')
    })

    function validate(input, string){
        let switcher = true
        for (let i of input){
            if (!string.includes(i.toLowerCase())){
                switcher = false
                break
            }
        }
        return switcher
    }

    function checkSymbol(symbol, string){
        let count = 0
        for (let i of string){
            if (symbol === i){count++}
            if (count>1){break}
        }
        if (count===0){return false}
        if (count===1){return true} else {return false}
    }

    function validateMail(mail){
        if (!checkSymbol('@', mail) || !checkSymbol('.', mail)){
            return false
        }

        if (mail.startsWith('.') || mail.startsWith('@')){
            return false
        }

        if (mail.endsWith('.') || mail.endsWith('@')){
            return false
        }

        return true
    }

    inputName.addEventListener('input', ()=>{
        if(validate(inputName.value, letters)){
            inputName.classList.remove("std-input-warning")
            inputName.removeAttribute('style')
        } else {
            inputName.classList.add("std-input-warning")
            inputName.style=`color: var(--default-white);
                        background-color: inherit;
                        border-color: #D52B1E;
                        transition: background-color .3s ease-in-out, border-color .3s ease-in-out, color .3s ease-in-out;`
        }
    })

    inputMail.addEventListener('input', ()=>{
        if(validate(inputMail.value, emailMark)){
            inputMail.classList.remove("std-input-warning")
            inputMail.removeAttribute('style')
        } else {
            inputMail.classList.add("std-input-warning")
            inputMail.style=`color: var(--default-white);
                            background-color: inherit;
                            border-color: #D52B1E;
                            transition: background-color .3s ease-in-out, border-color .3s ease-in-out, color .3s ease-in-out;`
        }
    })

    inputLetter.addEventListener('input', ()=>{
        inputLetter.classList.remove("std-input-warning")
        inputLetter.removeAttribute('style')
    })

    submitForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        let val = true

       if (!hiddenCheckbox.checked){
            document.querySelector('.about__checkbox-text').classList.add('about__checkbox-text-red')
            val = false
       }

        inputName.value = inputName.value.trim()
        if ((!validate(inputName.value, letters)) || (inputName.value.length === 0)) {
            inputName.classList.add("std-input-warning")
            inputName.style=`color: var(--default-white);
                            background-color: inherit;
                            border-color: #D52B1E;
                            transition: background-color .3s ease-in-out, border-color .3s ease-in-out, color .3s ease-in-out;`
            val = false
        }

        inputMail.value = inputMail.value.trim().toLowerCase()
        if ((!validate(inputMail.value, emailMark))  || (inputMail.value.length === 0)) {
            val = false
        }

        inputLetter.value = inputLetter.value.trim()
        if (inputLetter.value.length === 0){
            inputLetter.classList.add("std-input-warning")
            inputLetter.style=`color: var(--default-white);
                            background-color: inherit;
                            border-color: #D52B1E;
                            transition: background-color .3s ease-in-out, border-color .3s ease-in-out, color .3s ease-in-out;`
            val = false
        }




        if (!validateMail(inputMail.value)){
            inputMail.classList.add("std-input-warning")
            inputMail.style=`color: var(--default-white);
                            background-color: inherit;
                            border-color: #D52B1E;
                            transition: background-color .3s ease-in-out, border-color .3s ease-in-out, color .3s ease-in-out;`
            val = false
        }



        if(val){
            submitForm.submit()
        }
    })


}

function ariaParser(){
    document.querySelectorAll('.filter__label').forEach(el=>{
        el.setAttribute('aria-label',`Отфильтровать плейлисты по жанру - ${el.querySelector('.filter__text-checkbox').textContent}`)
    })
}

function toogleGuests(){
    let activeElem = document.querySelector('.first-toogle')
    activeElem.classList.add('guests__item-current--active')
    const guetstNameElem = document.querySelector('.guests__name')
    const guetstDescrElem = document.querySelector('.guests__text-descr')
    const info = document.querySelector(".guests__info")

    function changeInfo(text){
        if (window.innerWidth < 699){
            info.style = `background-image:url(./img/${text}-320.jpg)`
        } else if (window.innerWidth < 958){
            info.style = `background-image:url(./img/${text}-768.jpg)`
        } else {
            info.style = `background-image:url(./img/${text}-1920.jpg)`
        }
    }

    function initinfoGuests(el){
        activeElem.classList.remove('guests__item-current--active')
        el.classList.add('guests__item-current--active')
        guetstNameElem.textContent = el.textContent
        changeInfo(el.getAttribute('data-img'))
        activeElem = el
    }

    window.addEventListener('DOMContentLoaded', ()=>{
        const nameImg = activeElem.getAttribute('data-img')
        changeInfo(nameImg)
    })

    window.addEventListener('resize', ()=>{
        const nameImg = activeElem.getAttribute('data-img')
        changeInfo(nameImg)
    })

    document.querySelectorAll('.guests__item-current').forEach((el)=>{
        el.addEventListener('click', ()=>{
            initinfoGuests(el)
        })

        el.addEventListener('keyup', (e)=>{
            e.isItemList = true
            if (e.code ==='Enter'){
                initinfoGuests(el)
            }
        })
    })
}

function initChoices(){
    const selector = document.querySelector('.program__selector')
const customSelector = new Choices(selector, {
    searchEnabled: false,
    duplicateItemsAllowed: false,
    itemSelectText: '',
})

document.querySelector('.choices__inner').setAttribute('tabindex', '1')
document.querySelectorAll('.choices__item[role="option"]').forEach(el => el.setAttribute('tabindex', '1'))
}






makeSwiper()
initBurger()
makeAcardion()
makeHeadModal()
makePlayPauseBtn()
initSearch()
makeAcardionEfir()
initMorePodcasts()
initFiterslider()
cusmomizeCheckboxFilter()
initModalTrap()
validateInput()
ariaParser()
toogleGuests()
initChoices()





