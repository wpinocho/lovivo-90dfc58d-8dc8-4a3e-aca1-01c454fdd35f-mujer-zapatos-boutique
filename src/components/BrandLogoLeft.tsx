export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center gap-2">
      <img 
        src="/logo.png" 
        alt="Elegance Shoes"
        className="h-10 w-10 object-contain" 
      />
      <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Elegance Shoes
      </span>
    </a>
  )
}