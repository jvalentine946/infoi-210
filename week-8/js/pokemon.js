console.log("Pokemon");

function showAlert() {
    alert("Annoying message");
}

const confirmBtnRef = 
document.querySelector
("#confirm-btn");

function showConfirm() {
    const userConfirmed = 
    confirm("You are a robot, right?");

    console.log(userConfirmed);
}

confirmBtnRef.onclick = showConfirm;

console.log(confirmBtnRef);

function showPrompt() {
    const userInput = prompt(
        "What's your favorite flavor of ice cream?", "vanilla"
    );

    console.log(userInput);
}

// Code for Pokemon Journey

const journeyRef = document.querySelector("#journey");

function startJourney() {
    journeyRef.innerHTML = 
    "<p>You are so excited, today you get your first Pokemon! Sitting in front of you sre pokeballs for Bulbasaur, Charmander, and Squirtle. Choose your pokemon:</p>";



    const starterPokemon = [
        { 
            name: "Bulbasaur", 
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png", 
        },
        {
            name: "Charmander", 
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
        },
        {
            name: "Squirtle",
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        },
    ];

    for (let i = 0; i < starterPokemon.length; i++) {
        const pokemon = starterPokemon[i];
        const newSection = document.createElement("section");
       newSection.innerHTML += 
       "<img height='100' src'" + 
       pokemon.img + 
       "' alt='" + 
       pokemon.name + 
        "' />";

        //const newImg = document.createElement("img");
        //newImg.height = "100";
        //newImg.src = pokemon.img;
        //newImg.alt = pokemon.name;
        //newSection.appendChild(newImg);

        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.onclick = choosePokemon;

        journeyRef.appendChild(newSection);
        console.log(pokemon);
    }
}

function choosePokemon() {
    console.log(else.currentTarget);
    const pokemonName = else.currentTarget.dataset.pokemonName;
    const pokemonImg = else.currentTarget.dataset.pokemonImg;

    const confirmChoice = confirm("You chose" + pokemonName + "as your starter pokemon.");

    myPokemon = { name: pokemonName, img: pokemonImg };
}