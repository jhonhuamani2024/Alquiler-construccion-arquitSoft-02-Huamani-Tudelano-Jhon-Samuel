# 08 · Escenarios de atributos de calidad

Formato: **Fuente · Estímulo · Artefacto · Entorno · Respuesta · Medida de respuesta**.

## ESC-01 · Rendimiento — consulta de disponibilidad
| Elemento | Descripción |
|---|---|
| Fuente | Cliente o vendedor |
| Estímulo | Consulta disponibilidad de un equipo para un rango de fechas |
| Artefacto | Módulo Reservas / Catálogo |
| Entorno | Operación normal, 100 usuarios concurrentes |
| Respuesta | El sistema devuelve disponibilidad (usando caché cuando aplique) |
| Medida | p95 < 2 segundos |

## ESC-02 · Seguridad — acceso no autorizado
| Elemento | Descripción |
|---|---|
| Fuente | Usuario sin permisos |
| Estímulo | Intenta acceder a un endpoint administrativo |
| Artefacto | API Gateway / módulo Seguridad |
| Entorno | Operación normal |
| Respuesta | Rechaza la petición (403) y registra el intento en auditoría |
| Medida | 100 % de intentos bloqueados y registrados |

## ESC-03 · Fiabilidad — doble reserva simultánea
| Elemento | Descripción |
|---|---|
| Fuente | Dos vendedores |
| Estímulo | Reservan el último equipo disponible al mismo tiempo |
| Artefacto | Módulo Reservas |
| Entorno | Alta concurrencia |
| Respuesta | Solo una reserva se confirma; la otra recibe un mensaje de conflicto |
| Medida | 0 casos de doble alquiler |

## ESC-04 · Disponibilidad — caída de una instancia
| Elemento | Descripción |
|---|---|
| Fuente | Fallo de infraestructura |
| Estímulo | Una instancia del backend deja de responder |
| Artefacto | Clúster de contenedores y balanceador |
| Entorno | Horario comercial |
| Respuesta | El balanceador redirige el tráfico a las instancias sanas |
| Medida | Sin interrupción perceptible; recuperación < 1 minuto |

## ESC-05 · Interoperabilidad — falla de la pasarela de pago
| Elemento | Descripción |
|---|---|
| Fuente | Servicio externo (Culqi/Niubiz) |
| Estímulo | La pasarela no responde |
| Artefacto | Módulo Pagos |
| Entorno | Operación normal |
| Respuesta | Circuit Breaker abre el circuito, el pago queda pendiente y se reintenta |
| Medida | El resto del sistema continúa operativo; reintento automático |

## ESC-06 · Mantenibilidad — nueva regla de tarifa
| Elemento | Descripción |
|---|---|
| Fuente | Administrador / negocio |
| Estímulo | Se requiere una tarifa especial para "kits" de equipos |
| Artefacto | Módulo Cotizaciones |
| Entorno | Desarrollo |
| Respuesta | Se agrega una nueva estrategia de tarifa sin modificar las existentes |
| Medida | Cambio en ≤ 2 archivos y sin regresiones |

## ESC-07 · Usabilidad — entrega en obra sin señal
| Elemento | Descripción |
|---|---|
| Fuente | Chofer |
| Estímulo | Registra una entrega sin conexión a internet |
| Artefacto | App móvil |
| Entorno | Obra sin cobertura |
| Respuesta | Guarda fotos y firma localmente y sincroniza al recuperar señal |
| Medida | 0 pérdida de datos |
