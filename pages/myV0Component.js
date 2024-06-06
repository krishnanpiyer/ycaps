/**
 * v0 by Vercel.
 * @see https://v0.dev/t/96iKH2kX9NZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#008000] text-white py-4 px-6 md:px-10 flex items-center justify-between">/**
 * v0 by Vercel.
 * @see https://v0.dev/t/96iKH2kX9NZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#008000] text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CatIcon className="h-8 w-8" />
          <span className="text-xl font-bold">YCAPS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Programs
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Get Involved
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-[#008000] text-white py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">Empowering Youth Through Cricket</h1>
                      <p className="text-lg mb-6">
                        YCAPS is dedicated to bringing the sport of cricket to American parks and schools, fostering
                        community engagement and youth development.
                      </p>
                      <div className="flex gap-4">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-white text-[#008000] px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                          prefetch={false}
                        >
                          Get Involved
                        </Link>
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 font-medium hover:bg-white hover:text-[#008000] transition-colors"
                          prefetch={false}
                        >
                          Donate
                        </Link>
                      </div>
                    </div>
                    <img
                      src="/placeholder.svg"
                      width={600}
                      height={400}
                      alt="Cricket Match with Kids"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">Bringing Cricket to American Communities</h1>
                      <p className="text-lg mb-6">
                        YCAPS works with local parks and schools to introduce and grow the sport of cricket, providing
                        resources, training, and opportunities for youth to learn and compete.
                      </p>
                      <div className="flex gap-4">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-white text-[#008000] px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                          prefetch={false}
                        >
                          Learn More
                        </Link>
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 font-medium hover:bg-white hover:text-[#008000] transition-colors"
                          prefetch={false}
                        >
                          Volunteer
                        </Link>
                      </div>
                    </div>
                    <img
                      src="/placeholder.svg"
                      width={600}
                      height={400}
                      alt="Cricket Practice with Kids"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/50 hover:bg-white/75 rounded-full p-2 cursor-pointer">
                <ChevronLeftIcon className="h-6 w-6 text-[#008000]" />
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/50 hover:bg-white/75 rounded-full p-2 cursor-pointer">
                <ChevronRightIcon className="h-6 w-6 text-[#008000]" />
              </CarouselNext>
            </Carousel>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  YCAPS is dedicated to introducing and growing the sport of cricket in American parks and schools. We
                  believe that cricket can be a powerful tool for youth development, fostering teamwork, discipline, and
                  a love for the game.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CircleCheckIcon className="h-6 w-6 text-[#008000]" />
                    <div>
                      <h3 className="font-bold">Cricket Clinics</h3>
                      <p className="text-gray-600">
                        Hands-on training and skill development for youth interested in learning cricket.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CircleCheckIcon className="h-6 w-6 text-[#008000]" />
                    <div>
                      <h3 className="font-bold">School Partnerships</h3>
                      <p className="text-gray-600">
                        Collaborating with local schools to integrate cricket into their physical education curriculum.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CircleCheckIcon className="h-6 w-6 text-[#008000]" />
                    <div>
                      <h3 className="font-bold">Community Tournaments</h3>
                      <p className="text-gray-600">
                        Organizing cricket tournaments and competitions for youth teams in local parks and communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f5f5f5] py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Involved with YCAPS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <UsersIcon className="h-12 w-12 text-[#008000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Join our team of dedicated volunteers and help us grow the sport of cricket in your community.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <GiftIcon className="h-12 w-12 text-[#008000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Donate</h3>
                <p className="text-gray-600 mb-4">
                  Support our mission and help us provide resources, equipment, and opportunities for youth to play
                  cricket.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  Donate Now
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <CalendarIcon className="h-12 w-12 text-[#008000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Upcoming Events</h3>
                <p className="text-gray-600 mb-4">
                  Check out our calendar of cricket clinics, tournaments, and other community events.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Community Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 1"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 2"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 3"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 4"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Global Cricket Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <img src="/placeholder.svg" width={150} height={80} alt="ICC Logo" className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="USA Cricket Logo"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Cricket Australia Logo"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Cricket England Logo"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#008000] text-white py-6 px-6 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <CatIcon className="h-6 w-6" />
            <span className="text-lg font-bold">YCAPS</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Programs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Events
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Get Involved
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CatIcon className="h-8 w-8" />
          <span className="text-xl font-bold">YCAPS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Programs
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Get Involved
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-[#008000] text-white py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">Empowering Youth Through Cricket</h1>
                      <p className="text-lg mb-6">
                        YCAPS is dedicated to bringing the sport of cricket to American parks and schools, fostering
                        community engagement and youth development.
                      </p>
                      <div className="flex gap-4">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-white text-[#008000] px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                          prefetch={false}
                        >
                          Get Involved
                        </Link>
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 font-medium hover:bg-white hover:text-[#008000] transition-colors"
                          prefetch={false}
                        >
                          Donate
                        </Link>
                      </div>
                    </div>
                    <img
                      src="/placeholder.svg"
                      width={600}
                      height={400}
                      alt="Cricket Match with Kids"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">Bringing Cricket to American Communities</h1>
                      <p className="text-lg mb-6">
                        YCAPS works with local parks and schools to introduce and grow the sport of cricket, providing
                        resources, training, and opportunities for youth to learn and compete.
                      </p>
                      <div className="flex gap-4">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-white text-[#008000] px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                          prefetch={false}
                        >
                          Learn More
                        </Link>
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 font-medium hover:bg-white hover:text-[#008000] transition-colors"
                          prefetch={false}
                        >
                          Volunteer
                        </Link>
                      </div>
                    </div>
                    <img
                      src="/placeholder.svg"
                      width={600}
                      height={400}
                      alt="Cricket Practice with Kids"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/50 hover:bg-white/75 rounded-full p-2 cursor-pointer">
                <ChevronLeftIcon className="h-6 w-6 text-[#008000]" />
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/50 hover:bg-white/75 rounded-full p-2 cursor-pointer">
                <ChevronRightIcon className="h-6 w-6 text-[#008000]" />
              </CarouselNext>
            </Carousel>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  YCAPS is dedicated to introducing and growing the sport of cricket in American parks and schools. We
                  believe that cricket can be a powerful tool for youth development, fostering teamwork, discipline, and
                  a love for the game.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CircleCheckIcon className="h-6 w-6 text-[#008000]" />
                    <div>
                      <h3 className="font-bold">Cricket Clinics</h3>
                      <p className="text-gray-600">
                        Hands-on training and skill development for youth interested in learning cricket.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CircleCheckIcon className="h-6 w-6 text-[#008000]" />
                    <div>
                      <h3 className="font-bold">School Partnerships</h3>
                      <p className="text-gray-600">
                        Collaborating with local schools to integrate cricket into their physical education curriculum.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CircleCheckIcon className="h-6 w-6 text-[#008000]" />
                    <div>
                      <h3 className="font-bold">Community Tournaments</h3>
                      <p className="text-gray-600">
                        Organizing cricket tournaments and competitions for youth teams in local parks and communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f5f5f5] py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Involved with YCAPS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <UsersIcon className="h-12 w-12 text-[#008000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Join our team of dedicated volunteers and help us grow the sport of cricket in your community.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <GiftIcon className="h-12 w-12 text-[#008000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Donate</h3>
                <p className="text-gray-600 mb-4">
                  Support our mission and help us provide resources, equipment, and opportunities for youth to play
                  cricket.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  Donate Now
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <CalendarIcon className="h-12 w-12 text-[#008000] mb-4" />
                <h3 className="font-bold text-lg mb-2">Upcoming Events</h3>
                <p className="text-gray-600 mb-4">
                  Check out our calendar of cricket clinics, tournaments, and other community events.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#008000] text-white px-6 py-3 font-medium hover:bg-[#005a00] transition-colors"
                  prefetch={false}
                >
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Community Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 1"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 2"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 3"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Partner Logo 4"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Global Cricket Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <img src="/placeholder.svg" width={150} height={80} alt="ICC Logo" className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="USA Cricket Logo"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Cricket Australia Logo"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={80}
                  alt="Cricket England Logo"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#008000] text-white py-6 px-6 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <CatIcon className="h-6 w-6" />
            <span className="text-lg font-bold">YCAPS</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Programs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Events
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Get Involved
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
