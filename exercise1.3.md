```
➜  docker-kurssi docker run -d --name looper ubuntu sh -c 'apt-get update && apt-get install -y curl && read website; sleep 3; curl http://$website'
2d0fe6bba19ebbaaf281e3131615b12342312e7d72e2010b78c8dd9c29e45b4a
```
