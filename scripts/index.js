let close_coupon_button = document.getElementById("close-coupon");
let coupon = document.getElementById("coupon");
let search_content = document.getElementById("search-for");
let search_popup = document.getElementById("search-popup");
let close_popup = document.getElementById("close-popoup");
let hide_upper_nav = document.getElementById("upper-nav");
let hide_search_btn = document.getElementById("search-btn");
let profile_dropdown = document.getElementById("profile-dropdown-img");
let profile_dropdown_div = document.getElementById("profile-dropdown-div");
let open_login_page = document.getElementById("login-page");
let reg_page = document.getElementById("reg-page");

close_coupon_button.addEventListener("click", () => {
    coupon.style.display = "none";
})

search_content.addEventListener("click", () => {
    search_popup.classList.add("open-popup");
    hide_upper_nav.classList.add("hide-upper-nav");
    hide_search_btn.style.visibility = "hidden";

})

close_popup.addEventListener("click", () => {
    search_popup.classList.remove("open-popup");
    hide_upper_nav.classList.remove("hide-upper-nav");
    hide_search_btn.style.visibility = "visible";
})

function profileDropdown(){
    profile_dropdown.style.visibility = "visible";
    profile_dropdown_div.style.visibility = "visible";
}
function profileDropdownclose(){
    profile_dropdown.style.visibility = "hidden";
    profile_dropdown_div.style.visibility = "hidden";
}

open_login_page.addEventListener("click", () => {
    window.location.href = "./login.html";
})

reg_page.addEventListener("click", () => {
    window.location.href = "./login.html";
})





// ---------------------------------------------- Uppper Half -----------------------------------------------