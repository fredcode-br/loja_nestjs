import { Injectable } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  // eslint-disable-next-line @typescript-eslint/require-await
  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async listar(): Promise<UsuarioEntity[]> {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
