import React, { Suspense, useEffect, useState } from 'react';
import MainSidebar from '../component/Sidebar';
import { Outlet } from 'react-router-dom';
import Topbar from '../component/Topbar';

import styles from './MainLayout.module.scss'
const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <MainSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.rightSideContainer}>
        <Topbar />
        <div className={styles.outletDiv}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;