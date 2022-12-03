import { ApiPropertyOptional } from '@nestjs/swagger/dist';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryDto {

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  amount?: number;

  @ApiPropertyOptional()
  @IsNumber()
  categoryId: number;
  @ApiPropertyOptional()
  @IsString()
  difficulty: string;

  @ApiPropertyOptional()
  @IsString()
  type: string;
}
