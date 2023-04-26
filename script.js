document.body.innerHTML = `
<div class="container-fluid">
<h1 class="heading_container">Pokemon API</h1>
<div id="mainContainer" class="main-container"></div>
</div>
`;
const poke_container=document.getElementById("mainContainer");

let main_fn = ((val,i_val) => {
  
const getData = async (id) => {
    try {
      const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
      const res=await fetch(url);
      const pokemon=await res.json();
        pokeCards(pokemon);
      console.log(pokemon);
      }
    catch (error) {
      console.log(error);
    //   console.(error);
    }
  };
getData();


const totalpokemons=val;
const fetchpokemons=async()=>{
    for(let i=i_val; i<totalpokemons; i++){
        await getData(i);
    }
}
fetchpokemons();


function pokeCards(pokemon){
    const pokemonEl=document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const pokeAbility=pokemon.abilities;
    const pokeMove=pokemon.moves;
    
    const pokeInnerHTML=
    `
    <div class="img-container">
    <img src="${pokemon.sprites.front_default}"
    </div>
    <p class="name"><b>Name:</b>
    ${name}</p>
    <p class="ability"><b>Abilities:</b>
    ${pokeAbility[0] && pokeAbility[1]? 
        `${pokeAbility[0].ability.name}, 
         ${pokeAbility[1].ability.name}`
          : "none"
    }</p>
    <p class="moves"><b>Moves:</b> 
    ${pokeMove[0].move.name}, 
    ${pokeMove[1].move.name}</p>
    <p class="weight"><b>Weight:</b>
    ${pokemon.weight}</p>
    `;
    pokemonEl.innerHTML=pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
  }
})

main_fn(10,0)