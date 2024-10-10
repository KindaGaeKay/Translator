document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('box2');
    const translationMap = {
      '<------------- ' : 'z',
      '-------------> ' : 'y',
      '<------------ ' : 'x', 
      '------------> ' : 'w', 
      '<----------- ' : 'v', 
      '-----------> ' : 'u',
      '<---------- ' : 't',
      '----------> ' : 's',
      '---------> ' : 'r',
      '<--------- ' : 'q',
      '--------> ' : 'p',
      '<-------- ' : 'o',
      '<------- ' : 'n',
      '-------> ' : 'm',
      '<------ ' : 'l',
      '------> ' : 'k', 
      '<----- ' : 'j',
      '-----> ' : 'i',
      '<---- ' : 'h',
      '----> ' : 'g',
      '<--- ' : 'f',
      '---> ' : 'e', 
      '<-- ' : 'd',
      '--> ' : 'c', 
      '<- ': 'b', 
      '-> ': 'a',
      ', ' : ', ', 
      '. ' : '. ',
      '! ' : '! ',
      '? ' : '? ',
      ' ' : '/',
      '/' : ' ',
      'a' : '-> ',
      'b' : '<- ',
      'c' : '--> ',
      'd' : '<-- ',
      'e' : '---> ', 
      'f' : '<--- ',
      'g' : '----> ',
      'h' : '<---- ',
      'i' : '-----> ',
      'j' : '<----- ',
      'k' : '------> ', 
      'l' : '<------ ',
      'm' : '-------> ',
      'n' : '<------- ',
      'o' : '<-------- ',
      'p' : '--------> ',
      'q' : '<--------- ',
      'r' : '---------> ',
      's' : '----------> ',
      't' : '<---------- ',
      'u' : '-----------> ',
      'v' : '<----------- ',
      'w' : '------------> ',
      'x' : '<------------ ',
      'y' : '-------------> ',
      'z' : '<------------- ',
      
      // Add more translations here
    };
    input.addEventListener('input', () => {
      let translatedText = '';
      let currentWord = '';
      for (let i = 0; i < input.value.length; i++) {
        currentWord += input.value[i];
        if (translationMap[currentWord]) {
          translatedText += translationMap[currentWord];
          currentWord = '';
        }
      }
      box2.textContent = translatedText;
    })
  
  })