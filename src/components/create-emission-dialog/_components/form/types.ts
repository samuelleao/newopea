import { z } from "zod";
import { schema } from "./schema";

export type EmissionForm = z.infer<typeof schema>