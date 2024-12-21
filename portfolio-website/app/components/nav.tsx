import Link from 'next/link'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <div className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className='"hover:text-gray-800"'>
                <Link href='/'>
                  Home
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className='"hover:text-gray-800"'>
                <Link href='/about'>
                  About
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className='"hover:text-gray-800"'>
                <Link href='/projects'>
                  Projects
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </aside>
  )
}
