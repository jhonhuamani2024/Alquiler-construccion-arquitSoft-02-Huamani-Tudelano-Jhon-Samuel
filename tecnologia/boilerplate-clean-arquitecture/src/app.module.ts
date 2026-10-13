import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Importa aquí cada módulo de negocio a medida que lo implementes:
// import { CotizacionesModule } from './modules/cotizaciones/cotizaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // CotizacionesModule,
  ],
})
export class AppModule {}
