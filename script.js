function etcha() {

    const gridContainer = document.querySelector(".box-container");
    const gridSelectors = document.querySelectorAll("input[name=gridCount]");

    gridSelectors.forEach(gridSelector => {
        gridSelector.addEventListener("change", function () {

            let gridCount = parseInt(gridSelector.value);

            if (gridContainer.hasChildNodes()) {
                while (gridContainer.firstChild) {
                    gridContainer.removeChild(gridContainer.lastChild);
                }
            }

            updateGrid(gridCount);
        })
    });

    function updateGrid(gridCount) {
        for (let i = 0; i <= (gridCount * gridCount) - 1; i++) {

            const box = document.createElement("div");

            box.classList.add("box");
            gridContainer.appendChild(box);

            if (gridCount === 8) {
                box.classList.add("eight");
            }
            if (gridCount === 16) {
                box.classList.add("sixteen");
            }
            if (gridCount === 32) {
                box.classList.add("thirty_two");
            }
        }
    }
    updateGrid(16); // Initialise the grid on page load
}

etcha();