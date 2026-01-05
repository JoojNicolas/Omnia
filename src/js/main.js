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

importar.addEventListener("change", () =>{
    let readFile = new FileReader()

    if(importar.files[0]){
        console.log('Enviando arquivo')

        readFile.readAsText(importar.files[0]);

        readFile.onload = function(){
            nota.value = readFile.result;
        }
    }else{
        console.log('Nenhum arquivo foi enviado!')
    }

})

carregar.addEventListener("click", () =>{
    load();
})

load();

exportar.addEventListener("click", () => {
    const blob = new Blob([nota.value], {type: exportar.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.download = "Omnia";
    link.href = fileUrl;
    link.click();
})

