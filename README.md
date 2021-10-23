# JWT Authentication by jess-repos

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
4. ./routes/auth.js - [POST] Login route
5. ./routes/user.js - [POST] Create user route
6. ./routes/user.js - [PUT] Update user route
7. ./services/AuthServices - Login handler
8. ./services/UserServices - Create user handler/Update user handler
9. ./utilities/asyncIO.js - simplify use of asynchronous methods

### Routes

1. [POST]/users/ - Create User
2. [PUT]/users/ - Update User
3. [POST]/auth/login/ - Login

### Models

**User Model**

'''
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
'''

