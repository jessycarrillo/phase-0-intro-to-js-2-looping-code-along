for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthaday to me!`);   
   }
   const gifts = ["teddy bear", "drone", "doll"];
   
   function wrapGifts(gifts){
       for (let i = 0; i < gifts.length; i++) {
           console.log(`Wrapped ${gifts[i]} and added a bow!`);
       
       }
   
   return gifts;
   }
   wrapGifts(gifts);
   
   
   function writeCards(toThank, eventName) {
       const thankYouMessage = []
       for (let i = 0; i < toThank.length; i++) {
          let message = `Thank you, ${toThank[i]}, for the wonderful ${eventName} gift!`
          thankYouMessage.push(message);
       } 
       return thankYouMessage;
   }
   writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
   
   function countDown() {
       let countDown = 10;
       while (countDown >= 0) {
           console.log(countDown);
           (countDown--); 
       }   
   }