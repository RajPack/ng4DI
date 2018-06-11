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
  this.carousals = containerElem.getElementsByClassName('carousal-sections')[0].getElementsByClassName('carousal-section');
  this.links = containerElem.getElementsByClassName('carousal-links')[0].getElementsByClassName('dot-link');
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

  this.dataArr.forEach(function(item, index) {
    spanElem = document.createElement("span");
    aElem = document.createElement("a");
    aElem.setAttribute('data-index', index);
    aElem.className =
      "dot-link " + (this.activeIndex === index ? "active-slide" : "");
    spanElem.appendChild(aElem);
    this.links.appendChild(spanElem);
  }.bind(this));
  return this.links;
};
Carousal.prototype.genCarousalItems = function() {
  this.carousals = document.createDocumentFragment();
  var containerElem, headerElem, bodyElem;

  this.dataArr.forEach(function(item, index) {
    //container
    containerElem = document.createElement("div");
    containerElem.className =
      "carousal-section " + (this.activeIndex === index ? "active" : "hidden");
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
  }.bind(this));
  return this.carousals;
};
Carousal.prototype.initiateAnimation = function() {
    this.intervalRef = setInterval(function(){
        this.activeIndex = this.activeIndex+1 === this.dataArr.length ?  0 : this.activeIndex+1;
        this.animate(this.activeIndex);
    }.bind(this), this.timeInterval);
}
Carousal.prototype.animate = function(activeIndex) {
    //carousal animation
    for(var i =0 ; i< this.carousals.length ; i++){
        var index = i, elem = this.carousals[i];
        if(index===activeIndex){
            elem.className = "carousal-section active";
        } else {
            elem.className = 'carousal-section hidden';
        }
    }

    //link animation 
    for(var i =0 ; i< this.links.length ; i++){
        var index = i, elem = this.links[i];
        if(index===activeIndex){
            elem.className = "dot-link active-slide";
        } else {
            elem.className = 'dot-link';
        }
    }

};

Carousal.prototype.switchSlide = function(e) {
    var linkElem = e.target, linkIndex = linkElem.getAttribute('data-index');
    this.activeIndex = +linkIndex;
    this.restartAnimation();
};

Carousal.prototype.restartAnimation = function () {
    window.clearInterval(this.intervalRef);
    this.animate(this.activeIndex)
    this.initiateAnimation();
}

Carousal.prototype.destory = function() {
  window.clearInterval(this.intervalRef);
};
