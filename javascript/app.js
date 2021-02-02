//=================//
//      App        //
//=================//

//For The BaguetteBox Plugin (Need to add arrows and way to exit)

window.addEventListener('load', function() {
   baguetteBox.run('.gallery');
      Animation: 'fadeIn'
      afterHide: 'null'

  });


//   show(index, gallery)
// Show (if hidden) and move the gallery to a specific index

// @param index {number} - the position of the image
// @param gallery {array} - gallery which should be opened, if omitted assumes the currently opened one
// @return {boolean} - true on success or false if the index is invalid
// Usage:

// const gallery = baguetteBox.run('.gallery');
// baguetteBox.show(index, gallery[0]);

//   Sample gallery
// baguetteBox.run('.baguetteBoxOne');


  // Responsive images
  // baguetteBox.run('.baguetteBoxTwo');
  // <a href="img/2-1.jpg"
  //     data-at-450="img/thumbs/2-1.jpg"
  //     data-at-800="img/small/2-1.jpg"
  //     data-at-1366="img/medium/2-1.jpg"
  //     data-at-1920="img/big/2-1.jpg">
  //         <img src="img/thumbs/2-1.jpg">
  // </a>


  // FadeIn animation
  // baguetteBox.run('.gallery', {
  //     animation: 'fadeIn',
  //     noScrollbars: true
  // });


  // Single image (buttons hidden by default, custom caption function)
//   baguetteBox.run('.gallery', {
//     captions: function(element) {
//         return element.getElementsByTagName('img')[0].alt;
//     }
// });

// Small images, buttons disabled (use arrows or swipe gesture)
// baguetteBox.run('.baguetteBoxFour', {
//     buttons: true
// });



//Search Filter

const search = new Filter('search', 'data-caption');

function searchBar(search) {

    //Find a way to link the HMTL buttion to this input like with prompt
let input = document.querySelector('body').innerHTML = search;  //this should take the iput from body
                                                                //look for the data and search terms
let message;

if (input === search) {
search = document.querySelector('aside').innerHTML ; //Show the search in the body

}

}








// $(".searchFilter").searchFilter();

// const search = new Filter('search', 'data-caption');





// function searchInput() {

// let input = document.getElementById('search');
// new filter = input.value.toUpperCase();
// aside = document.getElementById("photo-js");
// img = aside.getElementById("image-search"); //I need to have a caption or someting
//                                             // and attach the ID there

// for (i = 0; i <img; i++) {
// a = img.getElementByTagName

// }





// }

// function inputSearch(input) {
// const search = new Filter('search', 'data-caption'); //Everytime it retrevies a new name it will do this
// let input = document.querySelector('search').innerHTML;
// return input;

// // document.querySelector("search").innerHTML;
// }





// const search = new Filter('search', 'data-caption');
// function searchBox(input) {
//    let input = document.getInput("search").method;
// document.getInput("search").innerHTML = input;
   





// <!DOCTYPE html>
// <html>
// <body>

// <form id="frm1" action="/action_page.php" method="get">
//   First name: <input type="text" name="fname" value="Donald"><br>
//   Last name: <input type="text" name="lname" value="Duck"><br><br>
//   <input type="submit" value="Submit">
// </form>

// <p>Click "Try it" to display the value of the form method.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   var x = document.getElementById("frm1").method;
//   document.getElementById("demo").innerHTML = x;
// }
// </script>

// </body>
// </html>