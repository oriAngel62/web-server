const express= require('express');
const app=express()
const path=require('path');
const hbs=require('hbs')
//define paths
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partial')

//setup handlebars engine and view loaction
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath)


app.use(express.static(publicPath))
app.get('/help',(req,res)=>{
res.render('help',{
    message:'eror'
})
})



app.get('',(req,res)=>{
    res.send('hellow express!')
})

app.get('/about',(req,res)=>{
    res.render('about',{
        message:'eror'
    })
})

app.get('/weather',(req,res)=>{
if(!req.query.adress)
{
   return res.send({
        eror: 'didnt find'
    })
}
console.log(req.query.adress)

    res.send({
        locatio:'holon',
        age:21,
        adress: req.query.adress
    })
})



//this function suppose to be in the end becuase it wil ran this anytime
app.get('*',(req,res)=>{
    res.render('404',{
       title:"404 page" 
    })
})

app.listen(3000,()=>{
console.log('serever is up to port 3000.')})