function askQuestion () {
  let question = prompt(`Enter expression: `);
  try {
    let res = eval(question)
    if (res === Infinity || res === null || isNaN(res)){
      throw new Error('Invalid expression. Repeat the entry. ')
    } else {
      alert(res);
    }
    
  } catch (err) {
    alert(err.message);
    askQuestion();
  }
}
askQuestion();

