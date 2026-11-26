# Examen · MF0493_3

Implantación de aplicaciones web en entorno internet, intranet y extranet.

Duración: **90 minutos**. Individual. Sin IA.

En el formulario: las de opción múltiple son una sola respuesta. En las abiertas y en el código, escribe la solución completa. No hace falta justificar las de opción múltiple.

Puntuación orientativa: sección A, 40 puntos. Sección B, 20. Sección C, 40.

---

## A. Opción múltiple

### A1

En Taller Norte hay tres accesos: la web de citas para cualquiera, la gestión de órdenes solo para el personal, y un portal de pedidos para proveedores con cuenta. Esos tres accesos son, en ese orden:

- a) Intranet, internet y extranet
- b) Internet, intranet y extranet
- c) Extranet, intranet e internet
- d) Internet, extranet e intranet

### A2

La relación entre la Web e Internet es:

- a) Son el mismo servicio
- b) Internet es una página que corre encima de la Web
- c) La Web es un servicio que usa Internet
- d) La Web solo existe dentro de una intranet

### A3

¿Qué puerto se publica hacia Internet en un despliegue web habitual, y cuál se queda en la red interna?

- a) Se publica el 3306 y se reserva el 443
- b) Se publica el 443 y el de la base de datos no se abre al exterior
- c) Se publican los dos
- d) No hace falta publicar ninguno si la página es HTTPS

### A4

El servicio que traduce un nombre (`taller-norte.example`) a una dirección IP es:

- a) SSH, puerto 22
- b) SMTP, puerto 587
- c) DNS, puerto 53
- d) HTTP, puerto 80

### A5

En el modelo TCP/IP, HTTP vive en la capa de:

- a) Acceso
- b) Internet
- c) Transporte
- d) Aplicación

### A6

`TCP` y `UDP` se distinguen así:

- a) TCP abre una conversación y conserva el orden. UDP envía sin esa conversación
- b) UDP garantiza el orden y TCP no
- c) Los dos cifran el tráfico
- d) TCP es solo para correo y UDP es solo para la Web

### A7

Una regla de cortafuegos dice: origen Internet, destino base de datos, puerto 3306, denegar. Qué está protegiendo:

- a) Que nadie resuelva el nombre del taller
- b) Que la base de datos no quede alcanzable desde la red pública
- c) Que el certificado HTTPS caduque
- d) Que Git no pueda hacer `push`

### A8

Una extranet es:

- a) La red pública mundial
- b) La red privada de la organización, sin acceso externo
- c) Una extensión controlada de la red privada hacia personas externas autorizadas
- d) El nombre del servidor de aplicaciones

### A9

Git y GitHub son:

- a) Lo mismo: los dos son el programa que guarda el historial en tu equipo
- b) Git guarda el historial en el equipo. GitHub es un sitio donde se publica el repositorio remoto
- c) GitHub guarda el historial y Git solo sirve para abrir el navegador
- d) Git es la rama principal y GitHub es el comando `commit`

### A10

El orden para publicar un cambio nuevo es:

- a) `push`, `commit`, `add`, `status`
- b) `commit`, `push`, `add`, `status`
- c) `status`, `add`, `commit`, `push`
- d) `add`, `push`, `status`, `commit`

### A11

¿Qué mensaje de commit informa del cambio?

- a) `update`
- b) `asdf`
- c) `Añade el horario de citas`
- d) `cambios varios!!!`

### A12

¿Qué no debe entrar en el repositorio?

- a) El `README` de arranque
- b) El código de la página
- c) Un `.env` con contraseñas
- d) La documentación de despliegue, sin secretos

### A13

`git pull` sirve para:

- a) Borrar el historial local
- b) Traer a tu copia los commits que ya están en el remoto
- c) Crear el archivo `.gitignore`
- d) Firmar el certificado HTTPS

### A14

Creas la rama `citas`, trabajas ahí y la publicas. ¿Qué comando la crea y te coloca en ella?

- a) `git push citas`
- b) `git switch -c citas`
- c) `git status citas`
- d) `git remote add citas`

### A15

En un fichero aparecen estas marcas:

```text
<<<<<<< HEAD
Horario de lunes a viernes
=======
Horario de lunes a sábado
>>>>>>> citas
```

Eso es:

- a) Un certificado caducado
- b) Un conflicto: dos historias tocaron las mismas líneas y hay que dejar el texto definitivo
- c) La sintaxis de un encabezado `h1`
- d) El formato de un `blockquote`

### A16

`.gitignore` conviene escribirlo:

- a) Después de haber subido ya las contraseñas, para borrarlas del historial
- b) Antes del primer commit que pudiera incluir secretos o dependencias generadas
- c) Solo en GitHub, porque Git no lo lee
- d) Dentro del mensaje del commit

### A17

En `<img alt="Fachada del taller" src="fachada.png">`, el atributo `alt` es:

- a) La dirección del fichero
- b) El texto alternativo, si la imagen no se puede mostrar
- c) El título de la pestaña del navegador
- d) El puerto del servidor

### A18

En `<a href="https://taller-norte.example">Pedir cita</a>`, ¿qué ve la persona y cuál es el destino?

- a) Ve la URL y el destino es «Pedir cita»
- b) Ve «Pedir cita» y el destino es `https://taller-norte.example`
- c) Ve las dos cosas como encabezado `h1`
- d) No se muestra nada: `href` es solo para CSS

### A19

`id="markdown-input"` y `class="rate one"` se diferencian en que:

- a) El `id` identifica un elemento concreto. La `class` se puede repetir y un elemento puede llevar varias
- b) La `class` solo puede usarse una vez en toda la página. El `id` se repite
- c) Son lo mismo
- d) El `id` solo vale para imágenes

### A20

En una tabla, los títulos de columna van en:

- a) `tbody` y celdas `td` sin `th`
- b) `thead`, en celdas `th`
- c) Un `blockquote` por columna
- d) El atributo `alt` de la tabla

### A21

Este HTML:

```html
<tr class="read">
  <td><span class="status">Read</span></td>
</tr>
```

¿Qué selector aplica un fondo solo a esas filas, con el atributo `class` igual a `read`?

- a) `tr.read-row`
- b) `tr[class="read"]`
- c) `span[class^="rate"]`
- d) `tr[class~="status"]`

### A22

`span[class^="rate"]` selecciona un `span` cuyo atributo `class`:

- a) Contiene la palabra suelta `one`
- b) Empieza por `rate`, como en `class="rate three"`
- c) Es exactamente `status`
- d) Está vacío

### A23

Para que un `span` siga en la línea y aun así acepte `width` y `height`, `display` vale:

- a) `none`
- b) `inline`
- c) `inline-block`
- d) `table-row`

### A24

```css
span[class~="one"] > span:nth-child(1) {
  background-image: linear-gradient(135deg, #ffd54f, #ffb300);
}
```

Esa regla pinta:

- a) Los tres círculos de cualquier valoración
- b) Solo el primer círculo de un `span` que tiene la palabra `one` en su clase
- c) La fila entera con clase `to-read`
- d) El borde de `.status`

### A25

`#html-output` debe mostrar el código HTML como texto, y `#preview` debe dibujarlo. Las propiedades adecuadas son:

- a) Las dos con `innerHTML`
- b) `textContent` en la salida en crudo e `innerHTML` en la vista previa
- c) Las dos con `textContent`
- d) `alert` en las dos

### A26

La conversión del markdown debe rehacerse sola al escribir. El evento del `textarea` es:

- a) `click` de un botón, y la función no devuelve nada
- b) `input`
- c) `git push`
- d) `submit` de un formulario que recarga la página

### A27

¿Por qué `###` se sustituye antes que `#`?

- a) Porque `^# ` también coincide con el principio de `### `
- b) Porque el `h3` no usa almohadillas
- c) Porque Git ordena los reemplazos
- d) Porque el navegador ignora el `h1`

### A28

¿Por qué la imagen se convierte antes que el enlace?

- a) Porque un enlace no lleva paréntesis
- b) Porque `![alt](src)` contiene un `[alt](src)`, y el patrón del enlace se lo comería dejando el `!` suelto
- c) Porque las imágenes solo pueden ir en un `h1`
- d) Porque `img` no tiene atributos

### A29

¿Por qué la negrita se convierte antes que la cursiva?

- a) Porque `**texto**` empieza por `*`, y la cursiva lo partiría antes de ver el par doble
- b) Porque `<em>` no existe
- c) Porque la cursiva solo funciona con `__`
- d) Porque el navegador no lee asteriscos

### A30

`getWeather` y `showWeather` se declaran con `async function`, no con `const`, porque:

- a) `const` no puede llamar a `fetch`
- b) Los tests necesitan poder reasignar esas funciones
- c) `async` solo existe en `const`
- d) GitHub no acepta `function`

---

## B. Respuesta corta

### B1

Una regla permite el puerto 443 desde Internet hacia el servidor web, y deniega el 22 desde Internet. Explica, en dos o tres líneas, qué visita puede entrar y qué queda fuera.

### B2

Tienes la carpeta del proyecto, con un `README.md` ya modificado. Escribe los comandos, en orden, para ver el cambio, guardarlo en un commit con el mensaje `Añade el horario de citas` y publicarlo en `origin` sobre `main`. El remoto ya está enlazado.

### B3

Cita dos cosas que irían en `.gitignore` en este módulo y di por qué no deben publicarse.

### B4

`convertMarkdown` no recibe parámetros. ¿De dónde lee el markdown y qué tiene que hacer con el resultado para que el laboratorio pueda comprobarlo?

### B5

En la app del tiempo, la persona pulsa el botón con la primera opción del `select`, la que tiene el valor vacío. ¿Qué debe hacer la aplicación?

---

## C. Código

### C1

Pasa este markdown a HTML. Conserva el orden de las sustituciones que has usado en clase (encabezados de más a menos almohadillas, imagen antes que enlace, negrita antes que cursiva, cita al final).

```text
### Horario
**Lunes a viernes**
[Pedir cita](https://taller-norte.example/cita)
> Trae la *matrícula*
```

Escribe el HTML resultante, un bloque por línea.

### C2

Completa las cuatro expresiones. No cambies el nombre de la variable.

```js
md = md.replace(/* h2: ## al principio de la línea */, "<h2>$1</h2>");
md = md.replace(/* imagen: ![alt](src) */, '<img alt="$1" src="$2">');
md = md.replace(/* negrita con ** ** */, "<strong>$1</strong>");
md = md.replace(/* cita: > al principio de la línea */, "<blockquote>$1</blockquote>");
```

### C3

Con este CSS y este HTML, di qué fondo tiene la fila y cuántos círculos quedan coloreados. Razona con los selectores, no hace falta calcular el color exacto: basta el papel de cada regla.

```css
tr[class="read"] {
  background-image: linear-gradient(90deg, #e8f5e9, #c8e6c9);
}
span[class^="rate"] > span {
  background-color: #eeeeee;
}
span[class~="two"] > span:nth-child(-n+2) {
  background-image: linear-gradient(135deg, #ffd54f, #ffb300);
}
```

```html
<tr class="read">
  <td>
    <span class="rate two">
      <span></span><span></span><span></span>
    </span>
  </td>
</tr>
```

### C4

La app del tiempo ya muestra Londres. La persona elige París y `getWeather("paris")` lanza un error. Después elige Tokio y la API devuelve humedad `undefined` y viento `0`.

Responde:

1. Qué se ve en pantalla justo después del fallo de París, y qué no debe cambiar.
2. Qué escribes en `#humidity` y en `#wind` cuando llega Tokio.
3. Escribe el cuerpo de `showWeather` lo bastante completo para esos dos casos: avisar sin tocar la pantalla si la petición falla, y rellenar humedad y viento distinguiendo el cero de un dato ausente. El texto del aviso es `Something went wrong, please try again later`.

