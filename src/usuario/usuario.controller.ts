import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/require-await
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    this.usuarioRepository.salvar(dadosUsuario);
    return { satus: 'Usuário Criado com Sucesso!' };
  }

  @Get()
  async listaUsuarios(): Promise<CriaUsuarioDTO[]> {
    return this.usuarioRepository.listar();
  }
}
