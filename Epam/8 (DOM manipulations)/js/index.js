function visitLink(path) {
  localStorage.setItem(path, Number(localStorage.getItem(path)) + 1);
}

function viewResults() {
  let ul = document.createElement('ul');  
  document.body.append(ul)  

  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }
    let li = document.createElement('li');
    li.innerText = `You visited ${key} ${localStorage.getItem(key)} time(s)`;
    ul.append(li);
  }
  localStorage.clear();
}