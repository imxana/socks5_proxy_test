ip:
	@ifconfig | grep "inet " | grep -v 127.0.0.1
miku:
	ssh root@139.129.24.151
