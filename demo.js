var obj={
  a:10,
  func:function()
  {
    console.log("a in func before",this.a);
    this.a=5;
    console.log("a in func after",this.a);
  },
  func1:function()
  {
    console.log("a in func1 before",this.a);
    this.a=8;
    console.log("a in func1 after",this.a);
  }

}


obj.func();
obj.func1();
