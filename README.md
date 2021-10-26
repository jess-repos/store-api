# Store API by jess-repos

Shooping Platform API with User authentication using Json Web Tokens

## How to start

1. clone repository - $git clone https://github.com/jess-repos/store-api.git
2. alternatively, you can download zip file from https://github.com/jess-repos/store-api.git and extract
3. open terminal/command line on project directory
4. install nodemon as dev dependency or globally
5. $npm install
6. $npm start

## Technologies

1. dotenv - use environment variables
2. express - server
3. sqlite3 - database
4. sequelize - Object Relational Modeling
5. jsonwebtoken - authentication

## Files

1. ./database/connection.js - database connection
2. ./middlewares/verifyToken.js - middleware to verify token
3. ./models/User.js - User model
4. ./models/Product.js - Product model
5. ./routes/auth.js - Auth Routes
6. ./routes/user.js - User Routes
7. ./routes/product.js - Produuct Routes
8. ./services/AuthServices.js - Login handler
9. ./services/UserServices.js - Create user handler/Update user handler
10. ./services/ProductServices.js - Product CRUD handler
11. ./utilities/asyncIO.js - simplify use of asynchronous methods

## Routes

1. [POST]/users/ - Create user
2. [PUT]/users/ - Update user (requires token)
3. [POST]/auth/login/ - Login
4. [GET]/products/ - Get all products
5. [GET]/products/seller/ - Get all products by seller(requires seller token)
6. [POST]/products/ - Create product (requires seller token)
7. [PUT]/products/:id/ - Update product (requires seller token)
8. [DELETE]/products/:id/ - Delete product (requires seller token)

## Models

**User Model**

```
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { len: [4, 128] },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { len: [4, 128] },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [4, 128] },
    },
  }
```

**Product Model**

```
  {
    name: {
      type: DataTypes.STRING,
      validate: { len: [4, 128] },
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      validate: { len: [4, 128] },
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    seller_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  }
```
