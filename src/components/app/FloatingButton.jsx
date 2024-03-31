import CreateRantDialog from '@/old-components/CreateRantDialog'
import { Github, Menu, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { SetThemeButton } from './NavBar'

export const FloatingButton = ({ children, onClick }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="fixed md:hidden block bottom-4 right-4 z-50 p-4 bg-accent rounded-full shadow-lg text-accent-foreground dark:text-accent-foreground hover:bg-accent/90 transition-colors">
          <Menu size={32} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-h-96 h-full ">
        <div className="h-full py-6 px-3 grid-cols-2 grid-rows-3 gap-2 items-center grid">
          <SetThemeButton inDrawer />
          <Link
            href="/"
            className="bg-primary flex items-center justify-center size-full text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Ver todos
          </Link>
          <Link
            href="/companies"
            className="bg-accent flex items-center justify-center size-full text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Empresas
          </Link>
          <CreateRantDialog inDrawer />
          <Link
            about="Fonte dos dados"
            target="_blank"
            className="bg-accent flex justify-center size-full gap-2 items-center text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            href="https://docs.google.com/spreadsheets/d/1u1_8ND_BY1DaGaQdu0ZRZPebrOaTJekE9hyw_7BAlzw?usp=sharing"
          >
            Fonte dos dados
            <SquareArrowOutUpRight size={16} />
          </Link>
          <Link
            about="Fonte dos dados"
            target="_blank"
            className="bg-accent flex justify-center size-full gap-2 items-center text-accent-foreground hover:bg-accent/90 rounded-md text-sm font-medium transition-colors"
            href="https://github.com/reclama-dev/reclama-dev"
          >
            <Github size={16} />
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
