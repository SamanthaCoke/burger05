$(document).on("click", ".toDevour", function (e) {
  let {id} = this;
  console.log("CLICKED, ID: ", id);
  $.ajax({
    method: "PUT",
    url: "/",
    data: {
      id: id,
    },
  })
    .then((res) => {
      console.log(res);
      window.location.href = "/";
    })
    .catch((err) => {
      console.lg("ERR", err);
    });
});

$("#submitName").click(function(e) {
  let burger_name = $("#userInput").val(); 
  console.log("burger_name", burger_name)
  $.ajax({
    method: "POST",
    url: "/",
    data: {
      burger_name: burger_name,
    },
  })
    .then((res) => {
      console.log(res);
      window.location.href = "/";
    })
    .catch((err) => {
      console.log("ERR", err);
    });

})
