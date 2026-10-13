# 02 · Historias de usuario

Formato: **Como** `<actor>` **quiero** `<acción>` **para** `<beneficio>`.
Prioridad según MoSCoW: **M**ust · **S**hould · **C**ould · **W**on't (por ahora).

| ID | Actor | Historia | Prioridad |
|---|---|---|---|
| HU-01 | Cliente | Como cliente quiero ver el catálogo de equipos con fotos y precios para decidir qué alquilar | M |
| HU-02 | Cliente | Como cliente quiero consultar la disponibilidad por fechas para evitar reservar un equipo ocupado | M |
| HU-03 | Cliente | Como cliente quiero solicitar una cotización de varios equipos para conocer el costo total | M |
| HU-04 | Vendedor | Como vendedor quiero generar una cotización en PDF con número correlativo para enviarla al cliente | M |
| HU-05 | Cliente | Como cliente quiero registrar la dirección de mi obra en un mapa para que me entreguen en el lugar correcto | M |
| HU-06 | Vendedor | Como vendedor quiero convertir una cotización aceptada en una orden de alquiler para iniciar la entrega | M |
| HU-07 | Vendedor | Como vendedor quiero registrar llamadas y mensajes del cliente para mantener su historial | M |
| HU-08 | Chofer | Como chofer quiero ver mi ruta de entregas del día para optimizar mi recorrido | S |
| HU-09 | Chofer | Como chofer quiero registrar fotos y firma del cliente en la entrega para tener evidencia | S |
| HU-10 | Cliente | Como cliente quiero ver el estado de mi alquiler en tiempo real para saber cuándo llega el equipo | S |
| HU-11 | Administrador | Como administrador quiero gestionar equipos, precios y categorías para mantener el catálogo actualizado | M |
| HU-12 | Administrador | Como administrador quiero ver reportes de ingresos y equipos más alquilados para tomar decisiones | C |
| HU-13 | Cliente | Como cliente quiero pagar con Yape, Plin o tarjeta para cerrar el alquiler rápidamente | S |
| HU-14 | Administrador | Como administrador quiero registrar mantenimientos de equipos para evitar alquilar equipos dañados | S |
| HU-15 | Vendedor | Como vendedor quiero que el sistema envíe recordatorios de vencimiento para gestionar devoluciones | C |

## Criterios de aceptación (ejemplos)

### HU-02 · Consultar disponibilidad
- **Dado** un equipo con stock de 2 unidades y 2 reservas en el rango solicitado, **cuando** el cliente consulta, **entonces** el sistema indica "No disponible" y sugiere fechas alternativas.
- La consulta responde en menos de 2 segundos.

### HU-04 · Generar cotización en PDF
- El PDF incluye número correlativo, vigencia, detalle por equipo, flete, descuentos y total.
- Se puede enviar por correo o WhatsApp desde el sistema.

### HU-07 · Registrar contacto
- Para grabaciones de llamadas, el sistema exige el **consentimiento explícito** del cliente (Ley N.° 29733).
- Cada contacto queda asociado al cliente con fecha, usuario y nota.
