export class Trabajos {
    constructor(
        public id: string,
        public nombre: string,
        public descripcion: string,
        public imgUrl: string,
        public cuidad: string,
        public skills: Array<string>,
        public salario: number | undefined
    ) {
    }
}
