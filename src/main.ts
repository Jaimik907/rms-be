import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'

async function bootstrap() {
  // Get the port from env
  const PORT = process.env.PORT || 3000

  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, () => {
    console.log(`backend started at ${PORT} port!`)
  })
}
bootstrap()
