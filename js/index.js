const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const dateInput = document.querySelector("#til-date");
    const titleInput = document.querySelector("#til-title");
    const contentInput = document.querySelector("#til-content");

    const date = dateInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    const newTil = document.createElement("article");
    newTil.className = "til-item";

    newTil.innerHTML = `
    <time>${date}</time>
    <h3>${title}</h3>
    <p>${content.replace(/\n/g, '<br>')}</p> 
  `;

    tilList.prepend(newTil);

    tilForm.reset();
    alert("오늘의 배움이 기록되었습니다! ✨");
});


const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        img.style.transition = "transform 0.3s ease";
        if (img.style.transform === "scale(1.5)") {
            img.style.transform = "scale(1)";
            img.style.zIndex = "1";
        } else {
            img.style.transform = "scale(1.5)";
            img.style.zIndex = "100";
        }
    });
});