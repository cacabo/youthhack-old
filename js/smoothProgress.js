$f1 = $("#fluid-1");
$f2 = $("#fluid-2");
$f3 = $("#fluid-3");

const interval = 2000;

setInterval(function() {
  let r1 = Math.floor(Math.random() * 70);
  let r2 = Math.floor(Math.random() * 50);
  let r3 = Math.floor(Math.random() * 40);
  $f1.css('width', `${r1 + '%'}`);
  $f2.delay(interval / 3).css('width', `${r2 + '%'}`);
  $f3.delay(interval / 3 * 2).css('width', `${r3 + '%'}`);
}, interval);
