# Práctica 02 Docker/Utility

## Indicaciones para clonar e iniciar la aplicacion dockerizada

1. Dirigirse al directorio raiz de la práctica 02, debe contener un archivo **docker-compose.yaml**
2. Abrir alguna terminal o linea de comandos
3. Ejecutar el siguiente comando para inicializar la aplicacion dockerizada

```cmd
docker-compose -p dev-app up --build -d frontend
```

4. Ejecutar el siguiente comando para ejecutar el linter para revisar algun error en el codigo

```cmd
docker-compose -p dev-app run --rm --build npm run lint
```

5. Ejecutar el siguiente comando para ejecutar prettier para revisar el formato del codigo

```cmd
docker-compose -p dev-app run --rm --build npm run format-check
```

6. Ejecutar el siguiente comando para ejecutar el formateador para formatear el codigo

```cmd
docker-compose -p dev-app run --rm --build npm run format
```

7. Ejecutar el siguiente comando para instalar cualquiera paquete de npm, en este caso se esta instalando vitest para realizar pruebas unitarias

```cmd
docker-compose -p dev-app run --rm --build npm install -D -E vitest
```

8. Ejecutar el siguiente comando para ejecutar los test

```cmd
docker-compose -p dev-app run --rm --build npm run test
```

---

## Evidencias

1. Dockerfile del proyecto

   ![](./captures/1.png)

1. Dockerfile del servicio npm

   ![](./captures/2.png)

1. docker-compose.yml

   ![](./captures/3.png)

1. Docker de proyecto ejecutandose

   ![](./captures/4.png)

1. Ejecucion del proyecto desde el docker

   ![](./captures/5.png)

1. Cambios de codigo desde equipo local

   ![](./captures/6.png)

1. Ejecucion del linter

   ![](./captures/7.png)

1. Ejecucion de prettier para revisar el formato

   ![](./captures/8.png)

1. Ejecucion del formateador de codigo

   ![](./captures/9.png)

1. Instalacion de paquetes npm

   ![](./captures/10.png)

1. Ejecucion de los test

   ![](./captures/11.png)
