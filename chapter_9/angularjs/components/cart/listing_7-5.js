angular.module("cart", [])
.factory(
  "cart2",
  function () {
    var cartData = [];

    return {
      addProduct: function (id, name, price) {
        var addedToExistingItem = false;
        for (var i = 0; i < cartData.length; i++) {
          if (cartData[i].id === id) {
            cartData[i].count++;
            addedToExistingItem = ture;
            break;
          }
        }

        if (!addedToExistingItem) {
          cartData.push({
            count: 1,
            id: id,
            price: price,
            name: name
          });
        }
      },

      removeProduct: function (id) {

      },

      getProducts: function () {
        return cartData;
      }
    }
  });
