import Navbar from '../components/Navbar';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;