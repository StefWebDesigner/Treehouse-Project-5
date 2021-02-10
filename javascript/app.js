//=================//
//      App        //
//=================//

//searchFilter Plugin >> Works for sure!!!!
const search = new Filter('search', 'data-caption');



//Search Filter >>>> It doesn't work But I want to exceed!!!!

// const search = new Filter('search', 'data-caption');

// function searchBar(search) {

//     //Find a way to link the HMTL buttion to this input like with prompt
// let input = document.querySelector('body').innerHTML = search;  //this should take the iput from body
//                                                                 //look for the data and search terms
// let message;

// if (input === search) {
// search = document.querySelector('aside').innerHTML ; //Show the search in the body

// }

// }


//For The BaguetteBox Plugin (make them an object  with a call function inside a call function)
window.addEventListener('load', function() {
  baguetteBox.run('.gallery', {
  Animation: 'fadeIn',
});

});



