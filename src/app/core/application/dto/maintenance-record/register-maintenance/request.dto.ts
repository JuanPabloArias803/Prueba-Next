import { IMaintenance } from "../../common/maintenance.dto";

export interface IRegisterMaintenanceRequest extends IMaintenance{
    type:    string;
    date:    Date;
    mileage: number;
    notes:   string;
}