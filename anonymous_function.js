

//*************////function with declarations can be called any time but anonymous function should be called after declaration

// test();
// function test()
// {
//   console.log("iam inside named function test");
// }
//
//
//
// anonymous_func();
// var anonymous_func=function()
// {
//   console.log("Iam inside anonymous_func");
// }
//



///***************


var anonymous_func=function()
{
  console.log("Iam inside anonymous_func");
  anonymous_func();
}
anonymous_func();
