

// 헤더 스크롤 스크립트
let preScroll = 0;

window.addEventListener("scroll",function(){
    let nextScroll = window.scrollY;

    if(nextScroll == 0){
        $(".sc-header").removeClass("up")
        $(".sc-header").addClass("top")
        $(".sc-header").addClass("top-style")


    }else if(preScroll < nextScroll){
        $(".sc-header").removeClass("top");
        $(".sc-header").removeClass("down")
        $(".sc-header").addClass("up")
        $(".sc-header").removeClass("top-style")
    }else{
        $(".sc-header").removeClass("up")
        $(".sc-header").addClass("down")
        $(".sc-header").removeClass("top-style")

    }
    preScroll = nextScroll;
})

// 헤더 호버
console.log(window.scrollY)
$(".sc-header .group-site")[0].addEventListener("mouseover",function(){
    if(window.scrollY == 0){
        $(".sc-header").addClass("white")
        $(".sc-header").removeClass("top-style")
    }
})
$(".sc-header .group-site")[0].addEventListener("mouseout",function(){
    if(window.scrollY == 0){
        $(".sc-header").removeClass("white")
        $(".sc-header").addClass("top-style")
    }
})



// header 하단바
$(".sc-header .group-site").mouseenter(function(){
    $(".sc-header").addClass('on')
})
$(".sc-header .group-site").mouseleave(function(){
    $(".sc-header").removeClass("on")
})


// 언어선택 펼치기
$(".sc-header .lang-icon-box").click(function(){
    $(".sc-header .lang-area").toggleClass("on");
    
})


// 햄버거 사이드메뉴
$(".ham-btn-box").click(function(){

    if($(this).attr("class") == "ham-btn-box tablet"){
        $(this).addClass("on")
        $("body").addClass("no-scroll");
        $(".sc-header").addClass("on");
        $(".sc-side-menu").addClass("visible");
        setTimeout(function(){
            $(".sc-side-menu").addClass("on");
        },1)
    } else if($(this).attr("class") == "ham-btn-box tablet on"){
        $(this).removeClass("on")
        $("body").removeClass("no-scroll");
        $(".sc-header").removeClass("on");
        $(".sc-side-menu").removeClass("on");
        setTimeout(function(){
            $(".sc-side-menu").removeClass("visible");
        },200)

    }
})



// 햄버거 사이드메뉴 하위메뉴 펼치기
let linkHeight = $(".sc-side-menu .link-item").css("height").replace("px","");

$(".sc-side-menu .site-link-area.sub").click(function(e){
    e.preventDefault();

    let linkList = $(this).find($(".link-list"));
    let allLinkList = $(".sc-side-menu .link-list");
    let elCount = linkList.children().length;

    let allLinkArea = $(".sc-side-menu .site-link-area.sub")


    linkList.toggleClass("on")

    allLinkArea.not($(this)).removeClass("on");
    allLinkList.not(linkList).removeClass("on");
    

    allLinkList.css("height",0)
    $(this).find($(".link-list.on")).css("height",linkHeight*elCount)


})



// 비주얼 영역 스와이퍼

let swiper = new Swiper(".visual-swiper", {
    loop:true,
    speed:0,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


let videoBg = ` <video autoplay loop="true" muted preload='metadata'>
                    <source src="./asset/video/video-bg.mkv">
                </video>`;

let imgBg1 = `<img src="./asset/images/mainvisual-img-02.jpg" alt="비주얼 배경 이미지">`;
let imgBg2 = `<img src="./asset/images/mainvisual-img-03.jpg" alt="비주얼 배경 이미지">`;
let imgBg3 = `<img src="./asset/images/mainvisual-img-04.jpg" alt="비주얼 배경 이미지">`;

let imgBgM1 = `<img src="./asset/images/mainvisual-mobile-img-02.jpg" alt="비주얼 배경 이미지">`;
let imgBgM2 = `<img src="./asset/images/mainvisual-mobile-img-03.jpg" alt="비주얼 배경 이미지">`;
let imgBgM3 = `<img src="./asset/images/mainvisual-mobile-img-04.jpg" alt="비주얼 배경 이미지">`;


visualBg = [videoBg,imgBg1,imgBg2,imgBg3,]
visualBgMobile = [videoBg,imgBgM1,imgBgM2,imgBgM3]

function swiperFnc(e){
    swiper.on('transitionEnd', function() {
        let idx = Number(swiper.realIndex);
        // console.log(visualBg[idx]);
        $(".sc-visual .group-bg").html(e[idx])
    });        
}


let mobile = window.matchMedia("screen and (max-width: 767px)");
let flag = "enter"
if(window.innerWidth < 768){
    flag = "enter"
}else{
    flag = "out"
}

function mobileFnc(){
    if (mobile.matches&&flag == "enter") {
        console.log("mobile")
        swiperFnc(visualBgMobile)
        flag = "out";
    }else if(!(mobile.matches)&&flag == 'out'){
        console.log("desktop")
        swiperFnc(visualBg)
        flag = "enter"
    }
}
mobileFnc()
window.addEventListener("resize",mobileFnc)





// 스와이퍼 자동 넘기기

setInterval(function(){
    $(".swiper-button-next").click()
},3500)


// 스크롤 다운 버튼
let sectionOffset = $("#section1").offset();

$(".btn-scroll").click(function(e){
    e.preventDefault();
    // console.log(sectionOffset.top)
    $("html, body").animate({scrollTop:sectionOffset.top},1300); // 선택한 위치로 이동. 두번째 인자는 0.4초를 의미한다.
})


// gsap 애니메이션

let yVal = 80


gsap.to("[data-fade1]",{
    opacity:0, y:yVal, duration:0,
    scrollTrigger:({
        trigger:".sc-section1",
        start:"top 50%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade1]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:'.sc-section1',
    start:"top 50%",
    // markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="1"]').addClass("right-bottom")
        },500)
    }
})


gsap.to('[data-fade2]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".sc-section2",
        start:"top 80%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade2]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})


gsap.to('[data-fade3]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".group-box1",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade3]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:".group-box1",
    start:"top 70%",
    // markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="2"]').addClass("right-top")

        },500)
    }
})
gsap.to('[data-fade4]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".group-box2",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade4]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:".group-box2",
    start:"top 70%",
    // markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="3"]').addClass("left-bottom")

        },500)

    }
})
gsap.to('[data-fade5]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".group-box3",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade5]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:".group-box3",
    start:"top 70%",
    // markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="4"]').addClass("right-bottom")

        },500)
    }
})



// section3 애니메이션
// gsap.from('.sc-section3 .bg-box',{
//     scrollTrigger:{
//         trigger:".sc-section3",
//         start:"0% 100%",
//         end:"0% 0%",
//         scrub:1,
//         // markers:true,
//     },
//     scale:0.5,
// })

let desktop = window.matchMedia("screen and (min-width: 1201px)");

function section3(e){
    gsap.from('.sc-section3 .bg-box',{
        scrollTrigger:{
            trigger:".sc-section3",
            start:"0% 100%",
            end:"0% 0%",
            scrub:0,
            // markers:true,
        },
        scale:e,
    })    
}

function desktopFnc(){
    if (desktop.matches) {
        section3(0.5)
    } else{
        section3(1)
    }    
}
desktopFnc()



ScrollTrigger.create({
    trigger: '.sc-section3',
    pin: ".sc-section3 .bg-box",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
})


gsap.utils.toArray("[data-section3]").forEach(element => {
    // console.log(element);
    gsap.to(element,{y:100,opacity:0})
    ScrollTrigger.create({
        trigger:element,
        start:"top 80%",
        end:"bottom top",
        // markers:"true",
        onEnter:function(){
            gsap.to(element,{y:0,opacity:1,stagger:0.5})

        }
    })
})


// section4 애니메이션

gsap.to("[data-recruit]",{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".sc-section4",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-recruit]",{opacity:1,y:0,stagger:0.2})
        }
    })
})

gsap.to("[data-recruit2]",{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".sc-section5",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-recruit2]",{opacity:1,y:0,stagger:0.2})
        }
    })
})



// sns아이콘 색상
function snsScroll(){
    if(window.scrollY < 150){
        $(".sns-area").children(".link-sns").eq(0).children().attr("src","./asset/images/footer-icon-instagram.svg")
        $(".sns-area").children(".link-sns").eq(1).children().attr("src","./asset/images/footer-icon-facebook.svg")
        $(".sns-area").children(".link-sns").eq(2).children().attr("src","./asset/images/footer-icon-youtube.svg")
    }else{
        $(".sns-area").children(".link-sns").eq(0).children().attr("src","./asset/images/instagram.svg")
        $(".sns-area").children(".link-sns").eq(1).children().attr("src","./asset/images/facebook.svg")
        $(".sns-area").children(".link-sns").eq(2).children().attr("src","./asset/images/youtube.svg")

    }
}
snsScroll()

window.addEventListener("scroll",snsScroll)