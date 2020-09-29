document.addEventListener('DOMContentLoaded', () =>
{
    //event handler do botao 
    //serve para fazer as contas

    function splictCheck()
    {
        //ler valores 
        var billAmt = document.getElementById("billamt").value;
        var serviceQual = document.getElementById("serviceQual").value;
        var numOfPeople = document.getElementById("peopleamt").value;

        //validar os input
        if(billAmt === "" || serviceQual == 0)
        {
            alert("Por favor, introduza os valores");
            return;
        }

        //verificar se o nr de pessoas é maior que 1
        // vamos assim controlar a apresentaçao da msg a cada 

        if(numOfPeople === "" || numOfPeople <=1)
        {
            numOfPeople = 1;
            document.getElementById("each").style.display = "none";
        }
        else
        {
            document.getElementById("each").style.display = "block";
        }

        //calcular gorjetas 
        var tip = (parseFloat(billAmt) * serviceQual);
        //arredontar a 2 casas 
        tip = Math.round(tip * 100) /100;

        //calcular total / nr pessoas
        var total = (parseFloat(billAmt)+ tip) / parseInt(numOfPeople);
        //arredondar a 2 casas decimais 
        total = Math.round(total * 100) /100;

        //apresentar sempre com 2 casas decimais 
        total = total.toFixed(2);
        tip = tip.toFixed(2);

        //mostar os valores 
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = tip;
        document.getElementById("value").innerHTML = total;
    }

    //esconder valores no inicio 
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

    //atribuir event handler ao evento click do botao
    document.getElementById("calculate").addEventListener("click", splictCheck);
});