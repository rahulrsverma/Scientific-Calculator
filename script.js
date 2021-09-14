function backspace(calc) {                                            
  size = calc.display.value.length;
  calc.display.value = calc.display.value.substring(0, size-1);
}


function calculate(calc) {

  if(calc.display.value.includes("!")) {
       
      size = calc.display.value.length;
      n = Number(calc.display.value.substring(0, size-1));
      f = 1;
       
      for(i = 2; i <= n; i++)
          f = f*i;
      calc.display.value = f;
  }
   
  else if(calc.display.value.includes("%")) {
       
      size = calc.display.value.length;
      n = Number(calc.display.value.substring(0, size-1));
      calc.display.value = n/100;
  }

  else   
      calc.display.value = eval(calc.display.value);
}