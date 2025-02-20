export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} QR Generator. Built with ❤️ by Suraj
        </p>
      </div>
    </footer>
  );
}
