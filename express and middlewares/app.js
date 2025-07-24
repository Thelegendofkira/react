const express = require('express');
const app = express();
const port=3000;

function counter(req,res,next)
{
     res.json({
          message:"ended middleware",
     });
     next();
}
app.use(counter);
app.get('/sum', (req, res) => {
     a=parseInt(req.query.a);
     b=parseInt(req.query.b);
     res.json(
          {ans:a+b,message:"hieveryone"}
     );
});
app.get('/multipy',(req,res) =>
{a=parseInt(req.query.a);
b=parseInt(req.query.b);
res.json(
     {
          ans:a*b,message:"nigga",
     }
)

});
app.listen(port);