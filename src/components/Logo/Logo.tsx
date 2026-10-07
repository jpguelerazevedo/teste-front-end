import './Logo.scss'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ size = 'md' }: LogoProps) {
  return (
    <span className={`logo logo--${size}`} role="img" aria-label="Econverse">
      <span className="logo__mark" aria-hidden="true">
        ec
      </span>
      <span aria-hidden="true">onverse</span>
    </span>
  )
}
