

  window.onload = function () {


    //Line Chart


    var chart1 = new CanvasJS.Chart("chartContainer1", {

      title:{
        text: "Total Value -- Wallet"
      },
      data: [//array of dataSeries
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "line",
         dataPoints: [
         { label: "Jan", y: 800 },
         { label: "Feb", y: 1000 },
         { label: "Mar", y: 1100 },
         { label: "Apr", y: 1200 },
         { label: "May", y: 1700 },
         { label: "Jun", y: 2100 },
         { label: "Jul", y: 2500 },
         { label: "Aug", y: 2800 },
         { label: "Sep", y: 3000},
         { label: "Oct", y: 3200 },
         { label: "Nov", y: 7000 },
         { label: "Dec", y: 15000 },
         { label: "EOY Value", y: 4000 },

         ]
       }
       ]
     });



    chart1.render();

///Pie Chart

    var chart2 = new CanvasJS.Chart("chartContainer2", {

      title:{
        text: "Total EOY Value -- Wallet"
      },
      data: [//array of dataSeries
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "pie",
         dataPoints: [
         { label: "Bitcoin", y: 3000 },
         { label: "Ethereum", y: 750 },
         { label: "Scam-coin", y: 250 },


         ]
       }
       ]
     });chart2.render();


////double bar chart

     var chart3 = new CanvasJS.Chart("chartContainer3", {

      theme: "light2",

      title:{
        text: "BTC -- ETH -- SCM"
      },

      data: [  //array of dataSeries
      { //dataSeries - first quarter
 /*** Change type "column" to "bar", "area", "line" or "pie"***/
       type: "line",
       name: "Bitcoin",
       showInLegend: true,
       dataPoints: [
       { label: "Jan", y: 800 },
         { label: "Feb", y: 1000 },
         { label: "Mar", y: 1100 },
         { label: "Apr", y: 1200 },
         { label: "May", y: 1700 },
         { label: "Jun", y: 2100 },
         { label: "Jul", y: 2500 },
         { label: "Aug", y: 2800 },
         { label: "Sep", y: 3000},
         { label: "Oct", y: 3200 },
         { label: "Nov", y: 7000 },
         { label: "Dec", y: 15000 },
         { label: "EOY Value", y: 4000 },
       ]
     },

     { //dataSeries - first quarter
      /*** Change type "column" to "bar", "area", "line" or "pie"***/
            type: "line",
            name: "Ethereum",
            showInLegend: true,
            dataPoints: [
            { label: "Jan", y: 250 },
              { label: "Feb", y: 250 },
              { label: "Mar", y: 250 },
              { label: "Apr", y: 280 },
              { label: "May", y: 300 },
              { label: "Jun", y: 400 },
              { label: "Jul", y: 500 },
              { label: "Aug", y: 600 },
              { label: "Sep", y: 700},
              { label: "Oct", y: 300 },
              { label: "Nov", y: 400 },
              { label: "Dec", y: 500 },
              { label: "EOY Value", y: 350 },
            ]
          },
          { //dataSeries - first quarter
            /*** Change type "column" to "bar", "area", "line" or "pie"***/
                  type: "line",
                  name: "Scamcoin",
                  showInLegend: true,
                  dataPoints: [
                  { label: "Jan", y: 100 },
                    { label: "Feb", y: 100 },
                    { label: "Mar", y: 100 },
                    { label: "Apr", y: 100 },
                    { label: "May", y: 100 },
                    { label: "Jun", y: 100 },
                    { label: "Jul", y: 100 },
                    { label: "Aug", y: 100 },
                    { label: "Sep", y: 100},
                    { label: "Oct", y: 100 },
                    { label: "Nov", y: 100 },
                    { label: "Dec", y: 100 },
                    { label: "EOY Value", y: 100 },
                  ]
                }
    ],
 /** Set axisY properties here*/
    axisY:{
      prefix: "$",
      suffix: ""
    }
  });

chart3.render();
}


