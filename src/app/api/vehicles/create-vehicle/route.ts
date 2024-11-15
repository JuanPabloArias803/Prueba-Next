import { VehiclesService } from '@/app/infraestructure/services/vehicles.service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    try {
        const { token } = await req.json();
        if(!token){
            throw 'Usuario no autenticado'
        }
        const service=new VehiclesService;
        const response = await service.getAll(token);
        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}