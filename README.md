# A Cuppa

## Pages

* Home (/)
* Login (/login)
* Profile (/profile)
* History (/history)
* Order details (/orders/:id)


## API Routes

* GET /current-order
* POST /current-order
* PUT /current-order
* POST /order-item/:orderId/:userId
* DELETE /current-order/:userId
* POST /register
* POST /login
* GET /profile/:id
* PUT /profile


## DB Tables

* users
  - id (pk)
  - username
  - hash
* profiles
  - id (pk)
  - user_id (fk)
  - name
  - cuppa
* orders
  - id (pk)
  - date
  - is_complete
* order_items
  - id (pk)
  - user_id (fk)
  - order_id (fk)
  - order_text
