# Diseño de la arquitectura de software de una aplicación para la gestión de alquiler de herramientas, maquinaria y personal en el sector construcción

**Área:** Arquitectura de Software · **Autor:** [Tu nombre] · **Versión:** 1.0 · **Fecha:** octubre de 2026

---

## 1. Introducción

El sector construcción en el Perú depende del alquiler de equipos y personal por periodos cortos. Sin embargo, la gestión de cotizaciones, entregas y contactos con clientes suele hacerse de forma manual (llamadas, WhatsApp, cuadernos o Excel), lo que genera errores, demoras y pérdida de clientes. Esta propuesta plantea una aplicación que centraliza y automatiza el proceso completo de alquiler.

## 2. Planteamiento del problema

- No hay control confiable de la disponibilidad de los equipos, lo que causa dobles reservas.
- Las cotizaciones se calculan manualmente y toman tiempo.
- Las direcciones de entrega y los datos del cliente se pierden o se registran de forma desordenada.
- No existe historial de contactos ni de conversaciones con el cliente.
- Hay poco seguimiento del estado de cada equipo alquilado.

## 3. Objetivos

**Objetivo general:** diseñar una aplicación para gestionar el alquiler de herramientas, maquinaria y personal de construcción, con cotizaciones, direcciones de entrega y registro de contacto con el cliente.

**Objetivos específicos**
1. Mantener un catálogo con disponibilidad en tiempo real.
2. Generar cotizaciones automáticas en PDF.
3. Registrar y visualizar en mapa las direcciones de entrega.
4. Guardar el historial de contacto directo con cada cliente.
5. Controlar el estado del alquiler, desde la reserva hasta la devolución.

## 4. Alcance

**Incluye:** catálogo, cotizador, gestión de clientes, direcciones de obra, seguimiento del alquiler y registro de contactos.

| Categoría | Ejemplos |
|---|---|
| Herramientas | Winches eléctricos, generadores a gasolina, generadores monofásicos, trompos eléctricos, rotomartillos, tablas y encofrados |
| Maquinaria | Mixer, Carmix, excavadoras |
| Personal | Personal instantáneo (operarios, maestros, peones) |

**Fuera del alcance inicial:** GPS/IoT, marketplace de terceros y predicción de demanda (quedan como fases futuras).

## 5. Descripción de la propuesta

La aplicación permite al cliente consultar equipos, solicitar una cotización y reservar. Para la empresa ofrece control de inventario, programación de entregas y seguimiento comercial.

1. **Catálogo y disponibilidad:** fichas técnicas, fotos y calendario por equipo.
2. **Cotizaciones:** cálculo por día, semana o mes, con flete según distancia, descuentos y garantía.
3. **Direcciones de entrega:** registro de la obra con ubicación en mapa.
4. **Contacto con el cliente:** registro de llamadas, mensajes y notas, con consentimiento del cliente (Ley N.° 29733).
5. **Estados del alquiler:** cotizado → reservado → en camino → entregado → devuelto.

## 6. Fases de desarrollo

| Fase | Contenido |
|---|---|
| **1. MVP** | Catálogo, disponibilidad, cotizador, clientes, direcciones y estados |
| **2** | Entregas con firma y fotos, pagos y facturación SUNAT |
| **3** | Mantenimiento, reportes, WhatsApp y grabación de contactos |
| **4** | GPS/IoT, marketplace y recomendaciones |

## 7. Riesgos y mitigación

| Riesgo | Mitigación |
|---|---|
| Incumplimiento de la ley de datos personales | Consentimiento explícito y políticas de privacidad |
| Baja adopción por parte del personal | Interfaz sencilla y capacitación |
| Falta de señal en obras | Modo offline en la app del chofer |
| Alcance demasiado grande | Desarrollo por fases, empezando por el MVP |

## 8. Conclusiones

La propuesta responde a una necesidad real del sector construcción y se puede desarrollar de forma progresiva. Empezar con un MVP modular reduce el riesgo y deja una base sólida para incorporar funciones avanzadas como pagos, facturación electrónica, mantenimiento y rastreo GPS.

---

## Estructura de la documentación

| Carpeta | Contenido |
|---|---|
| [01-analisis-de-sistema](./01-analisis-de-sistema) | Actores, historias de usuario, requisitos, atributos de calidad, restricciones, drivers y decisiones arquitectónicas |
| [02-arquitectura-software](./02-arquitectura-software) | Arquitectura inicial, componentes, enfoque y estilo arquitectónico |
| [03-diseno-de-software/diseno-interno](./03-diseno-de-software/diseno-interno) | Diseño interno de módulos, patrones y principios de diseño |
| [04-modelo-c4](./04-modelo-c4) | Modelo C4: contexto, contenedores, componentes y código |
| [img](./img) | Diagramas exportados |
| [tecnologia](./tecnologia) | Boilerplate Clean Architecture (NestJS) |
