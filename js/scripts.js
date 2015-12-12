// Random Number Generator
//var limit = 3;
//var randNum = Math.floor(Math.random() * limit);
//console.log( randNum );


// Store Images in an Array
//var headerImg = ['img/header-1.png', 'img/header-2.png', 'img/header-3.png'];
//console.log( headerImg[randNum] );
// Change Header Image, Randomly 
//$('header img').attr('src', headerImg[randNum]);


// LetteringJS on Header
//$('header h1').lettering();


// Light Gallery Plugin
// REF: http://sachinchoolur.github.io/lightGallery/demos/html-markup.html
// Note, select parent, then use `selector` option to lightbox children
$('.gallery').lightGallery({
  selector: 'a'
}); 

// TwentyTwenty Plugin
// REF: http://zurb.com/playground/twentytwenty

  $('.twentytwenty').twentytwenty();



