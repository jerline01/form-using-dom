
// element 1
var form = document.createElement('form');
var label1 = label('label','First Name');
label1.setAttribute('for','firstname');

var br1 = document.createElement('br');

var input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('id','firstname');

form.append(label1,br1,input1);
// element 2
var br2 = document.createElement('br');

var label2 = label('label','Middle Name');
label2.setAttribute('for','middlename');

var br3 = document.createElement('br');

var input2 = document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('id','middlename');

form.append(br2,label2,br3,input2);
// element 3
var br3 = document.createElement('br');

var label3 = label('label','Last Name');
label3.setAttribute('for','lastname');

var br4 = document.createElement('br');

var input3 = document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute('id','lastname');

form.append(br3,label3,br4,input3);
// element 4
var br4 = document.createElement('br');

var label4 = label('label','Email');
label4.setAttribute('for','email');

var br5 = document.createElement('br');

var input4 = document.createElement('input');
input4.setAttribute('type','email');
input4.setAttribute('id','email');

form.append(br4,label4,br5,input4);
// element 5
var br6 = document.createElement('br');
var br7 = document.createElement('br');

// var input5 = document.createElement('input');
// input5.setAttribute('type','submit');
// input5.setAttribute('value','submit');
// input5.setAttribute('onclick','foo()');

form.append(br6,br7);


document.body.append(form);

function label(text,value) {
    var element = document.createElement(text);
    element.innerHTML = value;
    return element;
}

function foo() {
    var res1 = document.getElementById("firstname").value;
    console.log(res1);
    var res2 = document.getElementById("middlename").value;
    console.log(res2);
    var res3 = document.getElementById("lastname").value;
    console.log(res3);
    var res4 = document.getElementById("email").value;
    console.log(res4);
}