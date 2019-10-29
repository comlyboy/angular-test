// import express from 'express';
// import Customer, { ICustomer } from '../model/customer';
// import authCheck from '../middleware/auth-check';


// exports.getAllCustomers = authCheck, (req, res, next) => {
//     const pageSize = +req.query.pagesize;
//     const currentPage = +req.query.page;
//     const customerQuery = Customer.find({ createdBy: req["userData"].userId });
//     let fetchedCustomers;
//     if (pageSize && currentPage) {
//         customerQuery.skip(pageSize * (currentPage - 1))
//             .limit(pageSize);
//     }
//     customerQuery
//         .then(document => {
//             fetchedCustomers = document;
//             return Customer.countDocuments({ createdBy: req["userData"].userId });
//         })
//         .then(count => {
//             res.status(200).json({
//                 message: 'Customer fetched!!!',
//                 customers: fetchedCustomers,
//                 totalCustomers: count
//             });
//         });

// }