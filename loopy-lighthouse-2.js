const loopyLighthouse = (range, multiples, words) => {
  let stark = range[0];
  while (stark >= range[0] && stark <= range[1]){
    if (stark % multiples[0] === 0 && stark % multiples[1] === 0){
      console.log(words[0] + words[1]);
    } else if(stark % multiples[0] === 0){
      console.log(words[0]);
    } else if(stark % multiples[1] === 0){
      console.log(words[1]);
    } else {
      console.log(stark);
    }
    stark++;
  }
};


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

