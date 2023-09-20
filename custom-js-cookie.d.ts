declare module "js-cookie" {
  const Cookies: {
    get(name: string): string | undefined;
    set(name: string, value: string, options?: any): void;
    remove(name: string, options?: any): void;
    // Agrega otras funciones de js-cookie si las necesitas
  };
  export default Cookies;
}
