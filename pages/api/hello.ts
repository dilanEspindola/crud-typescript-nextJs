// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

interface Person {
  [index: string]: string //se usa cuando no sabemos todas las propiedades q debe tener
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Person>) {
  const p1: Person = {name: '45', age: 'fg'}
  
  res.status(200).json(p1);
}
