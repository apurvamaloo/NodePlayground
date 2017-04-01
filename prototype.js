var player=function()
{
  this.name='';
  this.life=100;
  this.giveLife=function(targetPlayer)
  {
    targetPlayer.life++;
    console.log(this.name+"gave life to"+targetPlayer.name);
  }
}

player1 =new player();
player2 =new player();

player1.name="player1";
player2.name="player2";

player1.giveLife(player2);

console.log("life of player1 = "+player1.life);
console.log("life of player2 = "+player2.life);


//suppose now if we want to add one more propery  called  magic then we

player.prototype.magic=60;

console.log("player1 magic is"+player1.magic);
console.log("player2 magic is"+player2.magic);


player.prototype.uppercut=function(targetPlayer)
{
  targetPlayer.life -=3;
  console.log(this.name+" uppercut "+targetPlayer.name)
}


player2.uppercut(player1);

console.log("life of player1 = "+player1.life);
console.log("life of player2 = "+player2.life);
