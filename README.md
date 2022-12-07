# Steps

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

- Change security groups from the security tab of ec2 instance
- Make sure to allow all TCP from any IPv4 network
- For linking a subdomain to this go to zone editor and add the public ip address as an A record
- See which node server are running

```sh
# To find the process id (PID) associated with the port
lsof -i tcp:80
# COMMAND PID   USER  FD  TYPE DEVICE             SIZE/OFF NODE NAME
node    44475 chen5 31u IPv4 0x8b1721168764e4bf 0t0 TCP *:strexec-s (LISTEN)
# Then to kill the process
kill -9 44475
```

- Know firewall status

```sh
ufw status
```

- Enable firewall

```sh
ufw enable
```

- Allow ssh, http, https

```sh
ufw allow ssh
ufw allow http
ufw allow https
```
