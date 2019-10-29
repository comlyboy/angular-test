// // create connection to th database
// // query the database for all Custom
// // count the number of customers returned

// let customerObject = {}; //!Important

// //for total customer
// let totalCustomer = customerObject.length();

// //for total work in progress
// let totalProgress = 0;
// customerObjec.forEach(d => {
//     if(d.status === "In progress")
//         totalProgress++;
// });

// //create a module for the metrics
// let dashboardMetrics = function(){        
//     //collect dashboard metrics
//     let metrics = {
//         totalCustomer: customerObject.length,
//         totalProgress: 0,
//         totalRepair: 0,
//         totalUnrepair: 0,
//         totalDelivered: 0
//     }
//     //loop through all the customer one by one
//     customerObject.forEach(function(d){
//         // let tempcount = 0;
//         switch (d.status) {
//             case "In progress":
//                 metrics.totalProgress++;            
//                 break;
//             case "completed":
//                 metrics.totalRepair++;
//                 break;
//             case "unrepaired":
//                 metrics.totalUnrepair++;
//                 break;
//             case "delivered":
//                 metrics.totalDelivered++;
//                 break;
//         }

//     });
//     return metrics;
// }

// module.exports = dashboardMetrics;