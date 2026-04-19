const apiurl = "https://icanhazdadjoke.com/";

const fetchdata = async () => {
  const res = await fetch(apiurl,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  const data = await res.json();
  console.log(data.joke);
  apibody.innerHTML = data.joke;


}

const apibody = document.querySelector(".apibody");

document.getElementById("fetchjock").addEventListener("click",fetchdata);