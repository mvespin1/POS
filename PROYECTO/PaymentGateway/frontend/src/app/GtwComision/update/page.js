"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos useRouter para navegación

const UpdatePage = () => {
  const [form, setForm] = useState({
    CodigoComision: "",
    Tipo: "",
    MontoBase: "",
    TransaccionesBase: "",
    ManejaSegmenos: "",
  });

  const router = useRouter(); // Inicializamos el router para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registro actualizado:", form);
    router.push("/"); // Redirige a la página principal después de guardar
  };

  const handleCancel = () => {
    router.push("/"); // Redirige a la página principal sin guardar
  };

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e40af",
          marginBottom: "1.5rem",
        }}
      >
        Actualizar Comisión
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {Object.keys(form).map((field) => (
          <div
            key={field}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <label
              htmlFor={field}
              style={{
                fontWeight: "bold",
                color: "#1f2937",
              }}
            >
              {field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}{" "}
            </label>
            <input
              id={field}
              type={field.includes("fecha") ? "date" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              disabled={
                field !== "MontoBase" && field !== "TransaccionesBase"
              } // Deshabilitar excepto para MontoBase y TransaccionesBase
              style={{
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                backgroundColor: field !== "MontoBase" && field !== "TransaccionesBase" ? "#e5e7eb" : "#ffffff", // Fondo gris para campos deshabilitados
                color: "#000000",
              }}
              placeholder={`Ingrese ${field
                .replace(/([A-Z])/g, " $1")
                .toLowerCase()}`}
            />
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#10b981",
              color: "#ffffff",
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              backgroundColor: "#ef4444",
              color: "#ffffff",
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </main>
  );
};

export default UpdatePage;
