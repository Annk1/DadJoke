const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")


const apiKey = "SQHTOLdMht0hVDypSDNEWA==9Enyu7UC9AB54aNF";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,

    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){

try {
    jokeEl.innerText= "Updating";
    btnEl.disabled = true;
    btnEl.innerText= "Loading";
    const response = await fetch(apiURL, options);
    const data= await response.json();
    btnEl.disabled = false;
    btnEl.innerText= "Tell Me A Joke";

   jokeEl.innerText = data[0].joke;
} catch (error) {
    jokeEl.innerText = "An Error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText= "Tell Me A Joke";
    console.log(error);
}

    
}

btnEl.addEventListener("click", getjoke)