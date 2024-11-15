export interface IDeleteVehicleResponse {
    statusCode: number;
    message:    string;
    data:       Data;
}

export interface Data {
    message: string;
}
