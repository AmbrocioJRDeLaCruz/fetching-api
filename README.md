# IP Lookup App

Esta es una aplicación web simple que permite buscar información de una o varias direcciones IP utilizando la API de RapidAPI para detección de amenazas y geolocalización.

## 🚀 Tecnologías usadas

- **JavaScript** (ES Modules)
- **HTML5**
- **[Pico.css](https://picocss.com/)** para estilos rápidos y responsivos
- **[RapidAPI](https://rapidapi.com/)** para consumir información de IPs

## 🖼️ Vista previa

![image](https://github.com/user-attachments/assets/7d99ef8f-daac-4493-8b69-c0ab226c5674)


## 🧠 ¿Cómo funciona?

El usuario introduce una o varias direcciones IP separadas por comas en el campo del formulario. Al enviar, se realiza una petición `GET` a la API de RapidAPI y se muestra la información obtenida en formato JSON.


## 🛠️ Cómo usar

1. Clona el repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. **Agrega tu clave de API** en `script.js`:

```js
const OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'TU_CLAVE_RAPIDAPI',
    'x-rapidapi-host': 'NOMBRE_DEL_HOST_RAPIDAPI'
  }
}
```

## 📌Notas

- Asegúrate de tener una cuenta activa en RapidAPI y suscribirte a la API ip-lookup-threat-detection-api.

- La API puede tener límites de uso según el plan gratuito o de pago.
