// ===============================
// GRAPHIFY MAIN JAVASCRIPT FILE
// ===============================

// ----------- SOCIAL GRAPH -----------
function loadSocialGraph() {

  var nodes = new vis.DataSet([
    { id: 1, label: "You" },
    { id: 2, label: "Alice" },
    { id: 3, label: "Bob" },
    { id: 4, label: "Charlie" },
    { id: 5, label: "David" }
  ]);

  var edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 1, to: 5 },
    { from: 5, to: 3 }
  ]);

  var container = document.getElementById("network");

  var data = { nodes: nodes, edges: edges };

  var options = {
    nodes: {
      shape: "dot",
      size: 22,
      font: { size: 16, color: "#000" }
    },
    edges: {
      arrows: "to",
      smooth: true
    },
    physics: {
      enabled: true
    }
  };

  new vis.Network(container, data, options);
}


// ----------- WEB GRAPH -----------
function loadWebGraph() {

  var nodes = new vis.DataSet([
    { id: 1, label: "Home Page" },
    { id: 2, label: "About" },
    { id: 3, label: "Contact" },
    { id: 4, label: "Blog" }
  ]);

  var edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 4, to: 3 }
  ]);

  var container = document.getElementById("network");

  var data = { nodes: nodes, edges: edges };

  new vis.Network(container, data, {});
}


// ----------- SHORTEST PATH -----------
function findShortestPath() {

  let path1 = 5 + 3; // A → B → C
  let path2 = 10;    // A → C

  let shortest = Math.min(path1, path2);

  document.getElementById("result").innerHTML =
    "Shortest Path Cost: " + shortest;
}


// ----------- AUTO LOAD FUNCTION -----------
window.onload = function () {

  // Detect page and load correct graph
  if (document.title.includes("Social")) {
    loadSocialGraph();
  }

  if (document.title.includes("Web")) {
    loadWebGraph();
  }

};