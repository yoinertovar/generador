document.addEventListener("DOMContentLoaded", () => {
    const resultContainer = document.getElementById("result-container");
    const generateBtn = document.getElementById("generate-btn");

    generateBtn.addEventListener("click", () => {
        // Generar tres números aleatorios del 01 al 80
        const luckyNumbers = generateLuckyNumbers(3, 1, 80);

        // Mostrar los números en círculos
        displayLuckyNumbers(resultContainer, luckyNumbers);
    });

    function generateLuckyNumbers(count, min, max) {
        const luckyNumbers = [];
        while (luckyNumbers.length < count) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!luckyNumbers.includes(num)) {
                luckyNumbers.push(num);
            }
        }
        return luckyNumbers;
    }

    function displayLuckyNumbers(container, numbers) {
        container.innerHTML = "";
        numbers.forEach((number) => {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            circle.textContent = number < 10 ? `0${number}` : number.toString();
            container.appendChild(circle);
        });
    }
});
