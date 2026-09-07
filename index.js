const express= require('express');
const app=express();
const path=require('path');

const users=[]
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


app.get('/users',(request, response)=>{
    
    
    
    response.json({users});
}
)  

app.post('/users',(request, response)=>{
    request.body;
    const {name, age}=request.body;
    users.push({name, age});
    response.json({ok:true});
}
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0",()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})
