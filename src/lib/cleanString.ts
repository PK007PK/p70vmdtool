export function cleanString(value: string) {
    return value
        .replaceAll(" ", "")
        .replaceAll("-", "")
        .replaceAll("/", "")
        .replaceAll(":", "");
}