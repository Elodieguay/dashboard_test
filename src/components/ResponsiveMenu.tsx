import Menu from './Menu'
import Drawer from '@mui/material/Drawer';
import {useState} from 'react';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

const ResponsiveMenu = (props: Props) => {

  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
      

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'content-box', width: drawerWidth },
          }}
        >
          {<Menu/>}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'content-box', width: 290 },
          }}
          open
        >
          {<Menu/>}
    </Drawer>
    </>
  )
}

export default ResponsiveMenu