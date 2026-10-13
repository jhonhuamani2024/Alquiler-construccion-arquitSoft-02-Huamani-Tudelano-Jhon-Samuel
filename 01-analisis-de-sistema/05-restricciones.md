# 05 · Restricciones

## Restricciones de negocio
| ID | Restricción |
|---|---|
| RN-01 | El MVP debe cubrir catálogo, disponibilidad, cotizador, clientes, direcciones y estados del alquiler |
| RN-02 | Un equipo no puede ser alquilado dos veces en el mismo periodo (salvo stock disponible) |
| RN-03 | Las cotizaciones tienen vigencia limitada y numeración correlativa |
| RN-04 | El personal instantáneo debe contar con documentos verificados antes de ser asignado |

## Restricciones legales y normativas
| ID | Restricción |
|---|---|
| RL-01 | **Ley N.° 29733** (Protección de Datos Personales): consentimiento informado para tratar datos y grabar contactos |
| RL-02 | **SUNAT**: los comprobantes deben emitirse mediante un OSE/PSE autorizado |
| RL-03 | Retención y eliminación de datos personales según política de privacidad |

## Restricciones técnicas
| ID | Restricción |
|---|---|
| RT-01 | Backend en TypeScript/Node.js (NestJS) |
| RT-02 | Base de datos relacional PostgreSQL con extensión PostGIS |
| RT-03 | Aplicación móvil multiplataforma (Flutter) con modo offline para choferes |
| RT-04 | Despliegue en contenedores Docker |
| RT-05 | Comunicación cliente-servidor mediante API REST sobre HTTPS |

## Restricciones de proyecto
| ID | Restricción |
|---|---|
| RP-01 | Equipo de desarrollo reducido (proyecto de tesis) |
| RP-02 | Desarrollo incremental por fases (MVP → pagos/SUNAT → mantenimiento → GPS/IoT) |
| RP-03 | Presupuesto limitado: preferir servicios gestionados con capa gratuita o bajo costo |
