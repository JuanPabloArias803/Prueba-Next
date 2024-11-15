import { IVehicle } from "./vehicle.dto";

export interface IMaintenance {
    id?:      string;
    type?:    string;
    date?:    Date;
    vehicle: IVehicle;
    mileage?: number;
    notes?:   string;
}