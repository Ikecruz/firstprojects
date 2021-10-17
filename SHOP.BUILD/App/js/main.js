
// let password = document.getElementById('password');
// let passwordSubmit = document.getElementById('submit-btn');
// let alerts = document.getElementById('alert-box');
// let textContent = document.getElementById('text-content');

// function alertHider(){
//     password.addEventListener('click', function(){
//         alerts.classList.add("display-none");
//         alerts.classList.remove("display-show");
//     })
// }

// function viewer(){
//     textContent.classList.remove("display-none")
// }

// passwordSubmit.addEventListener('click', function(){
//     if (password.value != ""){
      
//         if (password.value == "pablo")
//         {
//           alerts.classList.remove("display-none");
//           alerts.classList.add("display-show");
//           alerts.classList.remove("alert-danger");
//           alerts.classList.add("alert-success");
//           alerts.textContent = "Welcome User"

//           setInterval(viewer, 1000);
//         }
//         else{
//           alerts.classList.remove("display-none");
//           alerts.classList.add("display-show");
//           alerts.classList.remove("alert-success");
//           alerts.classList.add("alert-danger");
//           alerts.textContent = "Wrong Password"
//         }
//     }else{
//         alerts.classList.remove("display-none");
//         alerts.classList.add("display-show");
//         alerts.classList.remove("alert-success");
//         alerts.classList.add("alert-danger");
//         alerts.textContent = "Please Input Password"
//     }
// })

// alertHider();


function scroller(){
  // let nav1 = document.getElementById('nav1');
  // let showState = true;

  window.addEventListener('scroll', function(){
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 100)
      {
          nav1.classList.remove("nav");
          nav1.classList.add("fixed-top");
      } else {
          nav1.classList.add("nav");
          nav1.classList.remove("fixed-top");
      }

  })
}

scroller();