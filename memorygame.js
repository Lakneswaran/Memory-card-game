
(() => { 
    
     const cards = document.querySelectorAll(".memory-card");

     let hasFlippedcard = false;
     let firstCard, SecondCard;

     function flipcard(){
        this.classList.add('flip');

        if(!hasFlippedcard){
            hasFlippedcard = true;
            firstCard = this;
        }else{
            hasFlippedcard = false;
            SecondCard = this;
        }

        console.log(firstCard.dataset.framework);
        console.log(SecondCard.dataset.framework);
     }

     cards.forEach(card =>card.addEventListener("click", flipcard));
   
    

  
   
})()



