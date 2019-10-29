(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// cors gives permissin to  "GET, POST, PUT, PATCH, DELETE, OPTIONS" capability
// mongoose makes schema possible in mongo DB
// bodyparser exposes the body portion of an incoming request on "req.body"
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const express_1 = tslib_1.__importDefault(__webpack_require__(/*! express */ "express"));
const body_parser_1 = tslib_1.__importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const cors_1 = tslib_1.__importDefault(__webpack_require__(/*! cors */ "cors"));
// const metrics = require("./controller/customerMetrics");
const customer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./routes/customer */ "./src/routes/customer.ts"));
// import statusRoutes from './routes/deviceStatus';
// import incomeRoutes from './routes/income';
// import deviceTypeRoutes from './routes/deviceType';
const user_1 = tslib_1.__importDefault(__webpack_require__(/*! ./routes/user */ "./src/routes/user.ts"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
// app.use(bodyParser.urlencoded({extended: true}));
// permissions
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});
// Connecting to mongo DB compass
mongoose_1.default.connect("mongodb://localhost:27017/Handyman_DB", { useNewUrlParser: true, useCreateIndex: true })
    // Connecting to mongoDB atlas
    // mongoose.connect("mongodb+srv://cornelius:d8c8fLcOVovfzHpo@cluster1-pauiv.mongodb.net/easy-client?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
    console.log('Connected to database!!!');
})
    .catch(() => {
    console.log('can not connect to database');
});
// For various routes
app.use('/api', customer_1.default);
// app.use('/api', incomeRoutes);
// app.use('/api', statusRoutes);
// app.use('/api', deviceTypeRoutes);
app.use('/api', user_1.default);
exports.default = app;


/***/ }),

/***/ "./src/middleware/auth-check.ts":
/*!**************************************!*\
  !*** ./src/middleware/auth-check.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// this file checks for user token presence and if it's valid credentials to log in
// is meant to be protect customer route
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
exports.default = (req, res, next) => {
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.split(" ")[1];
        const decodedToken = jsonwebtoken_1.default.verify(token, 'is_a_secret_dont_tell_anybody');
        req["userData"] = { userName: decodedToken.userName, userId: decodedToken.userId };
        next();
    }
    catch (error) {
        res.status(401).json({
            message: "Auth don fail o!!!!"
        });
    }
};


/***/ }),

/***/ "./src/model/customer.ts":
/*!*******************************!*\
  !*** ./src/model/customer.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const customerShema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    deviceType: { type: String, required: true, trim: true },
    brandModel: { type: String, required: true, trim: true },
    imeiNumber: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true, default: 'In progress' },
    amount: { type: Number, required: true, trim: true },
    advancePaid: { type: Number, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    created: { type: String, default: Date.now },
    createdBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true }
});
exports.default = mongoose_1.default.model('Customer', customerShema);


/***/ }),

/***/ "./src/model/user.ts":
/*!***************************!*\
  !*** ./src/model/user.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const mongoose_unique_validator_1 = tslib_1.__importDefault(__webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator"));
const userShema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, lowercase: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
});
userShema.plugin(mongoose_unique_validator_1.default);
exports.default = mongoose_1.default.model('User', userShema);


/***/ }),

/***/ "./src/routes/customer.ts":
/*!********************************!*\
  !*** ./src/routes/customer.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const express_1 = tslib_1.__importDefault(__webpack_require__(/*! express */ "express"));
const customer_1 = tslib_1.__importDefault(__webpack_require__(/*! ../model/customer */ "./src/model/customer.ts"));
const auth_check_1 = tslib_1.__importDefault(__webpack_require__(/*! ../middleware/auth-check */ "./src/middleware/auth-check.ts"));
const router = express_1.default.Router();
// Saving new customer to the database
router.post('/customers', auth_check_1.default, (req, res, next) => {
    const _customer = req.body;
    const customer = new customer_1.default({
        firstName: _customer.firstName,
        lastName: _customer.lastName,
        email: _customer.email,
        phoneNumber: _customer.phoneNumber,
        deviceType: _customer.deviceType,
        brandModel: _customer.brandModel,
        imeiNumber: _customer.imeiNumber,
        amount: _customer.amount,
        advancePaid: _customer.advancePaid,
        description: _customer.description,
        createdBy: req["userData"].userId
    });
    customer.save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Post added!!!',
            customerID: result._id
        });
    });
});
// Getting customers from database
router.get('/customers', auth_check_1.default, (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const customerQuery = customer_1.default.find({ createdBy: req["userData"].userId });
    let fetchedCustomers;
    if (pageSize && currentPage) {
        customerQuery.skip(pageSize * (currentPage - 1))
            .limit(pageSize);
    }
    customerQuery
        .then(document => {
        fetchedCustomers = document;
        return customer_1.default.countDocuments();
    })
        .then(count => {
        res.status(200).json({
            message: 'Customer fetched!!!',
            customers: fetchedCustomers,
            totalCustomers: count
        });
    });
});
// Getting customer for editing and details page
router.get('/customers/:_id', auth_check_1.default, (req, res, next) => {
    customer_1.default.findById({ _id: req.params._id, createdBy: req["userData"].userId }).then(customer => {
        if (customer) {
            res.status(200).json(customer);
            // console.log(customer)
        }
        else {
            res.status(404).json({ message: "can't find customer!" });
        }
    });
});
// Deleting a customer
router.delete('/customers/:_id', auth_check_1.default, (req, res, next) => {
    customer_1.default.deleteOne({ _id: req.params._id, createdBy: req["userData"].userId }).then(result => {
        // if (result.deletedCount > 0) {
        //     console.log(result)
        //     res.status(200).json({ message: 'Delete successfull!!!' });
        // } else {
        //     console.log(result)
        //     res.status(401).json({ message: 'Delete not allowed!!!' });
        // }
    });
});
// Editing customer details
router.put('/customers/:_id', auth_check_1.default, (req, res, next) => {
    const _customer = req.body;
    customer_1.default.findById({ _id: req.params._id, createdBy: req["userData"].userId }).then(customerDb => {
        if (customerDb) {
            const custRealObj = JSON.parse(JSON.stringify(customerDb));
            const customer = Object.assign({}, custRealObj, {
                firstName: _customer.firstName,
                lastName: _customer.lastName,
                email: _customer.email,
                phoneNumber: _customer.phoneNumber,
                deviceType: _customer.deviceType,
                brandModel: _customer.brandModel,
                imeiNumber: _customer.imeiNumber,
                amount: _customer.amount,
                advancePaid: _customer.advancePaid,
                description: _customer.description
            });
            customer_1.default.updateOne({ _id: req.params._id, createdBy: req["userData"].userId }, customer).then(result => {
                if (result.nModified > 0) {
                    console.log(result);
                    res.status(200).json({ message: 'Update successfull!!!' });
                }
                else {
                    console.log(result);
                    res.status(401).json({ message: 'Not allowed!!!' });
                }
            });
        }
        else {
            res.status(404).json({ message: "can't find customer!" });
        }
    });
});
exports.default = router;


/***/ }),

/***/ "./src/routes/user.ts":
/*!****************************!*\
  !*** ./src/routes/user.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// jwt is a token dependency for verifying user in middleware
// bcrypt prevent the password from saving as a plain text in d database
// 
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const express_1 = tslib_1.__importDefault(__webpack_require__(/*! express */ "express"));
const user_1 = tslib_1.__importDefault(__webpack_require__(/*! ../model/user */ "./src/model/user.ts"));
const bcrypt_1 = tslib_1.__importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
const router = express_1.default.Router();
// Adding new user
router.post("/user/signup", (req, res, next) => {
    bcrypt_1.default.hash(req.body.password, 10)
        .then(hash => {
        const user = new user_1.default({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: hash
        });
        user.save()
            .then(result => {
            res.status(201).json({
                message: "User registered successfully!!!",
                result: result
            });
        })
            .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "username already existing",
                error: err
            });
        });
    });
});
// logging exxisting user
router.post('/user/login', (req, res, next) => {
    let fetchedUser;
    user_1.default.findOne({ userName: req.body.userName })
        .then(user => {
        if (!user) {
            return res.status(401).json({
                message: 'User not exist!!!'
            });
        }
        fetchedUser = user;
        return bcrypt_1.default.compare(req.body.password, user.password);
    })
        .then(result => {
        if (!result) {
            return res.status(401).json({
                messsage: "User does not exist!!!"
            });
        }
        const token = jsonwebtoken_1.default.sign({ userName: fetchedUser.userName, userId: fetchedUser._id }, 'is_a_secret_dont_tell_anybody', { expiresIn: '1h' });
        res.status(200).json({
            token: token,
            expiresIn: '3500'
        });
    })
        .catch(err => {
        return res.status(401).json({
            message: "auth failled!!!"
        });
    });
});
exports.default = router;


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const app_1 = tslib_1.__importDefault(__webpack_require__(/*! ./app */ "./src/app.ts"));
const debug = __webpack_require__(/*! debug */ "debug")("node-angular");
const http_1 = tslib_1.__importDefault(__webpack_require__(/*! http */ "http"));
const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};
const onError = error => {
    const addr = server.address();
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
    console.log("Listening on " + bind);
};
const port = normalizePort(process.env.PORT || "3000");
app_1.default.set("port", port);
const server = http_1.default.createServer(app_1.default);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=server-dev.js.map