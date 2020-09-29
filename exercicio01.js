//gerar um nr inteiro aleatorio entre 2 numeros
function randomIntFromInterval(min, max) { // min e max incluido
    min = Math.ceil(min); // arredondar para baixo 
    max = Math.floor(max); // arrendondar para cima
    return Math.floor(Math.random()*(max - min)) + min;
    }

    var data = new Date(); //data e hora atual do computador
    var dataLocal = data.toLocaleString(); // apresentar a data e hora local 

    document.getElementById("rodape").innerHTML = `<h3>${dataLocal}</h3>`;
    document.getElementById("titulo").innerText += '! Agora no browser!';

    //adicionar 5 elemntos de imagem 
    for(var i=0;i<=5;++i)
    {
        var randomWidth = randomIntFromInterval(200, 600);
        var randomHeight = randomIntFromInterval(200, 600);

        var novaimg = document.createElement("img");
        novaimg.src = `https://loremflickr.com/${randomWidth}/${randomHeight}/cat`;
        document.getElementById("cat").appendChild(novaimg);
    }

    document.bgColor = getRandomRGBColor();