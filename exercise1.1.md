```
➜  docker-kurssi docker run -d nginx
d11fcff7cbe2d932233bf0afd37029a3b64cdadc46d06f561d951a3e3ac4da9e
➜  docker-kurssi docker run -d nginx
a28bb8c7115a5349e99cdcb5903a3c6274adf15d626890ed15df9d5596142c83
➜  docker-kurssi docker run -d nginx
073d7622b119fc2ffcb8ee1259792c6efcfc6f6363056d41590b4428406642b7
➜  docker-kurssi docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
073d7622b119        nginx               "nginx -g 'daemon of…"   10 seconds ago      Up 9 seconds        80/tcp              quirky_agnesi
a28bb8c7115a        nginx               "nginx -g 'daemon of…"   12 seconds ago      Up 11 seconds       80/tcp              quizzical_rosalind
d11fcff7cbe2        nginx               "nginx -g 'daemon of…"   14 seconds ago      Up 12 seconds       80/tcp              sleepy_hertz
➜  docker-kurssi docker stop 07
07
➜  docker-kurssi docker stop a2
a2
➜  docker-kurssi docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                      PORTS               NAMES
073d7622b119        nginx               "nginx -g 'daemon of…"   27 seconds ago       Exited (0) 6 seconds ago                        quirky_agnesi
a28bb8c7115a        nginx               "nginx -g 'daemon of…"   29 seconds ago       Exited (0) 2 seconds ago                        quizzical_rosalind
d11fcff7cbe2        nginx               "nginx -g 'daemon of…"   31 seconds ago       Up 30 seconds               80/tcp              sleepy_hertz
4fb82f164684        nginx               "nginx -g 'daemon of…"   44 seconds ago       Exited (0) 34 seconds ago                       brave_rosalind
80342f33dd50        nginx               "-d"                     About a minute ago   Created                     80/tcp              nervous_feynman
e344c252058a        nginx               "nginx -g 'daemon of…"   2 minutes ago        Exited (0) 2 minutes ago                        blissful_lumiere
➜  docker-kurssi docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
d11fcff7cbe2        nginx               "nginx -g 'daemon of…"   34 seconds ago      Up 33 seconds       80/tcp              sleepy_hertz
➜  docker-kurssi
```
