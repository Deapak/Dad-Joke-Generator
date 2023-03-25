const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "Y5L/n9+OEzJ04sEH7/GDWQ==wKuTnESzLU2jSCn2";


const options={
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey, 

    },
};

const apiURl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
    btnEl.disabled=true;
    btnEl.innerText ="Loading...";
    const response = await fetch(apiURl,options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke";
        
    } catch (error) {
        jokeEl.innerText="An error occur , please try again!!";
        btnEl.disabled=false;
    btnEl.innerText="Tell me a joke";
    }

    
}



btnEl.addEventListener('click', getJoke)