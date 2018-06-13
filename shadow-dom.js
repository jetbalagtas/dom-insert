// get team members
// function collectionContains(collection, searchText) {
//     for (var i = 0; i < collection.length; i++) {
//         if( collection[i].innerText.toLowerCase().indexOf(searchText) > -1 ) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log('people: ', people);
// console.log( collectionContains(people, 'cant find') );
// console.log( collectionContains(people, 'front') );


// Get all team members, then collect only the front end engineers
let people = document.getElementsByClassName('block');
let frontEnders = [];
for (var i = 0; i < people.length; i++) {
    if (people[i].innerText.toLowerCase().indexOf('front') > -1) {
        frontEnders.push(people[i]);
    }
}
console.log('frontEnders: ', frontEnders);

// TODO: access these and display in the document
frontEnders.forEach((fe) => {
    console.log(fe.childNodes[1]); // image urls with img tags
});
frontEnders.forEach((fe) => {
    console.log(fe.childNodes[3]); // div.block__content with name in h2 tags, and role in p tags
    let name = fe.getElementsByTagName('h2');
    console.log('name: ', name[0].innerText);
    let role = fe.getElementsByTagName('p');
    console.log('role: ', role[0].innerText);
});


// paste this script in the console
var frontEndTeam = '<h1>Become One of Our Front End Engineers</h1>';
var FrontEngs = Object.create(HTMLElement.prototype);

FrontEngs.createdCallback = function() {
    var shadow = this.createShadowRoot();
    shadow.innerHTML = frontEndTeam;
};

var FrontE = document.registerElement('front-engs', {prototype: FrontEngs});