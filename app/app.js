import * as MODEL from './model.js';

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    console.log(hashTag + '' + pageID);
    if(pageID == "") {
        MODEL.changePage(pageID)
    } else if (pageID == "books") {
        MODEL.changePage(pageID, buyNow);
    } else if (pageID == "account") {
        MODEL.changePage(pageID, initSubmitListener);
    } else {
        MODEL.changePage(pageID);
    }
}

function buyNow() {
    $(".bookInfo button").on("click", (e) => {
        let bookId = e.currentTarget.id;
        MODEL.addToCart(bookId);
        console.log(bookId);
    });
}

function initSubmitListener() {
    $("#submit").on("click", function (e) {
        console.log("submit");
        let fn = $("#fName").val();
        let ln = $("#lName").val();
        let em = $("#email").val();
        let pw = $("#password").val();

        if (fn == '') {
            alert("Please enter first name");
        } else if (ln == '') {
            alert("Please enter last name");
        } else if (em == '') {
            alert("Please enter valid email");
        } else if (pw == '') {
            alert("Please enter password");
        } else {
            let userObj = {
                firstName: fn,
                lastName: ln,
                email: em,
                password: pw,
            }
            MODEL.setUserInfo(userObj);
        }

    });
}

function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

$(document).ready(function () {
    initURLListener();
});