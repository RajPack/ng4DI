var breadCrumbAPI = (function () {
  var instance = {
    labels: null,
    data: null
  }

  function createBreadCrumb(labels, statusArr, EventsArr) {
    resetInstance();
    initInstance(labels,  statusArr, EventsArr);
  }
  function initInstance (labels,  statusArr, EventsArr) {
    instance.labels = labels;
    //var translatedlabels = translateLabels(labels);
    deriveInstanceData(translatedlabels || labels, statusArr, EventsArr);
  }
  function resetInstance () {
    instance.labels = instance.data = null;
  }
  function deriveInstanceData (labels, statusArr, EventsArr){
    instance.data = [];
    labels.forEach(function(label, index) {
      var dataObj = {
        label: label,
        status: statusArr[index] || 'inactive',
        events: EventsArr[index] || {}
      };
      instance.data.push(dataObj);
    });
  }
  function translateLabels(labels) {
    return   zebutils.LabelTransalation.translate(labels);
  }
  function getInstance() {
    return instance;
  }
  function updateInstanceStatus (statusArr) {
    if(instance.data === null) {return;}
    instance.data.forEach(function(dataObj, index){
      dataObj.status = statusArr[index] || 'inactive'; 
    });
  }
  function updateInstanceEvents (eventsArr) {
    if(instance.data === null) {return;}
    instance.data.forEach(function (dataObj, index){
      dataObj.events = eventsArr[index] || {};
    })
  }



  function drawProgress(el) {
    var bars = getBars(instance.data);
    render(el, bars);
  }

  function getBars(data) {
    var list = document.createElement('div');
    list.className = "progress-nav-list";

    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var nextitem = data[i + 1];
      list.appendChild(drawSingleBar(item.label, item.status || "inactive", nextitem ? nextitem.status || 'inactive' : 'inactive', item.events || {}));
    }
    return list;
  }

  function drawSingleBar(label, status, nextitemStatus, events) {
    var itemContainer = document.createElement('div');
    itemContainer.className = "progress-item-container";
    var item = document.createElement('div');
    item.className = "progress-item-label";
    item.innerText = label;
    item.setAttribute('status', status);
    itemContainer.appendChild(item);
    var innerTriangle = document.createElement('span');
    innerTriangle.className = "progress-nav-inner-triangle";
    innerTriangle.setAttribute('status', status);
    var outerTriangle = document.createElement('span');
    outerTriangle.className = "progress-nav-outer-triangle";
    outerTriangle.setAttribute('status', status);
    itemContainer.appendChild(innerTriangle);
    itemContainer.appendChild(outerTriangle);
    addEventListener(itemContainer, events);
    return itemContainer;
  }

  function render(el, bars) {
    var container = document.querySelector(el);
    container && (clearContainer(container)) && (container.appendChild(bars));
  }

  function clearContainer(container) {
    container.innerHTML = "";
    return true;
  }

  function addEventListener(element, events) {
    for (var key in events) {
      if (events.hasOwnProperty(key)) {
        element.addEventListener(key, events[key]);
      }
    }

  }

  return {
    createInstance: createBreadCrumb,
    drawInstance: drawProgress,
    updateInstanceStatus: updateInstanceStatus,
    updateInstanceEvents: updateInstanceEvents,
    getInstance: getInstance
  };
})();