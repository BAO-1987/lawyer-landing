
import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  speedAsDuration: true,
  header: '[data-scroll-header]'
});
