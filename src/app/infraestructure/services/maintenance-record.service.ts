import { IGetMaintenanceHistoryResponse } from "@/app/core/application/dto/maintenance-record/get-history-by-vehicule/response.dto";
import { PrivateHTTPClient } from "../utils/private-http-client";
import { IRegisterMaintenanceRequest } from "@/app/core/application/dto/maintenance-record/register-maintenance/request.dto";
import { IRegisterMaintenanceResponse } from "@/app/core/application/dto/maintenance-record/register-maintenance/response.dto";


export class VehiclesService{
    private clientHttp:PrivateHTTPClient;

    constructor(){
        this.clientHttp=new PrivateHTTPClient();
    }

    getBasePath(vehicleId:string){
        return `vehicles/${vehicleId}/maintenance`
    }

    async getHistoryByVehicle(token:string,vehicleId:string):Promise<IGetMaintenanceHistoryResponse>{
        return this.clientHttp.get<IGetMaintenanceHistoryResponse>(this.getBasePath(vehicleId),token)
    }

    async registerMaintenance(token:string,req:IRegisterMaintenanceRequest,vehicleId:string):Promise<IRegisterMaintenanceResponse>{
        return this.clientHttp.post<IRegisterMaintenanceResponse,IRegisterMaintenanceRequest>(this.getBasePath(vehicleId),token,req)
    }
}