Followed this [tutorial](https://www.youtube.com/watch?v=2ZDnw6ifdSI&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=8) from YT/CodeWithHarry

step 1: install httpd on ubuntu; follow this article : https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04

config location : /etc/httpd/conf/httpd.conf
document location : /var/www/html/index.html
log : /var/log/httpd
start : systemctl start httpd
status : systemctl status httpd
error log : logs/error_log

you website files should sit in /var/www/html/ folder


###################################################

############# You need to run the following command on your container

docker run -it ubuntu ## create a container
apt update
apt upgrade
apt install sudo
adduser psshri ## create a user psshri
usermod -aG sudo psshri ## add the user psshri to sudo group
su psshri ## switch to user psshri, enter exit to switch back to rootd

######## now we need to explore the firewall

sudo apt install ufw -y   ## install ufw
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy

docker commit -m "completed config changes required to setup snake game" -a "psshri" containerid psshri/snakeGame
docker tag psshri/snakeGame psshri/snakeGame
docker push psshri/snakeGame





####### if you build an image from docker file then you need to follow below commands

docker build -t psshri/webdev:snakegamev1.0 .
docker push psshri/webdev:snakeGameV1.0
docker pull psshri/webdev:snakeGameV1.0


######## apply the k8s yaml files and go to ipadd:30007
get the ipadd by running the following command
kubectl get nodes -o wide