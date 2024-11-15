import { LoginForm } from "@/ui/organisms/auth/LoginForm"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const LoginTemplate = () => {
    return (
        <div className="min-h-screen flex  items-center justify-center bg-gray-100">
            <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
                <DirectionsCarIcon sx={{color:'#3b82f6',fontSize:'4rem'}}></DirectionsCarIcon>
                <h2 className="text-2xl font-semibold  text-center text-blue-500">Transport Solutions S.A</h2>
                <p className="text-sm">Inicia sesión en tu cuenta y gestiona tu flota de vehiculos</p>
                <LoginForm />
                <p className="text-center text-sm">¿Problemas para iniciar sesión? Contacta el administrador del sistema</p>
            </div>
        </div>
    )
}