import { EditModeProvider } from '@/contexts/EditModeContext';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <EditModeProvider>
          <main>{children}</main>
        </EditModeProvider>
  );
}