import { IMaintenance } from "../../common/maintenance.dto";

export interface IRegisterMaintenanceResponse {
    statusCode: number;
    message:    string;
    data:       IMaintenance;
}