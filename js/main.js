const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});


function dados (){

for (let index = 0; index < array.length; index++) {
  const element = array[index];

}

}
const dados = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 22 },
];

            async function getRandomCatImage() {
                        const response = await fetch(
                          "https://api.thecatapi.com/v1/images/search"
                        );
                        const data = await response.json();
                        return data[0].url;
                      }

                      getRandomCatImage();