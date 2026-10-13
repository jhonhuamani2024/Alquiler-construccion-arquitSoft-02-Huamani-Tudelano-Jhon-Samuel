# C4 · Nivel 2 — Diagrama de contenedores

Descompone el sistema en aplicaciones y almacenes de datos desplegables.

```mermaid
flowchart TB
    usuarios(["Cliente · Vendedor · Administrador · Chofer"])

    subgraph SISTEMA["Plataforma de alquiler de construcción"]
        web["Web App\nReact + TypeScript\nPanel de ventas y administración"]
        mobile["Mobile App\nFlutter\nCliente y chofer, modo offline"]
        api["API Backend\nNestJS - Monolito modular\nLógica de negocio y API REST"]
        db[("PostgreSQL + PostGIS\nDatos transaccionales y geoespaciales")]
        redis[("Redis\nCaché y cola de tareas")]
        s3[("Object Storage S3\nFotos, PDFs y actas")]
    end

    maps["Google Maps / Mapbox"]
    pagos["Culqi / Niubiz"]
    sunat["OSE/PSE SUNAT"]
    wa["WhatsApp Business API"]

    usuarios --> web
    usuarios --> mobile
    web -->|"HTTPS / JSON"| api
    mobile -->|"HTTPS / JSON"| api
    api -->|"SQL"| db
    api -->|"Caché / colas"| redis
    api -->|"Archivos"| s3
    api --> maps
    api --> pagos
    api --> sunat
    api --> wa
```

## Contenedores

| Contenedor | Tecnología | Responsabilidad |
|---|---|---|
| Web App | React + TypeScript | Interfaz web para vendedores, administradores y clientes |
| Mobile App | Flutter | App para clientes y choferes con modo offline |
| API Backend | NestJS (Node.js) | Módulos de negocio, autenticación JWT, API REST `/api/v1` |
| Base de datos | PostgreSQL + PostGIS | Persistencia de datos y consultas geoespaciales |
| Redis | Redis | Caché de catálogo/disponibilidad y colas de mensajes |
| Almacenamiento | S3 | Archivos binarios (fotos, PDFs, firmas) |

## Referencia visual

![Arquitectura de contenedores](../img/arquitectura-contenedores.png)

## Despliegue

![Diagrama de despliegue](../img/diagrama-despliegue.png)
