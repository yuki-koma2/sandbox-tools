import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArticlesService {
  private port: number;
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    const port = this.configService.get<number>('port');
    if (!port) {
      throw new Error(`Environment variables are missing`);
    }

    this.port = port;
  }
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }
  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
    // return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }

  // configService example
  someFunction() {
    console.log('port', this.port);
  }
}
