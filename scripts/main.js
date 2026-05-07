 var navHeader = document.getElementById('nav-header');
 var showSidebar = false;

 function toggleBar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navHeader.style.marginLeft = '0';
    } else {
        navHeader.style.marginLeft = '-100vw';
    }
 };