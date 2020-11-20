const http = require('http');//carregando módulo 'http'

let server = http.createServer((req, res)=>{//'req' são as requisições do navegador - 'res' são as respostas do servidor
    console.log('URL:', req.url);
    console.log('METHOD:',req.method);

    switch(req.url){
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Olá</h1>');
        break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users:[{
                    name: 'Levi',
                    email: 'levi_mgy@unifei.edu.br',
                    id: 1
                }]
            }));
        break;
    }

});

server.listen(3000, '127.0.0.1', ()=>{//o servidor "escuta" o que acontece nesse endereço
    console.log("o servidor está rodando!");
});