let myDiv = $('<div>Click Here!</div>')
let myBody = $('body');

myBody.append(myDiv)

let ul = $(`<ul></ul>`);

myBody.append(ul);

myDiv.on('click', () => {
    console.log('Div clicked!');
    let myInput = $('#input');

    let myLi = $(`<li>${myInput.val()}</li>`);
    ul.append(myLi);

    myInput.val('')

})

