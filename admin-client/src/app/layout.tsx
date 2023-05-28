import { ReactElement } from "react";

export default function RootLayout({
  children,
}: {
    children: ReactElement
}) {
  return (
// header
      <section>
          <main>
              {children}
          </main>
      </section>
// footer
  )
}
