import { IVehicle } from "../../common/vehicle.dto";

export interface ICreateVehicleResponse {
    statusCode: number;
    message:    string;
    data:       IVehicle;
}