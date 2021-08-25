
import path from 'path';
import { ConfigService } from './config.service';

global.ROOT_DIR = path.join(__dirname, '..');
global.CONFIG = new ConfigService();

try {
  CONFIG.load();
} catch (error) {
  // tslint:disable-next-line:no-console
  console.error(error.message);
  process.exit(1);
}

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const port = 3000;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(port);
}
bootstrap();
