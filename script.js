function myfunction(){
    var x = document.getElementById("navv");
    if (x.className === "nav"){
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}

// -------------About----------------


var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // ------------Count contant--------

    let valueDispalys = document.querySelectorAll(".num");
    let interval = 4000;
    valueDispalys.forEach((valueDispalys) => {
        let startValue = 0;
        let endValue = parseInt(valueDispalys.getAttribute("data-val"));
        let duaration = Math.floor(interval / endValue);
        let counter = setInterval(function (){
            startValue += 1;
            valueDispalys.textContent = startValue;
            if (startValue == endValue){
                clearInterval(counter);
            }
        }, duaration);
    });
    
    
    // --------------

    let currentIndex = 0;
function showSlide(index){
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index < 0){
        index = totalSlides - 1;
    }
    else if (index >= totalSlides){
        index = 0;
    }
    currentIndex = index;
    const translateValue = -index * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
    function nextSlide() {
        showSlide(currentIndex + 1);
    }





    
    
    
    