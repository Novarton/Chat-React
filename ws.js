const websocket = require('ws');
const wss = new websocket.Server({port:8087});

wss.on('Conection: ', (ws)=>{
    console.log('Nueva Conexion');
    //ws.on ESCUCHAN
    ws.on('MENSAJE: ', (data)=>{
        console.log(`Mensaje: ${data}`);
        wss.clients.forEach((cliente)=>{
            if(cliente !== ws && cliente.readyState === websocket.OPEN){
                cliente.send(data);
            }
        });
    });

    ws.on('Close', () =>{
        console.log('Usuario desconectado');
    });
});

console.log('WS Funcionando');