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

    // Update the box colour on mouseover
    gridContainer.onmouseover = function(event) {
        let target = event.target;
        target.style.background = `${fillColour}`;
    }

    // Clear etcha on button press
    const clearEtcha = document.querySelector(".mode-clear");
    clearEtcha.addEventListener("click", function () {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
            box.style.backgroundColor = 'white';
        })
    })

    // Set fill colour
    let defaultColour = document.querySelector("#mode-colour");
    let fillColour = defaultColour.value // Initialise colour for block fills
    const colour = document.querySelector("#mode-colour");
    colour.addEventListener("change",function () {
        fillColour = colour.value;
    })


}

etcha();