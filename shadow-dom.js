// Get all front enders from the team page, then display them in a carousel on the home page
// 1. Get data from the team page while on the home page
//    1.1 Get all team members
//    1.2 Get only the front enders including their profile picture, name, and role
// 2. Run the script in the console to register the custom element
// 3. Insert the custom element, ideally with the carousel, into the html inspector

let team = document.getElementById('teamframe').contentWindow.document.getElementById('meet-our-team').getElementsByClassName('block')
let frontEnders = [];
let imgURL;
let alt;
let name;
let role;
let frontEnder = {};
let allFrontEnders = [];
function getAllFrontEnders() {
  for (var i = 0; i < team.length; i++) {
    if (team[i].innerText.toLowerCase().indexOf('front') > -1) {
      frontEnders.push(team[i]);
    }
  }
  console.log('frontEnders: ', frontEnders);

  // TODO: access these and display in the document
  frontEnders.forEach((fe) => {
    // console.log(fe.childNodes[1]); // image urls with img tags
    // console.log(fe.childNodes[3]); // div.block__content with name in h2 tags, and role in p tags
    let nameObj = fe.getElementsByTagName('h2');
    let roleObj = fe.getElementsByTagName('p');
    frontEnder = {
      imgURL: fe.childNodes[1].src,
      alt: fe.childNodes[1].alt,
      name: nameObj[0].innerText,
      role: roleObj[0].innerText
    }
    return allFrontEnders.push(frontEnder);
  });
  console.log('allFrontEnders: ', allFrontEnders);
}
getAllFrontEnders();


// paste this script in the console to register the element
var frontEndTeam = '<h1>Become One of Our Front End Engineers</h1><p><img src="https://www.jetbalagtas.com/wp-content/uploads/2018/06/front-enders.png"/></p>';
var FrontEngs = Object.create(HTMLElement.prototype);

FrontEngs.createdCallback = function() {
  var shadow = this.createShadowRoot();
  shadow.innerHTML = frontEndTeam;
};

var FrontE = document.registerElement('front-engs', {prototype: FrontEngs});