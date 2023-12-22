import { db, storage } from "../server";
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set } from 'firebase/database';
var preval1;
var preval2;
var preval3;
var preval4;
var preval5;
var preval6;
var preval7;
var preval8;
var preval9;
var preval10;

var delay = 5000;

window.onload = function(){
    preval1 = document.getElementById("photoorder1").value;
    preval2 = document.getElementById("photoorder2").value;
    preval3 = document.getElementById("photoorder3").value;
    preval4 = document.getElementById("photoorder4").value;
    preval5 = document.getElementById("photoorder5").value;
    preval6 = document.getElementById("photoorder6").value;
    preval7 = document.getElementById("photoorder7").value;
    preval8 = document.getElementById("photoorder8").value;
    preval9 = document.getElementById("photoorder9").value;
    preval10 = document.getElementById("photoorder10").value;

    $("#photo").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo_preview').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio1").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo1').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio2").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo2').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio3").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo3').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio4").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo4').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio5").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo5').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio6").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo6').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio7").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo7').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio8").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo8').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio9").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo9').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#portafolio10").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#photo10').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });
}

function signout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        location.href = "index";
    }, function(error) {
        // An error happened.
    });
}

function nospaces(t){
    if(t.value.match(/\s/g)){
        t.value=t.value.replace(/\s/g,'');
    }
}

function reeloption(){
    if(document.getElementById("reel").value == "No"){
        document.getElementById("reeldiv").style.display = "none";
    } else {
        document.getElementById("reeldiv").style.display = "block";
    }
}

function clickphoto(n){
    if(n==1){
        document.getElementById("portafolio1").click();
    } else if(n==2){
        document.getElementById("portafolio2").click();
    } else if(n==3){
        document.getElementById("portafolio3").click();
    } else if(n==4){
        document.getElementById("portafolio4").click();
    } else if(n==5){
        document.getElementById("portafolio5").click();
    } else if(n==6){
        document.getElementById("portafolio6").click();
    } else if(n==7){
        document.getElementById("portafolio7").click();
    } else if(n==8){
        document.getElementById("portafolio8").click();
    } else if(n==9){
        document.getElementById("portafolio9").click();
    } else if(n==10){
        document.getElementById("portafolio10").click();
    }
}

function showdivs(){
    if(document.getElementById("numofpics").value==2){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = true;
        document.getElementById("photodiv4").hidden = true;
        document.getElementById("photodiv5").hidden = true;
        document.getElementById("photodiv6").hidden = true;
        document.getElementById("photodiv7").hidden = true;
        document.getElementById("photodiv8").hidden = true;
        document.getElementById("photodiv9").hidden = true;
        document.getElementById("photodiv10").hidden = true;
        delay = 5000;
    } else if(document.getElementById("numofpics").value==3){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = true;
        document.getElementById("photodiv5").hidden = true;
        document.getElementById("photodiv6").hidden = true;
        document.getElementById("photodiv7").hidden = true;
        document.getElementById("photodiv8").hidden = true;
        document.getElementById("photodiv9").hidden = true;
        document.getElementById("photodiv10").hidden = true;
        delay = 6000;
    } else if(document.getElementById("numofpics").value==4){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = false;
        document.getElementById("photodiv5").hidden = true;
        document.getElementById("photodiv6").hidden = true;
        document.getElementById("photodiv7").hidden = true;
        document.getElementById("photodiv8").hidden = true;
        document.getElementById("photodiv9").hidden = true;
        document.getElementById("photodiv10").hidden = true;
        delay = 7000;
    } else if(document.getElementById("numofpics").value==5){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = false;
        document.getElementById("photodiv5").hidden = false;
        document.getElementById("photodiv6").hidden = true;
        document.getElementById("photodiv7").hidden = true;
        document.getElementById("photodiv8").hidden = true;
        document.getElementById("photodiv9").hidden = true;
        document.getElementById("photodiv10").hidden = true;
        delay = 8000;
    } else if(document.getElementById("numofpics").value==6){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = false;
        document.getElementById("photodiv5").hidden = false;
        document.getElementById("photodiv6").hidden = false;
        document.getElementById("photodiv7").hidden = true;
        document.getElementById("photodiv8").hidden = true;
        document.getElementById("photodiv9").hidden = true;
        document.getElementById("photodiv10").hidden = true;
        delay = 9000;
    } else if(document.getElementById("numofpics").value==7){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = false;
        document.getElementById("photodiv5").hidden = false;
        document.getElementById("photodiv6").hidden = false;
        document.getElementById("photodiv7").hidden = false;
        document.getElementById("photodiv8").hidden = true;
        document.getElementById("photodiv9").hidden = true;
        document.getElementById("photodiv10").hidden = true;
        delay = 10000;
    } else if(document.getElementById("numofpics").value==8){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = false;
        document.getElementById("photodiv5").hidden = false;
        document.getElementById("photodiv6").hidden = false;
        document.getElementById("photodiv7").hidden = false;
        document.getElementById("photodiv8").hidden = false;
        document.getElementById("photodiv9").hidden = true;
        document.getElementById("photodiv10").hidden = true;
        delay = 11000;
    } else if(document.getElementById("numofpics").value==9){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = false;
        document.getElementById("photodiv5").hidden = false;
        document.getElementById("photodiv6").hidden = false;
        document.getElementById("photodiv7").hidden = false;
        document.getElementById("photodiv8").hidden = false;
        document.getElementById("photodiv9").hidden = false;
        document.getElementById("photodiv10").hidden = true;
        delay = 12000;
    } else if(document.getElementById("numofpics").value==10){
        document.getElementById("photodiv1").hidden = false;
        document.getElementById("photodiv2").hidden = false;
        document.getElementById("photodiv3").hidden = false;
        document.getElementById("photodiv4").hidden = false;
        document.getElementById("photodiv5").hidden = false;
        document.getElementById("photodiv6").hidden = false;
        document.getElementById("photodiv7").hidden = false;
        document.getElementById("photodiv8").hidden = false;
        document.getElementById("photodiv9").hidden = false;
        document.getElementById("photodiv10").hidden = false;
        delay = 13000;
    }
}

function myorder(n){
    if(n==1){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder1 == getorder2 || getorder1 == getorder3 || getorder1 == getorder4 || getorder1 == getorder5 || getorder1 == getorder6 || getorder1 == getorder7 || getorder1 == getorder8 || getorder1 == getorder9 || getorder1 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder1").value = preval1;
            return;
        }
    } else if(n==2){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder2 == getorder1 || getorder2 == getorder3 || getorder2 == getorder4 || getorder2 == getorder5 || getorder2 == getorder6 || getorder2 == getorder7 || getorder2 == getorder8 || getorder2 == getorder9 || getorder2 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder2").value = preval2;
            return;
        }
    } else if(n==3){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder3 == getorder1 || getorder3 == getorder2 || getorder3 == getorder4 || getorder3 == getorder5 || getorder3 == getorder6 || getorder3 == getorder7 || getorder3 == getorder8 || getorder3 == getorder9 || getorder3 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder3").value = preval3;
            return;
        }
    } else if(n==4){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder4 == getorder1 || getorder4 == getorder2 || getorder4 == getorder3 || getorder4 == getorder5 || getorder4 == getorder6 || getorder4 == getorder7 || getorder4 == getorder8 || getorder4 == getorder9 || getorder4 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder4").value = preval4;
            return;
        }
    } else if(n==5){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder5 == getorder1 || getorder5 == getorder2 || getorder5 == getorder3 || getorder5 == getorder4 || getorder5 == getorder6 || getorder5 == getorder7 || getorder5 == getorder8 || getorder5 == getorder9 || getorder5 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder5").value = preval5;
            return;
        }
    } else if(n==6){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder6 == getorder1 || getorder6 == getorder2 || getorder6 == getorder3 || getorder6 == getorder4 || getorder6 == getorder5 || getorder6 == getorder7 || getorder6 == getorder8 || getorder6 == getorder9 || getorder6 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder6").value = preval6;
            return;
        }
    } else if(n==7){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder7 == getorder1 || getorder7 == getorder2 || getorder7 == getorder3 || getorder7 == getorder4 || getorder7 == getorder5 || getorder7 == getorder6 || getorder7 == getorder8 || getorder7 == getorder9 || getorder7 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder7").value = preval7;
            return;
        }
    } else if(n==8){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder8 == getorder1 || getorder8 == getorder2 || getorder8 == getorder3 || getorder8 == getorder4 || getorder8 == getorder5 || getorder8 == getorder6 || getorder8 == getorder7 || getorder8 == getorder9 || getorder8 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder8").value = preval8;
            return;
        }
    } else if(n==9){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder9 == getorder1 || getorder9 == getorder2 || getorder9 == getorder3 || getorder9 == getorder4 || getorder9 == getorder5 || getorder9 == getorder6 || getorder9 == getorder7 || getorder9 == getorder8 || getorder9 == getorder10){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder9").value = preval9;
            return;
        }
    } else if(n==10){
        var getorder1 = document.getElementById("photoorder1").value;
        var getorder2 = document.getElementById("photoorder2").value;
        var getorder3 = document.getElementById("photoorder3").value;
        var getorder4 = document.getElementById("photoorder4").value;
        var getorder5 = document.getElementById("photoorder5").value;
        var getorder6 = document.getElementById("photoorder6").value;
        var getorder7 = document.getElementById("photoorder7").value;
        var getorder8 = document.getElementById("photoorder8").value;
        var getorder9 = document.getElementById("photoorder9").value;
        var getorder10 = document.getElementById("photoorder10").value;

        if(getorder10 == getorder1 || getorder10 == getorder2 || getorder10 == getorder3 || getorder10 == getorder4 || getorder10 == getorder5 || getorder10 == getorder6 || getorder10 == getorder7 || getorder10 == getorder8 || getorder10 == getorder9){
            Swal.fire({
                html: '<span style="color: #aaa">Ese número de orden ya esta establecido.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            });
            document.getElementById("photoorder10").value = preval0;
            return;
        }
    }
}

function saveactor(){
    var position = document.getElementById("position").value;
    var name = document.getElementById("name").value.toUpperCase();
    var username = document.getElementById("username").value.toLowerCase();
    var tags = document.getElementById("tags").value.toLowerCase();
    var photo = document.getElementById("photo").value;
        
    var vimeo = document.getElementById("vimeo").value;
    var instagram = document.getElementById("instagram").value;
    var imdb = document.getElementById("imdb").value;

    var reel = document.getElementById("reel").value;
    var iframe = document.getElementById("reelinput").value;

    var numofpics = document.getElementById("numofpics").value;
    var img1 = document.getElementById("portafolio1").value;
    var img2 = document.getElementById("portafolio2").value;
    var img3 = document.getElementById("portafolio3").value;
    var img4 = document.getElementById("portafolio4").value;
    var img5 = document.getElementById("portafolio5").value;
    var img6 = document.getElementById("portafolio6").value;
    var img7 = document.getElementById("portafolio7").value;
    var img8 = document.getElementById("portafolio8").value;
    var img9 = document.getElementById("portafolio9").value;
    var img10 = document.getElementById("portafolio10").value;

    var photoorder1 = document.getElementById("photoorder1").value;
    var photoorder2 = document.getElementById("photoorder2").value;
    var photoorder3 = document.getElementById("photoorder3").value;
    var photoorder4 = document.getElementById("photoorder4").value;
    var photoorder5 = document.getElementById("photoorder5").value;
    var photoorder6 = document.getElementById("photoorder6").value;
    var photoorder7 = document.getElementById("photoorder7").value;
    var photoorder8 = document.getElementById("photoorder8").value;
    var photoorder9 = document.getElementById("photoorder9").value;
    var photoorder10 = document.getElementById("photoorder10").value;

    var images_ready = false;

    var desc = document.getElementById("text-input").innerHTML;

    if(position == ""){
        Swal.fire({
            html: '<span style="color: #aaa">Ingresar posición del actor.</span>',
            type: 'warning',
            background: '#fff',
            allowOutsideClick: false,
            confirmButtonColor: '#c4979a',
        })
        return;
    }

    if(name == ""){
        Swal.fire({
            html: '<span style="color: #aaa">Ingresar nombre del actor.</span>',
            type: 'warning',
            background: '#fff',
            allowOutsideClick: false,
            confirmButtonColor: '#c4979a',
        })
        return;
    }

    if(username == ""){
        Swal.fire({
            html: '<span style="color: #aaa">Ingresar nombre de usuario.</span>',
            type: 'warning',
            background: '#fff',
            allowOutsideClick: false,
            confirmButtonColor: '#c4979a',
        })
        return;
    }

    if(tags == ""){
        Swal.fire({
            html: '<span style="color: #aaa">Ingresar tags para el SEO.</span>',
            type: 'warning',
            background: '#fff',
            allowOutsideClick: false,
            confirmButtonColor: '#c4979a',
        })
        return;
    }

    if(photo == ""){
        Swal.fire({
            html: '<span style="color: #aaa">Subir la fotografía principal.</span>',
            type: 'warning',
            background: '#fff',
            allowOutsideClick: false,
            confirmButtonColor: '#c4979a',
        })
        return;
    }

    if(vimeo == "" && instagram == "" && imdb == ""){
        Swal.fire({
            html: '<span style="color: #aaa">Ingresar al menos una red social.</span>',
            type: 'warning',
            background: '#fff',
            allowOutsideClick: false,
            confirmButtonColor: '#c4979a',
        })
        return;
    }

    if(reel == "Si"){
        if(iframe == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Ingresar el iframe del reel.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        }
    }

    if(numofpics == "2"){
        if(photoorder1 == "" || photoorder2 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "3"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "4"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == "" || photoorder4 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3=="" || img4==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "5"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == "" || photoorder4 == "" || photoorder5 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3=="" || img4=="" || img5==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "6"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == "" || photoorder4 == "" || photoorder5 == "" || photoorder6 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3=="" || img4=="" || img5=="" || img6==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "7"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == "" || photoorder4 == "" || photoorder5 == "" || photoorder6 == "" || photoorder7 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3=="" || img4=="" || img5=="" || img6=="" || img7==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "8"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == "" || photoorder4 == "" || photoorder5 == "" || photoorder6 == "" || photoorder7 == "" || photoorder8 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3=="" || img4=="" || img5=="" || img6=="" || img7=="" || img8==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "9"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == "" || photoorder4 == "" || photoorder5 == "" || photoorder6 == "" || photoorder7 == "" || photoorder8 == "" || photoorder9 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3=="" || img4=="" || img5=="" || img6=="" || img7=="" || img8=="" || img9==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    } else if(numofpics == "10"){
        if(photoorder1 == "" || photoorder2 == "" || photoorder3 == "" || photoorder4 == "" || photoorder5 == "" || photoorder6 == "" || photoorder7 == "" || photoorder8 == "" || photoorder9 == "" || photoorder10 == ""){
            Swal.fire({
                html: '<span style="color: #aaa">Asignar orden a todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else if(img1=="" || img2=="" || img3=="" || img4=="" || img5=="" || img6=="" || img7=="" || img8=="" || img9=="" || img10==""){
            Swal.fire({
                html: '<span style="color: #aaa">Subir todas las fotografías.</span>',
                type: 'warning',
                background: '#fff',
                allowOutsideClick: false,
                confirmButtonColor: '#c4979a',
            })
            return;
        } else{
            images_ready = true;
        }
    }

    if(desc == ""){
        Swal.fire({
            html: '<span style="color: #aaa">Ingresar descripción del actor.</span>',
            type: 'warning',
            background: '#fff',
            allowOutsideClick: false,
            confirmButtonColor: '#c4979a',
        })
        return;
    }

    //-- REGISTER DATA --//
    if(images_ready){
        document.getElementById("spinner2").style.display = "block";

        firebase.database().ref("Talentos").child("Influencers").child(username).update({
            posicion:position,
            nombre:name,
            usuario:username,
            vimeo:vimeo,
            instagram:instagram,
            imdb:imdb,
            reel:iframe,
            desc:desc,
            tags:tags,
            status:"Activo",
        });

        //Upload main photo
        var get_photo = document.getElementById("photo");
        var photofile = get_photo.files[0];

        if (photofile) {
            const photoPathRef = storageRef(storage, `FotosPrincipales/${username}`);
            uploadBytes(photoPathRef, photofile).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    // Actualizar la base de datos con la URL de la foto
                    set(dbRef(db, `Talentos/Influencers/${username}/fotoprincipal`), downloadURL);
                });
            }).catch((error) => {
                console.error("Error al subir archivo: ", error);
            });
        }

        //Upload portafolio images
        setTimeout(function(){
            var get_img1 = document.getElementById("portafolio1");
            var img1file = get_img1.files[0];
            var get_img2 = document.getElementById("portafolio2");
            var img2file = get_img2.files[0];
            var get_img3 = document.getElementById("portafolio3");
            var img3file = get_img3.files[0];
            var get_img4 = document.getElementById("portafolio4");
            var img4file = get_img4.files[0];
            var get_img5 = document.getElementById("portafolio5");
            var img5file = get_img5.files[0];
            var get_img6 = document.getElementById("portafolio6");
            var img6file = get_img6.files[0];
            var get_img7 = document.getElementById("portafolio7");
            var img7file = get_img7.files[0];
            var get_img8 = document.getElementById("portafolio8");
            var img8file = get_img8.files[0];
            var get_img9 = document.getElementById("portafolio9");
            var img9file = get_img9.files[0];
            var get_img10 = document.getElementById("portafolio10");
            var img10file = get_img10.files[0];

            if(numofpics == "2"){
                if(img1 != undefined && img2 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "3"){
                if(img1 != undefined && img2 != undefined && img3 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "4"){
                if(img1 != undefined && img2 != undefined && img3 != undefined && img4 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var images_path4 = firebase.storage().ref("Portafolio").child(username).child("04");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var uploadTask4 = images_path4.put(img4file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;
                    var position4 = document.getElementById("photoorder4").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });

                    uploadTask4.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask4.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("04").update({
                                    img: downloadURL,
                                    position: position4,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "5"){
                if(img1 != undefined && img2 != undefined && img3 != undefined && img4 != undefined && img5 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var images_path4 = firebase.storage().ref("Portafolio").child(username).child("04");
                    var images_path5 = firebase.storage().ref("Portafolio").child(username).child("05");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var uploadTask4 = images_path4.put(img4file);
                    var uploadTask5 = images_path5.put(img5file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;
                    var position4 = document.getElementById("photoorder4").value;
                    var position5 = document.getElementById("photoorder5").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });

                    uploadTask4.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask4.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("04").update({
                                    img: downloadURL,
                                    position: position4,
                                });
                            },1500);
                        });
                    });

                    uploadTask5.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask5.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("05").update({
                                    img: downloadURL,
                                    position: position5,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "6"){
                if(img1 != undefined && img2 != undefined && img3 != undefined && img4 != undefined && img5 != undefined && img6 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var images_path4 = firebase.storage().ref("Portafolio").child(username).child("04");
                    var images_path5 = firebase.storage().ref("Portafolio").child(username).child("05");
                    var images_path6 = firebase.storage().ref("Portafolio").child(username).child("06");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var uploadTask4 = images_path4.put(img4file);
                    var uploadTask5 = images_path5.put(img5file);
                    var uploadTask6 = images_path6.put(img6file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;
                    var position4 = document.getElementById("photoorder4").value;
                    var position5 = document.getElementById("photoorder5").value;
                    var position6 = document.getElementById("photoorder6").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });

                    uploadTask4.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask4.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("04").update({
                                    img: downloadURL,
                                    position: position4,
                                });
                            },1500);
                        });
                    });

                    uploadTask5.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask5.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("05").update({
                                    img: downloadURL,
                                    position: position5,
                                });
                            },1500);
                        });
                    });

                    uploadTask6.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask6.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("06").update({
                                    img: downloadURL,
                                    position: position6,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "7"){
                if(img1 != undefined && img2 != undefined && img3 != undefined && img4 != undefined && img5 != undefined && img6 != undefined && img7 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var images_path4 = firebase.storage().ref("Portafolio").child(username).child("04");
                    var images_path5 = firebase.storage().ref("Portafolio").child(username).child("05");
                    var images_path6 = firebase.storage().ref("Portafolio").child(username).child("06");
                    var images_path7 = firebase.storage().ref("Portafolio").child(username).child("07");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var uploadTask4 = images_path4.put(img4file);
                    var uploadTask5 = images_path5.put(img5file);
                    var uploadTask6 = images_path6.put(img6file);
                    var uploadTask7 = images_path7.put(img7file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;
                    var position4 = document.getElementById("photoorder4").value;
                    var position5 = document.getElementById("photoorder5").value;
                    var position6 = document.getElementById("photoorder6").value;
                    var position7 = document.getElementById("photoorder7").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });

                    uploadTask4.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask4.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("04").update({
                                    img: downloadURL,
                                    position: position4,
                                });
                            },1500);
                        });
                    });

                    uploadTask5.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask5.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("05").update({
                                    img: downloadURL,
                                    position: position5,
                                });
                            },1500);
                        });
                    });

                    uploadTask6.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask6.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("06").update({
                                    img: downloadURL,
                                    position: position6,
                                });
                            },1500);
                        });
                    });

                    uploadTask7.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask7.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("07").update({
                                    img: downloadURL,
                                    position: position7,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "8"){
                if(img1 != undefined && img2 != undefined && img3 != undefined && img4 != undefined && img5 != undefined && img6 != undefined && img7 != undefined && img8 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var images_path4 = firebase.storage().ref("Portafolio").child(username).child("04");
                    var images_path5 = firebase.storage().ref("Portafolio").child(username).child("05");
                    var images_path6 = firebase.storage().ref("Portafolio").child(username).child("06");
                    var images_path7 = firebase.storage().ref("Portafolio").child(username).child("07");
                    var images_path8 = firebase.storage().ref("Portafolio").child(username).child("08");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var uploadTask4 = images_path4.put(img4file);
                    var uploadTask5 = images_path5.put(img5file);
                    var uploadTask6 = images_path6.put(img6file);
                    var uploadTask7 = images_path7.put(img7file);
                    var uploadTask8 = images_path8.put(img8file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;
                    var position4 = document.getElementById("photoorder4").value;
                    var position5 = document.getElementById("photoorder5").value;
                    var position6 = document.getElementById("photoorder6").value;
                    var position7 = document.getElementById("photoorder7").value;
                    var position8 = document.getElementById("photoorder8").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });

                    uploadTask4.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask4.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("04").update({
                                    img: downloadURL,
                                    position: position4,
                                });
                            },1500);
                        });
                    });

                    uploadTask5.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask5.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("05").update({
                                    img: downloadURL,
                                    position: position5,
                                });
                            },1500);
                        });
                    });

                    uploadTask6.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask6.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("06").update({
                                    img: downloadURL,
                                    position: position6,
                                });
                            },1500);
                        });
                    });

                    uploadTask7.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask7.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("07").update({
                                    img: downloadURL,
                                    position: position7,
                                });
                            },1500);
                        });
                    });

                    uploadTask8.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask8.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("08").update({
                                    img: downloadURL,
                                    position: position8,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "9"){
                if(img1 != undefined && img2 != undefined && img3 != undefined && img4 != undefined && img5 != undefined && img6 != undefined && img7 != undefined && img8 != undefined && img9 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var images_path4 = firebase.storage().ref("Portafolio").child(username).child("04");
                    var images_path5 = firebase.storage().ref("Portafolio").child(username).child("05");
                    var images_path6 = firebase.storage().ref("Portafolio").child(username).child("06");
                    var images_path7 = firebase.storage().ref("Portafolio").child(username).child("07");
                    var images_path8 = firebase.storage().ref("Portafolio").child(username).child("08");
                    var images_path9 = firebase.storage().ref("Portafolio").child(username).child("09");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var uploadTask4 = images_path4.put(img4file);
                    var uploadTask5 = images_path5.put(img5file);
                    var uploadTask6 = images_path6.put(img6file);
                    var uploadTask7 = images_path7.put(img7file);
                    var uploadTask8 = images_path8.put(img8file);
                    var uploadTask9 = images_path9.put(img9file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;
                    var position4 = document.getElementById("photoorder4").value;
                    var position5 = document.getElementById("photoorder5").value;
                    var position6 = document.getElementById("photoorder6").value;
                    var position7 = document.getElementById("photoorder7").value;
                    var position8 = document.getElementById("photoorder8").value;
                    var position9 = document.getElementById("photoorder9").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });

                    uploadTask4.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask4.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("04").update({
                                    img: downloadURL,
                                    position: position4,
                                });
                            },1500);
                        });
                    });

                    uploadTask5.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask5.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("05").update({
                                    img: downloadURL,
                                    position: position5,
                                });
                            },1500);
                        });
                    });

                    uploadTask6.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask6.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("06").update({
                                    img: downloadURL,
                                    position: position6,
                                });
                            },1500);
                        });
                    });

                    uploadTask7.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask7.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("07").update({
                                    img: downloadURL,
                                    position: position7,
                                });
                            },1500);
                        });
                    });

                    uploadTask8.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask8.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("08").update({
                                    img: downloadURL,
                                    position: position8,
                                });
                            },1500);
                        });
                    });

                    uploadTask9.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask9.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("09").update({
                                    img: downloadURL,
                                    position: position9,
                                });
                            },1500);
                        });
                    });
                }
            } else if(numofpics == "10"){
                if(img1 != undefined && img2 != undefined && img3 != undefined && img4 != undefined && img5 != undefined && img6 != undefined && img7 != undefined && img8 != undefined && img9 != undefined && img10 != undefined){
                    var images_path = firebase.storage().ref("Portafolio").child(username).child("01");
                    var images_path2 = firebase.storage().ref("Portafolio").child(username).child("02");
                    var images_path3 = firebase.storage().ref("Portafolio").child(username).child("03");
                    var images_path4 = firebase.storage().ref("Portafolio").child(username).child("04");
                    var images_path5 = firebase.storage().ref("Portafolio").child(username).child("05");
                    var images_path6 = firebase.storage().ref("Portafolio").child(username).child("06");
                    var images_path7 = firebase.storage().ref("Portafolio").child(username).child("07");
                    var images_path8 = firebase.storage().ref("Portafolio").child(username).child("08");
                    var images_path9 = firebase.storage().ref("Portafolio").child(username).child("09");
                    var images_path10 = firebase.storage().ref("Portafolio").child(username).child("10");
                    var uploadTask = images_path.put(img1file);
                    var uploadTask2 = images_path2.put(img2file);
                    var uploadTask3 = images_path3.put(img3file);
                    var uploadTask4 = images_path4.put(img4file);
                    var uploadTask5 = images_path5.put(img5file);
                    var uploadTask6 = images_path6.put(img6file);
                    var uploadTask7 = images_path7.put(img7file);
                    var uploadTask8 = images_path8.put(img8file);
                    var uploadTask9 = images_path9.put(img9file);
                    var uploadTask10 = images_path10.put(img10file);
                    var position1 = document.getElementById("photoorder1").value;
                    var position2 = document.getElementById("photoorder2").value;
                    var position3 = document.getElementById("photoorder3").value;
                    var position4 = document.getElementById("photoorder4").value;
                    var position5 = document.getElementById("photoorder5").value;
                    var position6 = document.getElementById("photoorder6").value;
                    var position7 = document.getElementById("photoorder7").value;
                    var position8 = document.getElementById("photoorder8").value;
                    var position9 = document.getElementById("photoorder9").value;
                    var position10 = document.getElementById("photoorder10").value;

                    uploadTask.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("01").update({
                                    img: downloadURL,
                                    position: position1,
                                });
                            },1500);
                        });
                    });

                    uploadTask2.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("02").update({
                                    img: downloadURL,
                                    position: position2,
                                });
                            },1500);
                        });
                    });

                    uploadTask3.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("03").update({
                                    img: downloadURL,
                                    position: position3,
                                });
                            },1500);
                        });
                    });

                    uploadTask4.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask4.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("04").update({
                                    img: downloadURL,
                                    position: position4,
                                });
                            },1500);
                        });
                    });

                    uploadTask5.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask5.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("05").update({
                                    img: downloadURL,
                                    position: position5,
                                });
                            },1500);
                        });
                    });

                    uploadTask6.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask6.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("06").update({
                                    img: downloadURL,
                                    position: position6,
                                });
                            },1500);
                        });
                    });

                    uploadTask7.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask7.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("07").update({
                                    img: downloadURL,
                                    position: position7,
                                });
                            },1500);
                        });
                    });

                    uploadTask8.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask8.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("08").update({
                                    img: downloadURL,
                                    position: position8,
                                });
                            },1500);
                        });
                    });

                    uploadTask9.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask9.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("09").update({
                                    img: downloadURL,
                                    position: position9,
                                });
                            },1500);
                        });
                    });

                    uploadTask10.on('state_changed', function (snapshot){
                    }, function (error){
                        alert(error);
                    }, function(){
                        uploadTask10.snapshot.ref.getDownloadURL().then(function(downloadURL){
                            setTimeout(function(){
                                firebase.database().ref("Talentos").child("Influencers").child(username).child("Portafolio").child("10").update({
                                    img: downloadURL,
                                    position: position10,
                                });
                            },1500);
                        });
                    });
                }
            }
        },3000)

        //Delay and redirect
        setTimeout(function(){
            document.getElementById("spinner2").style.display = "none";
            Swal.fire({
                html: '<span style="color: #aaa">Actor guardado correctamente. Espere un momento...</span>',
                type: 'success',
                background: '#fff',
                allowOutsideClick: false,
                showConfirmButton: false,
            });

            setTimeout(function(){
                location.href = "influencers";
            },3000);
        }, delay);
       }
    }

//------- TEXT EDITOR -----------//
function fs(){
    var size = document.getElementById("fontsize").value;
    var ss = parseInt(size)-10;
    document.execCommand("fontSize", false, ss.toString());
}

function ff(){
    var family = document.getElementById("fontfamily").value;
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("fontName", false, family.toString());
}

function f1(){
    document.execCommand("bold", false, null);
}

function f2(){
    document.execCommand("italic", false, null);
}

function f3(){
    document.execCommand("underline", false, null);
}

function f4(){
    document.execCommand("strikethrough", false, null);
}

function f5(){
    document.execCommand("insertOrderedList", false, null);
}

function f6(){
    document.execCommand("insertUnorderedList", false, null);
}
