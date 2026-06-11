import { HttpError } from "./http-error";

export async function clientFetch<T>(
    url: string
): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new HttpError(
            "Request failed",
            response.status
        );
    }

    return response.json();
}
