import { IGetAllVehiclesResponse } from "@/app/core/application/dto/vehicles/get-all/response.dto";
import { PrivateHTTPClient } from "../utils/private-http-client";

export class VehiclesService{
    private clientHttp:PrivateHTTPClient;
    private basePath:string="vehicles";

    constructor(){
        this.clientHttp=new PrivateHTTPClient();
    }

    // async login(req:ILoginRequest):Promise<ILoginResponse>{
    //     return this.clientHttp.post<ILoginResponse,ILoginRequest>(`${this.basePath}/login`,req)
    // }

    async getAll(token:string):Promise<IGetAllVehiclesResponse>{
        return this.clientHttp.get<IGetAllVehiclesResponse>(`${this.basePath}`,token)
    }
}