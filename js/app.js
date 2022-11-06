const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");
btn.addEventListener("click", ()=>{
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
  .then((response)=> response.json())
  .then((data) => {
    result.innerHTML=`
      <h3 class="word-heading">${inpWord} -  ${data[0].phonetic ||" "}</h3>
      <p class="word-meaning">${data[0].meanings[0].definitions[0].definition || " "}</p>
      <p class="word-example"> <strong></strong>${data[0].meanings[0].definitions[0].example || " "}</p>
      <p class="word-meaning">${data[0].meanings[0].definitions[1].definition || " "}</p>
      <p class="word-example"><strong></strong>${data[0].meanings[0].definitions[1].example || " "}</p>
      <p class="word-meaning">${data[0].meanings[0].definitions[2].definition || " "}</p>
      <div class="wrapper__icon"><button id="play1"> <i class="fa-solid fa-play"> </i> </button> 
      <h3> ${inpWord || " "} </h3>
      </div>`;
    let play = document.getElementById("play1");
    function playMusic(){
      let audio = new Audio(`${data[0].phonetics[1].audio}`);
      audio.play();
    }
    play.addEventListener("click", playMusic);
  })
  .catch( ()=>{
    result.innerHTML= `<h3>Couldn't Find The Word!</h3>`;
  });
});


