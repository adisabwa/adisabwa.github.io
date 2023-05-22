
export function isEmpty(str) {
  return (!str || 0 === str.length || str === undefined || str === [] || str === '0000-00-00');
}

function getRelativePos(elm){
  var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
      cPos = elm.getBoundingClientRect(), // target pos
      pos = {};

  pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
  pos.right  = cPos.right  - pPos.right,
  pos.bottom = cPos.bottom - pPos.bottom,
  pos.left   = cPos.left   - pPos.left;

  return pos;
}
    
function scrollTo(to, duration, onDone) {
    var start = window.pageYOffset,
        change = to - start,
        startTime = performance.now(),
        val, now, elapsed, t;

    function animateScroll(){
        now = performance.now();
        elapsed = (now - startTime)/1000;
        t = (elapsed/duration);

        window.scrollTo(0, start + change * easeInOutQuad(t) - 60);

        if( t < 1 )
            window.requestAnimationFrame(animateScroll);
        else
            onDone && onDone();
    };

    animateScroll();
}

function easeInOutQuad(t){ 
  return t <.5 ? 2*t*t : -1+(4-2*t)*t 
};

export function scrollToElement(el, duration = 1){
  if (el) {
    var pos = getRelativePos(el);
    scrollTo(pos.top , duration); 
    // el.scrollIntoView({ behavior: "smooth" });
  }
}

export function checkScroll(position) {
  var currentScrollPosition = window.scrollY
  let up = true;
  if(currentScrollPosition < position){
    up = true;
     //your desire logic 
  }
  else{
    up = false;
     //your desire logic 
  }

  return {up, currentScrollPosition};
}
export default {
  isEmpty,
  scrollToElement,
}