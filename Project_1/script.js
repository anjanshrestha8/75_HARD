$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
        console.log("over vayo");
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });
  