export default function Button({ children, variant = 'primary', className = '', ...props }) {
  // Base styles applied to all buttons
  const baseStyles = "px-6 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200";
  
  // Design system variations
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-primary hover:bg-opacity-90",
    outlined: "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}