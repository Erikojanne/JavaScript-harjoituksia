function tappara()
{
  var luku = parseInt(document.getElementById('luku').value);
  if(luku >= 0)
  {
    document.getElementById('tap1').innerHTML = "luku on positiivinen";
  }
  else {
    document.getElementById('tap1').innerHTML = "luku on negatiivinen";
  }
}
