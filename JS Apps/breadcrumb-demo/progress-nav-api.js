var breadCrumbAPI = (function() {

    function drawProgress(data, el) {
      var bars = getBars(data);
      render(el, bars);
    }
  
    function getBars(data) {
      var list = document.createElement('div');
      list.className = "progress-nav-list";

      for (var i=0; i<data.length; i++) {
          var item = data[i];
          var nextitem = data[i+1];
          list.appendChild(drawSingleBar(item.label, item.status||"inactive", nextitem ? nextitem.status||'inactive' : 'inactive', item.events||{}));
      }
      return list;
    }
  
    function drawSingleBar(label, status, nextitemStatus, events) {
      var itemContainer = document.createElement('div');
      itemContainer.className="progress-item-container";
      var item = document.createElement('div');
      item.className="progress-item-label";
      item.innerText= label;
      item.setAttribute('status', status );
      itemContainer.appendChild(item);
      var innerTriangle = document.createElement('span');
      innerTriangle.className = "progress-nav-inner-triangle";
      innerTriangle.setAttribute('status', status);
      var outerTriangle = document.createElement('span');
      outerTriangle.className = "progress-nav-outer-triangle";
      outerTriangle.setAttribute('status', status );
      itemContainer.appendChild(innerTriangle);
      itemContainer.appendChild(outerTriangle);
      addEventListener(itemContainer, events);
      return itemContainer  ;
    }
  
    function render(el, bars){
        var container = document.querySelector(el);
        container && (container.appendChild(bars));
    }

    function addEventListener(element, events){
      for(var key in events){
        if(events.hasOwnProperty(key)){
          element.addEventListener(key, events[key]);
        }
      }
      
    }

    return {
      draw: drawProgress
    };
  })();