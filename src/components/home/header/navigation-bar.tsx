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
                  <span className="ml-2 hidden sm:block">Lux Vitae Eco</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Handshake className="mr-2 h-4 w-4" />
                <span className="ml-2 hidden sm:block">Eco-House</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/assets/lux-vitae-eco-house-family.jpg')] bg-cover bg-center no-underline outline-none focus:shadow-md"
                        href="/eco-home"
                      >
                        <div className="w-full bg-black/70 text-white rounded-bl-md rounded-br-md p-4">
                          <div className="mb-2 text-lg font-medium">Our Eco Houses</div>
                          <p className="text-sm leading-tight">Explore our sustainable home models</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/eco-house-couple" title="The Sanctuary">
                    Balance of Comfort & Efficiency for couples and small households.
                  </ListItem>
                  <ListItem href="/eco-house-family" title="The Family Courtyard">
                    Community Living with Private Retreats.
                  </ListItem>
                  <ListItem href="/eco-house-villa" title="The Grand Villa">
                    Spacious Luxury for Extended Living.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Handshake className="mr-2 h-4 w-4" />
                <span className="ml-2 hidden sm:block">Services</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/assets/lux-vitae-technical-520.jpg')] bg-cover bg-center no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="w-full bg-black/70 text-white rounded-bl-md rounded-br-md p-4">
                          <div className="mb-2 text-lg font-medium">Our Services</div>
                          <p className="text-sm leading-tight">Comprehensive Solutions for Your Project</p>
                        </div>
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
