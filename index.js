const counter = document.querySelector(".counter-number");
async function updateCounter() {
        let response = await fetch("https://bvat3eiyyjd3izrfkbq4aobzv40okghk.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `${data}`;
}
updateCounter();