module.exports = {
  home: `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Documentación de la API</title>
    </head>
    <body>
      <h1>Documentación de la API</h1>
      <p>
        Bienvenido a la documentación de la API. Aquí podrás encontrar información
        sobre los endpoints disponibles y cómo utilizarlos.
      </p>
      <h2>Endpoint /registers</h2>
      <p>
        Este endpoint permite obtener una lista de todos los registros o crear un
        nuevo registro. Soporta los métodos HTTP GET y POST.
      </p>
      <h3>Método GET</h3>
      <p>
        Este método permite obtener una lista de todos los registros almacenados.
        La respuesta del servidor es un objeto JSON que contiene un array con los
        registros.
      </p>
      <h4>Ejemplo de petición:</h4>
      <pre>
  GET /registers HTTP/1.1
  Host: example.com
      </pre>
      <h4>Ejemplo de respuesta:</h4>
      <pre>
  HTTP/1.1 200 OK
  Content-Type: application/json
  
  [
    {
      "id": 1,
      "kidId": 1,
      "clinicId": 1,
      "date": "12/01/2023",
      "time": "23:35:45",
      "healthStatus": "buena"
    },
    {
      "id": 2,
      "kidId": 2,
      "clinicId": 1,
      "date": "10/05/2023",
      "time": "13:05:40",
      "healthStatus": "enfermo"
    },
    ...
  ]
      </pre>
      <h3>Método POST</h3>
      <p>
        Este método permite crear un nuevo registro en la base de datos. El cuerpo
        de la petición debe ser un objeto JSON que contenga los datos del nuevo
        registro. La respuesta del servidor es el objeto JSON del registro creado,
        incluyendo su ID asignado automáticamente.
      </p>
      <h4>Ejemplo de petición:</h4>
      <pre>
  POST /registers HTTP/1.1
  Host: example.com
  Content-Type: application/json
  
  {
    "kidId": 5,
    "clinicId": 2,
    "date": "01/06/2023",
    "time": "11:30:00",
    "healthStatus": "en observacion"
  }
      </pre>
      <h4>Ejemplo de respuesta:</h4>
      <pre>
  HTTP/1.1 201 Created
  Content-Type: application/json
  
  {
    "id": 5,
    "kidId": 5,
    "clinicId": 2,
    "date": "01/06/2023",
    "time": "11:30:00",
    "healthStatus": "en observacion"
  }
      </pre>
    </body>
  </html>
  
  `,
};
