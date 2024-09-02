"use client";
import { SetStateAction, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { LoginV } from "@/lib/auth/variable-auth";
import { ModalHeader } from "@nextui-org/react";
import inputAlert from "@/components/ui/alert/alert";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await LoginV(email, password);
    if (success) {
      await inputAlert("Inicio de sesión exitoso", "success");
      router.push("/descuentos");
      // Redirigir a la página de productos
    } else {
      await inputAlert("User not found", "error");
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
          required
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setPassword(e.target.value)
          }
          required
        />
        <ModalHeader className="flex flex-col gap-2">
          {" "}
          <Button type="submit">Iniciar sesión</Button>{" "}
        </ModalHeader>
      </form>
    </div>
  );
}
