document.querySelector('.btn1').addEventListener('click', getText)

document.querySelector('.btn2').addEventListener('click', getJSON)

document.querySelector('.btn3').addEventListener('click', getAPI)

// Get text
function getText(){
  fetch('output.txt')
    .then(function(res){
      return res.text()
  })
    .then(function(data){
      document.querySelector('.output').innerHTML = data
    })
    .catch(function(err){
      console.log(err)
    })
}

// Get JSON Data
function getJSON(){
  fetch('posts.json')
    .then(function(res){
      return res.json()
  })
    .then(function(data){
      let output = ''

      data.forEach(function(post) {
        output += `<li>${post.title}</li>`
      });

      document.querySelector('.output').innerHTML = output
    })
    .catch(function(err){
      console.log(err)
    })
}

// Get API Data
function getAPI(){
  fetch('https://usman-recipes.herokuapp.com/api/products')
    .then(function(res){
      return res.json()
  })
    .then(function(data){
      let output = ''

      data.forEach(function(products) {
        output += `<li>${products.name}</li>`
      });

      document.querySelector('.output').innerHTML = output
    })
    .catch(function(err){
      console.log(err)
    })
}