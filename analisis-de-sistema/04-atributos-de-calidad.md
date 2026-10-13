# 04 – Atributos de calidad

**Escenario:** varios vendedores y clientes consultan disponibilidad y reservan equipos al mismo tiempo en horario laboral, mientras los choferes actualizan estados desde obras con poca señal.

| ID | Atributo | Escenario de calidad |
|---|---|---|
| AC01 | Rendimiento | La consulta de disponibilidad y la generación de una cotización deben responder en pocos segundos, incluso con varios usuarios concurrentes. |
| AC02 | Disponibilidad | El sistema debe operar de forma estable durante el horario laboral. |
| AC03 | Escalabilidad | El sistema debe poder crecer (más equipos, clientes y usuarios) sin necesidad de rediseñarlo. |
| AC04 | Seguridad | La autenticación debe usar JWT con control de acceso por roles, y los datos personales deben almacenarse cifrados. |
| AC05 | Mantenibilidad | El sistema debe estar organizado en módulos independientes para modificar uno sin afectar innecesariamente a los demás. |
| AC06 | Usabilidad | La interfaz debe ser simple y apta para uso en celular, con mínima capacitación del personal. |
| AC07 | Integridad / consistencia | Dos usuarios no deben poder reservar el mismo equipo para fechas que se cruzan (evitar dobles reservas). |
| AC08 | Cumplimiento legal | El tratamiento de datos y las grabaciones de contacto requieren consentimiento explícito del cliente (Ley N.° 29733). |
| AC09 | Tolerancia a falta de señal | La app del chofer debe permitir registrar entregas y devoluciones sin conexión y sincronizarlas al recuperar señal. |

## Medidas sugeridas (a validar con la docente)

| ID | Posible métrica |
|---|---|
| AC01 | 95 % de consultas de disponibilidad en menos de 2 s; cotización generada en menos de 5 s. |
| AC02 | Disponibilidad ≥ 99 % de lunes a sábado en horario laboral. |
| AC04 | Tokens con expiración, contraseñas con hash, datos personales cifrados, HTTPS. |
| AC06 | Cotización completada en un máximo de 5 pasos desde el celular. |
| AC07 | 0 reservas con cruce de fechas para el mismo equipo (validación transaccional). |
| AC09 | Sincronización automática de los registros offline al volver la conexión. |
