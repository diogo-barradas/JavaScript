document.addEventListener('DOMContentLoaded', () => {
    // array que vamos utilizar para guardar os dados que forem adicionados
    var dados = [];

    //funçao para traduzir o valor numerico do IMC em indicaçao de situaçao/estado
    function estadoIMC(valor)
    {
        if(valor<18.5)
        {
            return "Baixo Peso";
        }
        if(valor<24.9)
        {
            return "Peso Normal";
        }
        if(valor<29.9)
        {
            return "Excesso Normal";
        }
        if(valor<34.9)
        {
            return "Obessidade Classe I (Moderada)";
        }
        if(valor<39.9)
        {
            return "Obesidade Classe II (Severa)";
        }
        return "Obesidade Classe III (Mórbida)";
    }

    //event-handler do botao registar 
    function registar()
    {
        //guardar os valores 
        var dth = document.getElementById('dataregisto').value;
        var peso = parseInt(document.getElementById('peso').value);
        var altura = parseInt(document.getElementById('altura').value);
        //calcular o IMC
        var imc = (peso / Math.pow(altura/100, 2)).toFixed(2);
        //traduzir o IMC no estado 
        var estado = estadoIMC(imc);

        //no bloco seguinte vamos contruir a estrutura de elemntos 
        //adicionar tabela 
        //necessiatmos de encontrar o elemento body,pelo id,neste caso
        var tabBody = document.getElementById('tabDados');

        //criamos uma nova linha
        var tabRow = document.createElement('TR');

        //as linhas seguintes ciram cada uma das colunas com valores
        var tabCelData = document.createElement('TD');
        tabCelData.innerText = dth.replace('T','');//so para retirar o T do formulario

        var tabCelAltura = document.createElement('TD');
        tabCelAltura.innerText = altura;

        var tabCelPeso = document.createElement('TD');
        tabCelPeso.innerText = peso;

        var tabCellIMC = document.createElement('TD');
        tabCellIMC.innerText = imc;

        var tabCelEstado = document.createElement('TD');
        tabCelEstado.innerText = estado;

        //nesta coluna nao queremos valores 
        //queremos adicionar um icone de apagar
        var tabCelDelete = document.createElement('TD');
        tabCelDelete.innerHTML = '<i class="fas fa-eraser fa-2x"></i>';

        //como vamos querer guaradar os dados no array 
        //o id a linha vmaos usar os atributos data-*
        //neste caso, estamos a decidir usar como chave ID o tamanho do array
        tabCelDelete.setAttribute('data-id', dados.length);

        //e temos de associar o evento handler
        tabCelDelete.addEventListener('click', eliminar);

        //contruir o objetos com os dados
        var item = {
            'id' : dados.length,
            'datahora' : dth,
            'altura' : altura,
            'peso' : peso,
            'imc' : imc,
            'estado' : estado
        };

        //e adicionamos ao array 
        dados.push(item);

        //agora temos de adicionar colunas 
        tabRow.appendChild(tabCelData);
        tabRow.appendChild(tabCelAltura);
        tabRow.appendChild(tabCelPeso);
        tabRow.appendChild(tabCellIMC);
        tabRow.appendChild(tabCelEstado);
        tabRow.appendChild(tabCelDelete);

        //adicionar o corpo da tablea a nova linha 
        tabBody.appendChild(tabRow);
    }

//event handler do icone eliminar 
    function eliminar(){
        //a palavra reservada this permite aceder o elemento que disparou o evento
        var row = this.parentNode; //queremos saber a linha 
        row.style.fontWeight = "bolder"; //para mostar a linha selecionada 
        var itemKey = this.getAttribute('data-id');//tbm necesitamos de guardar o id registo 

        setTimeout(() => {
            var itemEliminar = dados.find(function(item){
                return item.id == itemKey;
            });

            var mensagem = `Quer eliminar o registo com informaçao:\n
            Data: ${itemEliminar.datahora}
            Altura: ${itemEliminar.altura}
            Peso: ${itemEliminar.peso}
            IMC: ${itemEliminar.imc}
            Estado: ${itemEliminar.estado}`;
``
            //vamos pedir confirmaçao 
            if(confirm(mensagem)){
                //é para apagar
                //priemiro vamos guardar na secçao de log 
                document.getElementById('log').innerHTML += `<br><b>Array Antes de eliminar</b>:<br>${JSON.stringify(dados)}<BR>`;
                document.getElementById('log').innerHTML += `<br><b>Elemento a eliminar:</b>:<br>${JSON.stringify(itemEliminar)}<HR>`;

                dados = dados.filter(function(item){
                    return item.id != itemKey;
                });

                document.getElementById('log').innerHTML += `<br><b>Array Depois de eliminar:</b>:<br>${JSON.stringify(dados)}<HR>`;
                row.parentNode.removeChild(row);
            }
            else
            {
                row.style.fontWeight = "normal";
            }
        }, 50);
    } 

    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('dataregisto').value = now.toISOString().slice(0,16);
    
    document.getElementById('btnRegistar').addEventListener('click', registar);
});