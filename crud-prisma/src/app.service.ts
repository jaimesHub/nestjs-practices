import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // console.log("Test env: ", process.env.DATABASE_URL);
    return 'Hello World!';
  }
}
