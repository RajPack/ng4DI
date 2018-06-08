function downloadcsv(){
    csvExporter(headers, sampleData, "Orders");
}

var sampleData  = [
    {
        ordernumber: 123,
        description: "asd desc",
        detail: "abc"
    },
    {
        ordernumber: 13,
        description: "xyzv, desc",
        detail: "5555"
    },
    {
        ordernumber: 23,
        description: "qer desc",
        detail: "334"
    },
    {
        ordernumber: 12,
        description: "xyz desc",
        detail: "222"
    },
    {
        ordernumber: 23,
        description: "zcv desc",
        detail: "111"
    }
];

var headers = {
    ordernumber: "Order #", description: "Description", detail: "Order Detail"
};

