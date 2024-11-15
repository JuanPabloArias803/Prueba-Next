import { IMetadata } from "../../common/metadata.dto";
import { IVehicle } from "../../common/vehicle.dto";

export interface IGetAllVehiclesResponse {
    statusCode: number;
    message:    string;
    data:       IVehicle[];
    metadata:   IMetadata;
}
