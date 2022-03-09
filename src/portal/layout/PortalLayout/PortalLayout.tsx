import { Outlet } from 'react-router-dom';

import Topbar from '../components/Topbar/Topbar';

export default function PortalLayout() {
  return (
    <div>
      <div>DefaultPortalLayout</div>
      <div>
        <Topbar />
      </div>
      <Outlet />
    </div>
  );
}
