import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'; // Adjust the path according to your project structure

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kashish:kash123@cluster0.1nzcygt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ), // Replace with your MongoDB URI
    UserModule, // Add your module here
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
