  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";


  async function getData() {
      try {
          let res = await fetch(url);
          let data = await res.json();
          console.log("data:", data)
          appendMeal(data)

      } catch (err) {
          console.log("err:", err)
      }
  }
  getData();

  function appendMeal(data) {
      // console.log("data:", data);

      data.meals.map(function(meal) {
          let menu = document.getElementById("menu");

          let div = document.createElement("div")

          let image = document.createElement("img");
          image.src = meal.strMealThumb

          let name = document.createElement("h2");
          name.innerHTML = meal.strMeal

          let id = document.createElement("p")
          id.innerHTML = meal.idMeal

          let buttn = documnet.createElement("button");
          buttn.textContent = "Add To Cart";
          buttn.onclick = function(event) {
              buttn(meal);
          };

          div.append(image, name, id, buttn);

      });
  }

  // document.querySelector("#addtocart").addEventListener("click", function() {
  //     window.location.pathname = "C:/Users/anki/Desktop/WORK/unit3/evaluation/cart.html"
  // });