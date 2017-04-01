var person={
  firstName:function()
  {
    console.log("first name is");
    console.log(this === person);
  }
}

person.firstName();


// the default calling context is global
function test()
{
  console.log("is this refer to global scope")
  console.log(this === global);
}

test();
