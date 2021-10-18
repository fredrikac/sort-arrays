
console.log("testing");
const cities = [
    {
      city: "London",
      code: "UK",
      population: 11504632,
      foodRanking: 4
    },
    {
      city: "Manchester",
      code: "UK",
      population: 4280424,
      foodRanking: 5
    },
    {
      city: "Paris",
      code: "FR",
      population: 10830024,
      foodRanking: 9
    },
    {
      city: "Nice",
      code: "FR",
      population: 4250024,
      foodRanking: 10
    },
    {
      city: "Berlin",
      code: "DE",
      population: 8250024,
      foodRanking: 8
    },
    {
      city: "Munich",
      code: "DE",
      population: 5250050,
      foodRanking: 6
    }
  ];

  //1a Skriv ut namnet på städerna i li-taggar i ul
  //peka på listan
  let listOfCities = document.querySelector("#allCities");
//använd en loop för att för varje item skapa en li-tagg som fästs vid listOfCities
  cities.forEach((item)=>{
      let listItem = document.createElement("li");
      listItem.innerText = item.city;
      listOfCities.appendChild(listItem);
      //1b - färga texten
      if(item.code == "UK"){//OM code är UK, färga röd
        listItem.style.color = "red";
    }else if(item.code == "FR"){//ANNARS OM code är FR, färga blå
        listItem.style.color = "blue";
    }
  });
 
//2a Skriv ut alla städer som har en foodranking på 8 eller högre
//peka på ul-listan


//gör en array med bara hög ranking
let goodFood = cities.filter(item => item.foodRanking >=8);

//sortera i descending order
goodFood.sort((a, b) => b.foodRanking - a.foodRanking);

//peka på listan i domen
let topFoodCities = document.querySelector("#citiesForFoodies");

//Visa sorterade goodFood
goodFood.forEach(item => {
    let listItem = document.createElement("li");
    listItem.innerText = item.city + ", ranking " + item.foodRanking + "/10";
    topFoodCities.appendChild(listItem);
});


//Uppgift 3 - rangordna städer efter befolkning

//en array för bara population
let cityPopulation = cities.filter(item => item.population);

//sortera 
cityPopulation.sort((a, b) => b.population - a.population);

//peka på listan i domen
let populationList = document.querySelector("#sortedByPopulation");


//loopa genom den sorterade arrayen och skriv ut som numrerad lista
cityPopulation.forEach((item)=>{
    //skapa li-element, ge värde och skriv ut
    let listItem = document.createElement("li");
    listItem.innerText = item. city + ", " + item.population;
    populationList.appendChild(listItem);
});






