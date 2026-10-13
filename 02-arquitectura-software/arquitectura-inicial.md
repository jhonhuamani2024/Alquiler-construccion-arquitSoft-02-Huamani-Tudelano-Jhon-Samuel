# Arquitectura inicial

Visión general de la arquitectura propuesta para la plataforma de alquiler de herramientas, maquinaria y personal de construcción.

## Vista general

![Arquitectura de contenedores](../img/arquitectura-contenedores.png)

## Capas del sistema

| Capa | Responsabilidad | Tecnología |
|---|---|---|
| Presentación | Interfaces para cliente, vendedor, administrador y chofer | React (web) · Flutter (móvil) |
| API Gateway | Autenticación, autorización, enrutamiento y límite de tasa | NestJS (guards/interceptors) |
| Aplicación / Dominio | Módulos de negocio con Clean Architecture | NestJS + TypeScript |
| Datos | Persistencia, caché y archivos | PostgreSQL + PostGIS · Redis · S3 |
| Integraciones | Servicios externos | Google Maps · Culqi/Niubiz · Nubefact · WhatsApp |
| Infraestructura | Despliegue y observabilidad | Docker · Nginx · GitHub Actions · Grafana |

## Flujo general de una petición

```mermaid
sequenceDiagram
    actor U as Usuario
    participant App as Web / Móvil
    participant GW as API Gateway
    participant M as Módulo de negocio
    participant DB as PostgreSQL
    participant R as Redis

    U->>App: Solicita cotización
    App->>GW: POST /api/v1/cotizaciones (JWT)
    GW->>GW: Valida token y rol
    GW->>M: Delega al módulo Cotizaciones
    M->>R: Consulta disponibilidad en caché
    M->>DB: Guarda cotización
    M-->>GW: Cotización generada
    GW-->>App: 201 Created + PDF
    App-->>U: Muestra cotización
```

## Modelo de datos

![Modelo entidad-relación](../img/modelo-entidad-relacion.png)

## Despliegue

![Diagrama de despliegue](../img/diagrama-despliegue.png)

## Módulos del sistema

Catálogo · Reservas · Cotizaciones · Clientes/CRM · Logística · Pagos · Mantenimiento · Notificaciones · Seguridad.

Detalle en [componentes-arquitectonicos.md](./componentes-arquitectonicos.md).
