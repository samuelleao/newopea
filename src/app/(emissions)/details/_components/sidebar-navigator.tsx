'use client'

import { ListLabel, ListLine, ListWrapper } from "@/components/ui/list";
import useIntersectionObserver from "@/hooks/observer-elements";
import Link from "next/link";
import { useState } from "react";

export function SidebarNavgator() {
  const [currentSection, setCurrentSection] = useState<string>('');

  useIntersectionObserver(setCurrentSection);

  return (
    <nav className="pt-8 space-y-4">
      <span className="text-base font-semibold">Guia</span>
      <ListWrapper className="flex flex-row justify-between lg:flex-col fixed no-scrollbar px-8 lg:px-0 z-50 overflow-x-auto lg:static bottom-0 py-4 lg:py-0 left-0 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ListLine>
          <ListLabel className={`min-w-max hover:text-accent-foreground ${currentSection === 'precos' ? 'font-semibold text-primary' : ''}`}>
            <Link href="#precos">Preços <span className="md:not-sr-only sr-only">Unitários</span></Link>
          </ListLabel>
        </ListLine>
        <ListLine>
          <ListLabel className={`min-w-max hover:text-accent-foreground ${currentSection === 'pagamentos' ? 'font-semibold text-primary' : ''}`}>
            <Link href="#pagamentos">Pagamentos</Link>
          </ListLabel>
        </ListLine>
        <ListLine>
          <ListLabel className={`min-w-max hover:text-accent-foreground ${currentSection === 'documentos' ? 'font-semibold text-primary' : ''}`}>
            <Link href="#documentos">Documentos</Link>
          </ListLabel>
        </ListLine>
        <ListLine>
          <ListLabel className={`min-w-max hover:text-accent-foreground ${currentSection === 'caracteristicas' ? 'font-semibold text-primary' : ''}`}>
            <Link href="#caracteristicas">Características</Link>
          </ListLabel>
        </ListLine>
      </ListWrapper>
    </nav>
  )
}