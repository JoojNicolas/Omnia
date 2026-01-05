const salvar = document.getElementById('save');
const exportar = document.getElementById('export');
/*  */
const carregar = document.getElementById('load');
const importar = document.getElementById('import');

const nota = document.getElementById('nota');

salvar.addEventListener("click", () =>{
    localStorage.setItem("data", nota.value)
    console.log('salvar')
})

function load(){
    nota.value = localStorage.getItem("data")
    console.log(nota.value) 
}

carregar.addEventListener("click", () =>{
    load();
})

load();
