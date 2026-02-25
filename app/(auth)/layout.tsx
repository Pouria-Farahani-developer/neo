export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
        return <div className="app-container min-h-screen border-2 border-">{children}</div>;
}
