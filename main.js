var mTwain = [
  "Man -- a creature made at the end of the week's work when God was tired.",
  "The trouble is that the stupid people -- who constitute the grand overwhelming majority of this and all other nations -- do believe and are molded and convinced by what they get out of a newspaper.",
  "I don't suppose there was much danger. People born to be hanged are safe in water.",
  "Heaven is by favor; if it were by merit your dog would go in and you would stay out. Of all the creatures ever made man is the most detestable. Of the entire brood, he is the only one that possesses malice. He is the only creature that inflicts pain for sport, knowing it to be pain.",
  "Often it does seem a pity that Noah and his party did not miss the boat.",
  "It is just like man's vanity and impertinence to call an animal dumb because it is dumb to his dull perceptions.",
  "The trouble ain't that there is too many fools, but that the lightning ain't distributed right.",
  "Let us make a special effort to stop communicating with each other, so we can have some conversation.",
  "I once sent a dozen of my friends a telegram saying \"flee at once - all is discovered.\" They all left town immediately.",
  "Concerning the difference between man and the jackass: some observers hold that there isn't any. But this wrongs the jackass.",
  "Sacred cows make the best hamburger.",
  "I believe that our Heavenly Father invented man because he was disappointed in the monkey.",
  "One man alone can be pretty dumb sometimes, but for real bona fide stupidity there ain't nothing can beat teamwork.",
  "If a man could be crossed with the cat, it would improve man, but it would deteriorate the cat.",
  "She is not refined. She is not unrefined. She keeps a parrot.",
  "If you pick up a starving dog and make him prosperous, he will not bite you. This is the principal difference between a dog and a man."
];


// var niceArray = [
//    "You're doing great, buddy. Keep it up.",
//    "Killing it! You are absolutely killing it.",
//    "Winning!",
//    "You are made from the same particles as the sun."
//    ];

function generate(){
  return Math.floor(Math.random() * mTwain.length);
}

$("button").on('click',
  function(){
    $('#result h1').html(mTwain[generate()]);
  }
)
