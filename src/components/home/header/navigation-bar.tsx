import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Home, DraftingCompass, Info, Mail, Handshake } from 'lucide-react';

export function NavigationBar() {
  return (
    <div
      className={
        'fixed top-0 left-0 right-0 z-50 border-border/50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }
    >
      <div className={'flex flex-1 justify-center items-center p-4'}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={cn(navigationMenuTriggerStyle(), 'flex items-center')}>
                  <Home className="h-4 w-4" />
                  <span className="ml-2 hidden sm:inline">Lux Vitae Eco</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/eco-home" className={cn(navigationMenuTriggerStyle(), 'flex items-center')}>
                  <DraftingCompass className="h-4 w-4" />
                  <span className="ml-2 hidden sm:inline">Houses</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Handshake className="mr-2 h-4 w-4" />
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Eco House</div>
                        <p className="text-sm leading-tight text-muted-foreground">Sustainable Living Made Beautiful</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/design" title="Design">
                    Passive design and sustainable architecture principles.
                  </ListItem>
                  <ListItem href="/development" title="Development">
                    Core principles of eco-design and sustainable construction.
                  </ListItem>
                  <ListItem href="/consulting" title="Consulting">
                    Technical consulting and architecture advice.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={cn(navigationMenuTriggerStyle(), 'flex items-center')}>
                  <Info className="h-4 w-4" />
                  <span className="ml-2 hidden sm:inline">About</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className={cn(navigationMenuTriggerStyle(), 'flex items-center')}>
                  <Mail className="h-4 w-4" />
                  <span className="ml-2 hidden sm:inline">Contact</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
