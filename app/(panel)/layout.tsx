export default function PanelLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div className="app-container min-h-screen">{children}</div>;
}
