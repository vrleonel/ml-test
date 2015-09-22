(function () {
    var app = angular.module('store', []);

    var gems = [
    {
        id: 1,
        name: 'TV Led 42\" Samsung ',
        price: 2000,
        description: 'lorem ipsum',
        soldOut: true,
        images: [
            {
                full:  'static/img/city-full-1.jpeg',
                thumb: 'static/img/city-thumb-1.jpeg',
            },
            {
                full:  'static/img/city-full-2.jpeg',
                thumb: 'static/img/city-thumb-2.jpeg',
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "Awesome Product",
                author: "Buyer 1",
            },
            {
                stars: 1,
                body: "I don't relly like it",
                author: "Buyer 2",
            },
        ]
    },
    {
        id: 2,
        name: 'iPad Mini Apple 16Gb Wifi Led',
        price: 1699.95,
        description: 'lorem ipsum',
        soldOut: false,
        images: [
            {
                full:  'static/img/city-full-2.jpeg',
                thumb: 'static/img/city-thumb-2.jpeg',
            },
            {
                full:  'static/img/city-full-1.jpeg',
                thumb: 'static/img/city-thumb-1.jpeg',
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "Do you have this one in white?",
                author: "Buyer",
            },
            {
                stars: 1,
                body: "No I don't, I only have black",
                author: "Seller",
            },
        ]
    }
    ];

    app.controller('StoreController', function(){
            this.products = gems;
    });

    app.controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });

})();
