export interface Historial {
  codigo: string;
  fecha: string;     // ISO date string, e.g., "2024-07-12"
  hora: string;      // ISO time string, e.g., "14:30:00"
  usuario: string;
  estado: string;    // Puedes definir como union type si hay valores específicos, ej: 'ACTIVO' | 'INACTIVO'
  detalle: string;
}
