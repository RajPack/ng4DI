var zutils = (function() {
  var breadCrumbAPI = (function() {
    function drawProgress(data, el) {
      var bars = getBars(data);
      render(el, bars);
    }

    function getBars(data) {
      var list = document.createElement("div");
      list.className = "progress-nav-list";

      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var nextitem = data[i + 1];
        list.appendChild(
          drawSingleBar(
            item.label,
            item.status || "inactive",
            nextitem ? nextitem.status || "inactive" : "inactive",
            item.events || {}
          )
        );
      }
      return list;
    }

    function drawSingleBar(label, status, nextitemStatus, events) {
      var itemContainer = document.createElement("div");
      itemContainer.className = "progress-item-container";
      var item = document.createElement("div");
      item.className = "progress-item-label";
      item.innerText = label;
      item.setAttribute("status", status);
      itemContainer.appendChild(item);
      var innerTriangle = document.createElement("span");
      innerTriangle.className = "progress-nav-inner-triangle";
      innerTriangle.setAttribute("status", status);
      var outerTriangle = document.createElement("span");
      outerTriangle.className = "progress-nav-outer-triangle";
      outerTriangle.setAttribute("status", status);
      itemContainer.appendChild(innerTriangle);
      itemContainer.appendChild(outerTriangle);
      addEventListener(itemContainer, events);
      return itemContainer;
    }

    function render(el, bars) {
      var container = document.querySelector(el);
      container && container.appendChild(bars);
    }

    function addEventListener(element, events) {
      for (var key in events) {
        if (events.hasOwnProperty(key)) {
          element.addEventListener(key, events[key]);
        }
      }
    }

    return {
      draw: drawProgress
    };
  })();

  var Carousal = (function() {
    function Carousal(dataArr, config) {
      this.dataArr = dataArr;
      config = config || {};
      this.timeInterval = config.timeInterval || 10000;
      this.activeIndex = config.startWithIndex || 0;
      this.containerSel = config.containerSel || "body";

      this.init();
    }

    Carousal.prototype.render = function(carousal) {
      var containerElem = document.querySelector(this.containerSel);
      containerElem.appendChild(carousal);
      this.carousals = containerElem
        .getElementsByClassName("carousal-sections")[0]
        .getElementsByClassName("carousal-section");
      this.links = containerElem
        .getElementsByClassName("carousal-links")[0]
        .getElementsByClassName("dot-link");
    };
    Carousal.prototype.init = function() {
      var carousal = this.genCarousal();
      this.render(carousal);
      this.initiateAnimation();
    };

    Carousal.prototype.genCarousal = function() {
      var containerElem, sectionsElem, linkElem;

      //container
      containerElem = document.createElement("div");
      containerElem.className = "carousal-container";
      sectionsElem = document.createElement("div");
      sectionsElem.className = "carousal-sections";
      sectionsElem.appendChild(this.genCarousalItems());
      containerElem.appendChild(sectionsElem);

      //dot-links
      linksElem = document.createElement("div");
      linksElem.className = "carousal-links";
      linksElem.addEventListener("click", this.switchSlide.bind(this));
      linksElem.appendChild(this.genLinks());
      containerElem.appendChild(linksElem);

      return containerElem;
    };

    Carousal.prototype.genLinks = function() {
      this.links = document.createDocumentFragment();
      var spanElem, aElem;

      this.dataArr.forEach(
        function(item, index) {
          spanElem = document.createElement("span");
          aElem = document.createElement("a");
          aElem.setAttribute("data-index", index);
          aElem.className =
            "dot-link " + (this.activeIndex === index ? "active-slide" : "");
          spanElem.appendChild(aElem);
          this.links.appendChild(spanElem);
        }.bind(this)
      );
      return this.links;
    };
    Carousal.prototype.genCarousalItems = function() {
      this.carousals = document.createDocumentFragment();
      var containerElem, headerElem, bodyElem;

      this.dataArr.forEach(
        function(item, index) {
          //container
          containerElem = document.createElement("div");
          containerElem.className =
            "carousal-section " +
            (this.activeIndex === index ? "active" : "hidden");
          //Heading
          headerElem = document.createElement("div");
          headerElem.className = "carousal-title";
          headerElem.innerText = item.title;
          containerElem.appendChild(headerElem);
          //body
          bodyElem = document.createElement("div");
          bodyElem.className = "carousal-data";
          bodyElem.innerText = item.data;
          containerElem.appendChild(bodyElem);

          this.carousals.appendChild(containerElem);
        }.bind(this)
      );
      return this.carousals;
    };
    Carousal.prototype.initiateAnimation = function() {
      this.intervalRef = setInterval(
        function() {
          this.activeIndex =
            this.activeIndex + 1 === this.dataArr.length
              ? 0
              : this.activeIndex + 1;
          this.animate(this.activeIndex);
        }.bind(this),
        this.timeInterval
      );
    };
    Carousal.prototype.animate = function(activeIndex) {
      //carousal animation
      for (var i = 0; i < this.carousals.length; i++) {
        var index = i,
          elem = this.carousals[i];
        if (index === activeIndex) {
          elem.className = "carousal-section active";
        } else {
          elem.className = "carousal-section hidden";
        }
      }

      //link animation
      for (var i = 0; i < this.links.length; i++) {
        var index = i,
          elem = this.links[i];
        if (index === activeIndex) {
          elem.className = "dot-link active-slide";
        } else {
          elem.className = "dot-link";
        }
      }
    };

    Carousal.prototype.switchSlide = function(e) {
      var linkElem = e.target,
        linkIndex = linkElem.getAttribute("data-index");
      this.activeIndex = +linkIndex;
      this.restartAnimation();
    };

    Carousal.prototype.restartAnimation = function() {
      window.clearInterval(this.intervalRef);
      this.animate(this.activeIndex);
      this.initiateAnimation();
    };

    Carousal.prototype.destory = function() {
      window.clearInterval(this.intervalRef);
    };
    return Carousal;
  })();

  var csvExporter = (function() {
    function convert(headers, jsonArrObj, fileName) {
      var lines, blob;
      jsonArrObj = headers
        ? jsonArrObj.unshift(headers) && jsonArrObj
        : jsonArrObj;
      lines = rowsToLines(jsonArrObj);
      fileName = fileName ? fileName + ".csv" : "export.csv";
      blob = new Blob([lines], { type: "text/csv;charset=utf-8" });
      console.log(blob);
      (navigator.msSaveBlob && downloadIE(blob, fileName)) ||
        downloadOtherBrowser(blob, fileName);
    }

    function rowsToLines(arr) {
      var rowSet = "";
      arr.forEach(function(rowobj) {
        var row = "";
        for (var key in rowobj) {
          row += row !== "" ? "," : "";
          row += escapeComma(rowobj[key]);
        }
        rowSet += row + "\r\n";
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
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    function escapeComma(dataStr) {
      if (dataStr.toString().match(/,/g)) {
        return '"' + dataStr + '"';
      }
      return dataStr;
    }

    return convert;
  })();

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var hbarChartAPI = (function() {
    var svgNS = "http://www.w3.org/2000/svg";
    var chartWidth = 600,
      chartHeight = 400;
    var svgWidth = void 0,
      svgHeight = void 0,
      GraphX = void 0,
      LabelX = void 0,
      GraphHeight = void 0,
      GrossBarHeight = void 0,
      UnitBarHeight = void 0,
      labelSectionWidth = void 0,
      GraphSectionWidth = void 0,
      MaxValue = void 0,
      BarColor = void 0,
      UnitWidth = void 0,
      LabelSize = void 0;

    function generateChart(el, config) {
      var svg = init(config);
      renderGraphBars(svg, configData.data || []);
      renderGraphLabels(svg, configData.data || []);
      renderGrids(svg, config.data || []);
      render(svg, el);
    }

    function init(config) {
      setChartParams(config);
      var svg = createSVG(svgWidth, svgHeight);
      return svg;
    }

    function setChartParams(config) {
      svgWidth = config.chartWidth || chartWidth;
      svgHeight = config.chartHeight || chartHeight;
      GraphX = 0 + (30 * svgWidth) / 100;
      LabelX = 40;
      GraphSectionWidth = svgWidth - GraphX - 10;
      labelSectionWidth = GraphX - LabelX;
      GraphHeight = svgHeight - 40;
      GrossBarHeight = GraphHeight / (config.data.length || 1);
      UnitBarHeight = GrossBarHeight / 3;
      BarColor = config.BarColor || "#3882b0";
      LabelSize =
        svgWidth > 650
          ? "15px"
          : svgWidth > 400
            ? "13.5px"
            : svgWidth > 300
              ? "12.5px"
              : "12px";
    }

    function renderGraphBars(svg, dataArr) {
      var g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "bar-group");
      MaxValue = dataArr.reduce(function(max, current, currentIndex) {
        return (max = current.value > max ? current.value : max);
      }, 0);
      UnitWidth = GraphSectionWidth / (MaxValue + 10);
      dataArr = dataArr.map(function(item) {
        item.width = UnitWidth * item.value;
        return item;
      });
      dataArr.forEach(function(item, index) {
        g.appendChild(
          createRect(
            GraphX,
            UnitBarHeight * index * 3 + UnitBarHeight,
            item.width,
            UnitBarHeight,
            item.value,
            BarColor
          )
        );
      });
      svg.appendChild(g);
    }
    function renderGraphLabels(svg, dataArr) {
      var g = document.createElementNS(svgNS, "g");
      dataArr.forEach(function(item, index) {
        g.appendChild(
          createLabel(
            GraphX - 20,
            UnitBarHeight * index * 3 + (2 * UnitBarHeight - 4),
            item.label
          )
        );
      });
      var style = document.createElement("style");
      style.appendChild(
        document.createTextNode(
          ".graph_label {font-size: " +
            LabelSize +
            '; fill: #555555; font-family: "arial"} .bar-group rect:hover{fill: #008900 !important;;}'
        )
      );
      g.appendChild(style);
      svg.appendChild(g);
    }
    function renderGrids(svg, dataArr) {
      var g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "lines-group");
      var upperLimit = void 0,
        grids = [],
        stepFactor =
          MaxValue <= 12
            ? 2
            : MaxValue <= 40
              ? 5
              : MaxValue > 100
                ? MaxValue > 200
                  ? 40
                  : 20
                : 10;
      upperLimit = (MaxValue / 10 + 1) * 10;
      for (var i = 0; i <= upperLimit; i += stepFactor) {
        grids.push({
          width: i * UnitWidth,
          label: i
        });
      }
      grids.forEach(function(grid, index) {
        var x1 = GraphX + grid.width,
          y1 = GraphHeight,
          x2 = GraphX + grid.width,
          y2 = 0;
        g.appendChild(createLine(x1, y1, x2, y2, "black"));
        g.appendChild(createLabel(x1 + 5, y1 + 20, grid.label));
      });
      svg.appendChild(g);
    }

    function createRect(
      x,
      y,
      width,
      height,
      val,
      fillColor,
      strokeColor,
      strokeWidth
    ) {
      var rect = document.createElementNS(svgNS, "rect");
      rect = setAttributes(rect, [
        { attr: "x", val: x },
        { attr: "y", val: y },
        { attr: "width", val: width },
        { attr: "height", val: height },
        {
          attr: "style",
          val:
            "fill: " +
            fillColor +
            "; stroke: " +
            (strokeColor || "white") +
            "; stroke-width: " +
            (strokeWidth || 0)
        },
        { attr: "data-val", val: val }
      ]);
      var animate = document.createElementNS(svgNS, "animate");
      animate = setAttributes(animate, [
        { attr: "attributeName", val: "width" },
        { attr: "from", val: 0 },
        { attr: "to", val: width },
        { attr: "begin", val: "0s" },
        { attr: "dur", val: "0.8s" }
      ]);
      var title = document.createElementNS(svgNS, "title");
      title.appendChild(document.createTextNode(val));
      rect.appendChild(title);
      rect.appendChild(animate);

      return rect;
    }

    function createLabel(x, y, text) {
      var label = document.createElementNS(svgNS, "text");
      label = setAttributes(label, [
        { attr: "x", val: x },
        { attr: "y", val: y },
        { attr: "text-anchor", val: "end" },
        { attr: "class", val: "graph_label" }
      ]);
      label.appendChild(document.createTextNode(text));
      return label;
    }

    function createSVG(width, height) {
      var svg = document.createElementNS(svgNS, "svg");
      svg = setAttributes(svg, [
        { attr: "width", val: width },
        { attr: "height", val: height }
      ]);
      return svg;
    }

    function createLine(x1, y1, x2, y2, color) {
      var line = document.createElementNS(svgNS, "line");
      line = setAttributes(line, [
        { attr: "x1", val: x1 },
        { attr: "x2", val: x2 },
        { attr: "y1", val: y1 },
        { attr: "y2", val: y2 },
        {
          attr: "style",
          val: "stroke: " + (color || "black") + "; stroke-width: .25"
        }
      ]);
      return line;
    }

    function render(elemToRender, containerElemSelector) {
      document.querySelector(containerElemSelector).appendChild(elemToRender);
    }

    function setAttributes(elem, attrValArr) {
      var attrlist = [].concat(_toConsumableArray(attrValArr));
      return setAttr(attrlist);
      function setAttr(list) {
        var item = list.pop();
        elem.setAttributeNS(null, item.attr, item.val);
        return list.length > 0 ? setAttr(list) : elem;
      }
    }

    return {
      createChart: generateChart
    };
  })();

  var ServerPromise = (function () {
    function BSCall(BSName, BSMethod, INp) {
       var dfd = void 0,
           config = void 0,
           serv = void 0;
       dfd = $.Deferred();
       config = { async: true, cb: BSCB.bind(dfd) };
       serv = SiebelApp.S_App.GetService(BSName);
       serv.InvokeMethod(BSMethod, INp, config);
       return dfd.promise();
   };
   function BSCB(MethodName, INp, OUTp) {
       var resultSet = void 0,
           orig = { dataArr: arguments };
       try {
           resultSet = OUTp.GetChildByType("ResultSet");
           this.resolve(resultSet, orig);
       } catch (e) {
           console.log(e);
           this.reject(e, orig);
       }
   }
   return BSCall;
}());


  return {
    breadCrumbAPI: breadCrumbAPI,
    Carousal: Carousal,
    csvExporter: csvExporter,
    hbarChartAPI: hbarChartAPI,
    ServerPromise: ServerPromise
  };
})();
