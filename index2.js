const slr = (id) => document.querySelector(id);

const getDataFromServer = async () => {
  try {
    const response = await fetch(
      " https://www.instagram.com/p.league.official/?__a=1"
    );
    if (!response.ok) throw new Error("somthing wrong");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getDataFromServer();

//related accounts ARROW
$(".relative-btn-left").addClass("hide");

let scrollLeft = 0;
$(".relative-btn-right").click(function () {
  $(".relatedAccounts").scrollLeft(scrollLeft);
  scrollLeft += 100;
  scrollLeft > 0 && $(".relative-btn-left").removeClass("hide");
});

$(".relative-btn-left").click(function () {
  scrollLeft -= 100;
  $(".relatedAccounts").scrollLeft(scrollLeft);
  scrollLeft === 0 && $(".relative-btn-left").addClass("hide");
});
