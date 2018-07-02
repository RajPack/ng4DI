document.addEventListener("DOMContentLoaded", function () {


  breadCrumbAPI.createInstance(
    ["Add Product", "My Step", "Payment", "Shipping Details", "Other Step"],
    ['complete', 'active'],
    [
      { click: appendDom.bind(this, "It is a completed step") },
      { click: appendDom.bind(this, "It is an active step") }
    ]
  );

  breadCrumbAPI.drawInstance('#nav-progress-container');

  console.log(breadCrumbAPI.getInstance());

  setTimeout(function () {
    breadCrumbAPI.updateInstanceStatus(['complete', 'complete', 'active']);
    breadCrumbAPI.drawInstance('#nav-progress-container');
  }, 3000);

  setTimeout(function () {
    breadCrumbAPI.updateInstanceEvents([
      { click: appendDom.bind(this, "It is a completed step") },
      { click: appendDom.bind(this, "It is a completed step") },
      { click: appendDom.bind(this, "It is an active step") }
    ]);
    breadCrumbAPI.drawInstance('#nav-progress-container');
  }, 3000);

});

// var sampleData = [
//   {
//     label: "Add Product",
//     status: "complete",
//     events: { click: appendDom.bind(this, "You have clicked on Add Product") }
//   },
//   {
//     label: "Bulk Order",
//     status: "complete",
//     events: { click: appendDom.bind(this, "You have clicked on Bulk Order") }
//   },
//   {
//     label: "Add Adresss",
//     status: "active",
//     events: { click: appendDom.bind(this, "You have clicked on Add Address") }
//   },
//   {
//     label: "Payment",
//     status: "inactive",
//     events: { click: appendDom.bind(this, "You have clicked on Payments") }
//   },
//   {
//     label: "Shipping Details",
//     status: "inactive",
//     events: {
//       click: appendDom.bind(this, "You have clicked on Shipping Details")
//     }
//   }
// ];

function appendDom(message) {
  var messageElem = document.createElement("div");
  messageElem.innerText = message;
  document.body.querySelector("#messages").appendChild(messageElem);
}
