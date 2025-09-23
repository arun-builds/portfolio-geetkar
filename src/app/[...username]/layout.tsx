import { EditModeProvider } from '@/contexts/EditModeContext';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EditModeProvider>
          <main>{children}</main>
        </EditModeProvider>
      </body>
    </html>
  );
}