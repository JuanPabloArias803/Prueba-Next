import { IMaintenance } from "../../common/maintenance.dto";
import { IMetadata } from "../../common/metadata.dto";

export interface IGetMaintenanceHistoryResponse {
    statusCode: number;
    message:    string;
    data:       IMaintenance[];
    metadata:   IMetadata;
}


