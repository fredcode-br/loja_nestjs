import { Injectable } from '@nestjs/common';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

@Injectable()
export class UsuarioRepository {
  private usuarios: Usuario[] = [];

  // eslint-disable-next-line @typescript-eslint/require-await
  async salvar(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async listar(): Promise<Usuario[]> {
    return this.usuarios;
  }
}
