import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenPal } from './typeorm/entities/PenPal';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Mantecare.92',
        database: 'corrispondenza_nest',
        entities: [PenPal],
        synchronize: true,
      }), 
     ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
