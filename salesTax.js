var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
var totalSales = function (i) {
        var total = 0
        for (var r = 0; r < companySalesData[i].sales.length; r++) {
        total += companySalesData[i].sales[r]
        console.log(companySalesData[i].sales.length)
        }
        return total;
      }

function calculateSalesTax(salesData, taxRates) {
  var TaxedData = {}
  //loop through array * array length
  for (var i = 0; i < companySalesData.length; i++) {
    if(TaxedData[companySalesData[i].name]) {
     TaxedData[companySalesData[i].name].totalsales += totalSales(i)
    }
    else {
      TaxedData[companySalesData[i].name] = { totalsales: totalSales(i) }
    }
  }
 console.log(TaxedData)
}
  // for (var company in companySalesData) {
  //      += companySalesData.sales[r];


  //  }

//   // Implement your code here
// for (var company in companySalesData) {
//   var totalsales = 0;
//   for

// }


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
// */
// sum sales within companySalesData array
// multiply sum by sales tax by province
// add sales of like companies to an object with totalSales and TotalTaxes as key value pairs
