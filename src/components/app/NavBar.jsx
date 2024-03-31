'use client'

import { cn } from '@/lib/utils'
import CreateRantDialog from '@/old-components/CreateRantDialog'
import { Github, Moon, SquareArrowOutUpRight, Sun } from 'lucide-react'
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
      <Link
        className="flex gap-2 items-center"
        href="/"
      >
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
      </Link>
      <div className="gap-2 items-center hidden md:flex">
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
          about="Fonte dos dados"
          target="_blank"
          className="bg-accent flex gap-2 items-center text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          href="https://docs.google.com/spreadsheets/d/1u1_8ND_BY1DaGaQdu0ZRZPebrOaTJekE9hyw_7BAlzw?usp=sharing"
        >
          Fonte dos dados
          <SquareArrowOutUpRight size={16} />
        </Link>
        <Link
          about="Fonte dos dados"
          target="_blank"
          className="bg-accent flex justify-center gap-2 items-center text-accent-foreground hover:bg-accent/90 size-9 rounded-md text-sm font-medium transition-colors"
          href="https://github.com/reclama-dev/reclama-dev"
        >
          <Github size={16} />
        </Link>
      </div>
    </nav>
  )
}

export const SetThemeButton = ({ inDrawer }) => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn('', { 'flex items-center gap-1 size-full': inDrawer })}
        >
          {inDrawer ? 'Mudar tema' : null}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon
            className={cn(
              'h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
              { absolute: !inDrawer },
            )}
          />
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
