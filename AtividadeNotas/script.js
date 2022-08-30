var qtdNota = 0;
var qtdAluno = 0;

window.onload= function(){
    iniciar();
    addnota();
}
function iniciar(){
    qtdNota = document.querySelector("#qtdNotas").value;
    qtdAluno = document.querySelector("#qtdAlunos").value;

    const tbody = document.querySelector("tbody");
    const thead = document.querySelector("thead");

    tbody.innerHTML="";
    thead.innerHTML="";
    
    
    const th1 = document.createElement("th");
    th1.setAttribute('scope', 'col');
    th1.innerText="#";
    thead.appendChild(th1);

    const th2 = document.createElement("th");
    th2.innerText="Nome";
    th2.setAttribute('scope', 'col');        
    thead.appendChild(th2);
    
    for (let notaIndex = 1; notaIndex <= qtdNota; notaIndex++) {
        const th = document.createElement("th");
        th.innerText=`Nota ${notaIndex}`;
        th.setAttribute('scope', 'col');        
        thead.appendChild(th);     
   
    }

    const thmedia = document.createElement("th");
    thmedia.innerText= "Média";
    thmedia.setAttribute('scope', 'col');        
    thead.appendChild(thmedia);
    

   const thsituacao = document.createElement("th");
    thsituacao.innerText="Situação";
    thsituacao.setAttribute('scope', 'col');        
    thead.appendChild(thsituacao);
    

    for (let alunoIndex = 1; alunoIndex <= qtdAluno; alunoIndex++) {
     
        const row = document.createElement("tr");     
        const th = document.createElement("th");
        th.innerText = alunoIndex;
        row.appendChild(th);
        
        const tdaluno = document.createElement("td");
        const input = document.createElement("input");
        input.setAttribute('type', 'Text');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', 'aluno' + alunoIndex);
    
        tdaluno.appendChild(input);
        row.appendChild(tdaluno);

        for (let notaIndex = 1; notaIndex <= qtdNota; notaIndex++) {
            const tdnota = document.createElement("td");
            const inputnota = document.createElement("input");
            inputnota.setAttribute('type', 'Number');
            inputnota.setAttribute('class', 'form-control');
            inputnota.setAttribute('id', `nota${alunoIndex}${notaIndex}`);    
            tdnota.appendChild(inputnota)
            row.appendChild(tdnota);

        }
    
    
        const tdmedia = document.createElement("td");
        const outputmedia = document.createElement("output"); 
        outputmedia.setAttribute('id', `media${alunoIndex}`); 
        tdmedia.appendChild(outputmedia);
        row.appendChild(tdmedia);

        const tdsituacao = document.createElement("td");
        const outputsituacao = document.createElement("output");    
        outputsituacao.setAttribute('id', `situacao${alunoIndex}` );  
        tdsituacao.appendChild(outputsituacao)
        row.appendChild(tdsituacao);
        tbody.appendChild(row); 
        
       

    }
    
}

function calcula(){
    let somaMedia = 0;
    for (let alunoIndex = 1; alunoIndex <= qtdAluno; alunoIndex++) {
        let somaNota=0.0;
            
        for (let notaIndex = 1; notaIndex <= qtdNota; notaIndex++) {
            somaNota += Number(document.querySelector("#nota"+alunoIndex+notaIndex).value);           
        }
        let media= somaNota/qtdNota;
        somaMedia =  somaMedia + media;
        let mediaGeral = somaMedia/alunoIndex;
       
        document.querySelector("#media"+alunoIndex).value = media;
        document.getElementById('mediaGeral').innerText = "Média geral:" + mediaGeral;
        if (media >=50){
            document.querySelector("#situacao"+alunoIndex).value = 'Aprovado';
            document.querySelector("#situacao"+alunoIndex).style.backgroundColor = 'green';
        }
        else if (media >=45){
            document.querySelector("#situacao"+alunoIndex).value = 'Recuperação';
            document.querySelector("#situacao"+alunoIndex).style.backgroundColor = 'yellow';
     
        }
        else{
            document.querySelector("#situacao"+ alunoIndex).value = 'Reprovado';
            document.querySelector("#situacao"+ alunoIndex).style.backgroundColor = 'red';  
        }
    
    }
    
}


