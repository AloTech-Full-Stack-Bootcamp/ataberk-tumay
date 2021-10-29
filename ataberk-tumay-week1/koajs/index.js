const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();  

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`Response time = ${ms}`);
});

router.get('/index', (ctx, next) => {
  ctx.body = '<h1>This is the index page but with KOAJS!!!</h1>';

});

router.get("/about", (ctx,next)=>{
  ctx.body = "<h1>This is the about page created by a human</h1>";
});

router.get("/contact", (ctx, next)=>{
  ctx.body = "<h1> Send us a message. We might answer it </h1>";
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(5000, ()=>{
  console.log("Server has started at http://localhost:5000/");
});