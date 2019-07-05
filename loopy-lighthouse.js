let stark = 100;

while (stark <= 200) {
  if (stark % 3 === 0 && stark % 4 === 0){
    console.log('LoopyLighthouse');
  } else if (stark % 4 === 0){
    console.log('Lighthouse');
  } else if (stark % 3 === 0){
    console.log('Loopy');
  } else {
    console.log(stark);
  }
  stark ++;
}
