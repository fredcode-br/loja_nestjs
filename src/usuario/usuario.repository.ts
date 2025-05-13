import { Injectable } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Injectable()
export class UsuarioRepository {
  private usuarios: CriaUsuarioDTO[] = [];

  // eslint-disable-next-line @typescript-eslint/require-await
  async salvar(usuario) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.usuarios.push(usuario);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async listar(): Promise<CriaUsuarioDTO[]> {
    return this.usuarios;
  }
}
