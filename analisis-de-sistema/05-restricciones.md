# 05 – Restricciones

| ID | Tipo | Restricción | Descripción |
|---|---|---|---|
| RC01 | Tecnológica | Aplicación web y móvil | El sistema debe ofrecer una aplicación web y una app móvil (esta última, en particular, para el chofer). |
| RC02 | Proyecto | Control de versiones | El código fuente debe gestionarse con Git y mantenerse en un repositorio compartido (GitHub). |
| RC03 | Tecnológica | API REST | La comunicación entre las aplicaciones cliente (web y móvil) y el backend debe realizarse mediante una API REST. |
| RC04 | Organizacional | Monolito modular | La arquitectura debe ser un monolito modular con posibilidad de evolucionar a microservicios. |
| RC05 | Tecnológica | Base de datos | Los datos se almacenarán en PostgreSQL con PostGIS para información geográfica. |
| RC06 | Tecnológica | Servicio de mapas | La ubicación de direcciones debe apoyarse en un servicio externo de mapas (Google Maps o Mapbox). |
| RC07 | Legal | Protección de datos | El tratamiento de datos personales debe cumplir la Ley N.° 29733 (consentimiento explícito y políticas de privacidad). |
| RC08 | Legal | Grabaciones de contacto | Las grabaciones de llamadas o mensajes solo pueden registrarse con consentimiento del cliente. |
| RC09 | Tecnológica | Despliegue | El despliegue debe realizarse con Docker y CI/CD. |
| RC10 | Proyecto | Alcance por fases | El MVP (Fase 1) incluye catálogo, disponibilidad, cotizador, clientes, direcciones y estados. Pagos y facturación SUNAT van en Fase 2; WhatsApp y grabación de contactos en Fase 3. |
| RC11 | Proyecto | Fuera de alcance inicial | GPS/IoT, marketplace de terceros y predicción de demanda no forman parte de la versión inicial. |
| RC12 | Proyecto | Arquitectura en capas | La solución se organiza en tres capas (requisito del curso). |
| RC13 | Proyecto | Documentación en Markdown | El análisis y la arquitectura se documentan en Markdown con diagramas Mermaid en el repositorio. |

## Tecnologías sugeridas (aún no son restricciones, se decidirán en el diseño detallado)

| Capa | Opciones |
|---|---|
| Frontend web | React o Angular |
| App móvil | Flutter o React Native |
| Backend | NestJS, Spring Boot o .NET |
| Caché y colas | Redis / RabbitMQ |
| Archivos | Almacenamiento tipo S3 |
