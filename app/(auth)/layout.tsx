export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="app-container">
            {children}
        </div>
    );
}
