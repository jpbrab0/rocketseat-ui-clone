const cards = document.querySelectorAll(".card");
for (let card of cards){
    card.addEventListener("click", () => {
        const recipeId = card.getAttribute("id")
        window.location.href = `/starter`
    })
}