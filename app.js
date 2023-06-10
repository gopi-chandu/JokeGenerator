document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  // request part
  const xhr = new XMLHttpRequest();

  // here true refers to async
  xhr.open("GET", `https://api.chucknorris.io/jokes/random`, true);

  xhr.onload = function () {
    console.log(this.responseText)
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);
      let i=response.value
      const li = document.createElement("li");
      // console.log(i);
      li.append(document.createTextNode(i));
      li.className="bg-yellow-400 p-1 mb-3"
      document.querySelector(".La").append(li);
      
    }
  };
  xhr.send();
  e.preventDefault();
}
