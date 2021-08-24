import { Body, Controller, Post } from '@nestjs/common';
import { Login, Register } from 'src/interfaces/auth.interface';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) { }
    private data: any

    @Post('/register')
    register(@Body() user: Register) {
        console.log(user, "<< user");
        this.authService.register(user).subscribe(res => this.data = res.data)
        return this.data
    }

    @Post('/login')
    login(@Body() user: Login) {
        this.authService.login(user).subscribe(res => this.data = res.data)
        return this.data
    }
}
