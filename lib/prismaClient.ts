import { PrismaClient } from '@prisma/client'
import {withAccelerate} from "@prisma/extension-accelerate";

const prisma = process.env.NODE_ENV === 'production' || process.env.SKIP_PRISMA
  ? null : new PrismaClient().$extends(withAccelerate())

export default prisma