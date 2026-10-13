# 03 – Requisitos funcionales

> Historia de usuario = necesidad desde el usuario. Requisito funcional = lo que el sistema debe hacer.

## Requisitos de la propuesta

| ID | Requisito funcional |
|---|---|
| RF01 | El sistema debe permitir registrar, editar y consultar equipos y personal. |
| RF02 | El sistema debe permitir consultar la disponibilidad por fechas. |
| RF03 | El sistema debe permitir generar cotizaciones con número correlativo y vigencia. |
| RF04 | El sistema debe permitir convertir una cotización en orden de alquiler. |
| RF05 | El sistema debe permitir registrar clientes (persona natural o empresa con RUC) y sus obras. |
| RF06 | El sistema debe permitir registrar y ubicar en mapa la dirección de entrega. |
| RF07 | El sistema debe permitir registrar el historial de contactos y grabaciones con consentimiento. |
| RF08 | El sistema debe permitir actualizar y consultar el estado del alquiler. |
| RF09 | El sistema debe permitir enviar notificaciones y recordatorios por WhatsApp o correo. |

## Requisitos adicionales (derivados de las historias)

| ID | Requisito funcional |
|---|---|
| RF10 | El sistema debe permitir autenticar usuarios y controlar el acceso según su rol (administrador, vendedor, chofer, cliente). |
| RF11 | El sistema debe permitir configurar tarifas (día, semana, mes), flete según distancia, descuentos y garantía, y usarlos en el cálculo de la cotización. |
| RF12 | El sistema debe permitir generar y descargar la cotización en formato PDF. |
| RF13 | El sistema debe permitir al cliente solicitar una cotización y reservar equipos. |
| RF14 | El sistema debe permitir consultar reportes de alquileres y equipos. *(Fase 3)* |

## Estados del alquiler (para RF08)
`cotizado → reservado → en camino → entregado → devuelto`

## Relación entre HU y requisitos funcionales

| Historia de usuario | Requisitos funcionales relacionados |
|---|---|
| HU01 Consultar catálogo y disponibilidad | RF01, RF02 |
| HU02 Gestionar equipos y personal | RF01 |
| HU03 Generar cotización | RF03, RF11, RF12 |
| HU04 Convertir cotización en orden | RF04 |
| HU05 Gestionar clientes y obras | RF05 |
| HU06 Registrar dirección en mapa | RF06 |
| HU07 Historial de contacto | RF07 |
| HU08 Actualizar estado (chofer) | RF08 |
| HU09 Consultar estado (cliente) | RF08 |
| HU10 Notificaciones y recordatorios | RF09 |
| HU11 Solicitar cotización y reservar | RF13, RF02, RF03 |
| HU12 Iniciar sesión por rol | RF10 |
| HU13 Configurar tarifas | RF11 |
| HU14 Reportes | RF14 |
