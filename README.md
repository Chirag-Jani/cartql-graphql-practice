Link:
https://api.cartql.com/

## Queries and Mutations

```
# Write your query or mutation here
query Cart($cartId: ID!) {
  cart(id: $cartId) {
    currency {
      code
      symbol
    }
    items {
      id
      name
      description
      type
    }
    grandTotal {
      amount
      currency {
        code
        symbol
      }
    }
  }
}

mutation UpdateCart($updateCartInput: UpdateCartInput!) {
  updateCart(input: $updateCartInput) {
    currency {
      code
      symbol
    }
  }
}

mutation EmptyCart($emptyCartInput: EmptyCartInput!) {
  emptyCart(input: $emptyCartInput) {
    id
  }
}

mutation DeleteCart($deleteCartInput: DeleteCartInput!) {
  deleteCart(input: $deleteCartInput) {
    success
    message
  }
}

mutation AddItem($addItemInput: AddToCartInput!) {
  addItem(input: $addItemInput) {
    id
  }
}

mutation SetItems($setItemsInput: SetCartItemsInput!) {
  setItems(input: $setItemsInput) {
    updatedAt
  }
}

mutation IncrementItemQuantity(
  $incrementItemQuantityInput: UpdateItemQuantityInput!
) {
  incrementItemQuantity(input: $incrementItemQuantityInput) {
    updatedAt
  }
}

mutation DecrementItemQuantity(
  $DecrementItemQuantityInput: UpdateItemQuantityInput!
) {
  decrementItemQuantity(input: $DecrementItemQuantityInput) {
    updatedAt
  }
}

mutation UpdateItem($updateCartItemInput: UpdateCartItemInput!) {
  updateItem(input: $updateCartItemInput) {
    updatedAt
  }
}

mutation RemoveItem($removeItemInput: RemoveCartItemInput!) {
  removeItem(input: $removeItemInput) {
    id
  }
}

mutation CheckOut($checkoutInput: CheckoutInput!) {
  checkout(input: $checkoutInput) {
    updatedAt
  }
}

```

### Variables and Inputs

```
{
  "cartId": "1",
  "updateCartInput": {
    "id": "1",
    "currency": {
      "code": "USD",
      "symbol": "$"
    }
  },
  "emptyCartInput": {
    "id": "1"
  },
  "deleteCartInput": {
    "id": "1"
  },
  "addItemInput": {
    "cartId": "1",
		"name": "Item 1",
    "description": "This is Description of Item 1",
    "id": "1",
    "price": 1111,
    "quantity": 2
  },
  "setItemsInput": {
    "cartId": "1",
    "items": [
      {
        "name": "Item 1",
        "description": "This is Description of Item 1",
        "id": "1",
        "price": 539,
        "quantity": 2
    	},
    	{
        "name": "Item 2",
        "description": "This is Description of Item 2",
        "id": "2",
        "price": 220,
        "quantity": 3
      }
    ]
  },
  "incrementItemQuantityInput": {
    "cartId": "1",
    "id": "1",
    "by": 1
  },
  "DecrementItemQuantityInput": {
    "cartId": "1",
    "id": "1",
    "by": 6
  },
  "updateCartItemInput": {
    "cartId": "1",
    "id": "1",
    "price": 999
  },
  "removeItemInput": {
    "cartId": "1",
    "id": "1"
  },
  "checkoutInput": {
    "cartId": "1",
    "email": "chirag@gmail.com",
    "shipping": {
      "name": "Chirag Jani",
      "line1": "home",
      "city": "Surat",
      "postalCode": "856329",
      "country": "India"
    }
  }
}

```
