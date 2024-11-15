import { IVehicle } from "../../common/vehicle.dto";

export interface IUpdateVehicleResponse {
    statusCode: number;
    message:    string;
    data:       IVehicle;
}