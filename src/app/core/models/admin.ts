export interface Admin {
    codigoUsuario: string;
    codigoAdmin: string;
    nombre: string;
    apellido: string; // Nota: parece que tiene una "l" extra, ¿debería ser "apellido"?
    correo: string;
    telefono: string;
    edad: number;
    fechaNacimiento: string; // ISO 8601 e.g., '2000-01-01', compatible con LocalDate
    perfil: string; // opcional si puede ser null
    username: string;
    password: string;
}
