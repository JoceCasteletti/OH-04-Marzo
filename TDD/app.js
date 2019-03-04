


window.dividir = (numUno) => {

  if (numUno % 3 === 0 && numUno % 5 === 0) {
    return 'CodeHard';
  } else if (numUno % 3 === 0) {
    return 'Code';
  } else if (numUno % 5 === 0){
    return 'Hard';
  } else {
    return 'Error, súper pavo';
  }

}