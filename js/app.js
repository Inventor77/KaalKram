// SideBar Toggle
var sidebar = document.querySelector('.sidebar');
var menuBtn = document.querySelector('.menu-btn');
var main = document.querySelector('main');
var mainHeader = document.querySelector('.main_header');
var tabMenu = document.querySelector('.tab_menu');
var composeBtn = document.querySelector('button.add_all');
var composeBtnText = document.querySelector('.add_all__text');
var showTabs = false;
menuBtn.addEventListener('click', function () {
    if (!showTabs) {
        menuBtn.classList.add('show');
        sidebar.classList.remove('active');
        main.style.left = "56px";
        mainHeader.style.maxWidth = "calc(100vw - 56px)";
        tabMenu.style.maxWidth = "calc(100vw - 56px)";
        composeBtn.style.width = "48px";
        composeBtn.style.margin = "24px 4px";
        composeBtnText.style.display = "none";
        showTabs = true;
    }
    else {
        menuBtn.classList.remove('show');
        sidebar.classList.add('active');
        main.style.left = "256px";
        mainHeader.style.maxWidth = "calc(100vw - 256px)";
        tabMenu.style.maxWidth = "calc(100vw - 256px)";
        composeBtn.style.width = "120px";
        composeBtn.style.margin = "24px 12px";
        composeBtnText.style.display = "initial";
        showTabs = false;
    }
});
// SideBar Toggle Ends
// Search Focus
var navSearch = document.querySelector('.nav_search');
var navSearchInput = document.querySelector('.nav_search input');
var navSearchBtns = document.querySelectorAll('.nav_search button');
navSearchInput.addEventListener("focus", function () {
    navSearch.style.background = "#fff";
    navSearch.style.transition = ".25s";
    navSearchInput.style.background = "#fff";
    navSearchBtns.forEach(function (btn) {
        var button = btn;
        button.style.background = "#fff";
    });
    navSearch.style.boxShadow = " 0 5px 15px rgba(0, 0, 0, 0.2)";
}, true);
navSearchInput.addEventListener("blur", function () {
    navSearch.style.background = "hsl(210, 36%, 96%)";
    navSearchInput.style.background = "hsl(210, 36%, 96%)";
    navSearchBtns.forEach(function (btn) {
        var button = btn;
        button.style.background = "hsl(210, 36%, 96%)";
    });
    navSearch.style.boxShadow = "";
}, true);
// Search Focus Ends
// Filter Active Animation 
var filter = document.querySelector('.filter');
var filterCheckBox = document.querySelector(".filter input[type='checkbox']");
var filterDropDown = document.querySelector('.filter_dropDown');
filterCheckBox.addEventListener("click", function () {
    filter.classList.add("filter_active");
}, true);
filterDropDown.addEventListener("click", function () {
    filter.classList.add("filter_active");
}, true);
// Filter Active Animation Ends
// Main Header JumpToPage Counts
// Main Header JumpToPage Counts Ends
// BackDrop And Modal
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectButtons = document.querySelectorAll(".openModal");
for (var i = 0; i < selectButtons.length; i++) {
    selectButtons[i].addEventListener("click", function () {
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}
backdrop.addEventListener("click", function () {
    closeModal();
});
function closeModal() {
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}
// BackDrop And Modal Ends
