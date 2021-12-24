Express Quick Sheet {#express-quick-sheet .p-name}
===================


Settings


 
{.section .section .section--body .section--first name="08cb"}
 

------------------------------------------------------------------------


  
### Express Quick Sheet {#56df .graf .graf--h3 .graf--leading .graf--title name="56df"}

### Settings {#d0c6 .graf .graf--h3 .graf-after--h3 name="d0c6"}

```
 {#6adc .graf .graf--pre .graf-after--h3 name="6adc"}
app.set('x', 'yyy')
app.get('x') //=> 'yyy'
```


```
 {#08c2 .graf .graf--pre .graf-after--pre name="08c2"}
app.enable('trust proxy')
app.disable('trust proxy')
```


```
 {#0a57 .graf .graf--pre .graf-after--pre name="0a57"}
app.enabled('trust proxy') //=> true
```


### Enviorment {#ced4 .graf .graf--h3 .graf-after--pre name="ced4"}

```
 {#ce5b .graf .graf--pre .graf-after--h3 name="ce5b"}
app.get('env')
```


### Config {#dadc .graf .graf--h3 .graf-after--pre name="dadc"}

```
 {#0f9d .graf .graf--pre .graf-after--h3 name="0f9d"}
app.configure('production', function() {
  app.set...
})
```


### Wares {#3c25 .graf .graf--h3 .graf-after--pre name="3c25"}

```
 {#69c6 .graf .graf--pre .graf-after--h3 name="69c6"}
app.use(express.static(__dirname + '/public'))
app.use(express.logger())
```


### Helpers {#0319 .graf .graf--h3 .graf-after--pre name="0319"}

```
 {#28da .graf .graf--pre .graf-after--h3 .graf--trailing name="28da"}
app.locals({
  title: "MyApp",
})
```





 

------------------------------------------------------------------------


  
### Request & response {#825d .graf .graf--h3 .graf--leading name="825d"}

### Request {#18c4 .graf .graf--h3 .graf-after--h3 name="18c4"}

```
 {#1e6a .graf .graf--pre .graf-after--h3 name="1e6a"}
// GET  /user/tj
req.path         //=> "/user/tj"
req.url          //=> "/user/tj"
req.xhr          //=> true|false
req.method       //=> "GET"
req.params
req.params.name  //=> "tj"
req.params[0]
```


```
 {#4fac .graf .graf--pre .graf-after--pre name="4fac"}
// GET /search?q=tobi+ferret
req.query.q // => "tobi ferret"
```


```
 {#c989 .graf .graf--pre .graf-after--pre name="c989"}
req.cookies
```


```
 {#47fd .graf .graf--pre .graf-after--pre name="47fd"}
req.accepted
// [ { value: 'application/json', quality: 1, type: 'application', subtype: 'json' },
//   { value: 'text/html', quality: 0.5, type: 'text',subtype: 'html' } ]
```


```
 {#9b1a .graf .graf--pre .graf-after--pre name="9b1a"}
req.is('html')
req.is('text/html')
```


```
 {#64c5 .graf .graf--pre .graf-after--pre name="64c5"}
req.headers
req.headers['host']
req.headers['user-agent']
req.headers['accept-encoding']
req.headers['accept-language']
```


### Response {#d602 .graf .graf--h3 .graf-after--pre name="d602"}

```
 {#bb6d .graf .graf--pre .graf-after--h3 name="bb6d"}
res.redirect('/')
res.redirect(301, '/')
```


```
 {#03b9 .graf .graf--pre .graf-after--pre name="03b9"}
res.set('Content-Type', 'text/html')
```


```
 {#cd3b .graf .graf--pre .graf-after--pre name="cd3b"}
res.send('hi')
res.send(200, 'hi')
```


```
 {#1d08 .graf .graf--pre .graf-after--pre .graf--trailing name="1d08"}
res.json({ a: 2 })
```






By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 5, 2021](https://medium.com/p/8f93762c59ca).


