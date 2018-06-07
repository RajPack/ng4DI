var csvExporter = (function () {

    function convert(headers, jsonArrObj, fileName) {
        var lines, blob;
        jsonArrObj = headers ? (jsonArrObj.unshift(headers) && jsonArrObj) : jsonArrObj;
        lines = rowsToLines(jsonArrObj);
        fileName = fileName ? fileName + '.csv' : 'export.csv';
        blob = new Blob([lines], { type: 'text/csv;charset=utf-8' });
        console.log(blob);
        navigator.msSaveBlob && downloadIE(blob, fileName) || downloadOtherBrowser(blob, fileName);
    }

    function rowsToLines(arr) {
        var rowSet = '';
        arr.forEach(function (rowobj) {
            var row = '';
            for (var key in rowobj) {
                row += row !== "" ? "," : "";
                row += escapeComma(rowobj[key]);
            }
            rowSet += row + '\r\n';
        });
        return rowSet;
    }

    function downloadIE(blob, fileName) {
        navigator.msSaveBlob(blob, fileName);
    }

    function downloadOtherBrowser(blob, fileName) {
        var link = document.createElement("a");
        if (link.download !== undefined) { 
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
    
    function escapeComma(dataStr) {
        if(dataStr.toString().match(/,/g)){
            return '"'+dataStr+'"';
        }
        return dataStr; 
    }

    return convert;
}());
