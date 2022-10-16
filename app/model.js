var userInfo = {};
var cart = [];

var bookList = [
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "twilight-box-set.jpg",
        bookPrice: "99.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "hp-box-set.jpg",
        bookPrice: "100",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "got-box-set.jpg",
        bookPrice: "100",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "finding me.jpg",
        bookPrice: "27.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "mlk-biography.jpg",
        bookPrice: "19.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "elenor-roosevelt-biography.jpg",
        bookPrice: "17.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "misery.jpg",
        bookPrice: "19.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "frankenstein.jpg",
        bookPrice: "15.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "phantoms.jpg",
        bookPrice: "19.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "winnie the pooh.jpg",
        bookPrice: "19.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "cat and the hat.jpg",
        bookPrice: "15.99",
    },
    {
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "fun facts about space.jpg",
        bookPrice: "7.99",
    },
];

var bookPageData = [
    {
        sectionTitle: "BOOKSETS",
        sectionBooks: [{
            bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
            bookImg: "twilight-box-set.jpg",
            bookPrice: "99.99",
        },
        {
            bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
            bookImg: "hp-box-set.jpg",
            bookPrice: "100",
        },
        {
            bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
            bookImg: "got-box-set.jpg",
            bookPrice: "100",
        }]
    },
];

export function changePage(pageID, callback) {
    if (pageID == "" || pageID == "home" || pageID == "blog") {
        $.get(`pages/${pageID}.html`, function (data) {
            console.log('data' + data);
            $('#app').html(data);
            callback();
        });
    } else if (pageID == "books") {
        $.get(`pages/${pageID}.html`, function (data) {
            console.log('data' + data);
            $('#app').html(data);
            // need to add book function
            $.each(bookPageData, function(idx, book){
                console.log(book);
                 $(".books-sections").append(`
            <div class="books-block">
                <div class="books-title">${book.sectionTitle}</div>
                    <div class="books">
                        <div class="book">
                            <div class="book-img">
                                <img src="${book.sectionBooks[idx].bookImg}" alt="img">
                            </div>
                            <div class="book-info">
                                <div class="book-desc">
                                    <p>${book.bookDesc}</p>
                                </div>
                                <div class="book-price">
                                    <p>${book.bookPrice}</p>
                                </div>
                                <div class="cart-button">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            `)
            });
        });
    } else {
        $.get(`pages/${pageID}.html`, function (data) {
            console.log('data' + data);
            $('#app').html(data);
            // need to put add to cart function
        })
    }
}

export function setUserInfo(userObject) {
    userInfo = userObject;
    console.log(userInfo);
}

export function addToCart(bookIdx) {
    cart.push(bookIdx);
    $("#cartcount").html(cart.length.toString());
}