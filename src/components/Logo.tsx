type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type CSS_COLOR = `${string}`;
type Color = RGB | RGBA | HEX | CSS_COLOR;
type LogoProps = {
  color?: Color;
  size?: string;
}

export default function Logo({ color, size }: LogoProps) {
  return (
    <>
      <i className="bi bi-cake2-fill" style={{color: color, fontSize: size}}></i>
    </>
  )
}
