type TypeMods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: TypeMods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key, _]) => key),
  ].join(" ");
}
