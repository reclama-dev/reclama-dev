'use client'

import CreateRantDialog from '@/old-components/CreateRantDialog'
import { Moon, SquareArrowOutUpRight, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-5 bg-on-background border-b-2 border-foreground/20">
      <div className="flex gap-2 items-center">
        <Image
          className="rounded-full"
          src="/images/favicon.png"
          alt="Reclama.dev"
          width={30}
          height={30}
        />
        <h1 className="text-2xl font-bold text-primary dark:text-accent">
          Reclama<span className="dark:text-success text-blue-600">.dev</span>
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <SetThemeButton />
        <Link
          href="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Ver todos
        </Link>
        <Link
          href="/companies"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Empresas
        </Link>
        <CreateRantDialog />
        <Link
          className="bg-accent flex gap-2 items-center text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          href="https://docs.google.com/spreadsheets/d/1u1_8ND_BY1DaGaQdu0ZRZPebrOaTJekE9hyw_7BAlzw?usp=sharing"
        >
          Fonte dos dados
          <SquareArrowOutUpRight size={16} />
        </Link>
      </div>
    </nav>
  )
}

export const SetThemeButton = () => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
