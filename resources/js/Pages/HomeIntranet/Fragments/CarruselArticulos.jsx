import React, { useState, useEffect } from "react";
import axios from "axios";
import CarruselArt from "../Components/CarruselArt";
import { Divider } from "@heroui/react";

export default function CarrouselArticulos({ usertoken }) {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token"));
    const tokenExpiry = localStorage.getItem("token_expiry");

    // Función para verificar si el token ha expirado
    const isTokenExpired = () => {
        return !tokenExpiry || Date.now() > parseInt(tokenExpiry, 10);
    };

    // Función para refrescar el token
    const refreshAccessToken = async () => {
        let refreshToken = localStorage.getItem("refresh_token");

        if (!refreshToken && usertoken) {
            refreshToken = usertoken;
        }

        if (!refreshToken) {
            console.warn("⚠ No se encontró refresh_token en localStorage ni en usertoken:", { usertoken });
            alert("No se ha encontrado un refresh_token. Por favor, autentica primero o comunícate con los desarrolladores.");
            return;
        }

        try {
            const response = await axios.post("https://internal.meltec.com.co/refresh-token", {
                refresh_token: refreshToken,
            });

            if (response.data.access_token) {
                const expiresIn = response.data.expires_in || 3600; // Tiempo en segundos, si no viene en la respuesta usa 1 hora
                const expiryTime = Date.now() + expiresIn * 1000; // Calcula la fecha de expiración

                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("token_expiry", expiryTime);
                setAccessToken(response.data.access_token);
            } else {
                alert("No se pudo renovar el token de acceso.");
                console.log("📡 Respuesta del servidor al renovar el token:", response.data);
            }
        } catch (error) {
            console.error("❌ Error al refrescar el token:", error);
            alert("Error al refrescar el token.");
            window.location.href = "/authgoogle"; // Redirigir si falla el refresco
        }
    };

    // Efecto para verificar el token al montar el componente
    useEffect(() => {
        if (!accessToken || isTokenExpired()) {
            refreshAccessToken();
        }
    }, []);

    return (
        <div className="p-5">
            <Divider className="h-[10px]" />
            <p className="mb-5 p-2 bg-[#dcdcdc] w-full sm:w-[380px] text-center font-bold">
                Articulos - Reflexiones para Crecer
            </p>

            <div className="w-full relative">
                <CarruselArt refreshAccessToken={refreshAccessToken} />

                <a href={route("resources.modulo.articulos")}>
                    <button className="p-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
                        Ver artículos
                    </button>
                </a>
            </div>
        </div>
    );
}
