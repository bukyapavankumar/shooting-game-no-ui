 const Player1 ={
  Health : 100,
  Won :  0
};
const Player2 ={
 Health:100,
 Won :  0
}; 
count=1;
function myfunction(){
document.write("<hr>" + "Game " + count);
while(Player1.Health >=0 && Player2.Health>=0 && count<6){
  shoot1 = Math.round(Math.random()*5);
  shoot2 = Math.round(Math.random()*5);
  Player1.Health=Player1.Health-shoot2;
//  console.log(Player1.Health);
  Player2.Health=Player2.Health-shoot1;
//  console.log(Player2.Health);
}

if(Player1.Health<=0)
Player1.Won = Player1.Won + 1;
else 
if(Player2.Health<=0)
Player2.Won = Player2.Won + 1;
document.write( "<hr>" + "Player 1 - Won : "  + Player1.Won + "<br>"); 
document.write( "<br>" + "Player 2 - Won : "  + Player2.Won + "<br>"); 
Player1.Health=100;
Player2.Health=100;
