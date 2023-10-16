import * as React from "react"

import Image from 'next/image'
import map from '../public/map.svg'
import MyV0Component from './myV0Component'
import TestComponent from './testComponent'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wyed8E8
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="font-mono">
        <CardHeader className="text-red-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-pulse">
          <CardTitle>@nextjs</CardTitle>
        </CardHeader>
        <CardContent className="text-green-500">The React Framework – created and maintained by @vercel.</CardContent>
        <CardFooter className="text-blue-500">
          <div className="flex items-center space-x-4">
            <Button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 animate-spin">
              Red
            </Button>
            <Button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 animate-spin">
              Green
            </Button>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 animate-spin">
              Blue
            </Button>
            <Button className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 animate-spin">
              Yellow
            </Button>
            <Button className="bg-purple-500 text-white px-4 py-2 rounded shadow hover:bg-purple-600 animate-spin">
              Purple
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
