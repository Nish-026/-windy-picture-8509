let close_coupon_button = document.getElementById("close-coupon");
let coupon = document.getElementById("coupon");
let search_content = document.getElementById("search-for");
let search_popup = document.getElementById("search-popup");
let close_popup = document.getElementById("close-popoup");
let hide_upper_nav = document.getElementById("upper-nav");
let hide_search_btn = document.getElementById("search-btn");
let profile_dropdown = document.getElementById("profile-dropdown-img");
let profile_dropdown_div = document.getElementById("profile-dropdown-div");

close_coupon_button.addEventListener("click", () => {
    coupon.style.display = "none";
    console.log(coupon)
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
