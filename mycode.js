//start function for Jquery
$(function(){
  getProducts()
  $(".modal-footer").on("click",".create-btn",addProduct)
  $(".products").on("click",".btn-warning",editProduct)
  $(".products").on("click",".btn-danger",deleteProduct)
  $('.modal-footer').on("click","#save",saveButton)
  $('.refresh-btn').click(function(){
    location.reload()
  })
})

//function to delete products
function deleteProduct(){
  let id = $(this).closest('.prod').attr('product-id')
  $.ajax({
    type: "DELETE",
    url: `https://usman-recipes.herokuapp.com/api/products/${id}`,
    success: function () {
      getProducts()
    }
  });
}

//fucntion to edit products
function editProduct(){
  let id = $(this).closest('.prod').attr('product-id')

  $.ajax({
    type: "PUT",
    url: `https://usman-recipes.herokuapp.com/api/products/${id}`,
    success: function (response) {
      $('#update-id').val(response._id)
      $('#edit-title').val(response.name)
      $('#edit-body').val(response.description)
      $('#updateModal').modal("show")
    }
  });
}

// save button in edit modal
function saveButton(){
  let id = $('#update-id').val()
  let name = $('#edit-title').val()
  let description = $('#edit-body').val()

  $.ajax({
    method: "PUT",
    url: `https://usman-recipes.herokuapp.com/api/products/${id}`,
    data: {name,description},
    success: function () {
      getProducts()
      $('#updateModal').modal("hide")
    }
  });
}

//function to add product
function addProduct(){
  let name = $('#title').val();
  let description = $('#body').val();
  $.ajax({
    type: "POST",
    url: `https://usman-recipes.herokuapp.com/api/products`,
    data: {name,description},
    success: function () {
      $('#title').val("")
      $('#body').val("")
      getProducts()
      $('#createModal').modal("hide")
    }
  });
}

//function to get products
function getProducts(){
  $.ajax({
    type: "GET",
    url: "https://usman-recipes.herokuapp.com/api/products",
    error: function (){
      $('.products').append(`<h3 class="text-center mt-3">An Error has occured!!!</h3>`)
    },
    success: function (response) {
      $('.products').empty()

      for (let i = 0; i < response.length; i++) {
        $(".products").append(`
        <div class= "prod my-5" product-id="${response[i]._id}">
          <button class="btn btn-danger btn-sm float-right">Delete</button>
          <button class="btn btn-warning btn-sm float-right mx-2">Edit</button>
          <h4>${response[i].name}</h4>
          <p>${response[i].description}</p>
        </div>
        `); 
      }
    }
  });
}