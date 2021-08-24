import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { stringify } from 'flatted';
import { Observable } from 'rxjs';
import { Balance, Finance } from 'src/interfaces/finance.interface';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
    constructor(private readonly financeService: FinanceService) { }
    private data: any

    @Get(':id')
    findAll(@Param() params): any {
        this.financeService.getFinance(params.id).subscribe(res => this.data = res.data)
        return this.data
    }

    @Post()
    async create(@Body() balance: Balance) {
        this.financeService.topUp(balance).subscribe(res => this.data = res.data)
        return this.data;
    }
}
