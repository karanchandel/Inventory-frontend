import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('role'); // e.g. 'user', 'admin', 'staff'
  const allowedRoles = route.data?.['roles'] as string[] || [];

  if (!role || !allowedRoles.includes(role)) {
    window.location.href = '/unauthorized'; // Optional fallback
    return false;
  }
  return true;
};