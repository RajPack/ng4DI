document.addEventListener("DOMContentLoaded", function() {
  breadCrumbAPI.draw(sampleData, "#nav-progress-container");
});

var sampleData = [
  {
    label: "Add Product",
    status: "complete",
    events: { click: appendDom.bind(this, "You have clicked on Add Product") }
  },
  {
    label: "Bulk Order",
    status: "complete",
    events: { click: appendDom.bind(this, "You have clicked on Bulk Order") }
  },
  {
    label: "Add Adresss",
    status: "active",
    events: { click: appendDom.bind(this, "You have clicked on Add Address") }
  },
  {
    label: "Payment",
    status: "inactive",
    events: { click: appendDom.bind(this, "You have clicked on Payments") }
  },
  {
    label: "Shipping Details",
    status: "inactive",
    events: {
      click: appendDom.bind(this, "You have clicked on Shipping Details")
    }
  }
];

function appendDom(message) {
  var messageElem = document.createElement("div");
  messageElem.innerText = message;
  document.body.querySelector("#messages").appendChild(messageElem);
}
