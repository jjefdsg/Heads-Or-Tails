document.querySelector('#btn').addEventListener('click', headsOrTails)

function headsOrTails() {
    let random = Math.random()
    document.querySelector('#id').textContent = random

    if(random < .50){
        document.querySelector('#id').textContent = 'Heads'
    }else{
        document.querySelector('#id').textContent = 'Tails'
    }


}
