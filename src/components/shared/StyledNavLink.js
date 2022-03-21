import { NavLink } from "react-router-dom";

export default function StyledNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-orange-400" : undefined)}
    >
      {children}
    </NavLink>
  );
}
