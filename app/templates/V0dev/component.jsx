/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EXKIxrgjdc8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-card">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" prefetch={false}>
          <TreesIcon className="w-6 h-6" />
          <span>Vivero Forestal</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="font-bold" prefetch={false}>
            Inicio
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Gestión de Plantas
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Predicción de Estado
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Historial
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Plantas Sembradas</CardTitle>
                <CardDescription>
                  <span className="font-bold">2,456</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plantas en Bolsas</CardTitle>
                <CardDescription>
                  <span className="font-bold">1,789</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plantas Trasplantadas</CardTitle>
                <CardDescription>
                  <span className="font-bold">3,012</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Plantas Sanas</CardTitle>
                <CardDescription>
                  <span className="font-bold">4,789</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plantas en Riesgo</CardTitle>
                <CardDescription>
                  <span className="font-bold">456</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total de Plantas</CardTitle>
                <CardDescription>
                  <span className="font-bold">6,257</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="max-w-6xl w-full mx-auto grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Nuevas Siembras</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="species">Especie</Label>
                    <Input id="species" placeholder="Ingrese la especie" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="quantity">Cantidad</Label>
                    <Input id="quantity" type="number" placeholder="Ingrese la cantidad" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Fecha de Siembra</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Ubicación</Label>
                    <Input id="location" placeholder="Ingrese la ubicación" />
                  </div>
                </div>
                <Button type="submit" className="justify-center">
                  Registrar Siembra
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Registro de Trasplantes</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="plant-id">ID de Planta</Label>
                    <Input id="plant-id" placeholder="Ingrese el ID de la planta" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bag-size">Tamaño de Bolsa</Label>
                    <Select id="bag-size">
                      <option value="small">Pequeña</option>
                      <option value="medium">Mediana</option>
                      <option value="large">Grande</option>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Fecha de Trasplante</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Ubicación</Label>
                    <Input id="location" placeholder="Ingrese la ubicación" />
                  </div>
                </div>
                <Button type="submit" className="justify-center">
                  Registrar Trasplante
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Envío de Plantas al Páramo</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="plant-id">ID de Planta</Label>
                    <Input id="plant-id" placeholder="Ingrese el ID de la planta" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Ubicación en el Páramo</Label>
                    <Input id="location" placeholder="Ingrese la ubicación" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Fecha de Envío</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="quantity">Cantidad</Label>
                    <Input id="quantity" type="number" placeholder="Ingrese la cantidad" />
                  </div>
                </div>
                <Button type="submit" className="justify-center">
                  Registrar Envío
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function TreesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
}