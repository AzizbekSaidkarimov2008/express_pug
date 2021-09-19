const express = require('express')
const app = express()

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/main',(req,res)=>{
    res.render('main')
})
app.get('/footer',(req,res)=>{
    res.render('footer')
})
app.listen(3000,()=>{
    console.log('Ishlayapti');
})

// window.addEventListener('load', function (e) {
//     var input = document.querySelectorAll('.form-control');
//     var form = document.querySelector('form');

//     form.addEventListener('submit', function (e) {
//         for (var i = 0; i <= input.length - 1; i++) {
//             if (input[i].value == '') {
//                 input[i].classList.add('error')
//                 e.preventDefault()
//             } else {
//                 input[i].classList.remove('error')
//             }
//         }
//     })
// });
