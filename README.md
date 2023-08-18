<h1 align="center"> Manejando errores </h1>

<p align="center"><img src="https://appmaster.io/api/_files/gLKT845SHV7cRiSsiFSDk6/download/"></p>

<h2 align="center"> Try | Catch(e) </h2>

Es muy frecuente tener que desarrollar bloques de código los cuales puedan resultar en algún error. Por ejemplo, cuando las acciones que realizan no dependen enteramente de ellos, sino que se tienen que valer de contenido que está subido a Internet, por ejemplo. O cuando solicitamos cierta información y por algún motivo no se envían los parámetros necesarios correctamente.

Uno de los escenarios posibles es cuando necesitamos consumir datos de una API alojada en la nube o en alguna red local ¿Qué pasa si justo se corta Internet?¿Qué pasa si justo se cae el servidor?¿O si no envié los parámetros correctos en la solicitud?

Todo esto produce errores al momento de ejecución del programa. Esos errores, si no se manejan correctamente, nos detienen el programa. Para evitar esto, existe una herramienta nativa de JavaScript que permite probar bloques de código en una zona segura, para que, en caso de error, podamos atraparlo y procesarlo, y así poder determinar qué hacer:

<img src="https://i.ibb.co/d0jd2LL/Untitled-2023-08-17-2312.png">

Con la sentencia `Try...Catch(e)` podemos ejecutar un grupo de sentencias en un entorno seguro para poder procesar el error y determinar acciones según el resultado. En el módulo `resolucion-try-catch.ts` se hace uso de la sentencia `Try...Catch(e)` para hacer un manejo de errores básico.

<h2 align="center"> Desafío </h2>

Armar un programa que permita obtener titulares (top headlines) de noticias, descripción, autor y el link al artículo completo, para crear una collection con objetos que tengan esa info. Imprimir en la terminal el resultado.

El proyecto debe estar compuesto por al menos dos módulos:

1. /src
   1. index.ts | Encargado de delegar las acciones a public-api.ts según lo que el usuario ingrese (Usar readline o process.argv).
   2. public-api.ts | Encargado de realizar las peticiones a la API y de manejar los errores.

- El usuario tiene que poder filtrar las noticias según: país, categoría y fuente.
- Usar las herramientas de la API para filtrar.
- El usuario también puede indicar la cantidad de resultados que le saldrá por consulta.

<h4>Creen un repo, súbanlo a su perfil de GitHub y envíenme el link </h4>

<h2 align="center"> LINKS </h2>

- [News API](https://newsapi.org/)
