document.querySelector('.btn-customer').addEventListener('click', getCustomer)

document.querySelector('.btn-customers').addEventListener('click', getCustomers)


// Get a Customer
function getCustomer(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true)

  xhr.onload = function(){
    if(this.status == 200){
      const customer = JSON.parse(this.responseText)

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Phone: ${customer.phone}</li>
          <li>University: ${customer.university}</li>
        </ul>
      `
      document.querySelector('.output1').innerHTML = output
    }
  }

  xhr.onerror = function() {
    document.querySelector('.output1').innerHTML = 
      `<p>Request Error</p>`
  }

  xhr.send()
}


// Get Customers
function getCustomers(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true)

  xhr.onload = function(){
    if(this.status == 200){
      const customers = JSON.parse(this.responseText)

      let output = ''

      customers.forEach(function(users){
        output += `
        <ul>
          <li>ID: ${users.id}</li>
          <li>Name: ${users.name}</li>
          <li>Phone: ${users.phone}</li>
          <li>University: ${users.university}</li>
        </ul>
      `
      });
      
      document.querySelector('.output2').innerHTML = output
    }
  }

  xhr.onerror = function() {
    document.querySelector('.output2').innerHTML = 
      `<p>Request Error</p>`
  }

  xhr.send()
}