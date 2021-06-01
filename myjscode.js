const http = new easyhttp

http.get('https://usman-recipes.herokuapp.com/api/products')
  .then(data => console.log(data))
  .catch(err => console.log(err))

const data = {
  name: "Metal Ball",
  price: 599,
  color: "black",
  department : "Clothing",
  description: "The Football Is Good"
}

http.post('https://usman-recipes.herokuapp.com/api/products',data)
  .then(data => console.log(data))
  .catch(err => console.log(err))


http.put('https://usman-recipes.herokuapp.com/api/products/60b66b1a3af1b50016fd8364',data)
  .then(data => console.log(data))
  .catch(err => console.log(err))

http.delete('https://usman-recipes.herokuapp.com/api/products/60b66b1a3af1b50016fd8364')
  .then(data => console.log(data))
  .catch(err => console.log(err))