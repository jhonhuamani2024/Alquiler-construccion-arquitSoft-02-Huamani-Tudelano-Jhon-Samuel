# 01 – Actores

> Actor: persona, organización o sistema externo que está **fuera** del sistema e interactúa con él.

## Actores humanos

| Actor | ¿Qué necesita realizar? |
|---|---|
| **Administrador** | Gestionar catálogo, precios, usuarios y reportes. |
| **Vendedor** | Atender clientes, registrar sus datos y obras, y emitir cotizaciones. |
| **Chofer / Logística** | Entregar y recoger equipos y actualizar el estado del alquiler. |
| **Cliente** | Consultar equipos, solicitar cotizaciones, reservar y consultar el estado de su alquiler. (Persona natural o empresa con RUC.) |

## Sistemas externos

| Actor | ¿Qué necesita realizar? | Fase |
|---|---|---|
| **Servicio de mapas** (Google Maps / Mapbox) | Ubicar y visualizar en mapa las direcciones de entrega. | MVP |
| **Servicio de notificaciones** (WhatsApp / correo) | Enviar notificaciones y recordatorios a los clientes. | Fase 3 (WhatsApp); correo desde el MVP |
| **Pasarela de pago** | Procesar pagos de alquileres. | Fase 2 |
| **Servicio de facturación SUNAT** | Generar comprobantes electrónicos. | Fase 2 |

## Pregunta de control
¿Quién o qué interactúa con el sistema desde fuera para realizar una acción o intercambiar información?
Respuesta: los 4 actores humanos y los sistemas externos de la tabla (mapas y notificaciones en las primeras fases; pagos y SUNAT en fases posteriores).
