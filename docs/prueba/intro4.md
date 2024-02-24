# Instalación del Facturador

## Docker | Linux | SSL externo

**Pasos**

1. Para instalar, ejecute el script evitando instalar el SSL. Durante el proceso se le preguntará y deberá ingresar "n".

2. Una vez finalizada la instalación, vaya a la ruta de instalación:

    ```bash
    cd /root/facturadorpro31/
    ```

3. Edite el archivo .env:

    ```bash
    nano .env
    ```

4. Dentro del editor, localice los parámetros y cámbielos como se muestra a continuación:

    | Antes                                   | Después                                  | 
    |----------------------------------------|------------------------------------------|
    | APP_URL=http://%24%28app_url_base%29/ | APP_URL=https://%24%28app_url_base%29/  |
    | FORCE_HTTPS=false                      | FORCE_HTTPS=true                         |

5. Guarde y salga del editor. Ejecute el siguiente comando para eliminar la caché de la aplicación:

    ```bash
    php artisan config:Cache
    ```

❗**IMPORTANTE:** 
- Recuerde habilitar el puerto 443 para poder acceder a la herramienta.
