export interface IVehicle {
    id?:           string;
    make?:         string;
    model?:        string;
    year?:         number;
    licensePlate?: string;
    photo?:        null | string;
}