import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleOopsieError(oopsie: unknown): Response {
  if (oopsie instanceof Error) {
    return new Response(JSON.stringify({ error: oopsie.message }), {
      status: 500,
    });
  } else {
    return new Response(
      JSON.stringify({ error: "An unknown oopsie occurred" }),
      { status: 500 }
    );
  }
}
