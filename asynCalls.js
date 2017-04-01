function placeOrder(orderNo)
{
  console.log("The order placed is : ",orderNo);
  prepareFood(function(){
    console.log("we are done with order",orderNo);
  })
}

//let us assume this is a function which will take around 5 sec and it simulates to some database operation
function prepareFood(callback)
{
  setTimeout(callback,5000)
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);
placeOrder(7);
