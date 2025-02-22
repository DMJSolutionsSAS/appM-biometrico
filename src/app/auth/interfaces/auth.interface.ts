export interface RespLogin {
  status: boolean;
  message: string;
  user: User;
  token: string;
}

export interface User {
  id: number;
  persona_id: number;
  rol_id: number;
  name?: any;
  email: string;
  email_verified_at?: any;
  created_at: string;
  updated_at: string;
  rol: Rol;
  persona: Persona;
}

export interface Persona {
  id: number;
  cedula?: any;
  nombres: string;
  apellidos?: any;
  num_celular?: any;
  direccion?: any;
  estado: string;
}

export interface Rol {
  id: number;
  cargo: string;
  estado: string;
}
