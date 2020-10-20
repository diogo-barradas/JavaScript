document.addEventListener('DOMContentLoaded', () => {

    function loadFile()
    {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "produtos.json", true);
        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                var list = JSON.parse(xhr.responseText);
                list.forEach(element => {
                    
                    var newLine = document.createElement('tr');

                    newLine.innerHTML = `<td>${element.name}</td>
                                        <td>${element.detail}</td>
                                        <td>${element.price}</td>
                                        <td>${element.offer == undefined? "":element.offer}</td>
                                        <td><img src="${element.image}"/></td>`;
                    
                    document.getElementById("dados").appendChild(newLine);       
                });
            }
        }
        xhr.send(null);
    }
    document.getElementById("btnLoad").addEventListener('click', loadFile);
});