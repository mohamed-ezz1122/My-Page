
$(document).ready(()=>{
    $('.spineer').fadeOut(1000,()=>{{
        $('.loader').fadeOut(1000,()=>{
            $('body').css('overflow','auto')
        $('.spineer').remove()
        let aboutScroll=$('#about').offset().top

$(window).scroll(function () { 

let windowScroll=$(window).scrollTop();

if(windowScroll > aboutScroll)
{
    
    $(".navbar").css("backgroundColor","rgba(0,0,0,0.7)");
    $('#btnUp').fadeIn(500)
}
else
{
    $(".navbar").css("backgroundColor","transparent");
    $('#btnUp').fadeOut(500)
}
});



$('a[href^="#"]').click(function(e){
let aHref=e.target.getAttribute('href')
let sectionScroll=$(aHref).offset().top
$('html,body').animate({scrollTop:sectionScroll},1000)
})
let nameInput=document.getElementById('name')
let emailInput=document.getElementById('email')
let subjectInput=document.getElementById('subject')
let btnSend =  document.getElementById('btnSend')



function clearInput()
{
    nameInput.value=''
    emailInput.value=''
    subjectInput.value=''
}


btnSend.addEventListener('click',()=>{
    clearInput()
})





        })
    }})
})

