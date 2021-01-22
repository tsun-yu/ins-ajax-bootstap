$.ajax({
  method: "GET",
  // url: "https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=39431801958&first=12",
  url: "./ins.json",
}).done(function (result) {
  console.log(result.graphql.user.edge_related_profiles.edges[0]);

  let postArr = result.graphql.user.edge_owner_to_timeline_media.edges;

  for (let i = 0; i < postArr.length; i++) {
    let display = `<div class="col-4 position-relative overflow-hidden p-4"><img src="${postArr[i].node.thumbnail_src}",alt=""/>
    </div>`;
    $(".contentArea").append(display);
  }

  let relatedArr = result.graphql.user.edge_related_profiles.edges
  for (let i = 0; i < relatedArr.length; i++) {
    let display = `<div class="cards border px-2 pt-2 pb-4 mx-3">
    <span class="float-right">X</span>
    <div class="cardImgArea mx-auto mt-3">
      <img src="${relatedArr[i].node.profile_pic_url}" alt=""/>
    </div>
    <p class="font-weight-bold text-center text-truncate mt-3 mb-1">${relatedArr[i].node.username}</p>
    <p class="text-center text-truncate mb-3">${relatedArr[i].node.fullname}</p>
    <button class="btn btn-primary btn-sm w-100">Follow</button>
  </div>`;
    $(".relatedAccounts").append(display);
  }
});
