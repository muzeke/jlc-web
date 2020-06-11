// import dependencies
import "jquery";
import "waypoints/lib/jquery.waypoints";

import "./stylesheets/app.scss";
import "./stylesheets/home.scss";

//plugin

console.log("**************************************");

var a = $(".zeke").waypoint(function () {
  console.log("coded reached ");
});

const animateIn = (jQueryElement, animateClass, offSet) => {
  jQueryElement.css("opacity", "0");

  offSet = offSet || "100%";

  var b = jQueryElement.waypoint(
    function (direction, i) {
      if (direction == "down") {
        jQueryElement.addClass("animate__animated " + animateClass);
      }
    },
    {
      offset: offSet,
    }
  );
  console.log(b);
};

animateIn($(".schedule.section"), "animate__fadeInUp");

$(".welcome.section > .title").addClass("animate__animated animate__flipInX");
$(".welcome.section > .subtitle").addClass(
  "animate__animated animate__fadeInUp"
);
$(".welcome.section > .subtitle-top").addClass(
  "animate__animated animate__fadeInUp"
);
