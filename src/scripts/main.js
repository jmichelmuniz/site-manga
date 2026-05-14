var navbar = document.getElementById('navbar');
var sidebar = false;

function showSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    }