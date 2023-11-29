# Re-Cycling Bikes

## Flujo de Trabajo

- Clickup (Tareas) -> Pensar en lo que se debe hacer ->
- -> Figma -> Trabajar en Interfaz -> Logica -> Checkeo | Verificar response.

## Reuniones

- Martes: Reunion de Producto, y qué hemos avanzado (3/4pm)
- Viernes: Reunión de desarrollo, para ver si se necesita algo (3/4)

## Herramientas

- Next
- Zustant
- React-Bootstrap
- Supabase

## Proyecto

- Componentes `Custom` son cosas muy pequenos y practicos (botones, forms, etc...)

## Reglas

- Clickup
  a) Asignar: Tipo, Responsable, Deadline
- Comentar el codigo.
- Documentar el proyecto.
- Hacer commits semanales y manejar bien el git.
- Estar pendientes de Clickup con Kanban.
- Usar chatGPT para optimizar el codigo y comentarlo.
- Semanalmente actualizarnos sobre lo que fue hecho.

Snippet

- "@next/swc-linux-x64-gnu": "13.1.6",
-

Elimina la dependencia @next/swc-linux-x64-gnu del archivo package.json y ejecuta el comando npm install nuevamente. Si esta dependencia es necesaria, intenta instalarla en un entorno de desarrollo separado que tenga la plataforma compatible.

Si no puedes eliminar esta dependencia, puedes intentar agregar una configuración de script que establezca una variable de entorno para forzar la plataforma compatible antes de instalar la dependencia. Por ejemplo, puedes agregar el siguiente script en tu archivo package.json antes de la sección de dependencies:

"preinstall": "SET npm_config_platform=linux"

Luego, ejecuta el comando npm install nuevamente. Esto establecerá la variable de entorno npm_config_platform en linux antes de instalar cualquier dependencia y puede ayudar a resolver el problema.

## Desarrollo

- Bajar proyecto
- Bajar variables de entorno
- Instalar dependencia "npm i"
- Inicar proyecto en desarrollo "npm run dev"
