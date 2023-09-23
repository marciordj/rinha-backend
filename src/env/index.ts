import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    console.error('Invalid envs', _env.error.format());

    throw new Error('Invalid envs');
};

export const env = _env.data;