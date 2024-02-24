# Manual de Instalación 
## Linux | Valet 

Si desea implementar sobre un servidor local Linux “desde cero” debe:

**Paso 1: Acceso Root**
- Contar con acceso root

**Paso 2: Instalación de PHP y Librerías**
- Instalar PHP 7.2 y todas las librerías requeridas por el aplicativo y Laravel
- Ubuntu no cuenta con la versión 7.2 de PHP de manera nativa, por lo que se deben seguir estos pasos:
  - `apt-get update`
  - `apt-get install software-properties-common`
  - `apt-get install python-software-properties`
  - `add-apt-repository ppa:ondrej/php`
  - `apt-get update`
  - `apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt`

**Paso 3: Instalación de MySQL y PhpMyAdmin**
- Instalar MySQL (opcionalmente, instalar PhpMyAdmin para hacer las primeras pruebas de base de datos)
  - `apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin`
  - Se solicitará contraseña dos veces, con su confirmación, tanto para MySQL como para PhpMyAdmin

**Paso 4: Instalación de Git, Curl, Composer**
- Instalar Git, Curl, Composer
  - `apt-get install git`
  - `apt-get install curl`
  - `apt-get install composer`

**Paso 5: Configuración de Composer**
- Dar permisos de lectura y escritura a la carpeta Composer
  - `chmod –R 777 ~/.composer`
- Instalar librerías cpriego de Valet
  - `composer global require cpriego/valet-linux`
- Añadir la siguiente línea al final del archivo `~/.profile` y guardar
  - `nano ~/.profile`
  - `PATH= “HOME/.composer/vendor/bin:$PATH”`
- Ejecutar en terminal
  - `source ~/.profile`
- Instalar las siguientes librerías
  - `apt install network-maneger libnss3-tools jq xsel`

**Paso 6: Instalación de Valet**
- Detener servicios de Apache2 si está instalado
  - `service apache2 stop`
- Instalar Nginx
  - `apt install nginx`
- Verificar que el servidor de Nginx se está ejecutando correctamente
  - `systemctl status nginx`
- Instalar Valet
  - `valet install`
- Crear directorio para el código y asociarlo con Valet
  - `mkdir ~/code`
  - `cd code`
  - `valet park`

**Paso 7: Clonar el Repositorio y Configurar el Entorno**
- Clonar el repositorio
  - `git clone https://gitlab.com/b.mendoza/facturadorpro3.git`
- Configurar el archivo .env
  - `cp .env.example .env`
  - Configurar las variables `APP_URL_BASE`, `DB_DATABASE`, `DB_USERNAME` y `DB_PASSWORD`
- Generar clave de aplicación y actualizar autoload
  - `php artisan key:generate`
  - `composer dump-autoload`
- Registrar la base de datos mediante PhpMyAdmin
- Ejecutar las migraciones
  - `composer install`
  - `php artisan migrate --seed`

**Paso 8: Verificación y Configuración Adicional**
- Verificar la creación de la base de datos y tablas en PhpMyAdmin
- Corregir permisos en las carpetas del proyecto si es necesario
  - `chmod -R 755 storage`
  - `chmod -R 755 bootstrap/cache`
- Establecer la ruta de los archivos cargados de la empresa
  - `php artisan storage:link`

**Accesos**
- Sitio: Facturadorpro3.test
- Usuario: admin@gmail.com
- Contraseña: 123456
