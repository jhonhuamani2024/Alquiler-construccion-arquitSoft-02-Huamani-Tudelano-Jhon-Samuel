# Documentación de Arquitectura

**Proyecto:** Plataforma web y móvil para la gestión del alquiler de herramientas, maquinaria y personal de construcción.

## Índice

| Carpeta | Contenido |
|---|---|
| [01-analisis-de-sistema](./01-analisis-de-sistema) | Actores, historias de usuario, requisitos, atributos de calidad, restricciones, drivers y decisiones arquitectónicas |
| [02-arquitectura-software](./02-arquitectura-software) | Arquitectura inicial, componentes, enfoque y estilo arquitectónico |
| [03-diseño-de-software/diseño-interno](./03-diseño-de-software/diseño-interno) | Diseño interno de módulos, patrones y principios de diseño |
| [04-modelo-c4](./04-modelo-c4) | Modelo C4: contexto, contenedores, componentes y código |
| [img](./img) | Imágenes y diagramas exportados |
| [tecnologia](./tecnologia) | Boilerplate y guías tecnológicas (Clean Architecture) |

## Resumen del sistema

Aplicación que permite alquilar herramientas (winches eléctricos, generadores a gasolina y monofásicos, trompos eléctricos, rotomartillos, tablas), maquinaria (mixer, Carmix, excavadoras) y personal instantáneo, con generación de cotizaciones, gestión de direcciones de entrega y registro de contacto directo con el cliente.

**Estilo arquitectónico:** monolito modular con Clean Architecture por módulo.
**Stack base:** React · Flutter · NestJS · PostgreSQL/PostGIS · Redis · S3 · Docker.

> Versión 1.0 — octubre de 2026
