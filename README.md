# Steps for deploying server on ec2

- Select the ec2 instance and connect
- Become a sudo user by hitting following cmd

```sh
sudo su -
```

- Install `nvm`

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

- Activate `nvm`

```sh
. ~/.nvm/nvm.sh
```

- Install `nodejs`

```sh
nvm install node
```

- Update system

```sh
sudo apt-get update -y
```

- Install `Git`

```sh
sudo apt-get install git -y
```

- Update the latest npm version

```sh
npm install -g npm@latest
```

- Install `pm2` globally

```sh
npm install -g pm2
```

- See `pm2` examples

```sh
pm2 examples
```

- Start the server with `pm2`

```sh
pm2 start app.js
```

- Change security groups from the security tab of ec2 instance
- Make sure to allow all TCP from any IPv4 network
- For linking a subdomain to this go to zone editor and add the public ip address as an A record
- We can make request for a certificate in certificate manager and after providing certificate
- See which node server are running & kill
- To find the process id (PID) associated with the port

```sh
lsof -i tcp:80
# COMMAND PID   USER  FD  TYPE DEVICE             SIZE/OFF NODE NAME
node    44475 chen5 31u IPv4 0x8b1721168764e4bf 0t0 TCP *:strexec-s (LISTEN)
```

- Then to kill the process

```sh
kill -9 44475
```
