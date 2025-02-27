// while loop 

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }




let gameover = false;

while(!gameover){
    for(i=0; i<10;i++){
        if(i == 5){
            console.log("you got five");
            gameover= true;
        }
        else{
            console.log("you didnt get five ")
        }
    }
}