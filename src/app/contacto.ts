export class Contacto {

  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public movil?: string,
    public email?: string,
    public facebook?: string,
    public twitter?: string) { }
}
