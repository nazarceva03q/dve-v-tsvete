const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=__dirname,mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.ttf':'font/ttf'};
http.createServer((req,res)=>{let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end()}
if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);return res.end()}
if(name==='/')name='/index.html';
const file=path.resolve(root,'.'+name),rel=path.relative(root,file);
if(rel.startsWith('..')||path.isAbsolute(rel)||rel.split(/[\\/]/).some(p=>p.startsWith('.'))||!mime[path.extname(file)]||rel.startsWith('source-materials')||rel.startsWith('tests')){res.writeHead(404);return res.end('Not found')}
fs.readFile(file,(e,data)=>{if(e){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':mime[path.extname(file)],'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});res.end(req.method==='HEAD'?undefined:data)});
}).listen(Number(process.env.PORT)||4175,'127.0.0.1',()=>console.log('Dve v Tsvete: http://127.0.0.1:'+(process.env.PORT||4175)));
