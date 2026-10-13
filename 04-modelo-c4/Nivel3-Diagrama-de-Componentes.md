# C4 · Nivel 3 — Diagrama de componentes

Detalla los componentes internos del contenedor **API Backend (NestJS)**.

## Vista general de módulos

```mermaid
flowchart TB
    web["Web App"] --> gw
    mobile["Mobile App"] --> gw

    subgraph API["API Backend - NestJS"]
        gw["API Gateway\nGuards JWT, roles, rate limit"]
        seg["Seguridad\nAutenticación y auditoría"]
        cat["Catálogo"]
        crm["CRM"]
        res["Reservas"]
        cot["Cotizaciones"]
        log["Logística"]
        pag["Pagos"]
        man["Mantenimiento"]
        not["Notificaciones"]
        bus{{"Event Bus interno"}}
    end

    db[("PostgreSQL")]
    redis[("Redis")]
    s3[("S3")]
    ext["Servicios externos\nMaps · Pagos · SUNAT · WhatsApp"]

    gw --> seg
    gw --> cat
    gw --> crm
    gw --> res
    gw --> cot
    gw --> log
    gw --> pag
    gw --> man

    res --> bus
    pag --> bus
    log --> bus
    bus --> not

    cat --> db
    crm --> db
    res --> db
    cot --> db
    log --> db
    pag --> db
    man --> db
    not --> redis
    cat --> s3
    log --> s3
    log --> ext
    pag --> ext
    not --> ext
```

## Componentes internos del módulo Cotizaciones

```mermaid
flowchart LR
    ctrl["CotizacionesController\nREST"] --> uc1["CrearCotizacionUseCase"]
    ctrl --> uc2["AceptarCotizacionUseCase"]
    ctrl --> uc3["GenerarPdfUseCase"]

    uc1 --> calc["CalculadoraTarifa\nStrategy"]
    uc1 --> repo["CotizacionRepository\nInterfaz"]
    uc1 --> cat["CatalogoFacade"]
    uc1 --> log["LogisticaFacade\nFlete"]
    uc2 --> bus["EventBus\nCotizacionAceptada"]
    uc3 --> pdf["PdfGeneratorAdapter"]

    repoImpl["CotizacionTypeormRepository"] -. implementa .-> repo
    repoImpl --> db[("PostgreSQL")]
    pdf --> s3[("S3")]
```

## Descripción de componentes

| Componente | Responsabilidad |
|---|---|
| API Gateway | Valida JWT, aplica roles y límite de peticiones |
| Seguridad | Usuarios, roles, tokens y auditoría |
| Catálogo | Equipos, personal, categorías y fichas técnicas |
| CRM | Clientes, direcciones de obra, contactos y consentimientos |
| Reservas | Disponibilidad, reservas y máquina de estados del alquiler |
| Cotizaciones | Tarifas, descuentos, flete, correlativo y PDF |
| Logística | Rutas, choferes, vehículos y actas de entrega |
| Pagos | Pagos, garantías y facturación electrónica |
| Mantenimiento | Historial y estado operativo de los equipos |
| Notificaciones | Envío asíncrono de correos y mensajes de WhatsApp |
| Event Bus | Comunicación asíncrona entre módulos |
