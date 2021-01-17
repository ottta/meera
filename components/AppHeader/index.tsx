import Link from "next/link";

export const AppHeader = () => {
    return (
        <header
            style={{ position: "sticky", top: 0, zIndex: 1001, height: 40 }}
        >
            <Link href="/">
                <a className="logo">Meraki</a>
            </Link>
        </header>
    );
};
