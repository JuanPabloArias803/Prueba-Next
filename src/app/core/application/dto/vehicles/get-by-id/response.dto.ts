import { IVehicle } from "../../common/vehicle.dto";

export interface IGetVehicleResponse {
    statusCode: number;
    message:    string;
    data:       IVehicle;
}