function scroller(){

  window.addEventListener('scroll', function(){
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 100)
      {
          nav1.classList.remove("nav"); //Removes the invisible classlist when the window scrolls to the point stated
          nav1.classList.add("fixed-top"); //Adds the visible classlist when the window scrolls to the point stated
      } else {
          nav1.classList.add("nav"); //Adds the invisible classlist when at top of the window
          nav1.classList.remove("fixed-top"); //Removes the invisible classlist when at top of the window
      }

  })
}
scroller();