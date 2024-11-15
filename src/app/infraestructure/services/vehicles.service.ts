import { IGetAllVehiclesResponse } from "@/app/core/application/dto/vehicles/get-all/response.dto";
import { PrivateHTTPClient } from "../utils/private-http-client";
import { IGetVehicleResponse } from "@/app/core/application/dto/vehicles/get-by-id/response.dto";
import { ICreateVehicleResponse } from "@/app/core/application/dto/vehicles/create-vehicle/response.dto";
import { IUpdateVehicleResponse } from "@/app/core/application/dto/vehicles/update-vehicle/response.dto";
import { IDeleteVehicleResponse } from "@/app/core/application/dto/vehicles/delete-vehicle/response.dto";
import { FormDataHTTPClient } from "../utils/form-data-http-client";

export class VehiclesService{
    private clientHttp:PrivateHTTPClient;
    private formDataClientHttp:FormDataHTTPClient;
    private basePath:string="vehicles";

    constructor(){
        this.clientHttp=new PrivateHTTPClient();
        this.formDataClientHttp=new FormDataHTTPClient();
    }

    async getAll(token:string):Promise<IGetAllVehiclesResponse>{
        return this.clientHttp.get<IGetAllVehiclesResponse>(`${this.basePath}`,token)
    }

    async getById(token:string,vehicleId:string):Promise<IGetVehicleResponse>{
        return this.clientHttp.get<IGetVehicleResponse>(`${this.basePath}/${vehicleId}`,token)
    }

    async createVehicle(token:string,req:BodyInit):Promise<ICreateVehicleResponse>{
        return this.formDataClientHttp.post<ICreateVehicleResponse>(`${this.basePath}`,token,req)
    }

    async updateVehicle(token:string,req:BodyInit,vehicleId:string):Promise<IUpdateVehicleResponse>{
        return this.formDataClientHttp.patch<IUpdateVehicleResponse>(`${this.basePath}/${vehicleId}`,token,req)
    }

    async deleteVehicle(token:string,vehicleId:string):Promise<IDeleteVehicleResponse>{
        return this.clientHttp.delete<IDeleteVehicleResponse>(`${this.basePath}/${vehicleId}`,token)
    }
}