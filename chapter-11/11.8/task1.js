async function loadJson(url) {
    let response = await fetch(url);
    
    if (response.status == 200) {
        let result = await response.json;
        return result;
    }
    else {
        throw new Error(response.status);
    }
}

loadJson('https://learn.javascript.ru/')
  .then(console.log)
  .catch(console.log); 