export function Text({
  children,
  color,
  size,
  textClasses
}: {
  children: any;
  color?: string;
  size?: string;
  textClasses?: string;
}) {
  const textProps = {
    color: color ? `text-${color}` : "text-gray-600",
    size: size ? `text-${size}` : "text-md"
  };

  return (
    <p
      className={`tracking-tight ${textProps.color} ${textProps.size} ${
        textClasses ? textClasses : ""
      }`}
    >
      {children}
    </p>
  );
}
