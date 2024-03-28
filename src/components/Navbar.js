import { useMemo, useState, useCallback } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Logo from './Logo'
import CreateRantDialog from './CreateRantDialog'

const DRAWER_WIDTH = 240

export default function Navbar() {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [createRantOpen, setCreateRantOpen] = useState(false)

  const NAV_ITEMS = useMemo(() => [
    {
      component: Link,
      label: 'Todas as Reclamações',
      href: '/',
      color: 'primary',
      variant: 'contained',
    },
    {
      component: Link,
      label: 'Empresas',
      href: '/companies',
      variant: 'outlined',
    },
    {
      label: 'Reclamar',
      onClick: () => setCreateRantOpen(true),
    },
    {
      component: Link,
      label: 'Fonte dos Dados',
      rel: 'noopener noreferrer',
      target: '_blank',
      href: 'https://docs.google.com/spreadsheets/d/1u1_8ND_BY1DaGaQdu0ZRZPebrOaTJekE9hyw_7BAlzw?usp=sharing',
    },
  ], [setCreateRantOpen])

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((isOpen) => !isOpen)
  }, [setMobileOpen])
  const container = typeof window === 'undefined' ? () => window.document.body : undefined

  return (
    <>
      <AppBar
        position="fixed"
        color="white"
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'var(--dark-green)',
              }}
            >
              <Logo />
            </Link>
          </Typography>
          <Box gap={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {NAV_ITEMS.map(({ label, ...item }) => (
              <Button
                key={label}
                color="primary"
                variant="text"
                {...item}
              >
                { label }
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              my: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: '#1D1A05',
              }}
            >
              <Logo />
            </Link>
            <Box
              sx={{
                [theme.breakpoints.up('md')]: {
                  display: 'none',
                },
              }}
            >
              <small style={{ fontSize: '14px' }}>
                {' '}
                (onde o dev chora e a mãe não vê)
              </small>
            </Box>
          </Typography>
          <List sx={{ textAlign: 'left' }}>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  key={item.label}
                  {...item}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <CreateRantDialog
        open={createRantOpen}
        onClose={() => setCreateRantOpen(false)}
      />
    </>
  )
}
