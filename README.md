# Kaufee

## Pages

* Home (/)
* Login (/login)
* Register (/register)
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

* creds
  - id (pk)
  - username
  - hash
* users
  - id (pk)
  - cred_id (fk)
  - name
  - order_text
* orders
  - id (pk)
  - date
  - is_complete
  - owner_id
* order_items
  - id (pk)
  - user_id (fk)
  - order_id (fk)
  - order_text
