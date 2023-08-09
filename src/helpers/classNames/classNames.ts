type Mode = Record<string, boolean>;

export function classNames(
  cls: string,
  mode: Mode,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mode)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}