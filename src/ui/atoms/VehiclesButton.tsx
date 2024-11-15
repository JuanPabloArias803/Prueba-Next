'use client'

import { CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { IGetAllVehiclesResponse } from "@/app/core/application/dto/vehicles/get-all/response.dto";
import { useSession } from "next-auth/react";

const VehiclesButton = () => {

    const { data: session } = useSession();
    const customSession=session as CustomSession;
    const token=customSession.user.token;

    async function handleClick(){
        const response=await fetch('/api/vehicles/get-all', {method: 'POST',body: JSON.stringify({token})});
        const responseData:IGetAllVehiclesResponse= await response.json();
        const vehicles=responseData.data;
        console.log(responseData);
    }
    return (
        <button className='py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600' onClick={()=>handleClick()}>Botón</button>
    );
};

export default VehiclesButton;