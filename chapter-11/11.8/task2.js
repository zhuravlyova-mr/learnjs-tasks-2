class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
    //if (response.ok) {
          let result = await response.json();
          return result;
    } else {
        throw new HttpError(response);
    }
}

  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let user;
    let name;

    do {
        name = "/;l,";//prompt("Введите логин?", "iliakan");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            console.log(`Полное имя: ${user.name}.`);
            break;
        }
        catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    } while (true);
}
  
demoGithubUser();