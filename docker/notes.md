# Notas da customização

1. Todas as informações sensíveis do backend/local.cfg foram substituídas por "*****"

2. No backend, a DSN do banco de dados está apontando para o container do compose

3. Para levantar o ambiente completo, é necessário a utilização dos composes dist e rest

``` bash
# No diretório docker
docker compose -f docker-compose-dist.yaml -f docker-compose-rest.yaml up -d
```

4. Usar arquivo ```.env``` para parametrizar a execução, tal como abaixo.

``` bash
# namespace do registry
DOCKER_OWNER=dspace
# Nome da tag
DSPACE_VER=7.6.2
# Parâmetros do dspace frontend
DSPACE_REST_SSL=false
DSPACE_REST_HOST=localhost
DSPACE_REST_PORT=8080
```