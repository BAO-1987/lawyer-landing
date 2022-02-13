
import SmoothScroll from "smooth-scroll";

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  speedAsDuration: true,
  header: '[data-scroll-header]'
});
