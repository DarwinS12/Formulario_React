import { test, expect } from "@playwright/test";

const LOCALHOST_SUBIRARCHIVO_URL = "http://localhost:5173/SubirArchivo";
const lOCALHOST_OBTENER_URL = "http://localhost:5173/Obtener";

test("shows ulpload file text", async ({ page }) => {
  await page.goto(LOCALHOST_SUBIRARCHIVO_URL);

  const text = await page.getByRole("paragraph");

  const textContent = await text.textContent();

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(textContent?.startsWith("Sube aquí")).toBeTruthy();
});

test("shows input upload file text", async ({ page }) => {
  await page.goto(LOCALHOST_SUBIRARCHIVO_URL);

  const locator = page.locator("input");
  await expect(locator).toHaveAttribute("type", "file");
});

test("shows home link", async ({ page }) => {
  await page.goto(lOCALHOST_OBTENER_URL);

  const text = await page.getByRole("link", { name: "Inicio" });

  await expect(text).toContainText("Inicio");
});

test("shows text acciones", async ({ page }) => {
  await page.goto("http://localhost:5173/Login");

  await expect(page).toHaveTitle("Iniciar sesión");
});

test("shows Precio text ", async ({ page }) => {
  await page.goto("http://localhost:5173/Obtener");

  const Precio = await page.getByLabel("Precio");
  await expect(Precio).toBeTruthy();
});
