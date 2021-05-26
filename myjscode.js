document.querySelector('.btn1').addEventListener('click', getText)

document.querySelector('.btn2').addEventListener('click', getJSON)

document.querySelector('.btn3').addEventListener('click', getAPI)

// Get text
function getText(){
  fetch('output.txt')
    .then(res => res.text())

    .then(data => document.querySelector('.output').innerHTML = data)
    
    .catch(err => console.log(err))
}

// Get JSON Data
function getJSON(){
  fetch('posts.json')
    .then(res => res.json())

    .then(data => {
      let output = ''

      data.forEach(post => output += `<li>${post.title}</li>`)

      document.querySelector('.output').innerHTML = output
    })

    .catch(err => console.log(err))
}

// Get API Data
function getAPI(){
  fetch('https://usman-recipes.herokuapp.com/api/products')
    .then(res => res.json())

    .then(data => {
      let output = ''

      data.forEach(products => output += `<li>${products.name}</li>`)

      document.querySelector('.output').innerHTML = output
    })
    
  .catch(err => console.log(err))
}