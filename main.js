const deleteIcon = document.querySelectorAll(".task svg");
deleteIcon.forEach(el => {
    el.addEventListener("click", function(e) {
        this.parentElement.remove()
    })
});