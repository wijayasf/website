const aboutBtn = document.getElementById("aboutBtn");
const aboutText = document.getElementById("aboutText");

aboutBtn.addEventListener("click", function () {

    if (aboutText.style.display === "none" || aboutText.style.display === "") {
        aboutText.style.display = "block";
        aboutBtn.textContent = "Hide About Section";
        aboutBtn.classList.remove("btn-primary");
        aboutBtn.classList.add("btn-danger");
    } else {
        aboutText.style.display = "none";
        aboutBtn.textContent = "About This Page";
        aboutBtn.classList.remove("btn-danger");
        aboutBtn.classList.add("btn-primary");
    }

});
