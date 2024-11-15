import { LoginForm } from "@/ui/organisms/auth/LoginForm"

export const LoginTemplate = () => {
    return (
        <div className="min-h-screen flex  items-center justify-center bg-gray-100">
            <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold  text-center text-blue-500">Transport Solutions S.A</h2>
                <p>Inicia sesión en tu cuenta y gestiona tu flota de vehiculos</p>
                <LoginForm />
                <p>¿Problemas para iniciar sesión? Contacta el administrador del sistema</p>
            </div>
        </div>
    )
}