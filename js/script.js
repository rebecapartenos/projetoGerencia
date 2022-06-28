const labelIPInX = [];
const dataIPInY = [];
var timer;
var aux1, aux;

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelIPInX,
        datasets: [{
            label: 'Número de Datagramas IP Recebidos',
            data: dataIPInY,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            x: {
                display: true,
                title: {
                  display: true,
                  text: 'Data/Hora'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Qtde de Datagramas'
                },
                //beginAtZero: true,
                // type: 'logarithmic',
                // min: 100000,
                // max: 300000,
            }
        }
    }
});

//Adicionando eventos nos botões
document.getElementById("btnIniciar").addEventListener('click',function (){
    console.log("Iniciando o monitoramento!!");
    timer = setInterval(snmpGet,5000);
});

document.getElementById("btnParar").addEventListener('click',function (){
    console.log("Parando o monitoramento!!");
    clearInterval(timer);
});

//Requisição SNMP
function snmpGet(){
    $.ajax({
        url: "snmpIP.php",
        method: "POST",
        data: "",
        success: function (response){
            aux = response - aux;
            console.log("aux: "+ aux);
            console.log("response: "+ response);
            var dateTime = new Date();
            labelIPInX.push(dateTime.toLocaleTimeString());
            dataIPInY.push(parseInt(response));
            myChart.update();
        } 
    })
}
