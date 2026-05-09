 var navHeader = document.getElementById('nav-header');
 var corpo = document.getElementById('corpo');
 var showSidebar = false;

 function toggleBar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navHeader.style.marginLeft = '0';
        corpo.style.filter = 'blur(1px)';
    } else {
        navHeader.style.marginLeft = '-100vw';
        corpo.style.filter = 'none';
    }
 }

 function closeBar() {
    if (window.innerWidth < 630 && showSidebar) {
        toggleBar();
    }
 }

 window.addEventListener('resize', function(event) {
    if(window.innerWidth >= 630){
        navHeader.style.marginLeft = '0';
        corpo.style.filter = 'none';
    }
 });