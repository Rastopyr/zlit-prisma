# Zlit Prisma workshop

## Before you start

<details>
  <summary>
    Summary
  </summary>

  <ul>
      <li><a href="#install-git">Install git</a></li>
      <li><a href="#install-docker">Install Docker</a></li>
      <li><a href="#install-docker-compose-ubuntu">Install docker-compose(Ubuntu)</a></li>
      <li><a href="#install-dependencies">Install dependencies</a></li>
      <li><a href="#install-ts-node">Install TS-Node</a></li>
      <li><a href="#start-service">Start service</a></li>
    </ul>
</details>

### Install git

For Mac:

```bash
# with Brew
brew install git

# or with macport
sudo port selfupdate
port search git
port variants git
```

For Windows:

[Download and install](https://git-for-windows.github.io/)

For Linux(Ubuntu):

```bash
sudo apt-get update
sudo apt-get install git
```

### Install Docker

For Mac:

[Download and install](https://download.docker.com/mac/beta/Docker.dmg)

For windows:

[Download and install](https://download.docker.com/win/beta/InstallDocker.msi)

For Linux(ubuntu):

```bash
sudo apt-get update -y
sudo apt-get install -y linux-image-generic-lts-trusty linux-headers-generic-lts-trusty
sudo apt-get install -y xserver-xorg-lts-trusty libgl1-mesa-glx-lts-trusty
sudo reboot
```

### Install docker-compose(Ubuntu)

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Install TS-Node

```bash
yarn global add ts-node
# or
npm install -g ts-node
```

### Install depdendencies

```bash
yarn
# or
npm install
```
