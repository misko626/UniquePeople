const data = document.getElementById("data");

// fetch("https://mocki.io/v1/08021574-f46d-4231-bca1-ffd6a3315b7c")
//   .then((response) => response.json())
//   .then((json) => console.log(JSON.stringify(json)));

fetch(`https://mocki.io/v1/08021574-f46d-4231-bca1-ffd6a3315b7c`)
  .then((res) => {
    //console.log(res);
    if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
