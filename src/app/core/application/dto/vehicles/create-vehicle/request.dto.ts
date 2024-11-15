import { IVehicle } from "../../common/vehicle.dto";

export interface ICreateVehicleRequest extends IVehicle{
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        null | string;
}