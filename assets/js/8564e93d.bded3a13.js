"use strict";(self.webpackChunkcaso_02=self.webpackChunkcaso_02||[]).push([[8531],{9943:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var l=s(4848),i=s(8453);const r={},c="Manual de Instalaci\xf3n",a={id:"prueba/intro3",title:"Manual de Instalaci\xf3n",description:"Linux | Valet",source:"@site/docs/prueba/intro3.md",sourceDirName:"prueba",slug:"/prueba/intro3",permalink:"/tarea02/docs/prueba/intro3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/prueba/intro3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manual de Instalaci\xf3n: Docker + GitLab + SSL",permalink:"/tarea02/docs/prueba/intro2"},next:{title:"Instalaci\xf3n del Facturador",permalink:"/tarea02/docs/prueba/intro4"}},d={},o=[{value:"Linux | Valet",id:"linux--valet",level:2}];function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"manual-de-instalaci\xf3n",children:"Manual de Instalaci\xf3n"}),"\n",(0,l.jsx)(e.h2,{id:"linux--valet",children:"Linux | Valet"}),"\n",(0,l.jsx)(e.p,{children:"Si desea implementar sobre un servidor local Linux \u201cdesde cero\u201d debe:"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 1: Acceso Root"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Contar con acceso root"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 2: Instalaci\xf3n de PHP y Librer\xedas"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Instalar PHP 7.2 y todas las librer\xedas requeridas por el aplicativo y Laravel"}),"\n",(0,l.jsxs)(e.li,{children:["Ubuntu no cuenta con la versi\xf3n 7.2 de PHP de manera nativa, por lo que se deben seguir estos pasos:","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get update"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get install software-properties-common"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get install python-software-properties"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"add-apt-repository ppa:ondrej/php"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get update"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 3: Instalaci\xf3n de MySQL y PhpMyAdmin"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Instalar MySQL (opcionalmente, instalar PhpMyAdmin para hacer las primeras pruebas de base de datos)","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin"})}),"\n",(0,l.jsx)(e.li,{children:"Se solicitar\xe1 contrase\xf1a dos veces, con su confirmaci\xf3n, tanto para MySQL como para PhpMyAdmin"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 4: Instalaci\xf3n de Git, Curl, Composer"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Instalar Git, Curl, Composer","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get install git"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get install curl"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt-get install composer"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 5: Configuraci\xf3n de Composer"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Dar permisos de lectura y escritura a la carpeta Composer","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"chmod \u2013R 777 ~/.composer"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Instalar librer\xedas cpriego de Valet","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"composer global require cpriego/valet-linux"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["A\xf1adir la siguiente l\xednea al final del archivo ",(0,l.jsx)(e.code,{children:"~/.profile"})," y guardar","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"nano ~/.profile"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"PATH= \u201cHOME/.composer/vendor/bin:$PATH\u201d"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Ejecutar en terminal","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"source ~/.profile"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Instalar las siguientes librer\xedas","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt install network-maneger libnss3-tools jq xsel"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 6: Instalaci\xf3n de Valet"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Detener servicios de Apache2 si est\xe1 instalado","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"service apache2 stop"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Instalar Nginx","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"apt install nginx"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Verificar que el servidor de Nginx se est\xe1 ejecutando correctamente","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"systemctl status nginx"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Instalar Valet","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"valet install"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Crear directorio para el c\xf3digo y asociarlo con Valet","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"mkdir ~/code"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"cd code"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"valet park"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 7: Clonar el Repositorio y Configurar el Entorno"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Clonar el repositorio","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"git clone https://gitlab.com/b.mendoza/facturadorpro3.git"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Configurar el archivo .env","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"cp .env.example .env"})}),"\n",(0,l.jsxs)(e.li,{children:["Configurar las variables ",(0,l.jsx)(e.code,{children:"APP_URL_BASE"}),", ",(0,l.jsx)(e.code,{children:"DB_DATABASE"}),", ",(0,l.jsx)(e.code,{children:"DB_USERNAME"})," y ",(0,l.jsx)(e.code,{children:"DB_PASSWORD"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Generar clave de aplicaci\xf3n y actualizar autoload","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"php artisan key:generate"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"composer dump-autoload"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"Registrar la base de datos mediante PhpMyAdmin"}),"\n",(0,l.jsxs)(e.li,{children:["Ejecutar las migraciones","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"composer install"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"php artisan migrate --seed"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Paso 8: Verificaci\xf3n y Configuraci\xf3n Adicional"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Verificar la creaci\xf3n de la base de datos y tablas en PhpMyAdmin"}),"\n",(0,l.jsxs)(e.li,{children:["Corregir permisos en las carpetas del proyecto si es necesario","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"chmod -R 755 storage"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"chmod -R 755 bootstrap/cache"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Establecer la ruta de los archivos cargados de la empresa","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"php artisan storage:link"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Accesos"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Sitio: Facturadorpro3.test"}),"\n",(0,l.jsxs)(e.li,{children:["Usuario: ",(0,l.jsx)(e.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"})]}),"\n",(0,l.jsx)(e.li,{children:"Contrase\xf1a: 123456"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>a});var l=s(6540);const i={},r=l.createContext(i);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);