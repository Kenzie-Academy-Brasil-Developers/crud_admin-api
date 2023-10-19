import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateBody =
  (schema: z.ZodTypeAny) =>
  (req: Request, red: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);

    return next();
  };