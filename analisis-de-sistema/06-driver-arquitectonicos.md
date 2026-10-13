# 06 – Drivers arquitectónicos

> Driver: requisito, atributo de calidad o restricción que influye de manera importante en cómo se diseña la arquitectura.

## Paso 1: ¿qué elementos pueden ser driver?

| Fuente | Elemento | ¿Puede ser driver? | Justificación |
|---|---|---|---|
| Requisito funcional | RF02 Disponibilidad por fechas | **Sí** | Exige consistencia transaccional para evitar dobles reservas. |
| Requisito funcional | RF06 Dirección en mapa | **Sí** | Obliga a integrar un servicio de mapas y datos geográficos. |
| Requisito funcional | RF09 Notificaciones | **Sí** | Requiere integración con servicios externos y procesamiento asíncrono. |
| Requisito funcional | RF01 Registrar equipos | No | Es una operación de mantenimiento de datos estándar. |
| Atributo de calidad | AC07 Integridad | **Sí** | Define cómo se maneja la concurrencia en reservas. |
| Atributo de calidad | AC04 Seguridad | **Sí** | Afecta autenticación, roles y cifrado en toda la solución. |
| Atributo de calidad | AC09 Falta de señal | **Sí** | Obliga a que la app móvil funcione sin conexión y sincronice. |
| Atributo de calidad | AC05 / AC03 Mantenibilidad y escalabilidad | **Sí** | Justifican la modularidad y la evolución a microservicios. |
| Atributo de calidad | AC06 Usabilidad | No | Influye sobre todo en el diseño de interfaz. |
| Restricción | RC04 Monolito modular | **Sí** | Determina la forma de organizar y desplegar el backend. |
| Restricción | RC03 API REST | **Sí** | Determina la comunicación de web y móvil con el backend. |
| Restricción | RC05 PostgreSQL + PostGIS | **Sí** | Condiciona el modelo de datos geográficos. |
| Restricción | RC07 Ley 29733 | **Sí** | Condiciona el tratamiento y almacenamiento de datos. |
| Restricción | RC02 Git/GitHub | No | No afecta la estructura del sistema. |

## Paso 2: drivers arquitectónicos

| ID | Driver arquitectónico | Origen | ¿Por qué influye en la arquitectura? |
|---|---|---|---|
| DA01 | El sistema debe impedir dobles reservas de un mismo equipo en fechas que se cruzan. | AC07 · RF02 | Exige transacciones y control de concurrencia en el módulo de reservas y la base de datos. |
| DA02 | El sistema debe proteger los datos personales (JWT, roles, cifrado) y cumplir la Ley 29733. | AC04 · AC08 · RC07 | Influye en autenticación, autorización, cifrado y registro del consentimiento. |
| DA03 | El sistema debe ser un monolito modular que pueda evolucionar a microservicios. | RC04 · AC03 · AC05 | Obliga a definir módulos con fronteras claras y bajo acoplamiento. |
| DA04 | El sistema debe integrarse con servicios externos de mapas y de notificaciones (WhatsApp/correo). | RC06 · RF06 · RF09 | Condiciona la comunicación con servicios externos y su tolerancia a fallos. |
| DA05 | La app del chofer debe funcionar sin conexión y sincronizar después. | AC09 | Influye en el almacenamiento local, la sincronización y la resolución de conflictos. |
| DA06 | Web y móvil deben consumir el mismo backend mediante una API REST. | RC03 · RC01 | Limita las alternativas de comunicación y obliga a una API única y versionada. |
| DA07 | El sistema debe almacenar y consultar ubicaciones geográficas. | RC05 · RF06 | Condiciona el modelo de datos (PostgreSQL + PostGIS) y el cálculo de flete por distancia. |
| DA08 | El sistema debe mantenerse estable durante el horario laboral. | AC02 | Influye en el despliegue (Docker, CI/CD) y el monitoreo. |

## Driver principal (como el ejemplo de pagos de la guía)
- RF: consultar disponibilidad y reservar · AC: sin dobles reservas · RC: monolito modular sobre PostgreSQL → **Driver: consistencia de las reservas (DA01 + DA03)**.
