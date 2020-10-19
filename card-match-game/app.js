document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let cardSymbols = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bomb", "fa-bicycle", "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bomb", "fa-bicycle"]
    let firstCard;
    let secondCard;
    let chosen = [];
    let movecount =0;
    let count=0;
    function board() {
        for (let i = 0; i < cardSymbols.length; i++) {
            var card = document.createElement('i');
            card.classList.add("fa");
            card.classList.add(cardSymbols[i]);
            card.setAttribute('data-id',i);
            card.setAttribute('id',i);

            // let data = card.getAttribute("data-id");
            // console.log(data)

            grid.appendChild(card);
            card.addEventListener('click', flip)
        }
    }

    function flip(){
        let item = this.getAttribute("class");
        let index = document.getElementById(`${this.id}`)
        let cardId = this.getAttribute('data-id')

        this.classList.add("open")
        this.classList.add("show")
        chosen.push(index)
        // chosenId.push(cardId);
        firstCard = chosen[0];
        secondCard = chosen[1];

        if(chosen.length==2){
            setTimeout(()=>
            {
               if(firstCard.getAttribute("class")===secondCard.getAttribute("class")){
               document.getElementById('score').innerHTML = `Score : ${count=count+1}`
               firstCard.classList.add("matched")
               secondCard.classList.add("matched")
               document.getElementById('moves').innerHTML = `Moves : ${movecount=movecount+1}`
               chosen =[]
            }
            else{
                // alert("wrong")
                firstCard.classList.remove("open")
                firstCard.classList.remove("show")
                secondCard.classList.remove("open")
                secondCard.classList.remove("show")
                document.getElementById('moves').innerHTML = `Moves : ${movecount=movecount+1}`

                chosen =[]
            }

            } ,500)

        }


      if(count==8)
      {
          alert("You win")
      }

        console.log(index,chosen)



    }

    board();
})