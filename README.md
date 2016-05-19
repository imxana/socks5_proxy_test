
#1.imitate proxy

run the agent server
```
node proxy_test.js
```

and open a browser, type any server by 'http' like

```
http://localhost:3000/?url=http://www.bilibili.com
```


#2.Run an easy proxy request

run the agent
```
node proxy.js
```

and run the server

```
node server.js
```

and send a request to the agent
```
node request.js
```
