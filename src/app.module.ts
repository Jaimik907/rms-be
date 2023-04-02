import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {ConfigModule} from '@nestjs/config'

@Module({
  // to load the .env file include ConfigModule
  imports: [ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
