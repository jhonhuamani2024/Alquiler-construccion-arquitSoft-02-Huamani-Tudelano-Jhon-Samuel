# C4 · Nivel 1 — Diagrama de contexto del sistema

Muestra el sistema como una caja negra, sus usuarios y los sistemas externos con los que interactúa.

```mermaid
flowchart TB
    cliente(["Cliente\nPersona natural o empresa\nSolicita cotizaciones y alquila equipos"])
    vendedor(["Vendedor\nAtiende clientes y emite cotizaciones"])
    admin(["Administrador\nGestiona catálogo, precios y reportes"])
    chofer(["Chofer\nEntrega y recoge equipos"])

    sistema["PLATAFORMA DE ALQUILER DE CONSTRUCCIÓN\nGestiona catálogo, cotizaciones, reservas,\nentregas, pagos y contacto con clientes"]

    maps["Google Maps / Mapbox\nGeocodificación y rutas"]
    pagos["Culqi / Niubiz\nPasarela de pagos"]
    sunat["OSE/PSE - SUNAT\nFacturación electrónica"]
    wa["WhatsApp Business API\nMensajería"]

    cliente -->|"Cotiza, reserva y sigue su alquiler"| sistema
    vendedor -->|"Gestiona cotizaciones y contactos"| sistema
    admin -->|"Administra el sistema"| sistema
    chofer -->|"Actualiza entregas"| sistema

    sistema -->|"Geocodifica direcciones"| maps
    sistema -->|"Procesa pagos"| pagos
    sistema -->|"Emite comprobantes"| sunat
    sistema -->|"Envía mensajes"| wa
```

## Elementos

| Elemento | Tipo | Descripción |
|---|---|---|
| Cliente | Persona | Persona natural o empresa con RUC que alquila |
| Vendedor | Persona | Personal comercial |
| Administrador | Persona | Responsable de la operación |
| Chofer | Persona | Encargado de logística |
| Plataforma de alquiler | Sistema | Sistema que se está diseñando |
| Google Maps / Mapbox | Sistema externo | Mapas y rutas |
| Culqi / Niubiz | Sistema externo | Pagos con tarjeta, Yape y Plin |
| OSE/PSE (SUNAT) | Sistema externo | Comprobantes electrónicos |
| WhatsApp Business API | Sistema externo | Notificaciones y cotizaciones |
