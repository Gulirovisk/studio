export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 mt-12 border-t">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {currentYear} ServiConecta. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
