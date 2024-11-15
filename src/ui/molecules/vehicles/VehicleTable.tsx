import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { IVehicle } from "@/app/core/application/dto/common/vehicle.dto";
import { IGetAllVehiclesResponse } from "@/app/core/application/dto/vehicles/get-all/response.dto";
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { getServerSession } from "next-auth";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default async function VehiclesTable(){

    const session = await getServerSession(authOptions);
    const customSession=session as CustomSession;
    const token=customSession.user.token;
    console.log(token)
    const response=await fetch(`${process.env.NEXTAUTH_URL}/api/vehicles/get-all`, {method: 'POST',body: JSON.stringify({token})});
    const responseData:IGetAllVehiclesResponse= await response.json();
    const vehicles=responseData.data;

    return (
        <>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Foto</TableCell>
                    <TableCell>Marca</TableCell>
                    <TableCell>Modelo</TableCell>
                    <TableCell>Año</TableCell>
                    <TableCell>Placa</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {vehicles?.map((vehicle:IVehicle) => (
                    <TableRow
                    key={vehicle.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell><img width={100} src={vehicle.photo ?? undefined} alt={vehicle.licensePlate}></img></TableCell>
                    <TableCell>{vehicle.make}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.year}</TableCell>
                    <TableCell>{vehicle.licensePlate}</TableCell>
                    <TableCell>
                        <IconButton>
                            <EditOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <UpdateOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteOutlineOutlinedIcon/>
                        </IconButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </>
        
    );
};