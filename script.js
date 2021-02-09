
function animaMenu(){
    const menu = document.querySelectorAll('.menu li');

    function zeraAtivos(){  
        menu.forEach((option) => {
            var classe = option.innerText.toLowerCase()
            const seletor = '.bloco-' + classe
            var bloco = document.querySelector(seletor);
            bloco.classList.remove('ativo');
        })
    };


    menu.forEach((option) => {
        var classe = option.innerText.toLowerCase()
        option.addEventListener('click',() =>{
            zeraAtivos();
            const seletor = '.bloco-' + classe
            var bloco = document.querySelector(seletor);
            bloco.classList.add('ativo');
        })
    });
}

animaMenu();


function proxProjeto(){
    
    const btns = document.querySelectorAll('.prox-projeto');
    const conteudos = document.querySelectorAll('.grid-conteudo-projetos'); //No conteudo trocamos o display

    function removeAtivos(){  
        conteudos.forEach((conteudo) =>{
            conteudo.classList.remove('ativo-grid');
        });
    };

    btns.forEach((btn) =>{
        btn.addEventListener('click',() => {
            const ativo = document.querySelector('.ativo-grid');
            console.log(ativo);
            removeAtivos();
            if(ativo.nextElementSibling)
                ativo.nextElementSibling.classList.add('ativo-grid');
            else
                conteudos[0].classList.add('ativo-grid');
        });
    });
};

proxProjeto();