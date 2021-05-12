document.querySelector('.get-jokes').addEventListener('click', getJokes)


function getJokes(e){
  const number = document.querySelector('input[type = "number"]').value

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function(){
    if(this.status == 200){
      const response = JSON.parse(this.responseText)

      let jokes = ''

      if(response.type === 'success'){
        response.value.forEach(function(joke){
          jokes += `<li>${joke.joke}</li>`
        });
      } else {
        jokes += `
          <h3>Something went Wrong</h3>
        `
      }

      document.querySelector('.jokes').innerHTML = jokes
    }
  }

  xhr.onerror = function() {
    document.querySelector('.jokes').innerHTML = 
      `<h3>Request Error</h3>`
  }

  xhr.send()

  e.preventDefault()
}