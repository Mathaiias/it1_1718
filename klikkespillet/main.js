
var navnE = document.querySelector(".navn");
var startE = document.querySelector(".start");
var klikkE = document.querySelector(".klikk");
var klikkverdiE = document.querySelector(".klikkverdi");
var listeE = document.querySelector("liste");

var antKlikk = 0;

db.collection("spill").add({
    navn: "test",
    poeng: "10"
});


klikkE.addEventListener("click" , function () {
    antKlikk = antKlikk + 1;
    klikkverdiE.innerHTML = antKlikk;
});



startE.addEventListener("click" , function () {
    antKlikk = 0;
    klikkverdiE.innerHTML = antKlikk;

    setTimeout(function () {
        alert(antKlikk)
    }, 3000);
});

var mappe = db.collection ("spill").orderBy;

mappe.onSnapShot (function (data) {
    listeE.innerHTML = "";
    var dokumenter = data.docs;
    for (var x in dokumenter) {
        listeE.innerHTML += "<li>" + dokumenter [x].data().navn + ": " + dokumenter[x].data().poeng + "<li>"
    }
})



firebase.initializeApp({
    apiKey: 'AIzaSyBbtzj5b7zNMQFSef9bS3jpA-OUXxh9Vxw',
    authDomain: 'klikkespill-79a77.firebaseapp.com',
    projectId: 'klikkespill-79a77'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
