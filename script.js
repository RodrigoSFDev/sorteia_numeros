const btnSortear = document.querySelector('section.sorte button');
let msg = document.querySelector('section.sorte h1');
let resultado = [];

for(let index = 1; index <= 100; index += 1){
    resultado.push(index)
}

btnSortear.addEventListener('click', () => {
    msg.innerHTML = 'O número sorteado foi: ' + resultado[Math.floor(Math.random() * resultado.length)];
})

