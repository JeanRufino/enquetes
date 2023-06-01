import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller()
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get('usuarios')
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Post('usuario')
  createOne(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.createOne(usuario);
  }
}
