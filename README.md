
#1.imitate proxy

run the agent server
```
node proxy_test.js
```

and open a browser, type any server by 'http' like

```
http://localhost:3000/?url=http://www.bilibili.com
```


#2.Run an easy socks5-http-client

run the agent
```
node proxy_test.js
```

and run the server

```
node server_test.js
```

and send a request to the agent
```
node request.js
```
