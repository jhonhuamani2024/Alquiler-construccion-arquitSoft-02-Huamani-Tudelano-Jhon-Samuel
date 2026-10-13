# Boilerplate · Clean Architecture (NestJS)

Plantilla base del backend del proyecto: **monolito modular** con **Clean Architecture** por módulo.

## Estructura

```text
boilerplate-clean-arquitecture/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── shared/                 # Configuración, base de datos, bus de eventos, utilidades
│   │   ├── config/
│   │   ├── database/
│   │   ├── events/
│   │   └── utils/
│   └── modules/
│       ├── seguridad/
│       ├── catalogo/
│       ├── crm/
│       ├── reservas/
│       ├── cotizaciones/
│       ├── logistica/
│       ├── pagos/
│       ├── mantenimiento/
│       └── notificaciones/
│           ├── domain/          # Entidades, value objects, interfaces de repositorio, eventos
│           ├── application/     # Casos de uso y DTOs
│           ├── infrastructure/  # ORM, repositorios concretos, adaptadores externos
│           └── presentation/    # Controladores REST
├── test/
├── docker-compose.yml
├── .env.example
└── package.json
```

## Puesta en marcha

```bash
# 1. Crear el proyecto NestJS (si aún no existe) y copiar esta estructura
npm i -g @nestjs/cli

# 2. Instalar dependencias
npm install

# 3. Variables de entorno
cp .env.example .env

# 4. Levantar PostgreSQL/PostGIS y Redis
docker compose up -d

# 5. Ejecutar en modo desarrollo
npm run start:dev
```

API disponible en `http://localhost:3000/api/v1` y documentación Swagger en `http://localhost:3000/docs`.

## Dependencias recomendadas

| Propósito | Paquete |
|---|---|
| Núcleo | `@nestjs/common` `@nestjs/core` `@nestjs/platform-express` |
| Configuración | `@nestjs/config` |
| Base de datos | `@nestjs/typeorm` `typeorm` `pg` |
| Autenticación | `@nestjs/jwt` `@nestjs/passport` `passport-jwt` `bcrypt` |
| Validación | `class-validator` `class-transformer` |
| Eventos / CQRS | `@nestjs/cqrs` o `@nestjs/event-emitter` |
| Colas | `@nestjs/bullmq` `bullmq` (usa Redis) |
| Documentación | `@nestjs/swagger` |
| Pruebas | `jest` `supertest` |

## Reglas de dependencia

- `domain` **no importa** nada de NestJS, TypeORM ni de otros módulos.
- `application` depende solo de `domain`.
- `infrastructure` implementa las interfaces definidas en `domain`.
- Un módulo accede a otro **solo** mediante su fachada pública o eventos de dominio.

Más detalle en [`../../03-diseño-de-software/diseño-interno`](../../03-diseño-de-software/diseño-interno).
