import { initContract } from "@ts-rest/core";
import { User } from "src/models/user/user.type";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
  createUser: {
    method: 'POST',
    path: '/user',
    responses: {
      200: c.type<number>(),
    },
    body: z.object({
      name: z.string(),
      age: z.number(),
    }),
    summary: 'Create a user',
    metadata: { role: 'user' } as const,
  },
  getUser: {
    method: 'GET',
    path: '/user/:name',
    pathParams: z.object({
        name: z.string(),
    }),
    responses: {
      200: c.type<User[]>(),
    },
    summary: 'Get all posts',
    metadata: { role: 'guest' } as const,
  },
});