/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-expressions */

const foo = { bazz: "" };
const foolio = () => 3;
const bar = "";

// incorrect
{
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-nullish-coalescing
  foo! ?? bar;
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-nullish-coalescing
  foo.bazz! ?? bar;
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-nullish-coalescing
  foo!.bazz! ?? bar;
  // foo()! ?? bar;
}

{
  let x!: string;
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-nullish-coalescing
  x! ?? "";
}

{
  let x = foolio();
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-nullish-coalescing
  x! ?? "";
}

// correct
{
  foo ?? bar;
  foo ?? bar!;
  foo!.bazz ?? bar;
  foo!.bazz ?? bar!;
  foolio() ?? bar;

  // This is considered correct code because there's no way for the user to satisfy it.
  let x: string;
  x! ?? "";
}

export {};
