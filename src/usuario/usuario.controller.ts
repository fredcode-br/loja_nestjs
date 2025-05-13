import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/require-await
  async criaUsuario(@Body() dadosUsuario) {
    this.usuarioRepository.salvar(dadosUsuario);
    return { satus: 'Usuário Criado com Sucesso!' };
  }

  @Get()
  async listaUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.listar();
  }
}
