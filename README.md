# EliteTorrent Link Decoder (Firefox/Chrome Extension)

Extension para Firefox y Chrome que detecta y descifra enlaces ofuscados en paginas compatibles de EliteTorrent para que, al hacer clic en el fichero torrent, se abra el enlace directo sin redirecciones a otras webs.

## Descripcion

Esta extension analiza los enlaces de la pagina y busca parametros codificados (por ejemplo, `?i=`) para intentar recuperar la URL real.

Flujo de descifrado aplicado:
- Multiples intentos de decodificacion Base64 (hasta 5 capas)
- Descifrado tipo Caesar con ROT13

Con esto se evita la cadena de redirecciones intermedias y la necesidad de copiar o descifrar enlaces manualmente en los casos compatibles.

## Caracteristicas

- Ejecucion automatica al cargar la pagina
- Sin interaccion del usuario
- Al hacer clic en el torrent, acceso directo sin pasar por varias webs de redireccion
- Procesamiento de enlaces en dominios de EliteTorrent
- Sin telemetria ni recoleccion de datos

## Compatibilidad

- Firefox (Manifest V3)
- Chrome (Manifest V3)
- Dominios objetivo: `*.elitetorrent.com`

## Instalacion (modo desarrollo)

### Firefox

1. Abre Firefox y entra en `about:debugging`.
2. Ve a "This Firefox".
3. Haz clic en "Load Temporary Add-on...".
4. Selecciona el archivo `manifest.json` de esta carpeta.

### Chrome

1. Abre Chrome y entra en `chrome://extensions`.
2. Activa "Developer mode" (arriba a la derecha).
3. Haz clic en "Load unpacked".
4. Selecciona esta carpeta de la extension.

Nota para Chrome:
- Si quieres evitar avisos por claves especificas de Firefox, crea una variante del manifest sin el bloque `browser_specific_settings`.

## Uso

1. Navega a una pagina compatible de EliteTorrent.
2. Haz clic en el enlace del torrent.
3. La extension intentara descifrarlo automaticamente para abrir el destino final sin saltos por paginas intermedias.

## Privacidad

Esta extension:
- No recopila datos personales
- No almacena informacion del usuario
- No envia informacion a servidores externos

Permisos declarados:
- Host permission para `*://*.elitetorrent.com/*`
- Sin permisos adicionales

## Estructura del proyecto

- `manifest.json`: configuracion de la extension
- `content.js`: logica de deteccion y descifrado de enlaces
- `icons/`: iconos de la extension


