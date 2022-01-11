function heippa()
{
  var arvo = document.getElementById('kieli').value;
  if(arvo == "en" )
  {
    document.getElementById('v5').innerHTML = "Hello World";
  }
  else if (arvo == "es")
  {
    document.getElementById('v5').innerHTML = "Hola Mundo";
  }
  else if (arvo == "ru")
  {
    document.getElementById('v5').innerHTML = "Hej Världen";
  }
  else
  {
    document.getElementById('v5').innerHTML = "Et valinnut mitään";
  }
}
