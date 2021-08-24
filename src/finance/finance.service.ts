import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Balance, Finance } from 'src/interfaces/finance.interface';

@Injectable()
export class FinanceService {
    constructor(private readonly httpService: HttpService) { }
    private url = 'http://localhost:3002'

    getFinance(id: any): Observable<AxiosResponse<Finance[]>> {
        return this.httpService.get(`${this.url}/finance/${id}`)
    }

    topUp(data: Balance): Observable<AxiosResponse<Finance[]>> {
        return this.httpService.post(`${this.url}/finance/topup`, data)
    }
}
