import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Login, Register } from 'src/interfaces/auth.interface';

@Injectable()
export class AuthenticationService {
    constructor(private readonly httpService: HttpService) { }
    private url = 'http://localhost:3001'

    register(data: Register): Observable<AxiosResponse<any[]>> {
        return this.httpService.post(`${this.url}/register`, data)
    }

    login(data: Login): Observable<AxiosResponse<any[]>> {
        return this.httpService.post(`${this.url}/login`, data)
    }
}
