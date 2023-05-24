import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kelvin-database.c37aly7ftlww.ap-southeast-1.rds.amazonaws.com',
      port: 3000,
      username: 'kelvinc',
      password: 'EdXbQ-VygQrBzElx8bHkQ5G_W2cm8Xyy',
      database: 'kelvin_database',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    AuthorModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
