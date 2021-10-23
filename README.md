# JWT Authentication by jess-repos

User authentication using Json Web Tokens

## How to start

1. clone repository - $git clone https://github.com/jess-repos/jwt-authentication.git
2. alternatively, you can download zip file from https://github.com/jess-repos/jwt-authentication.git and extract
3. open terminal/command line on project directory
4. $npm install
5. $npm start

## Technologies

1. dotenv - use environment variables
2. express - server
3. sqlite3 - database
4. sequelize - Object Relational Modeling
5. jsonwebtoken - authentication

## Includes

1. ./connection/database.js - database connection
2. ./middlewares/verifyToken.js - middleware to verify token
3. ./models/User.js - User model
4. ./routes/auth.js - Auth Routes
5. ./routes/user.js - User Routes
6. ./services/AuthServices - Login handler
7. ./services/UserServices - Create user handler/Update user handler
8. ./utilities/asyncIO.js - simplify use of asynchronous methods

### Routes

1. [POST]/users/create/ - Create User
2. [POST]/users/update/ - Update User (requires token)
3. [POST]/auth/login/ - Login

### Models

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
