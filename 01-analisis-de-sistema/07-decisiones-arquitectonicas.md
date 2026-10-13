# 07 · Decisiones arquitectónicas (ADR)

Cada decisión sigue el formato **ADR** (Architecture Decision Record).

---

## ADR-001 · Monolito modular como estilo inicial
- **Estado:** Aceptada
- **Contexto:** equipo pequeño, alcance acotado y necesidad de entregar un MVP rápido.
- **Decisión:** construir un monolito modular con módulos desacoplados (Catálogo, Reservas, Cotizaciones, CRM, Logística, Pagos, Mantenimiento, Notificaciones, Seguridad).
- **Alternativas:** microservicios desde el inicio; monolito tradicional sin módulos.
- **Consecuencias:** (+) menor complejidad operativa y transacciones simples; (−) escalado conjunto hasta extraer módulos.

## ADR-002 · NestJS (Node.js + TypeScript) para el backend
- **Estado:** Aceptada
- **Contexto:** se requiere estructura modular, inyección de dependencias y tipado fuerte.
- **Decisión:** usar NestJS.
- **Alternativas:** Spring Boot, .NET, Express puro.
- **Consecuencias:** (+) módulos nativos, ecosistema amplio, mismo lenguaje que el frontend web; (−) rendimiento CPU-bound menor que JVM/.NET.

## ADR-003 · PostgreSQL + PostGIS
- **Estado:** Aceptada
- **Contexto:** datos transaccionales (reservas, pagos) y consultas geoespaciales (obras, rutas).
- **Decisión:** PostgreSQL con PostGIS.
- **Alternativas:** MySQL, MongoDB.
- **Consecuencias:** (+) ACID, SQL robusto y soporte geoespacial; (−) requiere diseño cuidadoso de índices.

## ADR-004 · Clean Architecture dentro de cada módulo
- **Estado:** Aceptada
- **Decisión:** capas `domain`, `application`, `infrastructure`, `presentation` por módulo; el dominio no depende de frameworks.
- **Consecuencias:** (+) pruebas unitarias simples y bajo acoplamiento; (−) más archivos y código de mapeo.

## ADR-005 · Autenticación JWT y control por roles (RBAC)
- **Estado:** Aceptada
- **Decisión:** JWT de vida corta + refresh token; roles: administrador, vendedor, chofer, cliente.
- **Consecuencias:** (+) API sin estado y escalable; (−) gestión de revocación de tokens.

## ADR-006 · Redis para caché y colas
- **Estado:** Aceptada
- **Decisión:** Redis para caché de catálogo/disponibilidad y cola de tareas (PDF, notificaciones).
- **Consecuencias:** (+) respuestas rápidas y procesos asíncronos; (−) componente adicional que operar.

## ADR-007 · Flutter para la app móvil
- **Estado:** Aceptada
- **Decisión:** una sola base de código para Android/iOS con soporte offline para choferes.
- **Alternativas:** React Native, apps nativas.

## ADR-008 · Contenerización con Docker y CI/CD
- **Estado:** Aceptada
- **Decisión:** empaquetar con Docker y automatizar pruebas/despliegue con GitHub Actions.
- **Consecuencias:** (+) entornos reproducibles; (−) curva de aprendizaje inicial.

## ADR-009 · Integraciones externas mediante adaptadores
- **Estado:** Aceptada
- **Decisión:** encapsular mapas, pagos, SUNAT y WhatsApp tras interfaces (puertos) con Circuit Breaker y reintentos.
- **Consecuencias:** (+) proveedores intercambiables y tolerancia a fallos.
