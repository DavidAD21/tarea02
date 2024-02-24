---
sidebar_position: 1
---

# Manual de Instalación: Docker + GitLab + SSL

## Descripción

Hemos elaborado un script para uso en instancias Linux, este es un archivo .sh que actualiza el sistema, instala las herramientas, sus dependencias, configura un certificado SSL renovable cada 90 días que debe ser confirmado en el proceso con su dominio y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos , su ejecución es muy sencilla.

## Requisitos previos

1. Tener acceso a su servidor, vps, máquina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem.
2. Tener instalado una versión de ssh en su máquina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal.
3. Es importante configurar su dominio apuntando a la IP de su instancia para que durante la ejecución del script se valide el certificado SSL y al finalizar la ejecución no tenga errores y todo esté listo para realizar pruebas. Edite los récords A y CNAME donde A debe contener su IP y CNAME el valor '*' (asterisco) para que se tomen los subdominios registrados por la herramienta.
![Imagen 01](/img/imagen1.PNG)

4. Durante la ejecución del script deberá almacenar en su dominio dos registros TXT con unos valores que se mostrarán en pantalla, estos registros son validados en directo y no pueden tardar más de 2 minutos en validarse en su dominio.
5. En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasarán a usarse con el aplicativo y los contenedores de Docker.

## Pasos

1. Acceder a su instancia vía SSH.
2. Loguearse como super usuario ejecutando `sudo su`.
3. Ubicarse en la carpeta del usuario, por ejemplo `cd /home/ubuntu/`.
4. Crear el archivo `install` ejecutando `touch install.sh`.
5. Editar el archivo con su editor preferido utilizando `nano install.sh`.
6. En el archivo `install.sh`, agregar el contenido del siguiente enlace: [Script de instalación](https://gitlab.com/snippets/1852652). Mantenga la estructura del script.
![Imagen 01](/img/imagen4.PNG)
7. Para salir del editor y guardar, presionar `ctrl + x`, luego confirmar con `y` y presionar `Enter`.
8. Darle permisos de ejecución al archivo ejecutando `chmod +x install.sh`.
9. Ejecutar el comando `./install.sh [repositorio] [dominio]`, por ejemplo: `./install.sh https://gitlab.com/rash07/facturadorpro2 elfacturador.com`.
10. Durante la ejecución del comando, seguir las instrucciones y añadir los valores en los registros tipo TXT de su dominio.
![Imagen 01](/img/imagen5.PNG)
11. Continuar con el proceso de actualización del sistema y proporcionar el usuario y contraseña de GitLab cuando sea solicitado.
12. Una vez finalizado, los accesos estarán listos en su dominio con el correo `admin@gmail.com` y la contraseña `123456`.
13. Proseguir con el manual de pruebas o documentación de cada proyecto.

## 📢Recomendaciones

- Luego de instalar el facturador, modificar parámetros en el archivo `.env`, como la dirección de envío de correos y configuraciones de plantillas de los pdf, entre otros.
- Utilizar el comando `php artisan config:cache` dentro del contenedor de `fpm1` cada vez que se edita el archivo `.env`.
- Verificar que los usuarios del servidor tengan permisos en la ruta donde se clonó el repositorio si se accede desde ftp o scp.
