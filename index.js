// $.ajax({
//   method: "GET",
//   url: "https://www.instagram.com/p.league.official/?__a=1",
// }).done(function (result) {
//   console.log(result);
// });

const getDataFromIns = async () => {
  try {
    const response = await fetch("https://www.instagram.com/gqtaiwan/?__a=1");
    if (!response.ok) throw new Error("somthing wrong");
    console.log("response:", response);
    const data = await response.json();
    console.log("response.json", data);
    // slr("#total").innerHTML = data.total;
  } catch (error) {
    console.log(error);
  }
};
// getDataFromIns();


