type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
};
