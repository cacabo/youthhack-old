$f1 = $("#fluid-1");
$f2 = $("#fluid-2");
$f3 = $("#fluid-3");

setInterval(function() {
  let r1 = Math.floor(Math.random() * 70);
  console.log(rand);
  $f1.css('width', `${r1 + '%'}`);
}, 1000);
